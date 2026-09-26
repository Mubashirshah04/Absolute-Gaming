import React, { useState } from 'react';
import { Check, MessageSquare, ArrowRight, Layers, Sliders, Shield } from 'lucide-react';
import { DESKTOP_SYSTEMS, createWhatsAppUrl, ProductItem } from '../data/storeData';

export const FeaturedSystems: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<ProductItem>(DESKTOP_SYSTEMS[0]);

  return (
    <section id="gaming-pcs" className="py-16 sm:py-24 bg-[#0a0c11] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
            Desktop Architecture
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Featured Gaming Desktop Systems
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Custom desktop assemblies built with thermal discipline and component harmony. Rather than fixed rigid specs, each tier represents an engineered performance profile tailored to your gaming ambition.
          </p>
        </div>

        {/* 3 Tier Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {DESKTOP_SYSTEMS.map((system) => {
            const isSelected = selectedSystem.id === system.id;
            return (
              <div
                key={system.id}
                onClick={() => setSelectedSystem(system)}
                className={`group flex flex-col justify-between rounded-xl overflow-hidden bg-[#0d1017] border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'border-amber-400/50 shadow-xl shadow-amber-400/5' 
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Image slot with zero-broken-image fallback & clean styling */}
                <div className="relative aspect-[16/10] bg-[#12151e] overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed condition badge in top right */}
                  <div className="absolute top-3 right-3 text-[11px] font-mono tracking-wide text-slate-200 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {system.condition}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-amber-400 font-medium tracking-wide">
                      {system.category}
                    </div>
                    <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {system.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {system.tagline}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="pt-3 border-t border-white/[0.06] space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Architecture Focus:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {system.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ideal For Target Note */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-slate-400">Target Playstyle:</span>
                    <p className="text-xs text-slate-300 font-medium">
                      {system.idealFor}
                    </p>
                  </div>

                  {/* WhatsApp Action Button */}
                  <div className="pt-2">
                    <a
                      href={createWhatsAppUrl(system.inquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Ask For Current Configuration</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Disclaimer on Custom Configs */}
        <div className="mt-8 p-4 rounded-lg bg-[#0e1119] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              All custom builds are hand-assembled and stress-tested before dispatch or store pick-up on Fatah Muhammad Road.
            </span>
          </div>
          <span className="font-mono text-slate-400 shrink-0">
            Available as New Sealed or Inspected Pre-Owned
          </span>
        </div>
      </div>
    </section>
  );
};
