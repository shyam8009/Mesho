import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../../imports/osint/cyber_command.jpg';
import img2 from '../../../imports/osint/city_monitoring.jpg';
import img3 from '../../../imports/osint/military_intel.jpg';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    image: img1,
    label: "Blockchain Financial Fraud Mapping & Darknet Scans"
  },
  {
    image: img2,
    label: "Smart-City Public Safety Monitoring"
  },
  {
    image: img3,
    label: "National Security Threat Assessment & Counter-Terrorism"
  }
];

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 uppercase tracking-tight text-center">
          Tactical Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative h-[400px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-[#84CC16]/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-8 h-1 bg-[#84CC16] mb-4 transform origin-left group-hover:scale-x-150 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {useCase.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
