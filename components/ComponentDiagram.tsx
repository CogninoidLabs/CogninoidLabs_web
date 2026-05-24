"use client";

import React from "react";

// ─── Arduino Uno R3 ─────────────────────────────────────────────────────────
function ArduinoDiagram() {
  return (
    <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
      <rect x="30" y="50" width="340" height="200" rx="8" fill="#1a3a1a" stroke="#2a6a2a" strokeWidth="1.5"/>
      {/* USB-B port */}
      <rect x="30" y="100" width="22" height="36" rx="3" fill="#222" stroke="#555" strokeWidth="1"/>
      <text x="41" y="120" textAnchor="middle" fill="#777" fontSize="6.5" fontFamily="monospace">USB</text>
      {/* DC power jack */}
      <circle cx="41" cy="190" r="10" fill="#111" stroke="#555" strokeWidth="1"/>
      <circle cx="41" cy="190" r="5" fill="#333"/>
      <text x="41" y="210" textAnchor="middle" fill="#777" fontSize="6" fontFamily="monospace">DC</text>
      {/* ATmega chip */}
      <rect x="150" y="120" width="80" height="60" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1"/>
      <text x="190" y="147" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace" fontWeight="bold">ATmega</text>
      <text x="190" y="159" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">328P</text>
      {/* 16MHz crystal */}
      <rect x="158" y="92" width="18" height="24" rx="2" fill="#c0a000" stroke="#888" strokeWidth="0.5"/>
      <text x="167" y="107" textAnchor="middle" fill="#000" fontSize="6" fontFamily="monospace">16MHz</text>
      {/* LEDs */}
      <circle cx="320" cy="68" r="4" fill="#00ff00" opacity="0.9"/>
      <text x="320" y="82" textAnchor="middle" fill="#6b7280" fontSize="6.5">ON</text>
      <circle cx="340" cy="68" r="4" fill="#ff8800" opacity="0.9"/>
      <text x="340" y="82" textAnchor="middle" fill="#6b7280" fontSize="6.5">L(13)</text>
      {/* Reset button */}
      <rect x="273" y="57" width="18" height="11" rx="2" fill="#dc2626"/>
      <text x="282" y="66" textAnchor="middle" fill="#fff" fontSize="5.5" fontFamily="monospace">RST</text>
      {/* Digital header top */}
      <text x="230" y="46" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Digital I/O — D0 to D13</text>
      {[...Array(14)].map((_, i) => (
        <g key={i}>
          <rect x={79 + i * 19} y="50" width="9" height="13" rx="1.5" fill="#d4a017" stroke="#a07810" strokeWidth="0.5"/>
          <text x={83.5 + i * 19} y="43" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">{i}</text>
        </g>
      ))}
      {/* PWM tildes */}
      {[3,5,6,9,10,11].map((i) => (
        <text key={i} x={83.5 + i * 19} y="36" textAnchor="middle" fill="#a78bfa" fontSize="7">~</text>
      ))}
      <text x="180" y="30" textAnchor="middle" fill="#a78bfa" fontSize="6" fontFamily="monospace">~ = PWM capable</text>
      {/* Analog A0-A5 bottom */}
      <text x="140" y="267" textAnchor="middle" fill="#34d399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Analog In — A0 to A5</text>
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          <rect x={90 + i * 19} y="237" width="9" height="13" rx="1.5" fill="#d4a017" stroke="#a07810" strokeWidth="0.5"/>
          <text x={94.5 + i * 19} y="258" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">A{i}</text>
        </g>
      ))}
      {/* Power rail bottom */}
      <text x="312" y="267" textAnchor="middle" fill="#f87171" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Power</text>
      {[["IOREF","#d4a017"],["RST","#d4a017"],["3.3V","#dc2626"],["5V","#dc2626"],["GND","#374151"],["GND","#374151"],["Vin","#dc2626"]].map(([label, color], i) => (
        <g key={label+i}>
          <rect x={252 + i * 14} y="237" width="9" height="13" rx="1.5" fill={color} stroke="#444" strokeWidth="0.5"/>
          <text x={256.5 + i * 14} y="260" textAnchor="middle" fill="#94a3b8" fontSize="5" fontFamily="monospace" transform={`rotate(-50,${256.5 + i * 14},260)`}>{label}</text>
        </g>
      ))}
      {/* Board label */}
      <text x="372" y="140" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">Arduino</text>
      <text x="372" y="154" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">Uno R3</text>
      <text x="372" y="168" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">5V · 16 MHz</text>
      <text x="372" y="180" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">ATmega328P</text>
    </svg>
  );
}

