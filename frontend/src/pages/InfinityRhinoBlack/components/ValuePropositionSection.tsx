import React, { useEffect, useRef } from 'react';
import { Radio, Briefcase, Battery } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rhinoBlackModelImg from '../../../imports/infinity-rhino/magnific_professional-outdoor-prod_iAS5beF3uK.png';

gsap.registerPlugin(ScrollTrigger);

export function ValuePropositionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
      
      gsap.fromTo('.hud-element',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col">
            <div className="fade-in-right inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="fade-in-right text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
              Tactical Mobility & Spectrum Dominance
            </h2>
            
            <div className="fade-in-right space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Rugged and lightweight with extended operational duration, the Infinity Rhino Black offers superior defense against modern aerial threats. It achieves a massive 2 km omni-directional neutralization radius from a portable unit, providing unmatched protection for tactical missions and critical infrastructure without disrupting allied communication networks.
              </p>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Central Render */}
            <img 
              src={rhinoBlackModelImg} 
              alt="Infinity Rhino Black" 
              className="relative z-10 w-full max-w-[600px] object-cover rounded-xl drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            {/* HUD Callouts */}
            <div className="hud-element absolute top-[15%] left-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Radio className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Omni-Directional Neutralization</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] left-0 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">10 kg Manpack Design</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] right-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Battery className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Extended Operational Duration</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
