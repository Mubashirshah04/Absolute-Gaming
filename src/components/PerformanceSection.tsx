import React from 'react';
import { Flame, Wind, ShieldAlert, Cpu, Activity, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../data/storeData';

export const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-16 sm:py-24 bg-[#0a0c11] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Macro Engineering Image (6 Cols) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e111a] shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/showcase_cooling_power.jpg"
                  alt="High performance PC cooling hardware, dark heat pipes, finned radiator, precision fan blades"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c11] via-transparent to-transparent opacity-60" />
              </div>

              {/* Technical Caption Box */}
              <div className="p-5 sm:p-6 bg-[#0c0f16] border-t border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-amber-400 font-semibold uppercase">Thermal & Power Discipline</span>
                  <span>Engineered in Quetta</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Proper thermal paste application, positive-pressure airflow filtration, and true continuous-rated power supply rails keep your silicon cool during peak summer heat in Balochistan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hardware Copy & Architectural Principles (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
                Engineering Architecture
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Performance That You Can Feel.
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              True gaming performance is not just a high-tier GPU on paper. It is how steadily the system holds boost clocks, how quietly the fans spin under sustained load, and whether your power supply handles erratic grid fluctuations without sudden shutdowns.
            </p>

            {/* Core Engineering Disciplines */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0e1119] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 bg-amber-400/10 text-amber-400 rounded-md shrink-0 mt-0.5">
                  <Wind className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Controlled Airflow & Heat Dissipation</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    We calculate intake-to-exhaust fan ratios to prevent dust buildup and eliminate hot pockets around VRMs and high-speed NVMe storage.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1119] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 bg-amber-400/10 text-amber-400 rounded-md shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Power Supply Integrity & Local Grid Safety</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    We insist on tier-rated power supplies with Over-Voltage (OVP) and Under-Voltage (UVP) protection, shielding expensive GPUs against voltage spikes.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1119] border border-white/[0.06] flex items-start gap-3.5">
                <div className="p-2 bg-amber-400/10 text-amber-400 rounded-md shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Zero Component Bottlenecks</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Proper dual-channel memory speeds and PCIe lane matching ensure your graphics card operates at its full potential without processor choking.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Assalam o Alaikum, I would like advice on building a thermally balanced gaming PC for Quetta weather.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Consult On Custom Cooling & Rig Setup</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
