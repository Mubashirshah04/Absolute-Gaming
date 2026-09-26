/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductDiscovery } from './components/ProductDiscovery';
import { FeaturedSystems } from './components/FeaturedSystems';
import { LaptopsShowcase } from './components/LaptopsShowcase';
import { PerformanceSection } from './components/PerformanceSection';
import { PeripheralsStrip } from './components/PeripheralsStrip';
import { SetupFinder } from './components/SetupFinder';
import { WhyAbsolute } from './components/WhyAbsolute';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { WhatsAppQuickBar } from './components/WhatsAppQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090c] text-[#e4e7eb] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Bar Contract Compliant Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Immersive Signature Hero */}
        <Hero />

        {/* 2. Interactive Product Discovery Ribbon */}
        <ProductDiscovery />

        {/* 3. Featured Custom Gaming Desktop Systems */}
        <FeaturedSystems />

        {/* 4. Dedicated Gaming Laptops Showcase */}
        <LaptopsShowcase />

        {/* 5. Performance & Hardware Engineering Section */}
        <PerformanceSection />

        {/* 6. Peripherals, Audio & Displays Strip */}
        <PeripheralsStrip />

        {/* 7. Interactive "Find Your Setup" Experience */}
        <SetupFinder />

        {/* 8. Trust & Local Authenticity (Why Absolute) */}
        <WhyAbsolute />

        {/* 9. Location & Direct Contact Section */}
        <LocationContact />
      </main>

      {/* 10. Sophisticated Dark Footer */}
      <Footer />

      {/* 11. WhatsApp Direct Conversion Launcher */}
      <WhatsAppQuickBar />
    </div>
  );
}
