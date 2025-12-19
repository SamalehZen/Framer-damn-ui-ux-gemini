import React from 'react';

// The colorful phone UI mockup graphic
// Screenshot: Blue/Purple gradient background, Yellow card top-left, white list lines.
export const PhoneGraphic: React.FC = () => {
  return (
    <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
      {/* Shadow */}
      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-3xl transform translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Container - adjusted MD width/height to be slightly smaller to match text scaling */}
      <div className="relative w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl md:rounded-[1.2rem] overflow-hidden border-[4px] border-[#F2F2F2] shadow-xl flex items-center justify-center">
        
        {/* Internal abstract UI Composition */}
        <div className="relative w-full h-full p-2 md:p-3 flex gap-2">
           {/* Left Col */}
           <div className="w-1/3 h-full flex flex-col gap-1.5">
             <div className="w-full h-full bg-[#FFD600] rounded-md md:rounded-lg shadow-sm"></div>
             <div className="w-full h-1/3 bg-white/20 rounded-sm"></div>
           </div>

           {/* Right Col */}
           <div className="flex-1 flex flex-col gap-1.5 pt-1">
             <div className="w-full h-1/2 bg-[#FF5F5F] rounded-md md:rounded-lg shadow-sm"></div>
             <div className="flex gap-1">
                <div className="w-1/2 h-4 bg-white/20 rounded-sm"></div>
                <div className="w-1/2 h-4 bg-white/20 rounded-sm"></div>
             </div>
           </div>

           {/* Overlay Reflection */}
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

// The dark abstract shape graphic
// Screenshot: Black rounded pill, grey chain link / infinity icon inside.
export const AbstractGraphic: React.FC = () => {
  return (
    <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
      {/* Shadow */}
      <div className="absolute inset-0 bg-black/20 blur-xl rounded-full transform translate-y-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Container - adjusted MD width/height */}
      <div className="relative w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-[#111111] rounded-2xl md:rounded-[1.2rem] shadow-2xl flex items-center justify-center border-[4px] border-[#F2F2F2]">
        
        {/* Inner Graphic: Chain/Infinity Logo */}
        <div className="relative flex items-center justify-center opacity-90 scale-75 md:scale-90 lg:scale-100">
             {/* Simple geometric chain link logo */}
             <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" rx="8.5" stroke="#666" strokeWidth="3"/>
                <rect x="20.5" y="0.5" width="23" height="23" rx="8.5" stroke="#666" strokeWidth="3"/>
             </svg>
        </div>
        
        {/* Subtle top shine */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
      </div>
    </div>
  );
};