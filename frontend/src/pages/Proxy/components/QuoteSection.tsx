import React from 'react';
import { ChevronRight } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center">
        <h2 className="quote-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight tracking-tight uppercase" style={{ fontFamily: INTER }}>
          "Command the spectrum. Dominate the airspace."
        </h2>
        
        <div className="quote-text flex flex-col items-center gap-6">
          <button className="px-8 py-4 bg-[#84CC16] hover:bg-[#95e01a] text-black font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-sm">
            CONTACT ELECTRONIC WARFARE SALES
          </button>
          
          <button className="text-white/40 hover:text-white transition-colors text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white uppercase tracking-wider font-bold">
            Request a System Integration Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
