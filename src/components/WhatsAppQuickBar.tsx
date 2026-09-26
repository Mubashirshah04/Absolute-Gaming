import React, { useState } from 'react';
import { MessageSquare, X, ChevronUp, ArrowRight } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const WhatsAppQuickBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: 'Gaming PC Quote',
      desc: 'Inquire about custom desktop configurations',
      message: 'Assalam o Alaikum, I would like to get a quote for a custom gaming PC in Quetta.',
    },
    {
      title: 'Gaming Laptop Stock',
      desc: 'Check currently available new & used models',
      message: 'Assalam o Alaikum, please share the list of gaming laptops currently available at your shop.',
    },
    {
      title: 'Component / Upgrade Advice',
      desc: 'GPU, RAM, storage, or power supply upgrade',
      message: 'Assalam o Alaikum, I need advice on upgrading my computer components.',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {/* Expandable Menu */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] p-4 rounded-xl bg-[#0e111a] border border-white/15 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div>
              <div className="text-xs font-bold text-white">Absolute Gaming Quetta</div>
              <div className="text-[11px] text-slate-400 font-mono">Fatah Muhammad Road · WhatsApp Direct</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded focus:outline-none"
              aria-label="Close WhatsApp Quick Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
              Quick Inquiry Options:
            </span>
            {quickPrompts.map((item) => (
              <a
                key={item.title}
                href={createWhatsAppUrl(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-lg bg-[#141824] hover:bg-[#1a2030] border border-white/[0.06] hover:border-amber-400/30 transition-all flex items-center justify-between group block text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-amber-300">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.desc}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 ml-2" />
              </a>
            ))}
          </div>

          <div className="pt-1 text-center">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="text-[11px] text-slate-400 hover:text-amber-400 font-mono"
            >
              Or call: {STORE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-semibold text-xs shadow-lg shadow-black/50 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#08090c]"
        aria-label="Open WhatsApp Quick Inquiries"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">WhatsApp Absolute</span>
        <span className="sm:hidden">WhatsApp</span>
        {isOpen ? <X className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
