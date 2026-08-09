import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import local high-res images
import imgRfd from '@/imports/quantum_rfd_detect.jpg';
import imgMicrowave from '@/imports/innovation_2.jpg';
import imgRydberg from '@/imports/rydberg_sensor_macro.jpg';
import imgDrone from '@/imports/quantum_stealth_drone.jpg';
import imgClock from '@/imports/quantum_atomic_clock.jpg';
import bgVideo from '@/imports/gwr_video_mvp.mp4';
import bgSchematic from '@/imports/unified_quantum_schematic.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ─── Card Data ────────────────────────────────────────────────
interface CardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  statusBadge: string;
  freqRange: string;
  specs: string[];
}

const PILLARS: CardData[] = [
  {
    id: 'rfd',
    tag: 'RFD1 · RG-QD · RF-Model / HVN S4',
    title: 'Wideband RF Detectors',
    description: "Detection hardware built for the full RF spectrum, from room temperature to cryogenic conditions. The RFD1, RG-QD, and RF-Model give platforms the sensitivity to detect what conventional receivers miss.",
    statusBadge: 'DEFENCE GRADE · ACTIVE',
    freqRange: '100 MHz – 40 GHz',
    specs: [
      "Broadband detection across RF/MW frequencies",
      "Configurable for thru-wall RADAR and SIGINT",
      "Zero foreign dependency in the critical path",
      "Noise figure: < 2 dB across full band",
      "MIL-STD-810H environmental qualification",
      "Indigenous signal processing architecture"
    ],
    image: imgRfd
  },
  {
    id: 'microwave',
    tag: 'TWPAs · HEMT Amps · IQ Mixers',
    title: 'Quantum Microwave Devices',
    description: "The amplification and signal-conditioning layer quantum systems run on. Travelling Wave Parametric Amplifiers, HEMT amplifiers, IQ mixers, and precision filters.",
    statusBadge: 'CRYOGENIC CAPABLE',
    freqRange: '4K – 300K Operating',
    specs: [
      "TWPAs for near-quantum-limited amplification",
      "HEMT amplifiers for low-noise RF/MW gain",
      "IQ mixer spurious rejection: > 25 dBc",
      "Operating temperature: 4K – 300K",
      "Custom filter design & fabrication",
      "Cryogenic RF/MW design expertise"
    ],
    image: imgMicrowave
  },
  {
    id: 'rydberg',
    tag: 'Atomic-Precision Sensing',
    title: 'Rydberg Atom Sensors',
    description: "Atomic-precision sensing for environments where classical RF sensors fall short. Detect electromagnetic fields with a sensitivity that redefines what's measurable.",
    statusBadge: 'QUANTUM ACTIVE',
    freqRange: 'DC – 100+ GHz',
    specs: [
      "Ultra-high sensitivity EM field detection",
      "Self-calibrating atomic reference standard",
      "No antenna required — atom-based reception",
      "Frequency agile: DC to 100+ GHz",
      "Applications in SIGINT and secure sensing",
      "Bridges quantum theory & defence deployment"
    ],
    image: imgRydberg
  },
  {
    id: 'drone',
    tag: 'DaaS / Mission Scale',
    title: 'Quantum Drone',
    description: "Quantum-enabled drone systems built for contested and GPS-denied environments. Engineered around indigenous quantum sensing and navigation hardware.",
    statusBadge: 'MISSION READY',
    freqRange: 'GPS-Denied Nav',
    specs: [
      "Drone-as-a-Service (DaaS) flexible deployment",
      "Onboard quantum sensing for GPS-denied nav",
      "Quantum-enhanced INS for autonomous flight",
      "Encrypted quantum key distribution payload",
      "Multi-spectral sensing integration",
      "Engineered for aerospace operational realities"
    ],
    image: imgDrone
  },
  {
    id: 'clock',
    tag: 'Quantum Limit Precision',
    title: 'Quantum Clock Source',
    description: "Precision timing at the quantum limit. A Quantum Clock Source gives navigation, communication, and RADAR systems a timing reference stable enough to operate independently.",
    statusBadge: 'SOVEREIGN TIMING',
    freqRange: 'Allan Dev < 1×10⁻¹²',
    specs: [
      "Quantum-grade frequency stability",
      "Enables sovereign, GPS-independent timing",
      "Allan deviation: < 1×10⁻¹² @ 1s",
      "Holdover: < 1 μs over 24 hours",
      "Supports distributed network synchronisation",
      "Ruggedised for field deployment"
    ],
    image: imgClock
  }
];

