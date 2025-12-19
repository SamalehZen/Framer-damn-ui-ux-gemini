import React from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './Header';
import AvatarStack from './AvatarStack';
import { PhoneGraphic, AbstractGraphic } from './Graphics';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen w-full px-4 md:px-8 pt-6 pb-20 font-sans">
      {/* Top Header */}
      <Header />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[80rem] mt-8 md:mt-0 space-y-10 md:space-y-12">
        
        {/* Status Pill */}
        <div className="animate-fade-in-up delay-100">
          <div className="bg-white pl-4 pr-5 py-2 rounded-full shadow-sm flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-default border border-transparent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[13px] font-medium text-gray-800 tracking-wide">
              Booking Open — 2 Spots Left
            </span>
          </div>
        </div>

        {/* Hero Title Area */}
        <div className="flex flex-col items-center text-center -space-y-2 md:-space-y-4 w-full">
          
          {/* Row 1: Unlimited [Graphic] Design */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2">
            <h1 className="text-[3.25rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-black leading-[0.9] md:leading-[1.05]">
              Unlimited
            </h1>
            
            {/* Custom Graphic 1: Phone Mockup */}
            <div className="block mx-1 md:mx-2 mt-2 md:mt-3">
                <PhoneGraphic />
            </div>
            
            <h1 className="text-[3.25rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-[#999999] leading-[0.9] md:leading-[1.05]">
              Design
            </h1>
          </div>

          {/* Row 2: for [Graphic] Solid Startups */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2">
            <h1 className="text-[3.25rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-[#999999] leading-[0.9] md:leading-[1.05]">
              for
            </h1>

            {/* Custom Graphic 2: Abstract Black Shape */}
            <div className="block mx-1 md:mx-2 mt-2 md:mt-3">
                <AbstractGraphic />
            </div>

            <h1 className="text-[3.25rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-black leading-[0.9] md:leading-[1.05]">
              Solid Startups
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-center text-[#666666] text-lg md:text-[1.125rem] leading-relaxed font-normal tracking-tight px-4">
          We help startups and brands create beautiful,<br className="hidden md:block" />
          functional products — fast and hassle-free.
        </p>

        {/* Action Area - Row Layout on Desktop */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 pt-4 md:pt-6">
          
          {/* CTA Button with 'Skin' Container Effect (Neumorphism) */}
          {/* 
              - bg-[#f2f2f2]: Meme couleur que le background global
              - shadow-[...]: Ombre claire en haut a gauche, ombre foncée en bas a droite
          */}
          <div className="p-2 bg-[#f2f2f2] rounded-full border border-gray-200/60 shadow-[4px_4px_10px_rgba(0,0,0,0.05),-4px_-4px_10px_rgba(255,255,255,0.8)]">
             <button className="group relative bg-black text-white pl-8 pr-6 py-4 rounded-full text-[1.05rem] font-medium flex items-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Choose your plan
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </button>
          </div>

          {/* Social Proof Group */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <AvatarStack />
            <span className="text-[13px] text-gray-500 font-medium pl-1">Trusted by Leaders</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;