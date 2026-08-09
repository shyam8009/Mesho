import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import ampImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import remoteImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import ruggedImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-rf',
      type: 'DISRUPTION MODULE',
      title: 'Targeted RF Disruption',
      description: '5 channel operation spanning 860-950 MHz up to 5725-5850 MHz, delivering 210 Watts of total RF power.',
      image: ampImg,
      statusBadge: 'POWER OUTPUT',
      specs: [
        { label: 'Channels', value: '5 Band' },
        { label: 'Total Power', value: '210W', highlight: 'ACTIVE' },
        { label: 'Freq', value: '860-5850 MHz' }
      ]
    },
    {
      id: 'sub-remote',
      type: 'COMMAND NODE',
      title: 'Wired Remote Control',
      description: 'Equipped with a flexible 3 mtr wired remote control featuring channel selection and direct on/off control.',
      image: remoteImg,
      statusBadge: 'TACTICAL COMMAND',
      specs: [
        { label: 'Control', value: 'Wired Remote' },
        { label: 'Length', value: '3 Meters' }
      ]
    },
    {
      id: 'sub-rugged',
      type: 'CHASSIS',
      title: 'Ruggedized Endurance',
      description: 'Air Cooled system capable of high altitude operations and up to 95% operational humidity, running on battery or integrated platform power.',
      image: ruggedImg,
      statusBadge: 'POWER & ENVIRONMENT',
      specs: [
        { label: 'Cooling', value: 'Air Cooled' },
        { label: 'Humidity', value: 'Up to 95%' },
        { label: 'Power', value: 'Dual Source', highlight: 'READY' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
