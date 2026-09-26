import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, Cpu, Laptop, Layers, Compass, MapPin } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Gaming PCs', href: '#gaming-pcs', icon: Cpu },
    { label: 'Laptops', href: '#laptops', icon: Laptop },
    { label: 'Hardware', href: '#peripherals', icon: Layers },
    { label: 'Setup Finder', href: '#finder', icon: Compass },
    { label: 'Store & Location', href: '#location', icon: MapPin },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090c]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark adhering to top-bar contract with responsive sizing */}
        <a 
          href="#" 
          className="flex items-center gap-2 group shrink-0 min-w-0"
          aria-label="Absolute Gaming PC & Laptops Home"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-amber-400 text-black font-['Syne'] font-extrabold text-xs sm:text-sm flex items-center justify-center tracking-tighter shrink-0 group-hover:bg-amber-300 transition-colors shadow-sm">
            AG
          </span>
          <span className="font-['Syne'] text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors truncate">
            ABSOLUTE <span className="text-amber-400">GAMING</span>
            <span className="hidden md:inline text-xs font-normal text-slate-400 ml-1.5 font-sans">PC & Laptops</span>
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct Phone Call Button (Tablet & Desktop) */}
          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-white/10 hover:border-white/20 rounded-md whitespace-nowrap"
            title="Call Absolute Gaming Quetta"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono tabular-nums">{STORE_INFO.phoneDisplay}</span>
          </a>

          {/* WhatsApp CTA (Responsive: compact icon on very small screens, full button on sm+) */}
          <a
            href={createWhatsAppUrl('Assalam o Alaikum, I am visiting your website and would like to inquire about gaming PCs and laptops in Quetta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-sm whitespace-nowrap"
            aria-label="Contact Absolute Gaming on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="hidden sm:inline">Us</span>
            <ArrowUpRight className="w-3 h-3 opacity-70 hidden sm:inline" />
          </a>

          {/* Mobile Menu Trigger Button (Guaranteed visible and accessible on mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] active:bg-white/[0.15] border border-white/15 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-16 sm:top-18 bottom-0 z-50 bg-[#08090c]/98 backdrop-blur-xl border-b border-white/10 flex flex-col justify-between overflow-y-auto px-4 py-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Links List */}
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-white/[0.08] mb-2 flex items-center justify-between">
              <span>Navigation</span>
              <span className="text-amber-400">Absolute Gaming Quetta</span>
            </div>

            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3.5 px-3.5 py-3.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/[0.04] active:bg-white/[0.08] rounded-lg transition-colors border border-transparent hover:border-white/10"
                >
                  <Icon className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Action Area & Location */}
          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href={createWhatsAppUrl('Assalam o Alaikum, I would like to inquire about gaming PCs and laptops in Quetta.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Store Desk (+92 348 2675388)</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-sm font-medium text-slate-200 border border-white/15 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {STORE_INFO.phoneDisplay}</span>
            </a>

            <div className="text-center text-xs text-slate-400 pt-2 font-mono flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Fatah Muhammad Road, Quetta, Balochistan</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
