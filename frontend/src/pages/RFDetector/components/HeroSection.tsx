import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroBg from '../../../imports/rf-detector-d360/magnific_professional-outdoor-prod_62g8z7SiJO.png';

const INTER = "'Inter', sans-serif";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
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
        alt="RF Detector D360"
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
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              EARLY WARNING SYSTEMS
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            RF DETECTOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">D360</span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Advanced 360-degree radio frequency sensing and early warning threat detection system.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-16">
            <button className="flex items-center gap-2 px-8 py-4 bg-[#84CC16] hover:bg-[#95e01a] text-black font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-sm">
              REQUEST CONSULTATION
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-wrap gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">10 km</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Detection Range</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">360°</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Azimuth Coverage</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
