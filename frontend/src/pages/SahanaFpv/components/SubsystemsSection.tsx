import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import chassisImg from '../../../imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import propulsionImg from '../../../imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import opticsImg from '../../../imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-chassis',
      type: 'CHASSIS',
      title: 'Chassis & Stability',
      description: '10" Frame Size, high-velocity stability architecture engineered with military-grade components.',
      image: chassisImg,
      statusBadge: 'STABILITY ARCHITECTURE',
      specs: [
        { label: 'Frame', value: '10-inch' },
        { label: 'Components', value: 'MIL-GRADE', highlight: 'SECURE' }
      ]
    },
    {
      id: 'sub-drive',
      type: 'POWER & PROPULSION',
      title: 'High-Speed Drive',
      description: 'LiPo 8s 22,000 mAh battery, up to 400 kmph maximum speed for high-speed interception maneuvers.',
      image: propulsionImg,
      statusBadge: 'HIGH-VELOCITY',
      specs: [
        { label: 'Battery', value: 'LiPo 8s 22k mAh' },
        { label: 'Max Speed', value: '400 kmph', highlight: 'BOOST' }
      ]
    },
    {
      id: 'sub-comms',
      type: 'COMMUNICATIONS NODE',
      title: 'Tactical Communications',
      description: '1.2–3.5 GHz on-demand video transmission, Fiber Optics Pool integration option.',
      image: opticsImg,
      statusBadge: 'VIDEO TRANSMISSION',
      specs: [
        { label: 'Freq', value: '1.2-3.5 GHz' },
        { label: 'Optics', value: 'Fiber Integrated', highlight: 'LIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Architecture" subtitle="// Technical Specifications" tiers={tiers} />;
}
