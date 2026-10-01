import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, ArrowLeft, Sparkles, Crown, Trash2, ArrowRight } from 'lucide-react';
import { Product, ViewState } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductGridSkeleton } from './skeletons/ProductGridSkeleton';

interface WishlistViewProps {
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, weightLabel: string, price: number) => void;
  onNavigate: (view: ViewState, categoryId?: string) => void;
  onOpenCart: () => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onNavigate,
  onOpenCart,
}) => {
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach((p) => {
      const defaultWeight = p.weights[0];
      onAddToCart(p, defaultWeight.label, defaultWeight.price);
    });
    onOpenCart();
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FFF8EE] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 border-b border-[#D4AF37]/30 pb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('shop')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#7A1F2B] hover:text-[#C59B27] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Royal Catalog</span>
            </button>

            <span className="text-xs font-serif font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
              <Crown className="w-4 h-4 text-[#7A1F2B]" />
              <span>Nakhatrana Heritage Favorites</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#7A1F2B]">
                Your Saved Collection
              </h1>
              <p className="text-xs sm:text-sm text-[#332219]/70 mt-1">
                {wishlistedProducts.length === 1
                  ? '1 handpicked delicacy saved from MHSWEETS.'
                  : `${wishlistedProducts.length} handpicked delicacies saved from MHSWEETS.`}
              </p>
            </div>

            {wishlistedProducts.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="px-6 py-3 maroon-gradient text-white text-xs uppercase tracking-wider font-bold rounded-xl shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Add All ({wishlistedProducts.length}) to Cart</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        {wishlistedProducts.length === 0 ? (
          <div className="bg-[#FFFDF9] rounded-3xl p-10 sm:p-16 border-2 border-dashed border-[#D4AF37]/40 text-center space-y-5 max-w-xl mx-auto my-12 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#7A1F2B]/10 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#7A1F2B]">
              <Heart className="w-8 h-8 text-[#7A1F2B]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl text-[#332219]">
                Your Saved List is Empty
              </h3>
              <p className="text-xs sm:text-sm text-[#332219]/70 leading-relaxed max-w-md mx-auto">
                Explore our 100% Pure Desi Ghee Gulab Pak, Kesar Peda, and Dry Fruit Khazana boxes from Nakhatrana, Kachchh. Tap the heart icon on any sweet to save it here.
              </p>
            </div>

            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-3.5 maroon-gradient text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-md hover:opacity-95 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Royal Menu</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={true}
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
