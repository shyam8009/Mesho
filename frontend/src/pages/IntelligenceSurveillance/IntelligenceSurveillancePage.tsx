import React, { useEffect } from 'react';
import IntelligenceSurveillanceHero from './components/IntelligenceSurveillanceHero';
import IntelligenceSurveillanceEcosystem from './components/IntelligenceSurveillanceEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export default function IntelligenceSurveillancePage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Intelligence & Surveillance Systems | Sovereign Dynamics";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Next-generation Intelligence and Surveillance systems. Featuring AI-powered OSINT platforms, tactical Signal Intelligence (SIGINT), and Comprehensive Security Assessments for multi-domain dominance.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <IntelligenceSurveillanceHero />
      <IntelligenceSurveillanceEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
