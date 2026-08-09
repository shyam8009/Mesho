import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgSchematic from '@/imports/comms_network_schematic.jpg';
import imgRadioMonitoring from '@/imports/radio_monitoring_portfolio.jpg';
import imgDirectionFinders from '@/imports/direction_finders_system.jpg';

gsap.registerPlugin(ScrollTrigger);

const commsData = [
  {
    tag: "Spectrum Dominance . Wideband Interception",
    title: "Radio Monitoring and Location Portfolio",
    description: "A comprehensive suite of advanced receivers and monitoring systems engineered to detect, intercept, and analyze complex radio frequency (RF) emissions across congested spectrums. It provides total electromagnetic spectrum awareness for tactical and strategic defense operations.",
    specs: [
      "Real-time wideband monitoring spanning VLF to SHF frequency bands.",
      "Automated signal classification, demodulation, and decoding of hostile transmissions.",
      "Multi-channel interception architecture enabling simultaneous tracking of diverse threat vectors.",
      "Seamless data pipeline integration into overarching strategic Command and Control (C2) networks."
    ],
    img: imgRadioMonitoring
  },
  {
    tag: "Precision Geolocation . Tactical DF",
    title: "Direction Finders",
    description: "High-precision tactical direction finding (DF) systems designed to instantly geolocate hostile emitters. Utilizing advanced correlative interferometry and time-difference-of-arrival (TDOA) techniques, it delivers pinpoint accuracy in multi-domain operational theaters.",
    specs: [
      "Rapid geolocation of frequency-hopping, burst, and low-probability-of-intercept (LPI) transmissions.",
      "Highly adaptable deployment options across fixed infrastructure, mobile land units, and airborne platforms.",
      "High-resolution spatial mapping of RF targets with real-time tactical map overlays.",
      "Integrated 3D terrain compensation algorithms to eliminate multi-path errors and improve fix accuracy."
    ],
    img: imgDirectionFinders
  }
];

export default function CommunicationMonitoringEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.comms-card');
    if (!trackRef.current || cards.length === 0) return;
    
    const track = trackRef.current;
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: scrollContainer });

  return (
    <main className="bg-[#050505]">
      {/* Intro Section */}
      <section className="relative w-full pt-16 pb-8 md:pt-24 md:pb-12 flex flex-col items-start justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
        
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#020202]" />
          
          {/* Animated Tech Grid */}
          <div 
            className="absolute inset-0 opacity-30" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(132, 204, 34, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 204, 34, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center'
            }}
          />
          
          {/* Radial gradient mask to fade out the grid at the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
          
          {/* Pulsing Accent Glows for motion */}
          <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-[#84CC16]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#84CC16]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            Spectrum Dominance
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Communication <br className="hidden md:block" /> Monitoring
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-300 max-w-xl">
            A unified architecture encompassing wideband interception and high-precision tactical direction finding. Detect, intercept, and geolocate hostile communications across congested spectrums.
          </p>
        </div>
      </section>

      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE (Fixed, z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgSchematic} 
            alt="RF Network Grid" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {commsData.map((data, idx) => (
              <div 
                key={idx} 
                className="comms-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                {/* THE GLASSMORPHISM CARD (Upgraded) */}
                <div
                  className="relative w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)]"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* HUD Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  {/* Grid Layout - Forced to 100% height without internal scrolling */}
                  <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full overflow-hidden">
                    
                    {/* LEFT: Hardware Visual */}
                    <div className="md:col-span-5 p-5 lg:p-6 border-b md:border-b-0 md:border-r" 
                      style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="relative w-full h-48 md:h-full rounded-xl overflow-hidden group" 
                        style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#000', minHeight: '300px' }}>
                        <img
                          src={data.img}
                          alt={data.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                        
                        {/* Status indicator */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                            ACTIVE MONITORING
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: Specifications & CTAs */}
                    <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-between h-full bg-neutral-100">
                      <div>
                        {/* Tag */}
                        <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                          style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                          {data.tag}
                        </span>

                        {/* Title */}
                        <h3 className="text-slate-900 text-xl lg:text-3xl font-bold tracking-wide uppercase leading-tight line-clamp-1">
                          {data.title}
                        </h3>
                        <p className="text-xs lg:text-sm mt-3 leading-relaxed text-slate-600 line-clamp-2">
                          {data.description}
                        </p>

                        <div className="my-5 border-t border-slate-200" />

                        {/* Specs Grid */}
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-4 text-slate-500">
                          Key Technical Features
                        </h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                          {data.specs.slice(0, 4).map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] lg:text-[13px] text-slate-700 leading-tight">
                              <span className="mt-[2px] font-bold text-amber-600">›</span>
                              <span className="line-clamp-2">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-5 mt-auto border-t border-slate-200">
                        <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-white hover:text-slate-900 text-white">
                          <span>Know More</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER (Fixed, z-20) */}
        <div className="absolute bottom-8 left-0 w-full z-20 text-center pointer-events-none">
          <p className="text-white/40 tracking-widest text-xs uppercase animate-pulse">
            Scroll to Explore
          </p>
        </div>
      </section>
    </main>
  );
}
