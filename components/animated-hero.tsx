"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function AnimatedHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden bg-[#05111f]"
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e35] via-[#081525] to-[#05111f]" />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          [12, 8],
          [28, 5],
          [45, 12],
          [60, 3],
          [75, 9],
          [88, 6],
          [95, 14],
          [18, 18],
          [35, 22],
          [52, 16],
          [67, 20],
          [82, 17],
          [92, 24],
          [8, 30],
          [22, 28],
          [40, 33],
          [58, 26],
          [72, 31],
          [86, 27],
          [5, 14],
          [50, 7],
          [70, 15],
          [33, 10],
          [80, 4],
          [15, 25],
        ].map(([left, top], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
              opacity: 0.3 + (i % 5) * 0.1,
              animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i % 4) * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-14 right-24 w-12 h-12 rounded-full bg-[#d8d0bc] opacity-60 shadow-[0_0_40px_12px_rgba(216,208,188,0.12)]" />

      {/* Ocean surface */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#020c16] via-[#071626] to-transparent" />

      {/* Horizon shimmer */}
      <div className="absolute bottom-[29%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Wave layers */}
      <svg
        className="absolute bottom-[27%] left-0 w-[200%] h-12 animate-wave-slow opacity-35"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#0d2a45"
          d="M0,40 C240,10 480,60 720,40 C960,20 1200,55 1440,35 L1440,80 L0,80 Z"
        />
      </svg>
      <svg
        className="absolute bottom-[24%] left-0 w-[200%] h-10 animate-wave-medium opacity-45"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#071e32"
          d="M0,50 C360,20 720,60 1080,40 C1260,30 1440,50 1440,50 L1440,80 L0,80 Z"
        />
      </svg>

      {/* ── CARGO SHIP SVG ── slides in from LEFT, stays in bottom-left quadrant */}
      <div
        className={`absolute bottom-[8%] transition-all duration-[4000ms] ease-linear pointer-events-none`}
        style={{
          left: isLoaded ? "-2%" : "-55%",
          width: "clamp(280px, 32vw, 480px)",
        }}
      >
        <svg
          viewBox="0 0 480 160"
          className="w-full h-auto drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c2a3a" />
              <stop offset="100%" stopColor="#0a1520" />
            </linearGradient>
            <linearGradient id="deckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d3e52" />
              <stop offset="100%" stopColor="#1a2a38" />
            </linearGradient>
          </defs>

          {/* ── BOW (proa) on the RIGHT – Bridge (puente) on the LEFT ── */}

          {/* Hull main body */}
          <path
            d="M60,115 L60,92 L420,92 L450,100 L460,112 L420,122 L60,122 Z"
            fill="url(#hullGrad)"
          />
          {/* Hull underbelly curve */}
          <path
            d="M60,122 Q55,130 65,136 L415,136 Q445,134 460,122 L420,122 L60,122 Z"
            fill="#08111c"
          />
          {/* Red anti-fouling stripe along waterline */}
          <path
            d="M62,128 L418,128 Q442,126 458,118"
            fill="none"
            stroke="#8b1a1a"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Deck surface */}
          <rect
            x="65"
            y="82"
            width="375"
            height="11"
            fill="url(#deckGrad)"
            rx="1"
          />

          {/* ── BRIDGE / SUPERSTRUCTURE at STERN (left side) ── */}
          {/* Lower cabin */}
          <rect x="72" y="52" width="62" height="31" fill="#141f2c" rx="1" />
          {/* Upper bridge */}
          <rect x="76" y="36" width="54" height="18" fill="#1a2a3c" rx="1" />
          {/* Bridge top */}
          <rect x="78" y="31" width="50" height="6" fill="#243548" rx="1" />
          {/* Bridge windows */}
          <rect
            x="81"
            y="39"
            width="11"
            height="8"
            fill="#2d5a8a"
            rx="1"
            opacity="0.9"
          />
          <rect
            x="95"
            y="39"
            width="11"
            height="8"
            fill="#2d5a8a"
            rx="1"
            opacity="0.9"
          />
          <rect
            x="109"
            y="39"
            width="11"
            height="8"
            fill="#2d5a8a"
            rx="1"
            opacity="0.85"
          />
          {/* Cabin windows row */}
          <rect
            x="78"
            y="58"
            width="9"
            height="6"
            fill="#1e3d5c"
            rx="1"
            opacity="0.8"
          />
          <rect
            x="90"
            y="58"
            width="9"
            height="6"
            fill="#1e3d5c"
            rx="1"
            opacity="0.8"
          />
          <rect
            x="102"
            y="58"
            width="9"
            height="6"
            fill="#1e3d5c"
            rx="1"
            opacity="0.8"
          />
          <rect
            x="114"
            y="58"
            width="9"
            height="6"
            fill="#1e3d5c"
            rx="1"
            opacity="0.7"
          />

          {/* Funnel / Smokestack */}
          <rect x="88" y="18" width="16" height="14" fill="#101820" rx="1" />
          <rect x="90" y="14" width="12" height="5" fill="#991b1b" rx="1" />

          {/* Mast with antenna */}
          <line
            x1="96"
            y1="12"
            x2="96"
            y2="-4"
            stroke="#3a4e62"
            strokeWidth="2"
          />
          <line
            x1="91"
            y1="0"
            x2="101"
            y2="0"
            stroke="#3a4e62"
            strokeWidth="1.5"
          />

          {/* ── CONTAINERS on deck ── */}
          {/* Row 1 – bottom */}
          <rect x="150" y="60" width="34" height="22" fill="#1d4ed8" rx="1" />
          <rect x="186" y="60" width="34" height="22" fill="#b91c1c" rx="1" />
          <rect x="222" y="60" width="34" height="22" fill="#15803d" rx="1" />
          <rect x="258" y="60" width="34" height="22" fill="#b45309" rx="1" />
          <rect x="294" y="60" width="34" height="22" fill="#1d4ed8" rx="1" />
          <rect x="330" y="60" width="34" height="22" fill="#b91c1c" rx="1" />
          <rect x="366" y="60" width="34" height="22" fill="#15803d" rx="1" />
          <rect x="402" y="60" width="34" height="22" fill="#1d4ed8" rx="1" />

          {/* Row 2 – middle */}
          <rect x="158" y="37" width="34" height="22" fill="#15803d" rx="1" />
          <rect x="194" y="37" width="34" height="22" fill="#1d4ed8" rx="1" />
          <rect x="230" y="37" width="34" height="22" fill="#b91c1c" rx="1" />
          <rect x="266" y="37" width="34" height="22" fill="#15803d" rx="1" />
          <rect x="302" y="37" width="34" height="22" fill="#b45309" rx="1" />
          <rect x="338" y="37" width="34" height="22" fill="#1d4ed8" rx="1" />
          <rect x="374" y="37" width="34" height="22" fill="#b91c1c" rx="1" />

          {/* Row 3 – top */}
          <rect x="174" y="14" width="34" height="22" fill="#b91c1c" rx="1" />
          <rect x="210" y="14" width="34" height="22" fill="#15803d" rx="1" />
          <rect x="246" y="14" width="34" height="22" fill="#1d4ed8" rx="1" />
          <rect x="282" y="14" width="34" height="22" fill="#b45309" rx="1" />
          <rect x="318" y="14" width="34" height="22" fill="#b91c1c" rx="1" />

          {/* Container ridge lines */}
          <g stroke="#ffffff" strokeWidth="0.4" opacity="0.12">
            <line x1="150" y1="71" x2="184" y2="71" />
            <line x1="186" y1="71" x2="220" y2="71" />
            <line x1="222" y1="71" x2="256" y2="71" />
            <line x1="258" y1="71" x2="292" y2="71" />
            <line x1="294" y1="71" x2="328" y2="71" />
            <line x1="330" y1="71" x2="364" y2="71" />
            <line x1="366" y1="71" x2="400" y2="71" />
            <line x1="402" y1="71" x2="436" y2="71" />
          </g>

          {/* Bow anchor detail */}
          <circle cx="448" cy="106" r="3" fill="#243548" />

          {/* Wake foam trail at stern */}
          <ellipse
            cx="45"
            cy="130"
            rx="28"
            ry="5"
            fill="#0d2035"
            opacity="0.6"
          />
          <ellipse
            cx="20"
            cy="132"
            rx="14"
            ry="3"
            fill="#0d2035"
            opacity="0.4"
          />
        </svg>

        {/* Water reflection under ship */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 opacity-20">
          <svg
            width="100%"
            height="16"
            viewBox="0 0 480 16"
            preserveAspectRatio="none"
          >
            <path
              d="M0,6 Q80,2 160,8 Q240,14 320,6 Q400,0 480,8"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* Foreground ocean wave */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-24 animate-wave-fast"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
      >
        <path
          fill="#020c16"
          d="M0,60 C200,30 400,80 600,60 C800,40 1000,75 1200,55 C1350,40 1440,65 1440,65 L1440,96 L0,96 Z"
        />
      </svg>

      {/* ── CENTER CONTENT: Logo + name + tagline ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pb-20">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo */}
          <div className="w-36 h-36 md:w-52 md:h-52 mb-8 rounded-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/15 flex items-center justify-center overflow-hidden shadow-2xl">
            <Image
              src="/images/fenix-logo.jpg"
              alt="Logo Fenix Comercio Exterior"
              width={208}
              height={208}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Company name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[0.18em] leading-none mb-3">
            FENIX
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-white/30 mb-4" />

          {/* Tagline */}
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50 font-light mb-10">
            Comercio Exterior
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/servicios"
              className="px-7 py-3 bg-white text-[#05111f] text-sm font-semibold rounded hover:bg-white/90 transition-colors tracking-wide"
            >
              Nuestros Servicios
            </a>
            <a
              href="/#contacto"
              className="px-7 py-3 border border-white/25 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors tracking-wide"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/35">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-white/35 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
