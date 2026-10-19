import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const dimensions = {
    sm: { box: 'w-9 h-9', px: 36, title: 'text-base', sub: 'text-[9px]' },
    md: { box: 'w-11 h-11', px: 44, title: 'text-lg', sub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', px: 56, title: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Aenswer Logo Image Container */}
      <div
        className={`relative ${dimensions.box} rounded-xl overflow-hidden border border-gold/40 shadow-md shadow-navy-950/30 shrink-0 bg-navy-900 group-hover:scale-105 transition-transform duration-300`}
      >
        <Image
          src="/assets/aenswer-logo.jpg"
          alt="Aenswer Digital Solutions Official Logo"
          width={dimensions.px}
          height={dimensions.px}
          className="object-cover w-full h-full"
          priority
        />
        {/* Subtle Philippine ribbon line at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 ph-ribbon"></div>
      </div>

      {/* Typography Mark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <span
            className={`${dimensions.title} font-black tracking-tight text-slate-900 dark:text-white transition-colors leading-none`}
          >
            AENSWER<span className="text-gold">.PH</span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`${dimensions.sub} font-bold uppercase tracking-widest text-slate-500 dark:text-mutedgray-light mt-1 transition-colors`}
          >
            Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
};