// ─── Servo Motor (SG90 / MG996R) ────────────────────────────────────────────
function ServoDiagram() {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* Body */}
      <rect x="110" y="60" width="140" height="100" rx="8" fill="#2a2a3e" stroke="#444" strokeWidth="1.5"/>
      {/* Mounting tabs */}
      <rect x="90" y="80" width="22" height="20" rx="3" fill="#1e1e2e" stroke="#555" strokeWidth="1"/>
      <circle cx="101" cy="90" r="4" fill="#111" stroke="#888" strokeWidth="0.5"/>
      <rect x="248" y="80" width="22" height="20" rx="3" fill="#1e1e2e" stroke="#555" strokeWidth="1"/>
      <circle cx="259" cy="90" r="4" fill="#111" stroke="#888" strokeWidth="0.5"/>
      {/* Output shaft housing */}
      <circle cx="180" cy="60" r="18" fill="#333" stroke="#555" strokeWidth="1.5"/>
      <circle cx="180" cy="60" r="10" fill="#444" stroke="#666" strokeWidth="1"/>
      {/* Control horn */}
      <rect x="165" y="28" width="30" height="10" rx="4" fill="#e5e7eb" stroke="#aaa" strokeWidth="1"/>
      <circle cx="180" cy="33" r="4" fill="#6b7280" stroke="#555" strokeWidth="0.5"/>
      <line x1="180" y1="50" x2="180" y2="38" stroke="#9ca3af" strokeWidth="2"/>
      {/* Rotation arc */}
      <path d="M 130 60 A 50 50 0 0 1 230 60" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4,3" opacity="0.6"/>
      <text x="135" y="45" fill="#22d3ee" fontSize="8" fontFamily="monospace">0°</text>
      <text x="220" y="45" fill="#22d3ee" fontSize="8" fontFamily="monospace">180°</text>
      {/* Gear representation inside body */}
      <circle cx="180" cy="120" r="22" fill="#1a1a2e" stroke="#333" strokeWidth="1"/>
      <circle cx="205" cy="115" r="12" fill="#1a1a2e" stroke="#333" strokeWidth="1"/>
      {/* Gear teeth simplified */}
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <rect key={i} x={178} y={97} width="4" height="7" rx="1" fill="#555"
          transform={`rotate(${a}, 180, 120)`}/>
      ))}
      <text x="180" y="123" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">Gear</text>
      <text x="180" y="133" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">train</text>
      {/* PCB label */}
      <text x="220" y="143" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace">Control</text>
      <text x="220" y="153" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace">circuit</text>
      {/* Three wires */}
      <line x1="140" y1="160" x2="140" y2="210" stroke="#dc2626" strokeWidth="3"/>
      <line x1="160" y1="160" x2="160" y2="210" stroke="#7c3aed" strokeWidth="3"/>
      <line x1="180" y1="160" x2="180" y2="210" stroke="#f59e0b" strokeWidth="3"/>
      {/* Wire connector */}
      <rect x="128" y="206" width="64" height="14" rx="3" fill="#333" stroke="#666" strokeWidth="1"/>
      <text x="160" y="216" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">JST connector</text>
      {/* Wire labels */}
      <text x="132" y="235" textAnchor="middle" fill="#dc2626" fontSize="8" fontFamily="monospace" fontWeight="bold">VCC</text>
      <text x="160" y="235" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="monospace" fontWeight="bold">GND</text>
      <text x="188" y="235" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">SIG</text>
      {/* Voltage labels */}
      <text x="132" y="246" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">4.8–6V</text>
      <text x="160" y="246" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">0V</text>
      <text x="188" y="246" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">PWM</text>
      {/* PWM signal */}
      <text x="300" y="100" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="monospace">PWM Signal</text>
      <text x="300" y="112" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace">50 Hz (20 ms period)</text>
      {/* PWM waveform */}
      <polyline points="260,130 260,120 275,120 275,130 310,130 310,120 312,120 312,130 340,130"
        fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
      <text x="268" y="118" textAnchor="middle" fill="#22d3ee" fontSize="6.5" fontFamily="monospace">1–2ms</text>
      {/* Labels */}
      <text x="180" y="20" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">SG90 Micro Servo</text>
      <text x="180" y="30" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">4.8–6V · 180° range · 50Hz PWM</text>
    </svg>
  );
}

