import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import img1 from '../../../imports/osint/search_config.jpg';
import img2 from '../../../imports/osint/facial_rec.jpg';
import img3 from '../../../imports/osint/c2_integration.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-mining',
      type: 'DATA MODULE',
      title: 'Deep-Level Data Mining',
      description: '1000+ advanced search configuration filters enabling operators to filter by specific dates, languages, and localized scripts.',
      image: img1,
      statusBadge: 'SOFTWARE CAPABILITY',
      specs: [
        { label: 'Filters', value: '1000+' },
        { label: 'Scripts', value: 'Localized' },
        { label: 'Search', value: 'Advanced', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sub-bio',
      type: 'AI PIPELINE',
      title: 'Machine Learning Biometrics',
      description: 'Embedded facial recognition pipeline optimized to detect, isolate, and match target identities within streamed visual media.',
      image: img2,
      statusBadge: 'BIOMETRICS PIPELINE',
      specs: [
        { label: 'Pipeline', value: 'Facial Rec' },
        { label: 'Identities', value: 'Match Target' }
      ]
    },
    {
      id: 'sub-c2',
      type: 'COMMAND LINK',
      title: 'Slew-to-Cue Command (C2)',
      description: 'Natively compatible with FUSION Core AI Command and Control platforms, linking physical detections with digital open-source footprints.',
      image: img3,
      statusBadge: 'SYSTEM INTEGRATION',
      specs: [
        { label: 'Platform', value: 'FUSION Core' },
        { label: 'Link', value: 'Physical-to-Digital', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Specifications" subtitle="// SOFTWARE CAPABILITIES" tiers={tiers} />;
}
