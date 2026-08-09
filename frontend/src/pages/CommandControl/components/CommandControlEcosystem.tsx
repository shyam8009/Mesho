import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgSchematic from '@/imports/c2_network_schematic.jpg';
import imgFusionC2 from '@/imports/c2_dashboard_ui.png';
import imgInterception from '@/imports/interception_ui.jpg';

gsap.registerPlugin(ScrollTrigger);

const commandControlData = [
  {
    tag: "1000+ Tracks . 2D/3D Spatial Mapping",
    title: "FUSION Core AI Command & Control (C2)",
    desc: "An advanced AI-driven Command and Control (C2) system designed for enhanced surveillance, seamless sensor integration, and real-time situational awareness with minimal cognitive burden. It unifies complex sensor feeds—including radar tracks, live video, and system telemetry—into an intuitive 2D and 3D interface.",
    features: [
      "Simultaneously tracks over 1000+ objects in real-time, integrating Blue Force tracking for complete spatial dominance.",
      "2D Operational Mapping and 3D Situational Awareness Mapping to grasp terrain elevation, obstacles, and tactical high ground.",
      "User-defined Custom Protection Zones trigger smart audio/visual alarms the moment perimeters are breached.",
      "Automated target tracking and camera handover loops ensure continuous coverage with minimal operator input."
    ],
    img: imgFusionC2
  },
  {
    tag: "Tactical Signal Intercept . Spectrum Exploitation",
    title: "Interception System",
    desc: "A tactical electronic warfare asset engineered for covert monitoring and real-time exploitation of hostile communications. The Interception System isolates, decrypts, and extracts intelligence from encrypted RF channels and digital transmissions across contested operational zones.",
    features: [
      "Wideband frequency monitoring with automatic modulation classification for instant threat detection.",
      "Real-time decryption and signal extraction from tactical radio and RF transmission channels.",
      "Integrated Direction-Finding (DF) routines to geolocate hostile emitters on tactical C2 maps.",
      "Direct data pipeline integration into FUSION Core AI C2 for rapid countermeasure targeting."
    ],
    img: imgInterception
  }
];

export default function CommandControlEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || commandControlData.length === 0) return;
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => `+=${getScrollDist()}`,
      pin: true,
      animation: gsap.to(trackRef.current, {
        x: () => -getScrollDist(),
        ease: "none"
      }),
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
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
            Total Control
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Command & Control <br className="hidden md:block" /> Ecosystem
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-300 max-w-xl">
            A unified architecture encompassing C2 integration and rigorous vulnerability assessments. Uncover hidden adversaries and secure infrastructure before threats materialize.
          </p>
        </div>
      </section>

      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE (Fixed, z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgSchematic} 
            alt="Command Network Grid" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            
            {commandControlData.map((item, index) => (
              <div 
                key={index} 
                className="w-screen flex-shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                
                {/* THE GLASSMORPHISM CARD */}
                <div 
                  className="w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)] flex flex-col md:flex-row"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                  }}
                >
                  
                  {/* HUD Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  {/* Left Split (Image) */}
                  <div className="w-full md:w-5/12 h-48 md:h-auto border-b md:border-b-0 md:border-r" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full bg-[#000]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  {/* Right Split (Content) - Uses the global bg-neutral-100 style */}
                  <div className="w-full md:w-7/12 p-6 lg:p-10 flex flex-col justify-between h-full overflow-hidden bg-neutral-100">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {item.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-1">
                        {item.title}
                      </h2>
                      
                      <p className="text-xs lg:text-sm text-slate-600 mb-6 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                      
                      <div className="my-5 border-t border-slate-200" />
                      
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-4 text-slate-500">
                        Key Technical Features
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {item.features.slice(0, 4).map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2 text-[11px] lg:text-[13px] text-slate-700 leading-tight">
                            <span className="mt-[2px] font-bold text-amber-600">›</span>
                            <span className="line-clamp-2">{feature}</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
