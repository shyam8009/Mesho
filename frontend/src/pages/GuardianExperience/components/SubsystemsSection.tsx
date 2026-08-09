import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import biometricsImg from '../../../imports/guardian/magnific_professional-studio-produ_vuXervea47.jpeg';
import commsImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import durabilityImg from '../../../imports/guardian/magnific_photorealistic-outdoor-fi_YV36av5WeC.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-bio',
      type: 'SENSORY NODE',
      title: 'Advanced Biometrics',
      description: 'Continuous heart rate, temperature, and stress level monitoring for optimal tactical readiness.',
      image: biometricsImg,
      statusBadge: 'PHYSIOLOGICAL TRACKING',
      specs: [
        { label: 'Tracking', value: 'Heart Rate' },
        { label: 'Stress', value: 'Real-time', highlight: 'LIVE' },
        { label: 'Core Temp', value: 'Active' }
      ]
    },
    {
      id: 'sub-comms',
      type: 'NETWORK NODE',
      title: 'Secure Communications',
      description: 'AES-256 encryption ensuring all biometric and positional data reaches command securely.',
      image: commsImg,
      statusBadge: 'ENCRYPTED NETWORK',
      specs: [
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Data', value: 'Positional', highlight: 'SECURE' }
      ]
    },
    {
      id: 'sub-rugged',
      type: 'CHASSIS',
      title: 'Rugged Durability',
      description: 'IP68 rated, impact-resistant chassis designed to withstand extreme combat environments.',
      image: durabilityImg,
      statusBadge: 'FIELD-READY DESIGN',
      specs: [
        { label: 'Durability', value: 'IP68 Rated' },
        { label: 'Impact', value: 'Resistant' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
