import React from 'react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import SuitableForSection from './components/SuitableForSection';
import FloatingBadges from './components/FloatingBadges';

const App: React.FC = () => {
  return (
    <main className="relative w-full bg-[#f2f2f2] text-slate-900 selection:bg-slate-200">
      <Hero />
      <FeatureSection />
      <SuitableForSection />
      <FloatingBadges />
    </main>
  );
};

export default App;