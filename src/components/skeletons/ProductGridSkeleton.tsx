import React from 'react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

interface ProductGridSkeletonProps {
  count?: number;
  columns?: string;
  className?: string;
}

export const ProductGridSkeleton: React.FC<ProductGridSkeletonProps> = ({
  count = 8,
  columns = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5',
  className = '',
}) => {
  return (
    <div className={`${columns} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={`skeleton-prod-${index}`} />
      ))}
    </div>
  );
};
