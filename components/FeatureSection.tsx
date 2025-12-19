import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AvatarStack from './AvatarStack';

const FeatureSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[130vh] bg-black text-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 z-10 overflow-hidden pb-40">
      {/* Sticky Header Container - Appear after scrolling a bit or stick to top of this section */}
      <div className="sticky top-6 z-40 w-full flex justify-center px-4 pt-4 md:pt-6">
        <StickyNav />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-24 md:pt-32 px-6 md:px-10 max-w-[90rem] mx-auto">
        <ScrollRevealText />
      </div>
    </div>
  );
};

const StickyNav: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-1.5 pr-2 bg-[#787878]/30 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-full md:max-w-fit overflow-x-auto no-scrollbar">
      
      {/* Yellow Brand Pill */}
      <div className="flex flex-col justify-center bg-[#D1D857] text-black px-5 py-1.5 rounded-full min-w-[110px] cursor-pointer hover:brightness-110 transition-all h-[56px] relative overflow-hidden group">
         <span className="text-[10px] font-bold uppercase tracking-wide opacity-70 leading-none mb-1 group-hover:-translate-y-1 transition-transform">Subscribe now</span>
         <div className="flex items-center gap-1.5 group-hover:-translate-y-1 transition-transform">
            <span className="font-bold text-lg leading-none tracking-tight">Hanzo®</span>
            <div className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center">
               <ArrowRight className="w-3 h-3 -rotate-45" />
            </div>
         </div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block"></div>

      {/* Nav Links Group 1 */}
      <div className="hidden md:flex items-center px-2 text-[15px] font-medium text-white hover:text-white/80 cursor-pointer whitespace-nowrap transition-colors">
        Our services
      </div>

      {/* Divider */}
      <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block"></div>

      {/* Founders Section */}
      <div className="hidden md:flex flex-col justify-center px-2 min-w-[140px]">
         <span className="text-[11px] text-white/60 mb-1 font-medium">Loved by founders</span>
         <div className="scale-75 origin-left -ml-2">
            <AvatarStack limit={4} borderColor="#444" />
         </div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block"></div>

      {/* Main Nav Links */}
      <nav className="hidden lg:flex items-center gap-1 px-2">
        {['Services', 'Pricing', 'Case studies', 'Team', 'FAQ'].map((item) => (
          <a key={item} href="#" className="px-4 py-2 text-[15px] font-medium text-white hover:text-white/80 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Buy Now Button */}
      <button className="ml-2 bg-white text-black px-6 py-3.5 rounded-full text-[15px] font-bold hover:bg-gray-200 transition-colors whitespace-nowrap shadow-lg">
        Buy now
      </button>
    </div>
  );
};

const ScrollRevealText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start revealing when the element is 75% down the screen, finish when it's 25% down
        const start = windowHeight * 0.85;
        const end = windowHeight * 0.25;
        const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headline = "Enhance your workflows to maximize performance and take effective control of your time.";
  const subtext = "Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions.";

  return (
    <div ref={containerRef} className="max-w-6xl w-full text-left md:text-left mt-16 md:mt-20 mb-40 pl-4 md:pl-0">
      {/* Animated Headline */}
      {/* Adjusted sizes: text-[2.5rem] mobile, md:text-[4rem] tablet, lg:text-[5.5rem] desktop */}
      <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] font-bold tracking-tight mb-12 md:mb-16 transition-colors duration-500 max-w-5xl">
        {headline.split(" ").map((word, i) => {
           // Simple stagger effect based on scroll progress
           const totalWords = headline.split(" ").length;
           const highlightThreshold = i / totalWords;
           // Tune the speed so it feels like it's lighting up as you read
           const isHighlighted = scrollProgress > (highlightThreshold * 0.85); 
           
           return (
             <span key={i} className={`inline-block mr-[0.25em] transition-opacity duration-700 ${isHighlighted ? 'text-white opacity-100' : 'text-white/40 opacity-40'}`}>
               {word}
             </span>
           )
        })}
      </h2>

      {/* Secondary Text */}
      {/* Adjusted sizes: text-[1.25rem] mobile, md:text-[1.8rem] tablet, lg:text-[2.2rem] desktop */}
      <p className="text-[1.25rem] md:text-[1.8rem] lg:text-[2.2rem] leading-[1.3] font-medium tracking-tight max-w-4xl">
        {subtext.split(" ").map((word, i) => {
           const highlightThreshold = i / subtext.split(" ").length;
           // Start highlighting this paragraph after the headline is mostly done
           const adjustedProgress = Math.max(0, scrollProgress - 0.5) * 2.5;
           const isHighlighted = adjustedProgress > highlightThreshold;
           
           return (
            <span key={i} className={`inline-block mr-[0.2em] transition-colors duration-700 ${isHighlighted ? 'text-[#888888]' : 'text-[#222222]'}`}>
              {word}
            </span>
           );
        })}
      </p>
    </div>
  );
}

export default FeatureSection;