// ─── MPU-6050 IMU ────────────────────────────────────────────────────────────
function ImuDiagram() {
  return (
    <svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* PCB board */}
      <rect x="100" y="60" width="110" height="150" rx="4" fill="#1a3a1a" stroke="#2a6a2a" strokeWidth="1.5"/>
      {/* IC chip (MPU-6050) */}
      <rect x="125" y="100" width="60" height="60" rx="2" fill="#1a1a2e" stroke="#444" strokeWidth="1"/>
      <text x="155" y="127" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="monospace" fontWeight="bold">MPU</text>
      <text x="155" y="138" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="monospace" fontWeight="bold">6050</text>
      {/* IC pin marks */}
      {[0,1,2,3].map(i=><rect key={i} x="123" y={102+i*14} width="4" height="10" rx="1" fill="#555"/>)}
      {[0,1,2,3].map(i=><rect key={i+4} x="183" y={102+i*14} width="4" height="10" rx="1" fill="#555"/>)}
      {/* Axis arrows */}
      <line x1="155" y1="75" x2="155" y2="55" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrowCyan)"/>
      <text x="155" y="50" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="monospace" fontWeight="bold">Z</text>
      <line x1="155" y1="75" x2="175" y2="65" stroke="#34d399" strokeWidth="1.5"/>
      <text x="180" y="64" fill="#34d399" fontSize="8" fontFamily="monospace" fontWeight="bold">Y</text>
      <line x1="155" y1="75" x2="140" y2="65" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="128" y="64" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">X</text>
      {/* Header pins */}
      {["VCC","GND","SCL","SDA","XDA","XCL","AD0","INT"].map((label, i)=>(
        <g key={label}>
          <rect x="88" y={65+i*18} width="12" height="9" rx="1" fill={label==="VCC"?"#dc2626":label==="GND"?"#374151":"#d4a017"} stroke="#555" strokeWidth="0.5"/>
          <text x="82" y={72+i*18} textAnchor="end" fill={label==="VCC"?"#f87171":label==="GND"?"#9ca3af":"#fbbf24"} fontSize="8" fontFamily="monospace" fontWeight={label==="VCC"||label==="GND"?"bold":"normal"}>{label}</text>
          {/* I2C labels */}
          {label==="SCL"&&<text x="220" y={72+i*18} fill="#a78bfa" fontSize="7" fontFamily="monospace">I2C Clock — 400kHz max</text>}
          {label==="SDA"&&<text x="220" y={72+i*18} fill="#a78bfa" fontSize="7" fontFamily="monospace">I2C Data</text>}
          {label==="AD0"&&<text x="220" y={72+i*18} fill="#6b7280" fontSize="7" fontFamily="monospace">Address: 0x68 / 0x69</text>}
          {label==="INT"&&<text x="220" y={72+i*18} fill="#6b7280" fontSize="7" fontFamily="monospace">Data-ready interrupt</text>}
          {label==="VCC"&&<text x="220" y={72+i*18} fill="#f87171" fontSize="7" fontFamily="monospace">3.3V (some boards: 5V tolerant)</text>}
          {label==="GND"&&<text x="220" y={72+i*18} fill="#9ca3af" fontSize="7" fontFamily="monospace">Ground reference</text>}
        </g>
      ))}
      {/* Sensor blocks */}
      <rect x="115" y="170" width="30" height="18" rx="2" fill="#1e1e3e" stroke="#555" strokeWidth="0.5"/>
      <text x="130" y="181" textAnchor="middle" fill="#7c3aed" fontSize="6" fontFamily="monospace">Accel</text>
      <rect x="155" y="170" width="30" height="18" rx="2" fill="#1e1e3e" stroke="#555" strokeWidth="0.5"/>
      <text x="170" y="181" textAnchor="middle" fill="#0891b2" fontSize="6" fontFamily="monospace">Gyro</text>
      {/* Title */}
      <text x="155" y="30" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">MPU-6050 IMU</text>
      <text x="155" y="42" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">6-axis · I2C · 0x68/0x69</text>
      <defs>
        <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/>
        </marker>
      </defs>
    </svg>
  );
}

