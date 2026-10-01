import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { ProductGridSkeleton } from './skeletons/ProductGridSkeleton';

interface BestSellersProps {
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, weightLabel: string, price: number) => void;
  onViewAll: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ghee' | 'dryfruit' | 'sugarfree'>('all');

  const filtered = PRODUCTS.filter((p) => {
    if (activeTab === 'ghee') return p.isPureGhee;
    if (activeTab === 'dryfruit') return p.isDryFruit;
    if (activeTab === 'sugarfree') return p.isSugarFree;
    return p.isBestSeller || p.rating >= 4.9;
  });

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
              Daily Fresh Batches
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#241812] tracking-tight">
              Signature Sweets
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200/70">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#7A1F2B] font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-[#241812]'
              }`}
            >
              All Sweets
            </button>
            <button
              onClick={() => setActiveTab('ghee')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'ghee'
                  ? 'bg-white text-[#7A1F2B] font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-[#241812]'
              }`}
            >
              Pure Desi Ghee
            </button>
            <button
              onClick={() => setActiveTab('dryfruit')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'dryfruit'
                  ? 'bg-white text-[#7A1F2B] font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-[#241812]'
              }`}
            >
              Dry Fruit
            </button>
            <button
              onClick={() => setActiveTab('sugarfree')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'sugarfree'
                  ? 'bg-white text-[#7A1F2B] font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-[#241812]'
              }`}
            >
              Sugar-Free
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* View All Callout */}
        <div className="text-center pt-2">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-stone-300 text-stone-800 text-xs font-semibold hover:border-[#7A1F2B] hover:text-[#7A1F2B] hover:bg-stone-50 transition-all cursor-pointer shadow-xs"
          >
            <span>View Complete Catalog ({PRODUCTS.length} Items)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

