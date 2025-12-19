import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AvatarStack from './AvatarStack';

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Define the scroll range for the animation
        // Start: When the section top is 20% down from viewport top (entering focus)
        // End: When the section top is 150% viewport height above viewport top (scrolled far past)
        const startThreshold = viewportHeight * 0.2;
        const endThreshold = -viewportHeight * 1.5;
        
        const progress = (startThreshold - rect.top) / (startThreshold - endThreshold);
        
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-[300vh] bg-black text-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Area */}
        <div className="w-full flex justify-center pt-8 md:pt-10 z-20">
          <StickyNav />
        </div>

        {/* Main Text Area - Centered in the sticky view */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 max-w-[90rem] mx-auto -mt-20 md:mt-0">
          <ScrollRevealText progress={scrollProgress} />
        </div>
      </div>
    </div>
  );
};

const StickyNav: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-1.5 pr-2 bg-[#787878]/30 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-full md:max-w-fit overflow-x-auto no-scrollbar mx-4">
      
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

interface ScrollRevealTextProps {
  progress: number;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ progress }) => {
  const headline = "Enhance your workflows to maximize performance and take effective control of your time.";
  const subtext = "Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions.";

  return (
    <div className="max-w-6xl w-full text-left md:text-left mb-20 md:mb-0 pl-4 md:pl-0">
      {/* Animated Headline */}
      <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] font-bold tracking-tight mb-12 md:mb-16 transition-colors duration-500 max-w-5xl">
        {headline.split(" ").map((word, i) => {
           const totalWords = headline.split(" ").length;
           const highlightThreshold = i / totalWords;
           // Trigger when progress passes the word's position (scaled to 70% of total scroll duration for header)
           const isHighlighted = progress > (highlightThreshold * 0.7); 
           
           return (
             <span key={i} className={`inline-block mr-[0.25em] transition-opacity duration-500 ${isHighlighted ? 'text-white opacity-100' : 'text-white/50 opacity-50'}`}>
               {word}
             </span>
           )
        })}
      </h2>

      {/* Secondary Text */}
      <p className="text-[1.25rem] md:text-[1.8rem] lg:text-[2.2rem] leading-[1.3] font-medium tracking-tight max-w-4xl">
        {subtext.split(" ").map((word, i) => {
           const highlightThreshold = i / subtext.split(" ").length;
           // Start highlighting after header is mostly done (progress > 0.6)
           // Map the remaining 0.4 progress to the paragraph
           const adjustedProgress = Math.max(0, progress - 0.6) * 2.5; 
           const isHighlighted = adjustedProgress > highlightThreshold;
           
           return (
            <span key={i} className={`inline-block mr-[0.2em] transition-colors duration-500 ${isHighlighted ? 'text-[#EEEEEE]' : 'text-[#444444]'}`}>
              {word}
            </span>
           );
        })}
      </p>
    </div>
  );
}

export default FeatureSection;