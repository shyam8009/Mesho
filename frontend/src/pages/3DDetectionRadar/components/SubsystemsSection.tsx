import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import img1 from '../../../imports/3d-drone-detector/transceiver_array.png';
import img2 from '../../../imports/3d-drone-detector/directional_finding.png';
import img3 from '../../../imports/3d-drone-detector/reliable_performance.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'tier1',
      type: 'RF MODULE',
      title: 'FMCW Transceiver',
      description: 'Operates on the X-band using Frequency-Modulated Continuous-Wave (FMCW) technology, reaching detection ranges up to 15 km.',
      image: img1,
      statusBadge: 'TRANSMISSION ACTIVE',
      specs: [
        { label: 'Technology', value: 'FMCW' },
        { label: 'Band', value: 'X-Band', highlight: 'LIVE' },
        { label: 'Range', value: '15 km' }
      ]
    },
    {
      id: 'tier2',
      type: 'COVERAGE NODE',
      title: 'Omni-Directional Sweep',
      description: 'Provides a complete horizontal perimeter sweep with 360-degree Azimuth coverage and 60-degree Elevation coverage.',
      image: img2,
      statusBadge: 'SWEEP ACTIVE',
      specs: [
        { label: 'Azimuth', value: '360°' },
        { label: 'Elevation', value: '60°' }
      ]
    },
    {
      id: 'tier3',
      type: 'CHASSIS',
      title: 'Compact & Ruggedized',
      description: 'Space-saving cylindrical construction footprint measuring 500 mm x 600 mm, featuring high durability against severe moisture and dust.',
      image: img3,
      statusBadge: 'IP67 RATED',
      specs: [
        { label: 'Dimensions', value: '500x600 mm' },
        { label: 'Durability', value: 'IP67', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Architecture" subtitle="// Technical Architecture" tiers={tiers} />;
}
