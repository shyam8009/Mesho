import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import convoyImg from '../../../imports/infinity-rhino/magnific_professional-editorialtac_brmMBWU5Y2.png';
import baseImg from '../../../imports/infinity-rhino/magnific_professional-editorialtac_wPKaCMd7EI.jpeg';
import motorcadeImg from '../../../imports/infinity-rhino/magnific_professional-highspeed-ac_1sfdHynr4r.jpeg';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    id: "01",
    title: 'AIRSPACE MONITORING',
    description: 'Provide continuous 3D surveillance of critical airspace. Detects and tracks autonomous drones, loitering munitions, and unauthorized surveillance craft in real-time before they breach restricted zones.',
    status: 'IN PRODUCTION',
    image: motorcadeImg
  },
  {
    id: "02",
    title: 'BORDER SURVEILLANCE',
    description: 'Deploy ruggedized units along porous borders to identify low-flying smuggling drones and cross-border incursions. Operates effectively in extreme weather and denied environments.',
    status: 'FIELD DEPLOYED',
    image: convoyImg
  },
  {
    id: "03",
    title: 'ASSET PROTECTION',
    description: 'Integrate directly into the security perimeters of forward operating bases, power plants, and VIP locations. Acts as the primary sensor triggering automated kinetic and EW countermeasures.',
    status: 'PROVEN IN MULTIPLE ENVIRONMENTS',
    image: baseImg
  }
];

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-4">
            // DEPLOYMENT SCENARIOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            AI FOR THE HARDEST MISSION PROBLEMS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div 
              key={useCase.id} 
              ref={el => cardsRef.current[index] = el}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Neon Green Tint Hover Overlay */}
              <div className="absolute inset-0 bg-[#84CC16]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold mb-2 block">
                    {useCase.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {useCase.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">
                      {useCase.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}