import React from 'react';
import { ArrowRight } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#84CC16] blur-[150px] rounded-[100%] opacity-10 mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-8">
          SECURE YOUR PERIMETER <br />
          <span className="text-white/40">AGAINST COVERT INFILTRATIONS.</span>
        </h2>
        
        <div className="w-16 h-1 bg-[#84CC16] mb-12 rounded-full" />
        
        <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded font-bold uppercase tracking-widest hover:bg-[#84CC16] hover:text-black transition-all duration-300">
          Secure Contact Form
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-12 w-full max-w-2xl">
          <div className="flex flex-col items-center gap-3">
             <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-bold text-sm tracking-widest text-[#84CC16]">
               IP67
             </div>
             <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Waterproof & Dustproof</span>
          </div>
          <div className="flex flex-col items-center gap-3">
             <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-bold text-sm tracking-widest text-white/50 text-center leading-[1.1]">
               MIL<br/>STD
             </div>
             <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">810G (Pending)</span>
          </div>
        </div>
      </div>
    </section>
  );
}