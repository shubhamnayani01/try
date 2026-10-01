import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { BlurImage } from './BlurImage';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, weightLabel: string, price: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(
    product.weights.length > 1 ? 1 : 0 // Default to 500g if available
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentWeight = product.weights[selectedWeightIndex] || product.weights[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, currentWeight.label, currentWeight.price);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-stone-200/80 hover:border-stone-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden">
      {/* Top Image Container */}
      <div className="relative aspect-4/3 w-full bg-[#F7F4EE] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <BlurImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          wrapperClassName="w-full h-full"
        />

        {/* Minimal Subtle Badge */}
        {product.isPureGhee && (
          <span className="absolute top-3 left-3 bg-[#4A1017]/85 backdrop-blur-xs text-[#FFF0AA] text-[10px] tracking-wider uppercase font-medium px-2.5 py-0.5 rounded-full z-10">
            Pure Desi Ghee
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label="Wishlist"
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-xs text-stone-700 hover:text-[#7A1F2B] hover:bg-white transition-all z-10"
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${isWishlisted ? 'fill-[#7A1F2B] text-[#7A1F2B]' : ''}`} />
        </button>

        {/* Quick View */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/95 text-[#241812] text-[11px] font-medium px-3.5 py-1.5 rounded-full shadow-sm hover:bg-[#7A1F2B] hover:text-white z-10 flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Details Container */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category */}
          <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-400 block mb-1">
            {product.category}
          </span>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-base sm:text-[17px] text-[#241812] hover:text-[#7A1F2B] transition-colors cursor-pointer line-clamp-1 leading-snug"
          >
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-stone-500 line-clamp-1 mt-1 font-sans">
            {product.description}
          </p>
        </div>

        {/* Weight Selector */}
        <div className="pt-2 border-t border-stone-100 space-y-1.5">
          <div className="grid grid-cols-3 gap-1">
            {product.weights.map((w, idx) => (
              <button
                key={w.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedWeightIndex(idx);
                }}
                className={`py-1 px-1 rounded-lg text-[10.5px] font-medium transition-all text-center ${
                  selectedWeightIndex === idx
                    ? 'bg-[#7A1F2B] text-white font-semibold'
                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add To Cart Button */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="font-serif text-lg font-bold text-[#7A1F2B]">
              ₹{currentWeight.price}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
              addedAnimation
                ? 'bg-emerald-800 text-white'
                : 'bg-[#7A1F2B] hover:bg-[#5E1620] text-[#FFF0AA]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{addedAnimation ? 'Added' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
