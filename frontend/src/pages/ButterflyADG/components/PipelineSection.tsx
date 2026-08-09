import React, { useEffect, useRef } from 'react';
import { Crosshair, Radio, Cpu, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "MOUNT",
    icon: Crosshair,
    description: "Directly integrated with the L70 Air Defence Gun platform, or mountable on a tripod, pole, or backpack."
  },
  {
    id: "02",
    title: "ADAPT",
    icon: Radio,
    description: "Supports both Omni Directional and Directional operations with an antenna changing time of less than 1 minute."
  },
  {
    id: "03",
    title: "DETECT",
    icon: Cpu,
    description: "Powered by an advanced A.I. system, delivering an ESM working time of ≥4 hours."
  },
  {
    id: "04",
    title: "DISRUPT",
    icon: Zap,
    description: "Engages hostile UAVs using 5-channel multi-frequency disruption with an ECM endurance of ≥30 mins."
  }
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step appearances
      gsap.fromTo(stepsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Glowing progress line
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
          
          {/* Connecting Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-[3rem] left-0 right-0 h-[1px] bg-white/5" />
          
          {/* Glowing Progress Line */}
          <div 
            ref={progressLineRef}
            className="hidden lg:block absolute top-[3rem] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84CC16] to-[#84CC16] shadow-[0_0_15px_#84CC16]"
            style={{ transformOrigin: 'left center' }}
          />

          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group items-center text-center"
              >
                {/* Unified Circular Step Node */}
                <div className="mb-8 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/10 transition-all duration-300 relative z-10 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] shadow-xl">
                  <span className="text-xs font-bold text-white/40 font-mono tracking-widest group-hover:text-[#84CC16] transition-colors mb-1">
                    {step.id}
                  </span>
                  <Icon className="w-7 h-7 text-white/70 group-hover:text-[#84CC16] transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-[280px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
