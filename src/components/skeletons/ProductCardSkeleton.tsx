import React from 'react';

interface ProductCardSkeletonProps {
  className?: string;
}

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between overflow-hidden animate-pulse ${className}`}
    >
      {/* Top Image Container Skeleton */}
      <div className="relative aspect-4/3 w-full bg-gradient-to-br from-stone-100 via-stone-200/70 to-stone-100 overflow-hidden">
        {/* Shimmer sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skeleton-shimmer" />

        {/* Badge Skeleton */}
        <div className="absolute top-3 left-3 w-20 h-4 rounded-full bg-stone-300/70" />

        {/* Wishlist Button Skeleton */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-300/70" />
      </div>

      {/* Details Container Skeleton */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Category Pill Skeleton */}
          <div className="w-16 h-3 rounded-md bg-stone-200" />

          {/* Title Skeleton */}
          <div className="w-3/4 h-5 rounded-md bg-stone-300/80" />

          {/* Description Line Skeleton */}
          <div className="w-full h-3 rounded-md bg-stone-200" />
        </div>

        {/* Weight Selector Skeleton (3 Pills) */}
        <div className="pt-2 border-t border-stone-100 space-y-1.5">
          <div className="grid grid-cols-3 gap-1">
            <div className="h-6 rounded-lg bg-stone-200/80" />
            <div className="h-6 rounded-lg bg-stone-200/80" />
            <div className="h-6 rounded-lg bg-stone-200/80" />
          </div>
        </div>

        {/* Price & Add To Cart Button Skeleton */}
        <div className="flex items-center justify-between pt-1">
          <div className="w-14 h-6 rounded-md bg-stone-300/80" />
          <div className="w-24 h-7 rounded-xl bg-stone-300/70" />
        </div>
      </div>
    </div>
  );
};
