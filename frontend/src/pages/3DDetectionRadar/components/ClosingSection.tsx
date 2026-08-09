import React from 'react';

const INTER = '"Inter", sans-serif';

export function ClosingSection() {
  return (
    <section className="w-full bg-[#000000] py-32 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-white/10">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-[#84CC16]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter uppercase font-bold leading-tight" 
          style={{ fontFamily: INTER }}
        >
          Absolute airspace dominance begins with intelligent detection.
        </h2>
        
        <div className="flex flex-col items-center gap-6 mt-8">
          <button 
            className="bg-[#84CC16] text-black px-8 py-5 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: INTER }}
          >
            CONTACT DEFENSE ELECTRONICS DIVISION
          </button>
          
          <a 
            href="#" 
            className="text-white/40 text-sm hover:text-white transition-colors duration-300 underline underline-offset-4"
            style={{ fontFamily: INTER }}
          >
            Request a Technical Radar Demo
          </a>
        </div>
      </div>
    </section>
  );
}
