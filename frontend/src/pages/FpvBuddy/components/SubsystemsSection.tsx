import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import buddy10Img from '../../../imports/fpv-buddy/magnific_a-photorealistic-extreme-_aQeoP75fSh.png';
import buddy13Img from '../../../imports/fpv-buddy/magnific_a-photorealistic-extreme-_brhCZs95Y2.png';
import buddy15Img from '../../../imports/fpv-buddy/magnific_prompt-a-photorealistic-e_TeRGqk0VNR.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'buddy-10',
      type: '10-INCH PLATFORM',
      title: 'BUDDY-10',
      description: 'High-Endurance Scout with a 10-inch frame. Powered by LiPo 6s 9000 mAh HV battery.',
      image: buddy10Img,
      statusBadge: 'SCOUT VARIANT',
      specs: [
        { label: 'Max Speed', value: '130 kmph' },
        { label: 'Payload', value: '3 kg', highlight: 'MAX' },
        { label: 'Range', value: '40 km' }
      ]
    },
    {
      id: 'buddy-13',
      type: '13-INCH PLATFORM',
      title: 'BUDDY-13',
      description: 'Tactical Medium-Lift drone with a 13-inch frame, offering variable range based on payload.',
      image: buddy13Img,
      statusBadge: 'MEDIUM-LIFT',
      specs: [
        { label: 'Cruise Speed', value: '60–80 kmph' },
        { label: 'Payload', value: '3-5 kg' },
        { label: 'Range', value: '20-30 km' }
      ]
    },
    {
      id: 'buddy-15',
      type: '15-INCH PLATFORM',
      title: 'BUDDY-15',
      description: 'Heavy-Lift Interceptor with a 15-inch frame, capable of high speeds and massive payload capacity.',
      image: buddy15Img,
      statusBadge: 'HEAVY-LIFT',
      specs: [
        { label: 'Max Speed', value: '180 kmph', highlight: 'BOOST' },
        { label: 'Payload', value: '12 kg' },
        { label: 'Range', value: '20 km' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Platform<br/>Variants" subtitle="// System Architecture" tiers={tiers} />;
}
