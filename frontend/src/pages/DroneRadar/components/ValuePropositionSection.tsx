import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import valuePropFullImg from '../../../imports/value_prop_full_v2.png';

gsap.registerPlugin(ScrollTrigger);

export function ValuePropositionSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black w-full flex justify-center py-24">
      <div className="max-w-[1920px] w-full px-4 lg:px-8">
        <img 
          ref={imgRef}
          src={valuePropFullImg} 
          alt="Value Proposition - We Secure The Airspace" 
          className="w-full h-auto block object-contain shadow-2xl rounded-2xl border border-white/5 bg-black/50" 
          style={{ aspectRatio: '2 / 1' }}
          onLoad={() => ScrollTrigger.refresh()}
        />
      </div>
    </section>
  );
}