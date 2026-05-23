"use client";

import { useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
type RGB = [number, number, number];

interface Star  { x:number; y:number; r:number; phase:number; }
interface HexCell { cx:number; cy:number; glow:number; alive:boolean; }
interface Node  {
  x:number; y:number; vx:number; vy:number;
  r:number; glowR:number;
  rgb: RGB; phase:number;
  active:boolean; activeTtl:number; isBig:boolean;
}
interface Pulse {
  from:number; to:number; t:number; speed:number; rgb:RGB; alive:boolean;
}
interface Ring  { x:number; y:number; r:number; maxR:number; op:number; rgb:RGB; }
interface Drop  { x:number; y:number; speed:number; trailLen:number; }

// ─── Constants ───────────────────────────────────────────────────────────────
const CYAN:   RGB = [34,  211, 238];
const BLUE:   RGB = [59,  130, 246];
const VIOLET: RGB = [124, 58,  237];
const WHITE:  RGB = [200, 215, 255];

const CONN_DIST = 185;
const HEX_SIZE  = 44;

const c = (rgb: RGB, a: number) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;

// ─── Component ───────────────────────────────────────────────────────────────
export default function EnhancedHeroBg({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0, frame = 0;

    let stars:    Star[]    = [];
    let hexes:    HexCell[] = [];
    let nodes:    Node[]    = [];
    let pulses:   Pulse[]   = [];
    let rings:    Ring[]    = [];
    let drops:    Drop[]    = [];
    let scanY = 0;
    let scanSpeed = 0.55;

    // ── resize ────────────────────────────────────────────────────────────────
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas!.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas!.width  = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      // Stars
      stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));

      // Hex grid
      const rh = HEX_SIZE * 0.866;
      hexes = [];
      for (let row = -1; row * rh < H + HEX_SIZE; row++) {
        for (let col = -1; col * HEX_SIZE * 0.75 < W + HEX_SIZE; col++) {
          hexes.push({
            cx: col * HEX_SIZE * 0.75 + (row % 2 === 0 ? 0 : HEX_SIZE * 0.375),
            cy: row * rh,
            glow: 0, alive: false,
          });
        }
      }

      // Nodes — mix of large "hub" nodes and smaller ones
      const ALL_COLORS: RGB[] = [CYAN, BLUE, VIOLET, CYAN, BLUE];
      nodes = Array.from({ length: 62 }, () => {
        const big = Math.random() < 0.14;
        const col = ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];
        return {
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.26,
          vy: (Math.random() - 0.5) * 0.26,
          r:     big ? 4.5 + Math.random() * 2   : 1.8 + Math.random() * 1.8,
          glowR: big ? 55  + Math.random() * 25  : 22  + Math.random() * 18,
          rgb: col, phase: Math.random() * Math.PI * 2,
          active: false, activeTtl: 0, isBig: big,
        };
      });

      // Data drops (vertical data streams)
      const NUM_DROPS = 7;
      drops = Array.from({ length: NUM_DROPS }, (_, i) => ({
        x: W * (0.5 + i) / NUM_DROPS + (Math.random() - 0.5) * 40,
        y: Math.random() * H,
        speed: 0.7 + Math.random() * 0.9,
        trailLen: 70 + Math.random() * 90,
      }));

      pulses = []; rings = [];
      scanY = 0;
    }

    // ── pulse spawner ─────────────────────────────────────────────────────────
    function spawnPulse() {
      const ai = Math.floor(Math.random() * nodes.length);
      let bi = Math.floor(Math.random() * nodes.length);
      for (let t = 0; t < 6 && bi === ai; t++)
        bi = Math.floor(Math.random() * nodes.length);
      const a = nodes[ai], b = nodes[bi];
      const dx = b.x - a.x, dy = b.y - a.y;
      if (Math.sqrt(dx * dx + dy * dy) > CONN_DIST) return;
      const cols: RGB[] = [CYAN, BLUE, VIOLET];
      pulses.push({
        from: ai, to: bi, t: 0,
        speed: 0.005 + Math.random() * 0.009,
        rgb: cols[Math.floor(Math.random() * cols.length)],
        alive: true,
      });
    }

    // ── hex outline ───────────────────────────────────────────────────────────
    function drawHex(cx: number, cy: number, r: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = cx + r * Math.cos(a), py = cy + r * Math.sin(a);
        i === 0 ? ctx!.moveTo(px, py) : ctx!.lineTo(px, py);
      }
      ctx!.closePath();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Main draw loop
    // ═══════════════════════════════════════════════════════════════════════════
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      frame++;

      // Spawn 3-5 pulses per second at 60fps
      if (frame % 12 === 0) { spawnPulse(); spawnPulse(); }
      if (frame % 6  === 0)   spawnPulse();

      // ── 1. Twinkling stars ─────────────────────────────────────────────────
      for (const s of stars) {
        s.phase += 0.007;
        const a = Math.sin(s.phase) * 0.35 + 0.45;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = c(WHITE, a);
        ctx!.fill();
      }

      // ── 2. Hex grid ────────────────────────────────────────────────────────
      if (frame % 38 === 0) {
        const idx = Math.floor(Math.random() * hexes.length);
        hexes[idx].glow = 1; hexes[idx].alive = true;
      }
      for (const h of hexes) {
        const r = HEX_SIZE * 0.47;
        drawHex(h.cx, h.cy, r);
        if (h.glow > 0) {
          ctx!.strokeStyle = c(CYAN, h.glow * 0.55);
          ctx!.lineWidth = 0.9;
          ctx!.stroke();
          ctx!.fillStyle = c(CYAN, h.glow * 0.07);
          ctx!.fill();
          h.glow -= 0.01;
          if (h.glow <= 0) h.alive = false;
        } else {
          ctx!.strokeStyle = c(CYAN, 0.055);
          ctx!.lineWidth = 0.6;
          ctx!.stroke();
        }
      }

      // ── 3. Data streams ────────────────────────────────────────────────────
      for (const d of drops) {
        d.y += d.speed;
        if (d.y - d.trailLen > H) d.y = -d.trailLen;

        // Glowing trail
        const gr = ctx!.createLinearGradient(d.x, d.y - d.trailLen, d.x, d.y);
        gr.addColorStop(0,   c(CYAN, 0));
        gr.addColorStop(0.6, c(CYAN, 0.07));
        gr.addColorStop(1,   c(CYAN, 0.28));
        ctx!.beginPath();
        ctx!.moveTo(d.x, d.y - d.trailLen);
        ctx!.lineTo(d.x, d.y);
        ctx!.strokeStyle = gr;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Lead glow
        const lg = ctx!.createRadialGradient(d.x, d.y, 0, d.x, d.y, 10);
        lg.addColorStop(0, c(CYAN, 0.9));
        lg.addColorStop(1, c(CYAN, 0));
        ctx!.beginPath(); ctx!.arc(d.x, d.y, 10, 0, Math.PI * 2);
        ctx!.fillStyle = lg; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(d.x, d.y, 1.8, 0, Math.PI * 2);
        ctx!.fillStyle = c(CYAN, 1); ctx!.fill();
      }

      // ── 4. Move nodes ──────────────────────────────────────────────────────
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy; n.phase += 0.018;
        if (n.activeTtl > 0) n.activeTtl--; else n.active = false;
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
      }

      // ── 5. Connections ─────────────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d >= CONN_DIST) continue;
          const alpha = (1 - d / CONN_DIST) * 0.22;
          ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = c(CYAN, alpha); ctx!.lineWidth = 0.85; ctx!.stroke();
        }
      }

      // ── 6. Pulses ──────────────────────────────────────────────────────────
      pulses = pulses.filter(p => p.alive);
      for (const pulse of pulses) {
        pulse.t += pulse.speed;
        if (pulse.t >= 1) { pulse.alive = false; continue; }
        const a = nodes[pulse.from], b = nodes[pulse.to];
        if (!a || !b) { pulse.alive = false; continue; }
        const dx = b.x - a.x, dy = b.y - a.y;
        const dd = Math.sqrt(dx * dx + dy * dy);
        if (dd > CONN_DIST) { pulse.alive = false; continue; }

        const sx = a.x + dx * pulse.t, sy = a.y + dy * pulse.t;
        const t0 = Math.max(0, pulse.t - 0.13);
        const tx = a.x + dx * t0, ty = a.y + dy * t0;

        // Trail
        const tg = ctx!.createLinearGradient(tx, ty, sx, sy);
        tg.addColorStop(0, c(pulse.rgb, 0));
        tg.addColorStop(1, c(pulse.rgb, 1));
        ctx!.beginPath(); ctx!.moveTo(tx, ty); ctx!.lineTo(sx, sy);
        ctx!.strokeStyle = tg; ctx!.lineWidth = 2.2; ctx!.stroke();

        // Glow halo
        const hg = ctx!.createRadialGradient(sx, sy, 0, sx, sy, 14);
        hg.addColorStop(0, c(pulse.rgb, 0.95));
        hg.addColorStop(0.4, c(pulse.rgb, 0.45));
        hg.addColorStop(1, c(pulse.rgb, 0));
        ctx!.beginPath(); ctx!.arc(sx, sy, 14, 0, Math.PI * 2);
        ctx!.fillStyle = hg; ctx!.fill();

        // Core
        ctx!.beginPath(); ctx!.arc(sx, sy, 2.8, 0, Math.PI * 2);
        ctx!.fillStyle = c(pulse.rgb, 1); ctx!.fill();

        // Activate destination — spawn ring
        if (pulse.t > 0.88 && b) {
          if (!b.active) {
            b.active = true; b.activeTtl = 55;
            rings.push({ x: b.x, y: b.y, r: b.r + 2, maxR: 90, op: 0.75, rgb: pulse.rgb });
          }
        }
      }

      // ── 7. Ring pulses (sonar/activation effect) ───────────────────────────
      rings = rings.filter(r => r.op > 0);
      for (const ring of rings) {
        ring.r  += 2.2;
        ring.op -= 0.018;
        ctx!.beginPath(); ctx!.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx!.strokeStyle = c(ring.rgb, ring.op);
        ctx!.lineWidth = 1.8;
        ctx!.stroke();
        // Second fainter ring, slightly smaller
        if (ring.r > 20) {
          ctx!.beginPath(); ctx!.arc(ring.x, ring.y, ring.r - 14, 0, Math.PI * 2);
          ctx!.strokeStyle = c(ring.rgb, ring.op * 0.35);
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      }

      // ── 8. Nodes ───────────────────────────────────────────────────────────
      for (const n of nodes) {
        const pls = Math.sin(n.phase) * 0.18 + 0.82;
        const col = n.active ? VIOLET : n.rgb;
        const mul = n.active ? 1.9 : 1;
        const gR  = n.glowR * pls * mul;

        // Large outer glow (most visible part)
        const og = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, gR);
        og.addColorStop(0,    c(col, 0.42 * pls * mul));
        og.addColorStop(0.35, c(col, 0.15 * pls));
        og.addColorStop(0.7,  c(col, 0.05));
        og.addColorStop(1,    c(col, 0));
        ctx!.beginPath(); ctx!.arc(n.x, n.y, gR, 0, Math.PI * 2);
        ctx!.fillStyle = og; ctx!.fill();

        // Mid glow ring (extra brightness)
        const mg = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        mg.addColorStop(0, c(col, 0.7 * pls));
        mg.addColorStop(1, c(col, 0));
        ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = mg; ctx!.fill();

        // Core dot
        ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r * pls, 0, Math.PI * 2);
        ctx!.fillStyle = c(col, 1); ctx!.fill();

        // White specular highlight
        ctx!.beginPath();
        ctx!.arc(n.x - n.r * 0.32, n.y - n.r * 0.32, n.r * 0.38, 0, Math.PI * 2);
        ctx!.fillStyle = c(WHITE, 0.55);
        ctx!.fill();
      }

      // ── 9. Horizontal scan line ────────────────────────────────────────────
      scanY += scanSpeed;
      if (scanY > H + 30) scanY = -30;

      const sg = ctx!.createLinearGradient(0, scanY - 25, 0, scanY + 4);
      sg.addColorStop(0, c(CYAN, 0));
      sg.addColorStop(0.6, c(CYAN, 0.06));
      sg.addColorStop(1,   c(CYAN, 0.2));
      ctx!.fillStyle = sg;
      ctx!.fillRect(0, scanY - 25, W, 29);

      ctx!.beginPath(); ctx!.moveTo(0, scanY); ctx!.lineTo(W, scanY);
      ctx!.strokeStyle = c(CYAN, 0.38); ctx!.lineWidth = 1; ctx!.stroke();

      // Bright flash at intersection with nodes
      for (const n of nodes) {
        if (Math.abs(n.y - scanY) < 18) {
          const flash = 1 - Math.abs(n.y - scanY) / 18;
          ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = c(CYAN, flash * 0.55); ctx!.fill();
        }
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
