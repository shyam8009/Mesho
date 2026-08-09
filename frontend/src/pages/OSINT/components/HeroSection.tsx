import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroBg from '../../../imports/osint/hero_bg.jpg';

const INTER = '"Inter", sans-serif';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="OSINT Platform"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              AI ANALYTICS SUITE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              OSINT PLATFORM
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Real-time analytics with absolute identity anonymity across 500+ live data feeds.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-16">
            <button className="flex items-center gap-2 px-8 py-4 bg-[#84CC16] hover:bg-[#95e01a] text-black font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-sm">
              SCHEDULE TECHNICAL DEMO
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-wrap gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Live Data Sources</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Algorithmic Search Methods</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