// ─── L298N Motor Driver ──────────────────────────────────────────────────────
function MotorDriverDiagram() {
  return (
    <svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* PCB */}
      <rect x="80" y="60" width="220" height="170" rx="5" fill="#1a1a3e" stroke="#444" strokeWidth="1.5"/>
      {/* Heatsink */}
      <rect x="130" y="50" width="120" height="30" rx="2" fill="#333" stroke="#666" strokeWidth="1"/>
      {[0,1,2,3,4,5,6].map(i=><line key={i} x1={140+i*16} y1="50" x2={140+i*16} y2="80" stroke="#555" strokeWidth="1"/>)}
      <text x="190" y="68" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">Heatsink</text>
      {/* L298N chip */}
      <rect x="140" y="110" width="100" height="60" rx="3" fill="#111" stroke="#555" strokeWidth="1"/>
      <text x="190" y="137" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="monospace" fontWeight="bold">L298N</text>
      <text x="190" y="149" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">Dual H-bridge</text>
      <text x="190" y="160" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">2A per channel</text>
      {/* Left side pins (power) */}
      {[["12V","#dc2626",90],["GND","#374151",108],["5V","#dc2626",126]].map(([label,color,y])=>(
        <g key={label}>
          <rect x="68" y={Number(y)} width="12" height="9" rx="1" fill={color as string} stroke="#555" strokeWidth="0.5"/>
          <text x="62" y={Number(y)+7} textAnchor="end" fill={label==="GND"?"#9ca3af":"#f87171"} fontSize="8" fontFamily="monospace" fontWeight="bold">{label}</text>
        </g>
      ))}
      <text x="55" y="100" textAnchor="middle" fill="#f87171" fontSize="7" fontFamily="monospace">Power</text>
      {/* Right side motor outputs */}
      {[["OUT1","#22d3ee",85],["OUT2","#22d3ee",103],["OUT3","#34d399",145],["OUT4","#34d399",163]].map(([label,color,y])=>(
        <g key={label}>
          <rect x="300" y={Number(y)} width="12" height="9" rx="1" fill="#1a3a3a" stroke="#22d3ee" strokeWidth="0.5"/>
          <text x="318" y={Number(y)+7} fill={color as string} fontSize="8" fontFamily="monospace" fontWeight="bold">{label}</text>
        </g>
      ))}
      <text x="340" y="115" fill="#6b7280" fontSize="7" fontFamily="monospace">Motor A</text>
      <text x="340" y="157" fill="#6b7280" fontSize="7" fontFamily="monospace">Motor B</text>
      {/* Bottom control pins */}
      <text x="190" y="244" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">Control inputs (logic 3.3V / 5V)</text>
      {[["ENA","#a78bfa",100],["IN1","#6366f1",120],["IN2","#6366f1",140],["IN3","#6366f1",170],["IN4","#6366f1",190],["ENB","#a78bfa",210]].map(([label,color,x])=>(
        <g key={label}>
          <rect x={Number(x)} y="232" width="12" height="9" rx="1" fill="#1a1a3e" stroke="#6366f1" strokeWidth="0.5"/>
          <text x={Number(x)+6} y="252" textAnchor="middle" fill={color as string} fontSize="7" fontFamily="monospace" transform={`rotate(-45,${Number(x)+6},252)`}>{label}</text>
        </g>
      ))}
      {/* Title */}
      <text x="190" y="30" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">L298N Motor Driver</text>
      <text x="190" y="43" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">Dual H-bridge · 2A/ch · up to 46V</text>
    </svg>
  );
}

