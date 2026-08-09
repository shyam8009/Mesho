import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgAmp from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import imgThermal from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import imgMounts from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'tier1',
      type: 'HARDWARE NODE',
      title: 'AESA ANTENNA ARRAY',
      description: 'Instantaneous beam steering eliminates mechanical latency. Configured for unblinking hemispherical 3D coverage and graceful degradation.',
      image: imgAmp,
      statusBadge: 'TRANSMITTER ACTIVE',
      specs: [
        { label: 'Frequency Band', value: 'X-Band', highlight: 'LIVE' },
        { label: 'Coverage', value: '360° / 90°' }
      ]
    },
    {
      id: 'tier2',
      type: 'PROCESSING NODE',
      title: 'AI THREAT CLASSIFIER',
      description: 'Embedded edge-computing modules process radar returns in real-time, distinguishing between biological targets, fixed-wing, and rotary drones.',
      image: imgThermal,
      statusBadge: 'NEURAL NET ONLINE',
      specs: [
        { label: 'False Alarm Rate', value: '< 0.1%' },
        { label: 'Model Updates', value: 'SECURE OTA' }
      ]
    },
    {
      id: 'tier3',
      type: 'OUTPUT NODE',
      title: 'C2 INTEGRATION',
      description: 'Natively outputs standardized tracks for seamless ingestion into existing C2 nodes. Engineered as the primary sensor in multi-layered defense architectures.',
      image: imgMounts,
      statusBadge: 'ASTERIX LINK ESTABLISHED',
      specs: [
        { label: 'Protocol', value: 'ASTERIX / API-FIRST', highlight: 'true' },
        { label: 'Latency', value: 'NEAR-ZERO MS' },
        { label: 'Architecture', value: 'MULTI-LAYER DEFENSE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Blueprint" subtitle="// Technical Architecture" tiers={tiers} />;
}