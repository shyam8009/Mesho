import React from 'react';

export function QuantumCTA() {
  return (
    <section className="w-full bg-[#000000] py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
          Define the next generation of aerospace and defence measurement.
        </h2>
        
        <button className="group relative bg-[#84CC16] text-[#050505] px-10 py-5 rounded-sm font-bold text-sm tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300 overflow-hidden mb-6">
          <span className="relative z-10">Contact Quantum Division</span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
        
        <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
          Schedule an Engineering Consultation
        </a>
      </div>
    </section>
  );
}
