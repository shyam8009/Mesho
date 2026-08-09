import React, { useEffect, useRef } from 'react';
import { Target, Radio, Battery } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rhinoZ23ModelImg from '../../../imports/rhino-z23/magnific_img1-this-is-my-product-r_ONKji9qynm.png';

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
              Versatile Counter-UAS Integration
            </h2>
            
            <div className="fade-in-right space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Designed to mount on the Zu-23 platform as well as poles or backpacks. Rugged and battery-operated, it ensures reliable field performance in tactical missions and critical infrastructure protection. It packs 160 W of multi-frequency jamming power into a system portable enough for backpack use.
              </p>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Central Render */}
            <img 
              src={rhinoZ23ModelImg} 
              alt="Rhino Gen Z 23" 
              className="relative z-10 w-full max-w-[600px] object-cover rounded-xl drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            {/* HUD Callouts */}
            <div className="hud-element absolute top-[15%] left-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Target className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Zu-23 Platform Integration</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] left-0 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Radio className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Omni-Directional & Directional</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] right-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Battery className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Battery Operated</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
