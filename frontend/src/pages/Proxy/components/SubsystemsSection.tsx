import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import groundStationImg from '../../../imports/proxy/reference-img1.jpeg';
import aerialRepeaterImg from '../../../imports/arsenal_facility.jpg';
import connectivityImg from '../../../imports/digital_twin.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-ground',
      type: 'GROUND NODE',
      title: 'Directional Ground Array',
      description: '4–6 m mast height, equipped with dual directional antennas (4-element and 10-element), powered by 15–25 V.',
      image: groundStationImg,
      statusBadge: 'GROUND STATION',
      specs: [
        { label: 'Mast Height', value: '4-6 m' },
        { label: 'Antennas', value: 'Dual Directional', highlight: 'ACTIVE' },
        { label: 'Power', value: '15-25 V' }
      ]
    },
    {
      id: 'sub-aerial',
      type: 'AERIAL NODE',
      title: 'Low-Drag Aerial Relay',
      description: 'Ultra-lightweight 300 g module minimizing payload drag on deployed FPVs, requiring 12 V power.',
      image: aerialRepeaterImg,
      statusBadge: 'AERIAL REPEATER',
      specs: [
        { label: 'Weight', value: '300 g' },
        { label: 'Power', value: '12 V' }
      ]
    },
    {
      id: 'sub-command',
      type: 'NETWORK NODE',
      title: 'Operational Flexibility',
      description: 'Dual wireless and wired flexibility, allowing ground stations to operate securely up to 120 meters away from the operator.',
      image: connectivityImg,
      statusBadge: 'COMMAND CONNECTIVITY',
      specs: [
        { label: 'Flexibility', value: 'Wired/Wireless' },
        { label: 'Stand-off', value: '120 meters', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}
