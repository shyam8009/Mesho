import React from 'react';

export default function DynamicCTA({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="w-full bg-[#000000] py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Optional background media */}
      {data.resolvedBg && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {data.bgIsVideo ? (
            <video src={data.resolvedBg} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
          ) : (
            <img src={data.resolvedBg} alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
          {data.headline}
        </h2>
        
        <button className="group relative bg-[#84CC16] text-[#050505] px-10 py-5 rounded-sm font-bold text-sm tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300 overflow-hidden mb-6">
          <span className="relative z-10">{data.btnText}</span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
        
        {data.linkText && (
          <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
            {data.linkText}
          </a>
        )}
      </div>
    </section>
  );
}
