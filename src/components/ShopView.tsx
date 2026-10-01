import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, RotateCcw, Gift, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from './ProductCard';
import { BlurImage } from './BlurImage';
import { ProductGridSkeleton } from './skeletons/ProductGridSkeleton';

interface ShopViewProps {
  initialCategoryId?: string;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, weightLabel: string, price: number) => void;
  onOpenCustomHamper?: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategoryId,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onOpenCustomHamper,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');
  const [onlyPureGhee, setOnlyPureGhee] = useState(false);
  const [onlySugarFree, setOnlySugarFree] = useState(false);
  const [onlyDryFruit, setOnlyDryFruit] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (p.categoryId !== selectedCategory) return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchIng = p.ingredients.some((ing) => ing.toLowerCase().includes(q));
        if (!matchName && !matchCat && !matchIng) return false;
      }
      // Dietary filters
      if (onlyPureGhee && !p.isPureGhee) return false;
      if (onlySugarFree && !p.isSugarFree) return false;
      if (onlyDryFruit && !p.isDryFruit) return false;
      // Max price filter
      if (p.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return (a.isBestSeller ? -1 : 1);
    });
  }, [selectedCategory, searchQuery, sortBy, onlyPureGhee, onlySugarFree, onlyDryFruit, maxPrice]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('popular');
    setOnlyPureGhee(false);
    setOnlySugarFree(false);
    setOnlyDryFruit(false);
    setMaxPrice(3000);
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-[#FAFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Title Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6A23]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Artisanal Sweets & Farsan</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-4xl text-[#241812] tracking-tight">
            Our Sweet Collection
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Prepared in pure Desi Ghee & vacuum-sealed for fresh nation-wide delivery.
          </p>
        </div>

        {/* Visual Category Selector Cards Carousel / Grid */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500">
              Browse Categories
            </span>
            <span className="text-xs text-stone-500 font-sans">
              Showing {filteredProducts.length} items
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 sm:gap-2.5 pb-1">
            {/* All Sweets Card */}
            <button
              onClick={() => handleSelectCategory('all')}
              className={`group flex flex-col items-center p-2 rounded-xl transition-all border text-center cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mb-1 bg-stone-100 flex items-center justify-center">
                <Sparkles className={`w-5 h-5 ${selectedCategory === 'all' ? 'text-white' : 'text-[#7A1F2B]'}`} />
              </div>
              <span className="text-[11px] font-semibold truncate max-w-full leading-tight">
                All Items
              </span>
              <span className={`text-[10px] ${selectedCategory === 'all' ? 'text-white/80' : 'text-stone-400'}`}>
                {PRODUCTS.length}
              </span>
            </button>

            {/* Individual Categories with Real Sweet Images */}
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`group flex flex-col items-center p-2 rounded-xl transition-all border text-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mb-1 border border-stone-100 group-hover:scale-105 transition-transform bg-[#F7F4EE]">
                    <BlurImage
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  <span className="text-[11px] font-semibold truncate max-w-full leading-tight">
                    {cat.name}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-stone-400'}`}>
                    {cat.itemCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls Bar: Search, Filters, Sorting */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-stone-200 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-3.5">
          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sweets or ingredients..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 text-xs font-medium text-stone-800 border border-stone-200 focus:outline-none focus:border-[#7A1F2B] focus:bg-white"
            />
          </div>

          {/* Quick Dietary Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-700">
            <label className="flex items-center gap-1.5 cursor-pointer bg-stone-50 hover:bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              <input
                type="checkbox"
                checked={onlyPureGhee}
                onChange={(e) => setOnlyPureGhee(e.target.checked)}
                className="text-[#7A1F2B] accent-[#7A1F2B] rounded"
              />
              <span>100% Desi Ghee</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer bg-stone-50 hover:bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              <input
                type="checkbox"
                checked={onlySugarFree}
                onChange={(e) => setOnlySugarFree(e.target.checked)}
                className="text-[#7A1F2B] accent-[#7A1F2B] rounded"
              />
              <span>Sugar-Free</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer bg-stone-50 hover:bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              <input
                type="checkbox"
                checked={onlyDryFruit}
                onChange={(e) => setOnlyDryFruit(e.target.checked)}
                className="text-[#7A1F2B] accent-[#7A1F2B] rounded"
              />
              <span>Cashew / Dryfruit</span>
            </label>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
            <span className="text-xs font-medium text-stone-500 shrink-0">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-lg bg-stone-50 text-xs font-semibold text-stone-800 border border-stone-200 focus:outline-none focus:border-[#7A1F2B] cursor-pointer"
            >
              <option value="popular">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Custom Hamper Highlight Banner */}
        {onOpenCustomHamper && (
          <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FAF3EA] to-[#F5EBDD] rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/50 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-[#7A1F2B] text-[#FFF0AA] flex items-center justify-center shrink-0 shadow-xs">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#241812]">
                    Want to create your own custom sweets assortment?
                  </h3>
                  <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-[#7A1F2B] text-[#FFF0AA] text-[10px] font-bold uppercase">
                    Interactive
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-sans mt-0.5">
                  Pick your keepsake box, select up to 6 fresh sweets, and add a personalized gold-foil greeting card.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCustomHamper}
              className="px-5 py-2.5 rounded-xl bg-[#7A1F2B] text-[#FFF0AA] text-xs font-bold hover:bg-[#5E1620] active:scale-95 transition-all shadow-xs shrink-0 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>✨ Build Custom Hamper</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        )}

        {/* Results Counter & Reset */}
        <div className="flex justify-between items-center text-xs text-stone-600">
          <span>Showing {filteredProducts.length} items</span>

          {(selectedCategory !== 'all' || searchQuery || onlyPureGhee || onlySugarFree || onlyDryFruit) && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 hover:underline text-[#7A1F2B] font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-stone-200 p-8 shadow-xs">
            <p className="font-serif font-bold text-lg text-[#241812]">No sweets found</p>
            <p className="text-xs text-stone-500 max-w-md mx-auto font-sans">
              Try adjusting your search query or dietary filters to view all available options.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#7A1F2B] text-white text-xs font-semibold hover:bg-[#601620] cursor-pointer shadow-xs"
            >
              View All Sweets
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
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
        )}
      </div>
    </div>
  );
};
