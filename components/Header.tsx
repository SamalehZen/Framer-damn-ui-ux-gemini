import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-[1400px] flex justify-between items-center z-50 px-2 md:px-0">
      {/* Logo - Removed background pill as requested */}
      <div className="py-2 px-4 cursor-pointer hover:opacity-70 transition-opacity duration-300">
        <span className="font-bold text-[20px] tracking-tight text-black">Hanzo</span>
      </div>

      {/* Menu Trigger */}
      <button className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 group active:scale-95">
        <div className="flex flex-col gap-[5px] items-center justify-center w-5">
            <div className="w-full h-[1.5px] bg-black rounded-full group-hover:w-3 transition-all duration-300"></div>
            <div className="w-full h-[1.5px] bg-black rounded-full"></div>
        </div>
      </button>
    </header>
  );
};

export default Header;