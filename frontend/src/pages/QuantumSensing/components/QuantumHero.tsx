import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgVideo from '@/imports/gwr_video_mvp.mp4';

gsap.registerPlugin(ScrollTrigger);

export function QuantumHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background scale animation
      gsap.fromTo(bgRef.current, 
        { scale: 1.1 },
        { scale: 1, duration: 2.5, ease: "power3.out" }
      );

      // Title animation (fade and slide up)
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
      );

      // Content fade in
      gsap.fromTo(contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#000000] text-white">
      {/* Background Video */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full opacity-90"
      >
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Gradients for left-aligned text and bottom blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 flex flex-col items-start text-left">
        {/* Eyebrow */}
        <div 
          className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-8"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          <div className="w-2 h-2 rounded-full bg-[#84CC16] shadow-[0_0_8px_#84CC16]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
            Quantum Technology Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[100px] font-bold uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl"
        >
          Quantum<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
            Sensing
          </span>
        </h1>

        <div ref={contentRef} className="flex flex-col items-start max-w-[700px]">
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-6 leading-tight">
            Sensing built on quantum principles, engineered for a sensitivity classical hardware can't reach.
          </p>

          {/* Intro */}
          <p className="text-sm md:text-base text-white/60 mb-10 leading-relaxed max-w-[600px]">
            From RF detection to atomic clocks, this is the measurement layer for India's aerospace and defence programmes.
          </p>

          {/* CTA */}
          <button 
            onClick={() => {
              document.getElementById('quantum-ecosystem')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center justify-center bg-[#84CC16] text-[#050505] px-8 py-4 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore The Ecosystem</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
}
