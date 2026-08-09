import React from 'react';
import { ChevronRight } from 'lucide-react';
import surveillanceRadarHeroBg from '../../../imports/surveillance_radar_hero_bg.mp4';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-16">
      {/* Full-width Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src={surveillanceRadarHeroBg}
      />
      
      {/* Background Graphic Elements overlaying the video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10">
        <div className="max-w-3xl">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] text-xs font-bold uppercase tracking-wider font-mono">Ground Surveillance RADAR (GSR) / Ku-Band FMCW</span>
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
              style={{ fontFamily: INTER }}
            >
              SURVEILLANCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">RADAR</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              Dynamic 360Â° Predictive Threat Tracking. Dominating Adverse Visibility Up to 30 Kilometers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-2 bg-[#84CC16] text-black px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#a3e635] transition-colors">
                Request Briefing
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16 p-6 border border-white/10 rounded-xl backdrop-blur-md bg-black/40 w-full sm:w-fit shadow-2xl">
              <div>
                <div className="text-3xl font-bold text-white mb-1">30 km</div>
                <div className="text-sm text-white/50 font-mono uppercase">Max Tracking Envelope</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">700</div>
                <div className="text-sm text-white/50 font-mono uppercase">Concurrent Targets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}