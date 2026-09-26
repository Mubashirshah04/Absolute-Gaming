import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const LocationContact: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0a0c11] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
            Storefront & Inquiries
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Upgrade Your Setup?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you need a full competitive desktop rig, a verified pre-owned gaming laptop, or high-speed hardware upgrades, our Quetta store is ready to assist.
          </p>
        </div>

        {/* 2-Column Contact & Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location & Directions Card (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0d1017] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Physical Storefront
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">
                  Absolute Gaming PC & Laptops
                </h3>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-xl bg-[#121622] border border-white/[0.06] flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">Address</span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Fatah Muhammad Road, Quetta, Balochistan, Pakistan
                  </p>
                  <p className="text-xs text-slate-400">Postal Code: 87550</p>
                </div>
              </div>

              {/* Operating Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#121622] border border-white/[0.06] flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-slate-400">Availability</span>
                    <p className="text-xs font-semibold text-white">{STORE_INFO.hours}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#121622] border border-white/[0.06] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-slate-400">Guarantee</span>
                    <p className="text-xs font-semibold text-white">100% Genuine Silicon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact & Fast Action Module (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#101421] via-[#0d1018] to-[#0a0c12] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Direct Communication Channels
              </span>
              <h3 className="font-['Syne'] text-2xl font-bold text-white">
                Talk Directly With Hardware Specialists
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We provide fast, transparent responses regarding current laptop stock, PC build turnaround times, and component matching. Reach out via WhatsApp or direct phone call.
              </p>

              {/* Phone display */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Primary Mobile & WhatsApp</span>
                  <div className="font-mono text-base sm:text-lg font-bold text-white tracking-wide">
                    {STORE_INFO.phoneDisplay}
                  </div>
                </div>
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="px-3.5 py-2 text-xs font-semibold text-amber-400 hover:text-black hover:bg-amber-400 border border-amber-400/40 rounded-md transition-all"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <a
                href={createWhatsAppUrl('Assalam o Alaikum, I would like to inquire about purchasing a gaming PC or laptop from Absolute Gaming in Quetta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-lg shadow-amber-400/10"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Us (+92 348 2675388)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
