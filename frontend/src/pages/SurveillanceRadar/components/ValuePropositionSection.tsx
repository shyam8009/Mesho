import React from 'react';
import surveillanceBlueprintImg from '../../../imports/surveillance_blueprint.png';

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Text */}
          <div className="flex flex-col">
            <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-4">
              <span>// PREDICTIVE INTELLIGENCE</span>
              <div className="h-px bg-[#84CC16]/30 flex-grow" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-tight">
              PERIMETER INTRUSION <br />
              <span className="text-white/40">SOLVED AT SCALE.</span>
            </h2>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                The integration of Ground Surveillance Radar (GSR) into perimeter intrusion systems provides unmatched performance enhancements. GSRs excel in adverse visibility conditions, offering precise target detection and tracking over several kilometers with a 360Â° field-of-view (FOV).
              </p>
              <p>
                Using adaptive thresholds, GSRs identify, track, and predict object paths, raising alarms for breaches into designated areas. Rather than basic line-crossing triggers, the integrated logic identifies and actively predicts target vectors across the grid.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-auto">
            <div className="absolute right-0 top-0 w-3/4 h-3/4 rounded-xl overflow-hidden border border-white/10 opacity-80">
              <img src={surveillanceBlueprintImg} alt="Scanning Geometry" className="w-full h-full object-cover mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black" />
            </div>
            
            <div className="absolute left-0 bottom-0 w-2/3 h-2/3 rounded-xl overflow-hidden border border-[#84CC16]/20 shadow-[0_0_30px_rgba(132,204,22,0.1)] z-10 bg-black">
              <div className="absolute inset-0 bg-[#84CC16]/5 mix-blend-overlay z-10" />
              {/* Image Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-black/60 opacity-80 border-2 border-dashed border-[#84CC16]/30">
                <span className="text-[#84CC16]/60 font-mono text-sm text-center">[ IMAGE PLACEHOLDER ]</span>
                <span className="text-white/40 font-mono text-xs mt-2 text-center px-4">To be provided by user</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur border border-white/10 rounded">
                <div className="text-xs font-mono text-[#84CC16] mb-1">DETECTION GEOMETRY</div>
                <div className="text-white font-bold tracking-wide">360Â° PREDICTIVE</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}