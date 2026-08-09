import React, { useEffect } from 'react';
import CommunicationMonitoringHero from './components/CommunicationMonitoringHero';
import CommunicationMonitoringEcosystem from './components/CommunicationMonitoringEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { IntelligenceSurveillanceCTA } from '../IntelligenceSurveillance/components/IntelligenceSurveillanceCTA';

export default function CommunicationMonitoringPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Intelligence & Surveillance: Communication Monitoring";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Advanced Communication Monitoring systems for the defense sector. Featuring wideband Radio Monitoring, Location Portfolios, and high-precision Direction Finders for total electromagnetic spectrum dominance.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen font-['Inter',sans-serif]">
      <CommunicationMonitoringHero />
      <CommunicationMonitoringEcosystem />
      <SovereignStrip />
      <IntelligenceSurveillanceCTA />
    </div>
  );
}
