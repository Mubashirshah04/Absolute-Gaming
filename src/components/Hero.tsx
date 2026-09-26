import React, { useState } from 'react';
import { ArrowDown, MessageSquare, Compass, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Subtle tilt calculation for image depth (bounded between -10 and 10px)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#08090c] via-[#0b0d13] to-[#08090c] pt-10 pb-20 sm:pt-14 sm:pb-28 border-b border-white/[0.06]"
    >
      {/* Background Architectural Mesh Lines - Ultra subtle */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
        aria-hidden="true"
      />

      {/* Ambient Focal Glow - High-restraint warm tone behind image */}
      <div 
        className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed Metadata Header Bar */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 font-mono tracking-wide pb-6 border-b border-white/[0.06] mb-8">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Fatah Muhammad Road, Quetta
          </span>
          <span className="text-white/20" aria-hidden="true">·</span>
          <span>Balochistan, Pakistan</span>
          <span className="text-white/20" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
            New & Verified Gaming Hardware
          </span>
          <span className="text-white/20 hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline text-slate-400">Direct WhatsApp Consultations</span>
        </div>

        {/* 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Typography & Conversion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block">
                Absolute Gaming PC & Laptops · Quetta
              </span>
              <h1 className="font-['Syne'] text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
                Built for High Performance. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                  Ready for the Next Level.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
              Quetta’s premier destination for custom desktop gaming builds, high-refresh laptops, and genuine hardware components. Every system is selected and verified for thermal stability, reliability, and sheer graphical dominance.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={createWhatsAppUrl('Assalam o Alaikum Absolute Gaming, I want to inquire about your current gaming PC and laptop setups in Quetta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href="#gaming-pcs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-md transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Explore Setups</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </a>
            </div>

            {/* Technical Proof Adjacency */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div>
                <span className="block font-['Syne'] text-xl sm:text-2xl font-bold text-white tracking-tight">100%</span>
                <span className="text-xs text-slate-400 leading-snug block mt-0.5">Genuine Silicon Guarantee</span>
              </div>
              <div>
                <span className="block font-['Syne'] text-xl sm:text-2xl font-bold text-white tracking-tight">Custom</span>
                <span className="text-xs text-slate-400 leading-snug block mt-0.5">Rigs & Laptops in Stock</span>
              </div>
              <div>
                <span className="block font-['Syne'] text-xl sm:text-2xl font-bold text-white tracking-tight">Quetta</span>
                <span className="text-xs text-slate-400 leading-snug block mt-0.5">Direct Store Pick-up</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Product Visual with Interactive Parallax */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0e1118] shadow-2xl transition-transform duration-300 ease-out">
              {/* Subtle inner framing badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Bespoke Assemblies & Portable Silicon</span>
              </div>

              {/* Product Visual */}
              <div 
                className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden"
                style={{
                  transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                  transition: 'transform 0.15s ease-out'
                }}
              >
                <img
                  src="/images/hero_gaming_hardware.jpg"
                  alt="High-performance custom gaming desktop PC and slim gaming laptop in commercial studio lighting"
                  className="w-full h-full object-cover object-center scale-[1.04] select-none pointer-events-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized container if image load errors
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom Card Strip */}
              <div className="p-4 sm:p-5 bg-[#0d1017] border-t border-white/[0.08] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-white">Absolute Gaming PC & Laptops</p>
                  <p className="text-slate-400 font-mono mt-0.5">Fatah Muhammad Road · Call: {STORE_INFO.phoneDisplay}</p>
                </div>
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-white bg-amber-400/10 hover:bg-amber-400/20 rounded border border-amber-400/30 transition-colors"
                >
                  Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
