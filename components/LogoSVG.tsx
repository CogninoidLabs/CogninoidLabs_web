"use client";

import { useId } from "react";

// ─── LogoMark ─────────────────────────────────────────────────────────────────
// Just the icon symbol (C + L + circuit traces + neural net nodes).
// Designed on a 240×240 viewBox.

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "x");

  const cGrad = `${id}_cg`;
  const nnGrad = `${id}_ng`;
  const innerGrad = `${id}_ig`;
  const glowFilter = `${id}_gf`;

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-label="Cogninoid Labs logo"
    >
      <defs>
        {/* C ring gradient — cyan → blue → deep blue (top to bottom) */}
        <linearGradient id={cGrad} x1="0.3" y1="0" x2="0.7" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="38%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Neural net node gradient — blue → violet */}
        <linearGradient id={nnGrad} x1="155" y1="50" x2="210" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>

        {/* Subtle inner-edge gradient for depth */}
        <linearGradient id={innerGrad} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05" />
        </linearGradient>

        {/* Soft glow filter */}
        <filter id={glowFilter} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── C ring ──────────────────────────────────────────────────────────── */}
      {/*
          Center (120,120), outer R=90, inner R=58
          Gap from −55° to +55° (opening on right)
          Outer top:  (172, 46)   Outer bot: (172, 194)
          Inner top:  (153, 73)   Inner bot: (153, 168)
          Path: start outer-top, large-cw arc to outer-bot,
                line to inner-bot, large-ccw arc to inner-top, close
      */}
      <path
        d="M 172 46 A 90 90 0 1 1 172 194 L 153 168 A 58 58 0 1 0 153 73 Z"
        fill={`url(#${cGrad})`}
      />

      {/* ── Subtle inner-edge depth highlight ───────────────────────────────── */}
      <path
        d="M 172 46 A 90 90 0 1 1 172 194 L 153 168 A 58 58 0 1 0 153 73 Z"
        fill={`url(#${innerGrad})`}
        opacity="0.6"
      />

      {/* ── L shape (white) ─────────────────────────────────────────────────── */}
      {/* Vertical bar */}
      <rect x="82" y="74" width="16" height="100" rx="2" ry="2" fill="white" />
      {/* Horizontal bar */}
      <rect x="82" y="158" width="76" height="16" rx="2" ry="2" fill="white" />
      {/* Corner notch to create the crisp L corner (remove inner corner) */}

      {/* ── Circuit traces (left side, cyan) ────────────────────────────────── */}
      <g stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round">
        {/* Trace 1 — y=91 */}
        <line x1="35" y1="91" x2="10" y2="91" strokeWidth="1.8" />
        <line x1="22" y1="91" x2="22" y2="78" strokeWidth="1.8" />
        <circle cx="22" cy="78" r="3" fill="#22d3ee" stroke="none" />
        <circle cx="10" cy="91" r="3" fill="#22d3ee" stroke="none" />

        {/* Trace 2 — y=106 */}
        <line x1="31" y1="106" x2="6" y2="106" strokeWidth="1.8" />
        <line x1="6" y1="106" x2="6" y2="119" strokeWidth="1.8" />
        <circle cx="6" cy="119" r="3" fill="#22d3ee" stroke="none" />
        <circle cx="6" cy="106" r="3" fill="#22d3ee" stroke="none" opacity="0" />

        {/* Trace 3 — y=120 (faded) */}
        <line x1="30" y1="120" x2="8" y2="120" strokeWidth="1.8" opacity="0.45" />

        {/* Trace 4 — y=134 */}
        <line x1="31" y1="134" x2="7" y2="134" strokeWidth="1.8" />
        <line x1="19" y1="134" x2="19" y2="147" strokeWidth="1.8" />
        <circle cx="19" cy="147" r="3" fill="#22d3ee" stroke="none" />
        <circle cx="7" cy="134" r="3" fill="#22d3ee" stroke="none" />

        {/* Trace 5 — y=149 */}
        <line x1="35" y1="149" x2="12" y2="149" strokeWidth="1.8" />
        <circle cx="12" cy="149" r="3" fill="#22d3ee" stroke="none" />
      </g>

      {/* ── Neural network nodes & edges (upper-right gap area) ─────────────── */}
      {/*
          All nodes positioned in the gap region (angles −55° to +55°) or
          slightly inside the C ring, in the upper-right quadrant.
          Node positions (all verified in gap or inner-ring area):
            N1 (170,  60)  N2 (196,  76)  N3 (183,  96)
            N4 (208, 100)  N5 (192, 118)  N6 (162, 112)
      */}
      <g filter={`url(#${glowFilter})`}>
        {/* Edges */}
        <g stroke={`url(#${nnGrad})`} strokeWidth="1.5" opacity="0.65">
          <line x1="170" y1="60" x2="196" y2="76" />
          <line x1="170" y1="60" x2="183" y2="96" />
          <line x1="196" y1="76" x2="183" y2="96" />
          <line x1="196" y1="76" x2="208" y2="100" />
          <line x1="183" y1="96" x2="208" y2="100" />
          <line x1="183" y1="96" x2="192" y2="118" />
          <line x1="208" y1="100" x2="192" y2="118" />
          <line x1="183" y1="96" x2="162" y2="112" />
          <line x1="162" y1="112" x2="192" y2="118" />
        </g>

        {/* Nodes */}
        <circle cx="170" cy="60"  r="5.5" fill="#3b82f6" />
        <circle cx="196" cy="76"  r="4.5" fill="#5b6cf5" />
        <circle cx="183" cy="96"  r="5.5" fill="#6d53ec" />
        <circle cx="208" cy="100" r="4"   fill="#7c3aed" />
        <circle cx="192" cy="118" r="5"   fill="#6d53ec" />
        <circle cx="162" cy="112" r="4"   fill="#3b82f6" />

        {/* Node highlight dots (small white glints) */}
        <circle cx="169" cy="58"  r="1.5" fill="white" opacity="0.7" />
        <circle cx="182" cy="94"  r="1.5" fill="white" opacity="0.7" />
        <circle cx="191" cy="116" r="1.5" fill="white" opacity="0.5" />
      </g>
    </svg>
  );
}

