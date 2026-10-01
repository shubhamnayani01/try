import React from 'react';
import officialLogoImg from '../assets/images/mh_sweets_logo_official_1785069046531.jpg';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'purple',
  size = 'md',
  showSubtitle = true,
  className = '',
  showText = true,
}) => {
  // Dimensions
  const badgeSize = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  }[size];

  const titleSize = {
    sm: 'text-sm sm:text-base',
    md: 'text-lg sm:text-xl lg:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  }[size];

  const subSize = {
    sm: 'text-[7px]',
    md: 'text-[8px] sm:text-[9px]',
    lg: 'text-[9px] sm:text-[10px]',
    xl: 'text-[10px] sm:text-[11px]',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Exact Official Circular Logo Image */}
      <img
        src={officialLogoImg}
        alt="MHSWEETS Logo"
        className={`rounded-full shrink-0 shadow-md border-2 border-[#D4AF37]/80 object-cover ${badgeSize}`}
      />

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col text-left min-w-0">
          <span
            className={`font-serif font-bold tracking-tight leading-none ${titleSize} ${
              variant === 'dark' ? 'text-white' : 'text-[#7A1F2B]'
            }`}
          >
            MH Sweets
          </span>
          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`uppercase font-medium tracking-[0.18em] sm:tracking-[0.22em] ${subSize} ${
                  variant === 'dark' ? 'text-[#D4AF37]' : 'text-[#8A6A23]'
                }`}
              >
                EST. 1955 • NAKHTRANA
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
