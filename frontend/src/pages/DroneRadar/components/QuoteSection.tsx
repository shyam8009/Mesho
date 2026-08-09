import React from 'react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-10">
          // MISSION CLEARANCE
        </div>
        
        <h2 
          className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.2]"
          style={{ fontFamily: INTER }}
        >
          &ldquo;IN THIS BUSINESS, TRUST IS THE PRODUCT. WARFIGHTERS DON'T NEED ANOTHER DEMO &mdash; THEY NEED <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#84CC16]">RADAR THEY CAN STAKE A DECISION ON,</span>
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#84CC16]/50" />
          </span> DELIVERED WHEN THE MISSION DEMANDS IT.&rdquo;
        </h2>
        
        <div className="mt-12 text-white/50 font-mono text-sm tracking-widest uppercase">
          &mdash; Director of Radar Systems, Sahana
        </div>
      </div>
    </section>
  );
}