// ─── LogoFull ─────────────────────────────────────────────────────────────────
// Full logo: icon + "Cogninoid" + "Labs" text, on a 240×300 canvas.

export function LogoFull({ width = 200, className }: { width?: number; className?: string }) {
  const height = (300 / 240) * width;
  const id = useId().replace(/:/g, "x");
  const cGrad = `${id}_cg`;
  const nnGrad = `${id}_ng`;
  const innerGrad = `${id}_ig`;
  const glowFilter = `${id}_gf`;

  return (
    <svg
      viewBox="0 0 240 300"
      width={width}
      height={height}
      className={className}
      fill="none"
      aria-label="Cogninoid Labs"
    >
      <defs>
        <linearGradient id={cGrad} x1="0.3" y1="0" x2="0.7" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="38%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id={nnGrad} x1="155" y1="50" x2="210" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={innerGrad} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05" />
        </linearGradient>
        <filter id={glowFilter} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* C ring */}
      <path d="M 172 46 A 90 90 0 1 1 172 194 L 153 168 A 58 58 0 1 0 153 73 Z" fill={`url(#${cGrad})`} />
      <path d="M 172 46 A 90 90 0 1 1 172 194 L 153 168 A 58 58 0 1 0 153 73 Z" fill={`url(#${innerGrad})`} opacity="0.6" />

      {/* L shape */}
      <rect x="82" y="74" width="16" height="100" rx="2" ry="2" fill="white" />
      <rect x="82" y="158" width="76" height="16" rx="2" ry="2" fill="white" />

      {/* Circuit traces */}
      <g stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round">
        <line x1="35" y1="91" x2="10" y2="91" strokeWidth="1.8" />
        <line x1="22" y1="91" x2="22" y2="78" strokeWidth="1.8" />
        <circle cx="22" cy="78" r="3" fill="#22d3ee" stroke="none" />
        <circle cx="10" cy="91" r="3" fill="#22d3ee" stroke="none" />
        <line x1="31" y1="106" x2="6" y2="106" strokeWidth="1.8" />
        <line x1="6" y1="106" x2="6" y2="119" strokeWidth="1.8" />
        <circle cx="6" cy="119" r="3" fill="#22d3ee" stroke="none" />
        <line x1="30" y1="120" x2="8" y2="120" strokeWidth="1.8" opacity="0.45" />
        <line x1="31" y1="134" x2="7" y2="134" strokeWidth="1.8" />
        <line x1="19" y1="134" x2="19" y2="147" strokeWidth="1.8" />
        <circle cx="19" cy="147" r="3" fill="#22d3ee" stroke="none" />
        <circle cx="7" cy="134" r="3" fill="#22d3ee" stroke="none" />
        <line x1="35" y1="149" x2="12" y2="149" strokeWidth="1.8" />
        <circle cx="12" cy="149" r="3" fill="#22d3ee" stroke="none" />
      </g>

      {/* Neural network */}
      <g filter={`url(#${glowFilter})`}>
        <g stroke={`url(#${nnGrad})`} strokeWidth="1.5" opacity="0.65">
          <line x1="170" y1="60" x2="196" y2="76" />
          <line x1="170" y1="60" x2="183" y2="96" />
          <line x1="196" y1="76" x2="183" y2="96" />
          <line x1="196" y1="76" x2="208" y2="100" />
          <line x1="183" y1="96" x2="208" y2="100" />
          <line x1="183" y1="96" x2="192" y2="118" />
          <line x1="208" y1="100" x2="192" y2="118" />
          <line x1="183" y1="96" x2="162" y2="112" />
          <line x1="162" y1="112" x2="192" y2="118" />
        </g>
        <circle cx="170" cy="60"  r="5.5" fill="#3b82f6" />
        <circle cx="196" cy="76"  r="4.5" fill="#5b6cf5" />
        <circle cx="183" cy="96"  r="5.5" fill="#6d53ec" />
        <circle cx="208" cy="100" r="4"   fill="#7c3aed" />
        <circle cx="192" cy="118" r="5"   fill="#6d53ec" />
        <circle cx="162" cy="112" r="4"   fill="#3b82f6" />
        <circle cx="169" cy="58"  r="1.5" fill="white" opacity="0.7" />
        <circle cx="182" cy="94"  r="1.5" fill="white" opacity="0.7" />
        <circle cx="191" cy="116" r="1.5" fill="white" opacity="0.5" />
      </g>

      {/* ── Text ──────────────────────────────────────────────────────────────── */}
      {/* "Cogninoid" — bold white */}
      <text
        x="120"
        y="244"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-0.5"
        fill="white"
      >
        Cogninoid
      </text>

      {/* Decorative lines flanking "Labs" */}
      <line x1="52" y1="263" x2="82" y2="263" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="158" y1="263" x2="188" y2="263" stroke="#3b82f6" strokeWidth="1.5" />

      {/* "Labs" — blue */}
      <text
        x="120"
        y="272"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontWeight="600"
        fontSize="22"
        letterSpacing="3"
        fill="#3b82f6"
      >
        Labs
      </text>
    </svg>
  );
}
