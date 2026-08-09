import React from 'react';
import bgHero from '@/imports/comms_hero_bg.jpg';

export default function CommunicationMonitoringHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-start overflow-hidden border-b border-white/10">
      
      {/* Background Layer: High-Fidelity Static Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgHero} 
          alt="RF Spectrum Background"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Lighter gradient overlay to ensure text is legible on the left while keeping right details bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent w-[70%]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content - LEFT ALIGNED based on right-heavy background */}
      <div className="relative z-10 w-full max-w-3xl text-left px-6 lg:px-24">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full mb-8" 
          style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
          <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_10px_#84CC16]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#84CC16] font-bold">
            Communication Monitoring
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
          Intelligence & <br /> Surveillance
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-12">
          Unrivaled electromagnetic spectrum awareness. Advanced radio monitoring and precision direction-finding systems to detect, intercept, and geolocate hostile communications across all domains.
        </p>

        {/* Primary CTA */}
        <button 
          onClick={scrollToNextSection}
          className="bg-[#84CC16] inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-[#050505] transition-all hover:bg-white"
        >
          Deploy Monitoring Assets
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Bottom fade to blend seamlessly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
