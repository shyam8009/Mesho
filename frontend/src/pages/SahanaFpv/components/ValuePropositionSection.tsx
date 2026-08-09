import React, { useEffect, useRef } from 'react';
import { Target, Activity, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fpvRenderImg from '../../../imports/FPV.png';

gsap.registerPlugin(ScrollTrigger);

export function ValuePropositionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftContentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );

      gsap.fromTo(rightContentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div ref={leftContentRef} className="flex flex-col">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
              <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase font-bold">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] uppercase">
              Kinetic Neutralization & <br />
              <span className="text-white/50">Electronic Resilience</span>
            </h2>
            
            <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                The FPV Bullseye & Interceptor is engineered for rapid deployment, stable flight, and kinetic interception against incoming airborne threats.
              </p>
              <p>
                Designed to operate reliably in contested electronic warfare environments, it provides real-time situational awareness while resisting active anti-drone jamming through its hardened communication architecture.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef} className="relative">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-[#84CC16]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#050505] group">
              <img 
                src={fpvRenderImg} 
                alt="FPV Interceptor Chassis" 
                className="w-full h-full object-contain p-8 mix-blend-lighten opacity-90 transition-transform duration-700 group-hover:scale-105"
              />

              {/* HUD Stat 1 */}
              <div className="absolute top-10 right-10 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10 shadow-2xl">
                <Target className="w-5 h-5 text-[#84CC16]" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Proxy</span>
                  <span className="text-white/50 text-[10px] font-mono uppercase">Anti-Jamming Link</span>
                </div>
              </div>

              {/* HUD Stat 2 */}
              <div className="absolute bottom-20 left-10 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10 shadow-2xl">
                <Activity className="w-5 h-5 text-[#84CC16]" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">3 kg</span>
                  <span className="text-white/50 text-[10px] font-mono uppercase">Payload Capacity</span>
                </div>
              </div>

              {/* HUD Stat 3 */}
              <div className="absolute bottom-10 right-10 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10 shadow-2xl">
                <Zap className="w-5 h-5 text-[#84CC16]" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Thermal</span>
                  <span className="text-white/50 text-[10px] font-mono uppercase">Optional Optics</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
