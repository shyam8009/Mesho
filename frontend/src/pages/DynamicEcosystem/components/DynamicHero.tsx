import React from 'react';
import { RichText } from '../../../components/RichText';

export default function DynamicHero({ data }: { data: any }) {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-start overflow-hidden border-b border-white/10">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {data.resolvedBg ? (
          data.bgIsVideo ? (
            <video src={data.resolvedBg} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90" />
          ) : (
            <img src={data.resolvedBg} alt="Background" className="w-full h-full object-cover opacity-90" />
          )
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent w-[70%]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-left px-6 lg:px-24">
        {data.eyebrow && (
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full mb-8" 
            style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_10px_#84CC16]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#84CC16] font-bold">
              {data.eyebrow}
            </span>
          </div>
        )}

        <h1 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
          {data.h1}
        </h1>

        <RichText content={data.subheadline} className="text-xl md:text-2xl font-medium text-white/90 mb-6 leading-tight" />
        
        {data.intro && (
          <RichText content={data.intro} className="text-base md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-12" />
        )}

        <button 
          onClick={scrollToNextSection}
          className="bg-[#84CC16] inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-[#050505] transition-all hover:bg-white"
        >
          {data.ctaText || 'Know More'}
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
