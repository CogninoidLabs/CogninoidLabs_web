"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  layer: number;
  active: boolean;
  activeTtl: number;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
  speed: number;
  rgb: string;
  alive: boolean;
}

const CYAN = "34,211,238";
const VIOLET = "124,58,237";
const BLUE = "59,130,246";
const CONN_DIST = 155;
const N = 58;
const LAYERS = 5;

export default function NeuralNetworkCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let frame = 0;
    let W = 0;
    let H = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    }

    function init() {
      nodes = Array.from({ length: N }, (_, i) => {
        const layer = Math.floor((i / N) * LAYERS);
        const lx = (layer / (LAYERS - 1)) * W;
        const spread = W / LAYERS;
        return {
          x: lx + (Math.random() - 0.5) * spread * 0.7,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.5 + 1.5,
          phase: Math.random() * Math.PI * 2,
          layer,
          active: false,
          activeTtl: 0,
        };
      });
      pulses = [];
    }

    function spawnPulse() {
      const srcIdx = Math.floor(Math.random() * nodes.length);
      const src = nodes[srcIdx];
      const targetLayer = src.layer < LAYERS - 1 ? src.layer + 1 : src.layer - 1;

      const candidates: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === srcIdx) continue;
        const n = nodes[i];
        if (n.layer !== targetLayer) continue;
        const dx = n.x - src.x;
        const dy = n.y - src.y;
        if (Math.sqrt(dx * dx + dy * dy) < CONN_DIST) candidates.push(i);
      }

      if (candidates.length === 0) return;
      const destIdx = candidates[Math.floor(Math.random() * candidates.length)];
      const r = Math.random();
      pulses.push({
        from: srcIdx,
        to: destIdx,
        t: 0,
        speed: 0.005 + Math.random() * 0.009,
        rgb: r < 0.5 ? CYAN : r < 0.75 ? VIOLET : BLUE,
        alive: true,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      frame++;

      // Periodic pulse spawning
      if (frame % 18 === 0) spawnPulse();
      if (frame % 40 === 0 && Math.random() > 0.4) spawnPulse();

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.014;
        if (n.activeTtl > 0) { n.activeTtl--; } else { n.active = false; }
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= CONN_DIST) continue;
          const alpha = (1 - d / CONN_DIST) * 0.11;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = `rgba(${CYAN},${alpha})`;
          ctx!.lineWidth = 0.6;
          ctx!.stroke();
        }
      }

      // Update and draw pulses
      pulses = pulses.filter(p => p.alive);
      for (const pulse of pulses) {
        pulse.t += pulse.speed;
        if (pulse.t >= 1) { pulse.alive = false; continue; }

        const a = nodes[pulse.from];
        const b = nodes[pulse.to];
        if (!a || !b) { pulse.alive = false; continue; }

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= CONN_DIST) { pulse.alive = false; continue; }

        const sx = a.x + dx * pulse.t;
        const sy = a.y + dy * pulse.t;
        const trailT = Math.max(0, pulse.t - 0.09);
        const tx = a.x + dx * trailT;
        const ty = a.y + dy * trailT;

        // Trail gradient
        const tg = ctx!.createLinearGradient(tx, ty, sx, sy);
        tg.addColorStop(0, `rgba(${pulse.rgb},0)`);
        tg.addColorStop(1, `rgba(${pulse.rgb},0.75)`);
        ctx!.beginPath();
        ctx!.moveTo(tx, ty);
        ctx!.lineTo(sx, sy);
        ctx!.strokeStyle = tg;
        ctx!.lineWidth = 1.6;
        ctx!.stroke();

        // Glow halo
        const gr = ctx!.createRadialGradient(sx, sy, 0, sx, sy, 8);
        gr.addColorStop(0, `rgba(${pulse.rgb},0.85)`);
        gr.addColorStop(1, `rgba(${pulse.rgb},0)`);
        ctx!.beginPath();
        ctx!.arc(sx, sy, 8, 0, Math.PI * 2);
        ctx!.fillStyle = gr;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(sx, sy, 2.2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${pulse.rgb},1)`;
        ctx!.fill();

        // Activate destination on arrival
        if (pulse.t > 0.88 && b) {
          b.active = true;
          b.activeTtl = 45;
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pls = Math.sin(n.phase) * 0.25 + 0.75;
        const isActive = n.active;
        const col = isActive ? VIOLET : CYAN;
        const glowMul = isActive ? 2.2 : 1;

        // Outer glow
        const gr = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6 * glowMul);
        gr.addColorStop(0, `rgba(${col},${0.32 * pls * glowMul})`);
        gr.addColorStop(1, `rgba(${col},0)`);
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * 6 * glowMul, 0, Math.PI * 2);
        ctx!.fillStyle = gr;
        ctx!.fill();

        // Inner ring (active nodes show a ring)
        if (isActive) {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(${col},${0.4 * pls})`;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }

        // Core
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${col},${0.9 * pls})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
