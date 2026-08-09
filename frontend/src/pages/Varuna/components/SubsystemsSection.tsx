import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import opticsImg from '../../../imports/varuna/magnific_a-photorealistic-extreme-_MXAQm3cDCm.png';
import propulsionImg from '../../../imports/varuna/magnific_a-photorealistic-extreme-_brvPlpY5Y2.png';
import architectureImg from '../../../imports/varuna/magnific_a-photorealistic-highend-_jSFRJXFLD0.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-optics',
      type: 'SENSORY NODE',
      title: 'Low-Light Imaging',
      description: '1080p low-light sensor capability, low-latency video feed for real-time surface monitoring.',
      image: opticsImg,
      statusBadge: 'SUB-SURFACE OPTICS',
      specs: [
        { label: 'Sensor', value: '1080p' },
        { label: 'Latency', value: 'Low' },
        { label: 'Monitoring', value: 'Real-time', highlight: 'LIVE' }
      ]
    },
    {
      id: 'propulsion',
      type: 'POWER & PROPULSION',
      title: '5-Motor Configuration',
      description: 'Multi-directional control, built-in depth hold algorithms, 2 m/s top speed.',
      image: propulsionImg,
      statusBadge: 'PRECISION PROPULSION',
      specs: [
        { label: 'Motors', value: '5 Config' },
        { label: 'Top Speed', value: '2 m/s', highlight: 'MAX' },
        { label: 'Control', value: 'Multi-directional' }
      ]
    },
    {
      id: 'chassis',
      type: 'CHASSIS',
      title: 'Hydrodynamic Architecture',
      description: 'Compact hydrodynamic shell, 1 hour battery life at moderate speed.',
      image: architectureImg,
      statusBadge: 'ENDURANCE & CHASSIS',
      specs: [
        { label: 'Shell', value: 'Hydrodynamic' },
        { label: 'Endurance', value: '1 Hour' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
