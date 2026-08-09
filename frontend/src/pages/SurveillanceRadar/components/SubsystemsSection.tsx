import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import radarImg1 from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import radarImg2 from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import radarImg3 from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'VSR',
      type: 'VSR TIER',
      title: 'Very Short Range',
      description: 'Optimized for localized perimeter loops and close-quarters security networks. Ideal for precise tactical layouts.',
      image: radarImg1,
      statusBadge: 'LOCALIZED PERIMETER',
      specs: [
        { label: 'Range', value: '1.5 km' },
        { label: 'Targets', value: '100 Concurrent', highlight: 'TRACKING' }
      ]
    },
    {
      id: 'SR',
      type: 'SR TIER',
      title: 'Short Range',
      description: 'Mid-tier baseline security setup for expansive commercial or military footprints with integrated C2 compatibility.',
      image: radarImg2,
      statusBadge: 'EXPANSIVE BASELINE',
      specs: [
        { label: 'Range', value: '11 km' },
        { label: 'Targets', value: '300 Concurrent', highlight: 'TRACKING' }
      ]
    },
    {
      id: 'MR',
      type: 'MR TIER',
      title: 'Medium Range',
      description: 'Advanced deep-field early warning grid designed specifically for critical national infrastructure and sovereign border defense.',
      image: radarImg3,
      statusBadge: 'EARLY WARNING GRID',
      specs: [
        { label: 'Range', value: '30 km', highlight: 'MAX' },
        { label: 'Targets', value: '700 Concurrent' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Modular<br/>Variants" subtitle="// CONFIGURABLE SYSTEM TIERS" tiers={tiers} />;
}