// ─── Main Export ──────────────────────────────────────────────
export function QuantumEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Determine if mobile (don't run complex GSAP horizontal on very small screens if preferred)
    // But user wants horizontal scroll, so we will apply it universally.
    const cards = gsap.utils.toArray('.qs-card');
    if (!trackRef.current || cards.length === 0) return;

    const track = trackRef.current;
    
    // Total distance the track needs to slide to show the last card
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Smooth scrubbing
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true, // Recalculate distances on window resize
      }
    });
  }, { scope: containerRef });

  return (
    <div className="font-['Inter',sans-serif]">
      {/* Intro Section - Standard Flow */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-start justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            src={bgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay to ensure text is legible on the left, but kept light to show video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          
          {/* Bottom fade to blend seamlessly into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            Sovereign Technology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            The Quantum <br className="hidden md:block" /> Ecosystem
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-300 max-w-xl">
            Sensing built on quantum principles, engineered for a sensitivity classical hardware can't reach. 
            From RF detection to atomic clocks, this is the measurement layer for modern aerospace and defence programmes.
          </p>
        </div>
      </section>

      {/* GSAP Horizontal Scroll Section */}
      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden"
        style={{ backgroundColor: '#050505' }} // Dark background base
      >
        {/* Background Schematic Image (Fixed Z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={bgSchematic} 
            alt="Quantum Schematic Background" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-screen invert"
            // Inverting the white schematic to make it look like a dark blueprint
          />
          {/* Faint green glow overlaid on schematic */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.06)_0%,rgba(5,5,5,0.85)_80%)]" />
        </div>



        {/* Track Container (Z-10) */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {PILLARS.map((pillar, idx) => (
              <div 
                key={idx} 
                className="qs-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }} // Force each card container to take up one viewport width
              >
                <TacticalConsoleCard data={pillar} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Tactical Console Card ────────────────────────────────────
function TacticalConsoleCard({ data }: { data: CardData }) {
  return (
    <div
      className="relative w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)]"
      style={{ 
        backgroundColor: 'rgba(8, 8, 8, 0.75)', 
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* HUD Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

      {/* Grid Layout - Forced to 100% height without internal scrolling */}
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full overflow-hidden">
        
        {/* LEFT: Hardware Visual (5 cols / ~42%) */}
        <div className="md:col-span-5 p-5 lg:p-6 border-b md:border-b-0 md:border-r" 
          style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
          {/* Image */}
          <div className="relative w-full h-48 md:h-full rounded-xl overflow-hidden group" 
            style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#000', minHeight: '300px' }}>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
            
            {/* Status indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                {data.statusBadge}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Specifications & CTAs (7 cols / ~58%) */}
        <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-between h-full bg-neutral-100">
          <div>
            {/* Tag */}
            <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
              style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
              {data.tag}
            </span>

            {/* Title */}
            <h3 className="text-slate-900 text-xl lg:text-3xl font-bold tracking-wide uppercase leading-tight line-clamp-1">
              {data.title}
            </h3>
            <p className="text-xs lg:text-sm mt-3 leading-relaxed text-slate-600 line-clamp-2">
              {data.description}
            </p>

            <div className="my-5 border-t border-slate-200" />

            {/* Specs Grid */}
            <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-4 text-slate-500">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {data.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] lg:text-[13px] text-slate-700 leading-tight">
                  <span className="mt-[2px] font-bold text-amber-600">›</span>
                  <span className="line-clamp-2">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Block locked to bottom via mt-auto */}
          <div className="pt-6 mt-auto border-t border-slate-200">
            <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-white hover:text-slate-900 text-white group">
              <span>Know More</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
