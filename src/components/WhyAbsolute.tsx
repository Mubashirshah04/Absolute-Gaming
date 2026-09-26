import React from 'react';
import { Gamepad2, ShieldCheck, MapPin, MessageSquare, Check, Phone } from 'lucide-react';
import { TRUST_PILLARS, STORE_INFO } from '../data/storeData';

export const WhyAbsolute: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Gamepad2 className="w-5 h-5 text-amber-400" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 2: return <MapPin className="w-5 h-5 text-amber-400" />;
      case 3: return <MessageSquare className="w-5 h-5 text-amber-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#08090c] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
            The Hardware Standard
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Gamers in Quetta Choose Absolute
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We operate on transparency and genuine hardware integrity. No bloated marketing claims or generic computer sales—just solid silicon, proper thermal builds, and direct local support.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-xl bg-[#0d1017] border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-white/[0.03] border border-white/10">
                  {getIcon(idx)}
                </div>
                <h3 className="font-['Syne'] text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified in Quetta</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Verification Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#0d1017] via-[#131724] to-[#0d1017] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-['Syne'] text-base sm:text-lg font-bold text-white">
              Visit Us in Person on Fatah Muhammad Road
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Test any laptop or PC before purchasing. Check thermals, benchmark performance, and inspect exterior condition first-hand.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-md transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
