import React, { useEffect } from 'react';
import CommandControlHero from './components/CommandControlHero';
import CommandControlEcosystem from './components/CommandControlEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { IntelligenceSurveillanceCTA } from '../IntelligenceSurveillance/components/IntelligenceSurveillanceCTA';

export default function CommandControlPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Command & Control Systems | Sovereign Dynamics";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Sovereign Command and Control (C2) systems built for multi-domain dominance. Integrating FUSION Core AI C2 for 1000+ threat tracking and tactical Interception Systems for real-time signal exploitation.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <CommandControlHero />
      <CommandControlEcosystem />
      <SovereignStrip />
      <IntelligenceSurveillanceCTA />
    </main>
  );
}
