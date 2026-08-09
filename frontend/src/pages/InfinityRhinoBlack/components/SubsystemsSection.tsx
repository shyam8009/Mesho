import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import arraysImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import chassisImg from '../../../imports/infinity-spear/magnific_professional-highend-prod_WMNuxIscXe.jpeg';
import powerImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-signal',
      type: 'RF MODULE',
      title: 'Omni-Directional Arrays',
      description: 'Dual high-gain antennas delivering a 2 km neutralization radius across 40+ frequency channels.',
      image: arraysImg,
      statusBadge: 'SIGNAL ARCHITECTURE',
      specs: [
        { label: 'Radius', value: '2 km' },
        { label: 'Channels', value: '40+', highlight: 'ACTIVE' }
      ]
    },
    {
      id: 'sub-tactical',
      type: 'CHASSIS',
      title: 'Lightweight Form Factor',
      description: 'Portable manpack form factor featuring a rugged chassis that weighs only 10 kg, making it easily transportable by a single dismounted soldier.',
      image: chassisImg,
      statusBadge: 'TACTICAL CHASSIS',
      specs: [
        { label: 'Form Factor', value: 'Manpack' },
        { label: 'Weight', value: '10 kg' }
      ]
    },
    {
      id: 'sub-precision',
      type: 'POWER NODE',
      title: 'Precision Jamming',
      description: 'Extended battery life for long-duration operations, coupled with precise jamming profiles to protect friendly frequencies.',
      image: powerImg,
      statusBadge: 'POWER & PRECISION',
      specs: [
        { label: 'Battery', value: 'Extended' },
        { label: 'Profiles', value: 'Precise', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
