import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { STORE_INFO, CATEGORIES, createWhatsAppUrl } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="#" 
              className="font-['Syne'] text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors inline-block"
            >
              ABSOLUTE <span className="text-amber-400">GAMING</span>
            </a>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              Premier dealer of new and verified gaming laptops, custom-assembled desktop PCs, and high-performance components in Quetta, Balochistan.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Fatah Muhammad Road, Quetta, Pakistan</span>
            </div>
          </div>

          {/* Categories Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold block">
              Hardware Categories
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <a
                  key={cat.id}
                  href="#peripherals"
                  className="hover:text-amber-300 transition-colors py-0.5"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Direct Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold block">
              Direct Contact
            </span>
            <div className="space-y-2.5">
              <a
                href={createWhatsAppUrl('Assalam o Alaikum Absolute Gaming, I am contacting you through your website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1119] border border-white/[0.06] hover:border-amber-400/40 text-slate-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1119] border border-white/[0.06] hover:border-amber-400/40 text-slate-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: {STORE_INFO.phoneDisplay}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 pt-1 font-mono">
              In-person appointments & store walk-ins welcome on Fatah Muhammad Road.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} Absolute Gaming PC & Laptops. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Quetta Cantonment & City</span>
            <span>·</span>
            <span>Balochistan, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
