import React from 'react';

interface CategorySkeletonProps {
  count?: number;
}

export const CategoryGridSkeleton: React.FC<CategorySkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={`cat-skel-${idx}`}
          className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs flex flex-col justify-between animate-pulse"
        >
          <div className="relative aspect-4/3 w-full bg-gradient-to-br from-stone-100 via-stone-200 to-stone-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skeleton-shimmer" />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
            <div className="space-y-1.5">
              <div className="w-3/5 h-5 rounded-md bg-stone-300/80" />
              <div className="w-full h-3 rounded-md bg-stone-200" />
            </div>
            <div className="w-16 h-3 rounded-md bg-stone-200 pt-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const CategoryCarouselSkeleton: React.FC<{ count?: number }> = ({ count = 9 }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 sm:gap-2.5 pb-1 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={`cat-car-skel-${idx}`}
          className="flex flex-col items-center p-2 rounded-xl border border-stone-200 bg-white"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-stone-200 mb-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skeleton-shimmer" />
          </div>
          <div className="w-12 h-2.5 rounded bg-stone-200 mb-1" />
          <div className="w-5 h-2 rounded bg-stone-200/70" />
        </div>
      ))}
    </div>
  );
};
