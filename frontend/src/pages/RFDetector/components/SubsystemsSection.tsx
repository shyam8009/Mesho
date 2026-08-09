import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import antennasImg from '../../../imports/rf-detector-d360/magnific_professional-outdoor-prod_cD6FVO40eP.png';
import processingImg from '../../../imports/rf-detector-d360/magnific_professional-highend-prod_KjvR16Ckqp.png';
import mastImg from '../../../imports/infinity-rhino/magnific_professional-highspeed-ac_1sfdHynr4r.jpeg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-antennas',
      type: 'RF MODULE',
      title: 'Wideband Antennas',
      description: 'Omni-directional high-gain arrays for maximum spectrum capture.',
      image: antennasImg,
      statusBadge: 'RF INTERCEPT',
      specs: [
        { label: 'Gain', value: 'High' },
        { label: 'Spectrum', value: 'Maximum', highlight: 'LIVE' },
        { label: 'Type', value: 'Omni-directional' }
      ]
    },
    {
      id: 'sub-processing',
      type: 'PROCESSING NODE',
      title: 'Signal Processing Unit',
      description: 'Military-grade compute core capable of real-time protocol decryption.',
      image: processingImg,
      statusBadge: 'AI EDGE COMPUTE',
      specs: [
        { label: 'Decryption', value: 'Real-time' },
        { label: 'Grade', value: 'MIL-SPEC' }
      ]
    },
    {
      id: 'sub-mast',
      type: 'DEPLOYMENT NODE',
      title: 'Rapid Deployment Mast',
      description: 'Carbon-fiber telescoping mast deployable by a single operator in under 5 minutes.',
      image: mastImg,
      statusBadge: 'TACTICAL MOBILITY',
      specs: [
        { label: 'Material', value: 'Carbon-fiber' },
        { label: 'Deploy Time', value: '< 5 Mins', highlight: 'RAPID' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
