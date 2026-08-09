import React from 'react';
import { ChevronRight } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 uppercase leading-tight tracking-tight"
          style={{ fontFamily: INTER }}
        >
          "Absolute airspace dominance requires unmatched speed."
        </h2>
        
        <div className="flex flex-col items-center gap-6">
          <button className="group relative flex items-center justify-center gap-2 bg-[#84CC16] text-black px-10 py-5 rounded font-bold uppercase tracking-wide hover:bg-[#a3e635] transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.3)]">
            CONTACT INTERCEPTION SALES
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono hover:underline underline-offset-4">
            Request a Technical Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
