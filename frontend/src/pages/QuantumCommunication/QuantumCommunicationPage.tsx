import React, { useEffect } from 'react';
import QuantumCommunicationHero from './components/QuantumCommunicationHero';
import QuantumCommunicationEcosystem from './components/QuantumCommunicationEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export default function QuantumCommunicationPage() {
  useEffect(() => {
    document.title = "Quantum Communication | Sahana Defence";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Quantum-secured communication built for India's defence sector: quantum key distribution, quantum internet architecture, hardware-based post-quantum cryptography, and quantum control systems.");
    }
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <QuantumCommunicationHero />
      <QuantumCommunicationEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
