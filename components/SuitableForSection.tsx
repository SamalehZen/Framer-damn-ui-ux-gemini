import React from 'react';

const SuitableForSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-20 md:py-32 relative z-20 -mt-10 rounded-t-[3rem] md:rounded-none">
      <div className="max-w-[95rem] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          
          {/* Left Column - Sticky Content */}
          <div className="relative h-auto md:h-auto">
            <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center py-20 md:py-0">
              <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] mb-6">
                We are suitable for
              </h2>
              <p className="text-[1.2rem] md:text-[1.5rem] text-[#888888] leading-relaxed max-w-md">
                Because we can solve the challenges that other companies can't reach
              </p>
            </div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="flex flex-col gap-8 md:gap-12 pb-20 md:pb-40">
            
            {/* Card 1: Small Business */}
            <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12 min-h-[600px] flex flex-col justify-between group transition-transform hover:scale-[1.01] duration-500">
              <div>
                <h3 className="text-[2.5rem] md:text-[3rem] font-medium tracking-tight leading-none">Small business</h3>
              </div>
              
              <div className="flex justify-center items-center py-10">
                <VennGraphic />
              </div>

              <div className="space-y-4">
                <h4 className="text-[1.5rem] font-bold">AI automation</h4>
                <p className="text-[1.1rem] md:text-[1.2rem] leading-[1.5] text-[#444] font-medium">
                  Looking to streamline operations and enhance customer engagement? Our tailored AI solutions can help you optimize processes, improve decision-making, and drive growth. Let us empower your small business to compete more effectively in today's market.
                </p>
              </div>
            </div>

            {/* Card 2: Active Products */}
            <div className="bg-[#D9F327] text-black rounded-[2.5rem] p-8 md:p-12 min-h-[600px] flex flex-col justify-between group transition-transform hover:scale-[1.01] duration-500">
              <div>
                <h3 className="text-[2.5rem] md:text-[3rem] font-medium tracking-tight leading-none">Active products</h3>
              </div>
              
              <div className="flex justify-center items-center py-10">
                <SpirographGraphic />
              </div>

              <div className="space-y-4">
                <h4 className="text-[1.5rem] font-bold">Add AI features</h4>
                <p className="text-[1.1rem] md:text-[1.2rem] leading-[1.5] text-[#444] font-medium">
                  Already have an impressive, cutting-edge product? Let's take it further. We'll add powerful AI features to automate tasks, improve user engagement, and boost overall efficiency, making your business more effective.
                </p>
              </div>
            </div>

            {/* Card 3: Startups */}
            <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 min-h-[600px] flex flex-col justify-between group border border-white/10 transition-transform hover:scale-[1.01] duration-500">
              <div>
                <h3 className="text-[2.5rem] md:text-[3rem] font-medium tracking-tight leading-none">Startups</h3>
              </div>
              
              <div className="flex justify-center items-center py-10">
                <TunnelGraphic />
              </div>

              <div className="space-y-4">
                <h4 className="text-[1.5rem] font-bold">AI product from scratch</h4>
                <p className="text-[1.1rem] md:text-[1.2rem] leading-[1.5] text-[#999] font-medium">
                  Got a revolutionary AI idea? With our expertise in helping startups, we'll turn your concept into a scalable MVP ready for future success. Together, we'll strike the perfect balance between innovation and productivity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// SVG Graphics

const VennGraphic: React.FC = () => (
  <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-64 md:h-64 opacity-80">
    <circle cx="100" cy="75" r="55" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="70" cy="125" r="55" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="130" cy="125" r="55" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const SpirographGraphic: React.FC = () => (
  <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-64 md:h-64 animate-[spin_20s_linear_infinite] opacity-80">
    {[0, 30, 60, 90, 120, 150].map((rotation) => (
      <g key={rotation} style={{ transformOrigin: 'center', transform: `rotate(${rotation}deg)` }}>
         <ellipse cx="100" cy="100" rx="25" ry="75" stroke="currentColor" strokeWidth="0.6" />
      </g>
    ))}
    <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const TunnelGraphic: React.FC = () => (
  <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-64 md:h-64">
    {[...Array(6)].map((_, i) => (
      <ellipse 
        key={i}
        cx="100" 
        cy="100" 
        rx={90 - (i * 12)} 
        ry={90 - (i * 12)} 
        stroke="currentColor" 
        strokeWidth="0.6" 
        opacity={0.3 + (i * 0.1)} 
      />
    ))}
    {/* Diagonal cross lines for tunnel effect depth */}
    <path d="M 30 30 L 170 170" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    <path d="M 170 30 L 30 170" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
  </svg>
);

export default SuitableForSection;