import React from 'react';
import { Laptop, MessageSquare, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const LaptopsShowcase: React.FC = () => {
  return (
    <section id="laptops" className="py-16 sm:py-24 bg-[#08090c] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
              Portable Compute & Silicon
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              High-Performance Gaming Laptops
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Dealer of both <strong className="text-slate-200 font-semibold">New Sealed</strong> and <strong className="text-slate-200 font-semibold">Verified Pre-Owned</strong> high-end gaming laptops, tested for battery health, thermals, and display purity.
          </p>
        </div>

        {/* Asymmetrical Hero Showcase for Laptops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Feature (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0e111a] via-[#111420] to-[#0a0c12] border border-white/10 overflow-hidden shadow-2xl">
            {/* Visual Container */}
            <div className="relative aspect-[16/10] bg-[#0c0e14] overflow-hidden">
              <img
                src="/src/assets/images/showcase_stealth_laptop_1790422338806.jpg"
                alt="High-end slim gaming laptop open on dark slate surface showing precision keyboard and vibrant display"
                className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent opacity-70" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-slate-200 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/15">
                <Laptop className="w-3.5 h-3.5 text-amber-400" />
                <span>Stealth Portables & ROG Series</span>
              </div>
            </div>

            {/* Editorial Content Below Image */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span>UNCOMPROMISED MOBILITY</span>
                  <span>·</span>
                  <span>HIGH TGP GRAPHICS</span>
                </div>
                <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
                  Desktop-Class Power on the Move
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We supply competitive esports machines, creator notebooks, and dual-purpose engineering laptops with high-refresh displays (144Hz–240Hz+), advanced multi-fan vapor chambers, and fast DDR4/DDR5 architectures.
                </p>
              </div>

              {/* Verified Criteria */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Comprehensive stress-testing & thermals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Battery health & diagnostic check</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Keyboard switches & backlight verification</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Display pixel check (zero burn-in / dead pixels)</span>
                </div>
              </div>

              {/* Inquiry CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={createWhatsAppUrl('Assalam o Alaikum, I would like to inquire about available gaming laptops in stock at Absolute Gaming Quetta.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Check Current Laptop Inventory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-slate-400 font-mono">
                  {STORE_INFO.warrantyNote}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Portable Monitors & Specialized Notebook Offerings (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Box 1: Portable Gaming Screens */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0d1017] border border-white/[0.08] flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    Dual-Display & Portability
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Type-C / DP / HDMI</span>
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  Ultra-Slim Portable Gaming Screens
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Expand your laptop setup with portable external 1080p/2K IPS screens. Featuring USB Type-C single-cable power and video, ultra-slim bezels, and plug-and-play compatibility for mobile professionals and competitive tournament travel.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">ASUS ZenScreen & IPS Portables</span>
                <a
                  href={createWhatsAppUrl('Assalam o Alaikum, I am interested in portable screens and monitors available at Absolute Gaming Quetta.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Box 2: Pre-Owned Verification Process */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#10141f] to-[#0a0d14] border border-white/[0.08] flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                    Pre-Owned Verification Process
                  </span>
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  Buy with Confidence in Quetta
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every used laptop is personally evaluated by hardware technicians. We verify motherboards, cooling pads, hinges, power supplies, and thermal pastes before offering it for sale.
                </p>
              </div>

              <div className="p-3.5 bg-black/40 rounded-lg border border-white/[0.06] text-xs text-slate-300 flex items-center justify-between">
                <span className="text-slate-400">In-person testing at Fatah Muhammad Road</span>
                <span className="text-amber-400 font-mono font-medium">100% Genuine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
