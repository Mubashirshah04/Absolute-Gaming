import React, { useState } from 'react';
import { Cpu, Laptop, Mouse, RefreshCw, HelpCircle, MessageSquare, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_INFO, createWhatsAppUrl } from '../data/storeData';

export const SetupFinder: React.FC = () => {
  const [deviceType, setDeviceType] = useState<string>('Gaming PC');
  const [useCase, setUseCase] = useState<string>('Competitive Esports (Valorant, CS2, Warzone)');
  const [condition, setCondition] = useState<string>('Either New or Verified Pre-Owned');
  const [copied, setCopied] = useState<boolean>(false);

  const deviceOptions = [
    { label: 'Gaming PC', icon: Cpu, desc: 'Custom desktop tower assembly' },
    { label: 'Gaming Laptop', icon: Laptop, desc: 'High-refresh portable system' },
    { label: 'Accessories', icon: Mouse, desc: 'Monitors, keyboards, headsets & mice' },
    { label: 'Upgrade / Components', icon: RefreshCw, desc: 'GPU, RAM, SSD, or PSU refresh' },
    { label: 'Not Sure — Ask Us', icon: HelpCircle, desc: 'Personalized hardware consultation' },
  ];

  const useCaseOptions = [
    'Competitive Esports (Valorant, CS2, Warzone)',
    'Heavy AAA Graphics (Cyberpunk, GTA V, Black Myth)',
    'Content Creation, 3D Rendering & Streaming',
    'Everyday Productivity & Casual Gaming',
  ];

  const conditionOptions = [
    'Brand New Sealed Only',
    'Verified Tested Pre-Owned (Best Value)',
    'Either New or Verified Pre-Owned',
  ];

  const generatedMessage = `Assalam o Alaikum Absolute Gaming PC & Laptops,

I am looking for:
• Setup: ${deviceType}
• Primary Usage: ${useCase}
• Condition Preference: ${condition}

Could you please share your recommended configuration, current stock availability at your Fatah Muhammad Road shop, and pricing options? Thank you!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="finder" className="py-16 sm:py-24 bg-[#0a0c11] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Matcher</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Find Your Ideal Setup
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Select your hardware goals below. We will generate a tailored inquiry message and connect you directly with our Quetta store desk via WhatsApp for genuine recommendations.
          </p>
        </div>

        {/* Finder Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Side (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0d1017] p-6 sm:p-8 rounded-2xl border border-white/10">
            {/* Step 1: Device Type */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                1. What are you looking to acquire?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = deviceType === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setDeviceType(opt.label)}
                      className={`p-3.5 rounded-lg border text-left flex items-start gap-3 transition-all ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400/50 text-white shadow-sm'
                          : 'bg-[#121622] border-white/[0.06] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold">{opt.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Use Case */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                2. Target gameplay or primary workflow
              </label>
              <div className="space-y-2">
                {useCaseOptions.map((uc) => {
                  const isSelected = useCase === uc;
                  return (
                    <button
                      key={uc}
                      type="button"
                      onClick={() => setUseCase(uc)}
                      className={`w-full p-3 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
                          : 'bg-[#121622] border-white/[0.06] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{uc}</span>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                        isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-600'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Condition Preference */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                3. Condition preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {conditionOptions.map((cond) => {
                  const isSelected = condition === cond;
                  return (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => setCondition(cond)}
                      className={`p-3 rounded-lg border text-center text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
                          : 'bg-[#121622] border-white/[0.06] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {cond}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result / WhatsApp Conversion Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-gradient-to-b from-[#0f131d] to-[#0d1017] p-6 sm:p-8 rounded-2xl border border-white/10 sticky top-24">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Direct WhatsApp Inquiry Generator
              </span>
              <h3 className="font-['Syne'] text-xl font-bold text-white">
                Ready to Send to Store
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click below to launch WhatsApp with your pre-configured inquiry directed to our team on Fatah Muhammad Road, Quetta.
              </p>
            </div>

            {/* Message Preview Box */}
            <div className="relative p-4 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
              {generatedMessage}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={createWhatsAppUrl(generatedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-md shadow-amber-400/10"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Continue on WhatsApp (+92 348 2675388)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Message Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy Message Text</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 text-center text-[11px] font-mono text-slate-400">
              Direct consultation · No pressure · Fatah Muhammad Road, Quetta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
