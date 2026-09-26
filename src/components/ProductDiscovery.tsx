import React, { useState } from 'react';
import { 
  Monitor, 
  Cpu, 
  Laptop, 
  Gamepad2, 
  HardDrive, 
  Headphones, 
  Mouse, 
  Keyboard, 
  Layers, 
  Cable,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { CATEGORIES, createWhatsAppUrl, CategoryInfo } from '../data/storeData';

export const ProductDiscovery: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('pcs');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'pcs': return <Cpu className="w-4 h-4" />;
      case 'laptops': return <Laptop className="w-4 h-4" />;
      case 'gpus': return <Gamepad2 className="w-4 h-4" />;
      case 'monitors': return <Monitor className="w-4 h-4" />;
      case 'keyboards': return <Keyboard className="w-4 h-4" />;
      case 'mice': return <Mouse className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      case 'components': return <Layers className="w-4 h-4" />;
      case 'storage': return <HardDrive className="w-4 h-4" />;
      case 'accessories': return <Cable className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  const activeCategory: CategoryInfo = CATEGORIES.find(c => c.id === activeCategoryId) || CATEGORIES[0];

  return (
    <section className="py-12 sm:py-16 bg-[#08090c] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
              Hardware Taxonomy & Inventory
            </span>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Explore by Hardware Category
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Tap any category to view available configurations or instantly message our Quetta store desk for current in-stock models.
          </p>
        </div>

        {/* Scrollable Horizontal Interactive Category Ribbon */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-amber-400/10 text-amber-300 border-amber-400/40 shadow-sm'
                      : 'bg-[#0f121a] text-slate-300 border-white/[0.08] hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Preview Panel */}
        <div className="mt-4 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d1017] to-[#121622] border border-white/10 transition-all duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-amber-400/10 text-amber-400 rounded-md border border-amber-400/20">
                  {getCategoryIcon(activeCategory.id)}
                </span>
                <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                  {activeCategory.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeCategory.shortDesc}
              </p>

              {/* Sub-types available */}
              <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-400">
                <span className="font-mono text-slate-500">Available Options:</span>
                {activeCategory.availableTypes.map((type, idx) => (
                  <React.Fragment key={type}>
                    <span className="text-slate-200 font-medium">{type}</span>
                    {idx < activeCategory.availableTypes.length - 1 && (
                      <span className="text-white/20" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <a
                href={createWhatsAppUrl(`Assalam o Alaikum, I would like to inquire about ${activeCategory.title} currently in stock at Absolute Gaming PC & Laptops Quetta.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors whitespace-nowrap shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Check Available {activeCategory.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-slate-500 text-center md:text-right font-mono">
                Prompt replies on WhatsApp during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
