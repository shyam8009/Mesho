import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import signalImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import powerImg from '../../../imports/rhino-z23/Asset 1.png';
import remoteImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-signal',
      type: 'RF MODULE',
      title: 'Operational Disruption',
      description: 'Delivers an operational disruption range of up to 5 km, featuring selectable omni-directional or directional signal broadcast.',
      image: signalImg,
      statusBadge: 'SIGNAL & RANGE',
      specs: [
        { label: 'Range', value: '5 km' },
        { label: 'Broadcast', value: 'Selectable', highlight: 'LIVE' },
        { label: 'Mode', value: 'Omni/Directional' }
      ]
    },
    {
      id: 'sub-power',
      type: 'POWER NODE',
      title: 'Multi-Frequency Output',
      description: 'Generates 160 W of RF power output operating across a multi-frequency 5-channel spectrum.',
      image: powerImg,
      statusBadge: 'POWER & FREQUENCIES',
      specs: [
        { label: 'Power', value: '160 W' },
        { label: 'Channels', value: '5-Channel Spectrum' }
      ]
    },
    {
      id: 'sub-control',
      type: 'COMMAND NODE',
      title: 'Standoff Operations',
      description: 'Supported by a wired remote operation system for channel management, ensuring operator safety during active deployment.',
      image: remoteImg,
      statusBadge: 'DEPLOYMENT & CONTROL',
      specs: [
        { label: 'Control', value: 'Wired Remote' },
        { label: 'Safety', value: 'Operator Standoff', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
