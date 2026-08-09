import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ClosingSection } from './components/ClosingSection';

export function ThreeDDetectionRadarPage() {
  return (
    <div className="w-full bg-[#000000] text-white selection:bg-[#84CC16] selection:text-black font-sans overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <ValuePropositionSection />
      <SubsystemsSection />
      <UseCasesSection />
      <ClosingSection />
    </div>
  );
}
