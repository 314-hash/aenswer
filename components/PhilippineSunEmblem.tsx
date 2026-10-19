import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
}

export const PhilippineSunEmblem: React.FC<EmblemProps> = ({ className = 'w-6 h-6', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="8" fill="#F5C76B" />
      {/* 8 Primary Major Rays */}
      <path d="M24 2 L26 12 L24 14 L22 12 Z" fill="#F5C76B" />
      <path d="M24 46 L26 36 L24 34 L22 36 Z" fill="#F5C76B" />
      <path d="M2 24 L12 26 L14 24 L12 22 Z" fill="#F5C76B" />
      <path d="M46 24 L36 26 L34 24 L36 22 Z" fill="#F5C76B" />
      {/* 4 Diagonal Rays */}
      <path d="M8.4 8.4 L17 14 L15.5 15.5 L14 17 Z" fill="#F5C76B" />
      <path d="M39.6 39.6 L31 34 L32.5 32.5 L34 31 Z" fill="#F5C76B" />
      <path d="M39.6 8.4 L34 17 L32.5 15.5 L31 14 Z" fill="#F5C76B" />
      <path d="M8.4 39.6 L14 31 L15.5 32.5 L17 34 Z" fill="#F5C76B" />
      {/* Central Radiance Accent */}
      <circle cx="24" cy="24" r="4.5" fill="#FFF0CA" />
    </svg>
  );
};

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized Logo Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold/30 shadow-lg shadow-navy-950/80 group">
        <span className="text-xl font-black text-white tracking-tighter">A</span>
        {/* Floating Sun Motif */}
        <div className="absolute -top-1.5 -right-1.5">
          <PhilippineSunEmblem size={16} className="text-gold animate-spin-slow" />
        </div>
        {/* Curved ribbon accent */}
        <div className="absolute bottom-1 left-2 right-2 h-1 rounded-full ph-ribbon"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-extrabold tracking-tight text-white">
            AENSWER<span className="text-gold">.PH</span>
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-mutedgray-light">
          Digital Solutions
        </span>
      </div>
    </div>
  );
};