// ─── ESP32 DevKit V1 ─────────────────────────────────────────────────────────
function Esp32Diagram() {
  return (
    <svg viewBox="0 0 380 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* PCB */}
      <rect x="100" y="50" width="120" height="240" rx="5" fill="#1a2a1a" stroke="#2a5a2a" strokeWidth="1.5"/>
      {/* Antenna */}
      <rect x="118" y="38" width="84" height="14" rx="3" fill="#1a2a1a" stroke="#2a5a2a" strokeWidth="1"/>
      <text x="160" y="49" textAnchor="middle" fill="#22d3ee" fontSize="6.5" fontFamily="monospace">WiFi/BT Antenna</text>
      {/* USB Micro */}
      <rect x="140" y="276" width="40" height="16" rx="3" fill="#222" stroke="#555" strokeWidth="1"/>
      <text x="160" y="288" textAnchor="middle" fill="#777" fontSize="6" fontFamily="monospace">USB Micro</text>
      {/* Reset + Boot buttons */}
      <rect x="112" y="255" width="16" height="10" rx="2" fill="#dc2626"/>
      <text x="120" y="264" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace">RST</text>
      <rect x="192" y="255" width="16" height="10" rx="2" fill="#1d4ed8"/>
      <text x="200" y="264" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace">BOOT</text>
      {/* ESP32 chip */}
      <rect x="125" y="110" width="70" height="70" rx="3" fill="#111" stroke="#444" strokeWidth="1"/>
      <text x="160" y="143" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="monospace" fontWeight="bold">ESP32</text>
      <text x="160" y="156" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">Xtensa LX6</text>
      <text x="160" y="168" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">240 MHz</text>
      {/* Left side pins */}
      {[
        ["3.3V","#dc2626",65],["GND","#374151",80],["D15","#d4a017",95],["D2","#d4a017",110],
        ["D4","#d4a017",125],["RX2","#a78bfa",140],["TX2","#a78bfa",155],["D5","#d4a017",170],
        ["D18","#d4a017",185],["D19","#d4a017",200],["D21","#d4a017",215],["RX0","#a78bfa",230],
        ["TX0","#a78bfa",245],["D22","#d4a017",260],["D23","#d4a017",275],
      ].map(([label,color,y])=>(
        <g key={`${label}${y}`}>
          <rect x="88" y={Number(y)} width="12" height="9" rx="1" fill={label==="GND"?"#374151":label==="3.3V"?"#991b1b":"#1a3a1a"} stroke="#444" strokeWidth="0.5"/>
          <text x="82" y={Number(y)+7} textAnchor="end" fill={color as string} fontSize="7.5" fontFamily="monospace">{label}</text>
        </g>
      ))}
      {/* Right side pins */}
      {[
        ["GND","#374151",65],["D13","#d4a017",80],["D12","#d4a017",95],["D14","#d4a017",110],
        ["D27","#d4a017",125],["D26","#d4a017",140],["D25","#d4a017",155],["D33","#34d399",170],
        ["D32","#34d399",185],["D35","#34d399",200],["D34","#34d399",215],["VN","#4b5563",230],
        ["VP","#4b5563",245],["EN","#f59e0b",260],["VIN","#dc2626",275],
      ].map(([label,color,y])=>(
        <g key={`${label}${y}`}>
          <rect x="220" y={Number(y)} width="12" height="9" rx="1" fill={label==="GND"?"#374151":label==="VIN"||label==="3.3V"?"#991b1b":"#1a3a1a"} stroke="#444" strokeWidth="0.5"/>
          <text x="238" y={Number(y)+7} fill={color as string} fontSize="7.5" fontFamily="monospace">{label}</text>
        </g>
      ))}
      {/* Green = ADC only labels */}
      <text x="280" y="175" fill="#34d399" fontSize="6.5" fontFamily="monospace">ADC-only</text>
      <text x="280" y="185" fill="#34d399" fontSize="6.5" fontFamily="monospace">pins (input</text>
      <text x="280" y="195" fill="#34d399" fontSize="6.5" fontFamily="monospace">only after</text>
      <text x="280" y="205" fill="#34d399" fontSize="6.5" fontFamily="monospace">WiFi init)</text>
      {/* Title */}
      <text x="160" y="24" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">ESP32 DevKit V1</text>
      <text x="160" y="36" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace">WiFi·BT · 240MHz · 520KB RAM</text>
    </svg>
  );
}

