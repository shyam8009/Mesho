import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import ampImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import thermalImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import mountsImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-amp',
      type: 'POWER MODULE',
      title: 'High-Yield Amplifiers',
      description: 'Industrial-grade RF amplifiers capable of sustained, high-power frequency broadcasting without signal degradation.',
      image: ampImg,
      statusBadge: 'POWER OUTPUT',
      specs: [
        { label: 'Type', value: 'Industrial RF' },
        { label: 'Broadcasting', value: 'High-Power' },
        { label: 'Degradation', value: 'Zero', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sub-thermal',
      type: 'THERMAL NODE',
      title: 'Thermal Dissipation Core',
      description: 'Advanced active and passive heat sinks ensuring optimal performance under extreme operational thermal loads.',
      image: thermalImg,
      statusBadge: 'COOLING SYSTEM',
      specs: [
        { label: 'Cooling', value: 'Active/Passive' },
        { label: 'Thermal Load', value: 'Extreme Rating' }
      ]
    },
    {
      id: 'sub-mounts',
      type: 'CHASSIS',
      title: 'Reinforced Mounts',
      description: 'Military-spec bracketing and shock absorption designed for rapid deployment on rugged tactical vehicles.',
      image: mountsImg,
      statusBadge: 'INTEGRATION READY',
      specs: [
        { label: 'Spec', value: 'MIL-SPEC' },
        { label: 'Deployment', value: 'Rapid', highlight: 'TACTICAL' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
