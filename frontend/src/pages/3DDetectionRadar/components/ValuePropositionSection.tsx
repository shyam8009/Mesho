import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import productRender from '../../../imports/3d-drone-detector/3d_drone_detector_product.png';

gsap.registerPlugin(ScrollTrigger);

const INTER = '"Inter", sans-serif';

export function ValuePropositionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hudRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Float animation for product image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Staggered reveal for HUD stats
      hudRefs.current.forEach((hud, i) => {
        if (hud) {
          gsap.fromTo(hud,
            { opacity: 0, x: i % 2 === 0 ? 30 : -30, scale: 0.9 },
            {
              opacity: 1, x: 0, scale: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%"
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
      className="py-24 bg-[#020202] relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase font-mono">
            CORE CAPABILITIES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight" style={{ fontFamily: INTER }}>
            Micro-Doppler Target Intelligence
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mt-2" style={{ fontFamily: INTER }}>
            The 3D Drone Detection RADAR leverages cutting-edge technology to address the growing challenges of UAVs in unregulated airspace. This high-resolution system detects small UAVs by analyzing unique radar signatures created by radio frequency pulses, utilizing embedded micro-Doppler categorization logic to prevent false alarms. It features an affordable operational architecture with low-maintenance requirements for economical strategic implementation.
          </p>
        </div>

        {/* Right Content - Product Render with HUDs */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[#84CC16]/5 blur-[120px] rounded-full" />
          
          <img 
            ref={imageRef}
            src={productRender} 
            alt="3D Drone Detector Architecture" 
            className="relative z-10 w-3/4 max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />

          {/* Floating Glassmorphic HUD Stats */}
          <div 
            ref={el => hudRefs.current[0] = el}
            className="absolute top-[10%] right-[10%] z-20 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-xl flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: INTER }}>
              Swarm Resilience
            </span>
          </div>

          <div 
            ref={el => hudRefs.current[1] = el}
            className="absolute bottom-[20%] left-[5%] z-20 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-xl flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: INTER }}>
              Low Power Consumption
            </span>
          </div>

          <div 
            ref={el => hudRefs.current[2] = el}
            className="absolute bottom-[10%] right-[15%] z-20 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-xl flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: INTER }}>
              IP67-Rated Enclosure
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
