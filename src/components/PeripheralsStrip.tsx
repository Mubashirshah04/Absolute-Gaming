import React from 'react';
import { Keyboard, Mouse, Headphones, Monitor, HardDrive, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERIPHERAL_HIGHLIGHTS, createWhatsAppUrl } from '../data/storeData';

export const PeripheralsStrip: React.FC = () => {
  return (
    <section id="peripherals" className="py-16 sm:py-24 bg-[#08090c] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
              Tactile & Sensory Precision
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Gaming Peripherals & Gear
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Complete your setup with responsive mechanical keys, flawless optical sensors, high-refresh panels, and immersive acoustics.
          </p>
        </div>

        {/* Featured Flatlay Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0e111a] relative group">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden min-h-[200px]">
            <img
              src="/images/showcase_peripherals_gear.jpg"
              alt="High-end mechanical gaming keyboard, wireless mouse, and studio headset arranged on clean dark desk surface"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-md space-y-2 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Studio Gear Strip
              </span>
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                Input Latency Matters.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Low-debounce switches, 1000Hz+ polling rates, and zero sensor smoothing give you the split-second edge in competitive lobbies.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERIPHERAL_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                    {item.subtitle}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Inquire for models</span>
                </div>
                <h4 className="font-['Syne'] text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={createWhatsAppUrl(`Assalam o Alaikum, I would like to inquire about available ${item.title} at Absolute Gaming Quetta.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Check Availability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
