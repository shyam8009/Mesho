import React, { useEffect } from 'react';
import { QuantumHero } from './components/QuantumHero';
import { QuantumEcosystem } from './components/QuantumEcosystem';
import { SovereignStrip } from './components/SovereignStrip';
import { QuantumCTA } from './components/QuantumCTA';

export function QuantumSensingPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Quantum Sensing | Sovereign Dynamics";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Indigenous quantum sensing hardware built in India: RF detectors, quantum microwave devices, atomic sensors, quantum drones, and quantum clock sources engineered for aerospace and defence.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <QuantumHero />
      <QuantumEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