// ─── DC Motor ────────────────────────────────────────────────────────────────
function DcMotorDiagram() {
  return (
    <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* Motor body cylinder */}
      <ellipse cx="190" cy="130" rx="55" ry="80" fill="#2a2a2a" stroke="#555" strokeWidth="1.5"/>
      {/* Front cap */}
      <ellipse cx="265" cy="130" rx="20" ry="80" fill="#222" stroke="#555" strokeWidth="1.5"/>
      <ellipse cx="265" cy="130" rx="12" ry="72" fill="#333" stroke="#444" strokeWidth="1"/>
      {/* Shaft */}
      <rect x="285" y="123" width="60" height="14" rx="4" fill="#888" stroke="#aaa" strokeWidth="1"/>
      <text x="345" y="133" textAnchor="middle" fill="#d1d5db" fontSize="7.5" fontFamily="monospace">Output shaft</text>
      {/* Rear cap terminals */}
      <ellipse cx="135" cy="130" rx="14" ry="80" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
      {/* Terminal posts */}
      <circle cx="125" cy="100" r="8" fill="#dc2626" stroke="#f87171" strokeWidth="1"/>
      <text x="125" y="103.5" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">+</text>
      <circle cx="125" cy="160" r="8" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1"/>
      <text x="125" y="163.5" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">−</text>
      {/* Commutator */}
      <ellipse cx="148" cy="130" rx="10" ry="60" fill="#a07010" stroke="#c0a030" strokeWidth="1"/>
      <text x="148" y="133" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace" transform="rotate(90,148,130)">Commutator</text>
      {/* Rotation arrows */}
      <path d="M 265 58 A 62 62 0 0 1 315 108" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5,3"/>
      <path d="M 315 152 A 62 62 0 0 1 265 202" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="328" y="133" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="monospace">CCW/CW</text>
      {/* Internal coil indicator */}
      <text x="185" y="128" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="monospace">Armature</text>
      <text x="185" y="140" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="monospace">windings</text>
      {/* Speed control */}
      <text x="55" y="80" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">PWM → speed</text>
      <text x="55" y="92" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">Polarity → direction</text>
      <line x1="88" y1="100" x2="117" y2="100" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="88" y1="160" x2="117" y2="160" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3,2"/>
      {/* Title */}
      <text x="190" y="22" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">DC Brushed Motor</text>
      <text x="190" y="35" textAnchor="middle" fill="#4b5563" fontSize="7.5" fontFamily="monospace">2-terminal · speed via PWM · direction via polarity</text>
    </svg>
  );
}

// ─── Generic placeholder ─────────────────────────────────────────────────────
function GenericDiagram({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-40 gap-2">
      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
        <span className="text-slate-500 text-2xl">⬡</span>
      </div>
      <p className="text-slate-600 text-sm font-mono">{name}</p>
    </div>
  );
}

// ─── Registry ────────────────────────────────────────────────────────────────
const diagrams: Record<string, React.ComponentType> = {
  arduino: ArduinoDiagram,
  servo: ServoDiagram,
  "servo-motor": ServoDiagram,
  imu: ImuDiagram,
  "imu-sensor": ImuDiagram,
  "mpu-6050": ImuDiagram,
  "motor-driver": MotorDriverDiagram,
  l298n: MotorDriverDiagram,
  esp32: Esp32Diagram,
  "dc-motor": DcMotorDiagram,
};

interface ComponentDiagramProps {
  component: string;
  title?: string;
  caption?: string;
}

export default function ComponentDiagram({ component, title, caption }: ComponentDiagramProps) {
  const Diagram = diagrams[component.toLowerCase()] ?? (() => <GenericDiagram name={component} />);
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      {title && (
        <div className="px-5 py-3 border-b border-white/[0.05]">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
        </div>
      )}
      <div className="p-5 bg-[#060610]">
        <Diagram />
      </div>
      {caption && (
        <div className="px-5 py-3 border-t border-white/[0.05]">
          <p className="text-slate-600 text-[12px] leading-relaxed">{caption}</p>
        </div>
      )}
    </div>
  );
}
