import React from 'react';

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
];

interface AvatarStackProps {
  limit?: number;
  borderColor?: string;
}

const AvatarStack: React.FC<AvatarStackProps> = ({ limit = 5, borderColor = "#f2f2f2" }) => {
  const displayAvatars = avatars.slice(0, limit);

  return (
    <div className="flex items-center">
      {displayAvatars.map((src, index) => (
        <div 
          key={index} 
          className={`relative w-10 h-10 rounded-full border-[3px] overflow-hidden -ml-3.5 first:ml-0 hover:z-10 hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
          style={{ zIndex: index, borderColor: borderColor }}
        >
          <img 
            src={src} 
            alt={`User ${index + 1}`} 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" 
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarStack;