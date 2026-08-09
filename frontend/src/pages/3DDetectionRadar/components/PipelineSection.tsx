import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = '"Inter", sans-serif';

const PIPELINE_STEPS = [
  {
    num: '01',
    title: 'SCAN',
    desc: 'Utilizes advanced day-and-night X-band FMCW tracking sensor arrays optimized for minimal radar cross-section target tracking.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/>
        <circle cx="12" cy="12" r="6"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'CLASSIFY',
    desc: 'Employs high-resolution signature sorting logic to effectively differentiate structural drone patterns from avian signatures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
        <path d="M12 2a10 10 0 0 1 10 10h-10V2Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'TRACK',
    desc: 'Delivers automatic targets tracking and built-in test diagnostic systems (BIT) to counter multi-drone or swarm attacks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'INTEGRATE',
    desc: 'Seamlessly integrates into broader counter-UAS platforms and AI-powered OSINT Command & Control (C2) frameworks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  }
];

export function PipelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate progress line
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { width: "0%" },
          {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1
            }
          }
        );
      }

      // Animate nodes popping in
      nodesRef.current.forEach((node, i) => {
        if (node) {
          gsap.fromTo(node,
            { scale: 0, opacity: 0 },
            {
              scale: 1, opacity: 1,
              duration: 0.6,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: node,
                start: "top 80%"
              }
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tight uppercase" style={{ fontFamily: INTER }}>
            Operational Pipeline
          </h2>
        </div>

        {/* Pipeline Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-white/10 -z-10" />
          {/* Glowing Green Progress Line */}
          <div 
            ref={lineRef}
            className="hidden md:block absolute top-[48px] left-[12.5%] h-[2px] bg-[#84CC16] shadow-[0_0_15px_#84CC16] -z-10 origin-left"
          />

          {PIPELINE_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-6 relative group">
              
              {/* Node Badge */}
              <div 
                ref={el => nodesRef.current[idx] = el}
                className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center gap-1 z-10 transition-colors duration-300 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/10"
              >
                <span className="text-white/50 text-xs font-mono font-bold">{step.num}</span>
                <div className="text-[#84CC16]">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-white text-xl font-bold tracking-wide uppercase" style={{ fontFamily: INTER }}>
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[280px]" style={{ fontFamily: INTER }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
