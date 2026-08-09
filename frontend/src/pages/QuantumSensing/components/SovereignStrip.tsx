import React from 'react';

export function SovereignStrip() {
  return (
    <section className="w-full bg-[#050505] border-y border-white/10 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(132,204,22,0.03)_0%,transparent_50%] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Block 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              Defence-Grade Reliability
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Built for the operational realities of aerospace and contested environments, ensuring maximum uptime and survivability.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              Indigenous Design
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Sovereign capabilities with zero foreign dependency in the critical path, securing India's technological independence.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              GPS-Denied Operations
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Independent timing and navigation unreliant on external satellite networks, guaranteeing mission success anywhere.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
