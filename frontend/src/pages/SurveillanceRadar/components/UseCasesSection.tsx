import React from 'react';
import { Target, Server, Map } from 'lucide-react';

const USE_CASES = [
  {
    icon: Server,
    category: 'SYSTEM INTEGRATION',
    title: 'C2 & Electro-Optical Pairing',
    description: 'Designed for seamless pairing with electro-optical video systems to facilitate visual identification and real-time assessments. Integrates flawlessly into existing C2 infrastructures via standardized APIs.'
  },
  {
    icon: Target,
    category: 'DEPLOYMENT PLATFORMS',
    title: 'Mobile & Stationary Mounts',
    description: 'Fully compatible with stationary security masts, permanent tower arrays, and mobile surveillance vehicle configurations for rapid deployment in tactical environments.'
  },
  {
    icon: Map,
    category: 'MISSION PROFILES',
    title: 'Border & Asset Defense',
    description: 'Optimized for national border security enhancement, critical infrastructure facility protection, maritime coastal line defense monitoring, and wildlife conservation tracking.'
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
            INTEGRATION & <br /> OPERATIONAL PROFILES
          </h2>
          <p className="text-white/60 text-lg">
            Built to adapt to any deployment scenario, from permanent installations to rapid-response mobile units.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={idx} 
                className="group relative p-8 bg-[#050505] border border-white/10 rounded-xl hover:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden flex flex-col"
              >
                {/* Hover gradient effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#84CC16]/5 rounded-bl-full group-hover:scale-[2] transition-transform duration-700 ease-out" />
                
                <div className="relative z-10 flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#84CC16]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#84CC16]" />
                  </div>
                  
                  <div className="text-[#84CC16] font-mono text-xs uppercase tracking-widest mb-3">
                    // {useCase.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}