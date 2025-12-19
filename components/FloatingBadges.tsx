import React from 'react';
import { Gift, PenTool } from 'lucide-react';

const FloatingBadges: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* Remix Badge */}
      <div className="flex items-center gap-2">
        <button className="bg-white px-4 py-2 rounded-lg shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all border border-gray-100 font-semibold text-sm text-gray-800">
          Remix for free
        </button>
        <div className="relative group cursor-pointer">
            <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-100 text-orange-500">
                <Gift className="w-5 h-5" />
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                4
            </span>
        </div>
      </div>

      {/* Made in Framer Badge */}
      <button className="bg-white pl-2 pr-4 py-2 rounded-lg shadow-lg shadow-gray-200/50 flex items-center gap-2 border border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="bg-black text-white p-1 rounded">
             {/* Simple F logo for Framer */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 0h16v8h-8zM4 16h8v8zM4 8h8v8H4z"/>
            </svg>
        </div>
        <span className="text-sm font-semibold text-gray-900">Made in Framer</span>
      </button>
    </div>
  );
};

export default FloatingBadges;