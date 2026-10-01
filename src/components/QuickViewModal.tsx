import React, { useState } from 'react';
import { X, ShoppingBag, Heart, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { BlurImage } from './BlurImage';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, weightLabel: string, price: number, qty: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  if (!isOpen || !product) return null;

  const [selectedWeightIdx, setSelectedWeightIdx] = useState(
    product.weights.length > 1 ? 1 : 0
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedWeight = product.weights[selectedWeightIdx] || product.weights[0];
  const totalPrice = selectedWeight.price * quantity;

  const handleAdd = () => {
    onAddToCart(product, selectedWeight.label, selectedWeight.price, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#7A1F2B] shadow-md border border-[#D4AF37]/30 transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side Gallery Photo */}
        <div className="w-full md:w-1/2 bg-[#FAF3EA] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7A1F2B] text-[#FFF0AA]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                Authentic Mithai
              </span>

              <span className="text-xs text-[#C59B27] font-bold uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Display Image Area */}
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#F7F4EE] relative shadow-inner group">
              <BlurImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-[#7A1F2B] font-medium">
            <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2F6F4F]" />
              <span>100% Pure Ingredients</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>Vacuum Fresh Sealed</span>
            </div>
          </div>
        </div>

        {/* Right Side Details & Purchase */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A6A23]">
                  {product.category}
                </span>
                {product.isPureGhee && (
                  <span className="text-[10px] uppercase font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    Pure Desi Ghee
                  </span>
                )}
              </div>

              <h2 className="font-serif font-bold text-2xl text-[#332219]">
                {product.name}
              </h2>
              <p className="text-xs text-[#7A1F2B] font-serif font-medium mt-0.5">
                {product.origin || 'Artisanal Batch'}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-[#332219]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Key Specs Pills */}
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-full bg-[#F5EBDD] text-[#7A1F2B] font-medium">
                Shelf Life: {product.shelfLife}
              </span>
              {product.sweetnessLevel && (
                <span className="px-2.5 py-1 rounded-full bg-[#F5EBDD] text-[#7A1F2B] font-medium">
                  Sweetness: {product.sweetnessLevel}
                </span>
              )}
              {product.calories && (
                <span className="px-2.5 py-1 rounded-full bg-[#F5EBDD] text-[#332219]/70 font-medium">
                  {product.calories}
                </span>
              )}
            </div>

            {/* Ingredients */}
            <div className="p-3 rounded-2xl bg-[#F5EBDD]/50 border border-[#D4AF37]/20 text-xs">
              <span className="font-bold text-[#7A1F2B] block mb-1">Authentic Ingredients:</span>
              <p className="text-[#332219]/80">{product.ingredients.join(', ')}</p>
            </div>

            {/* Weight Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#7A1F2B] block">
                Select Pack Size:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {product.weights.map((w, idx) => (
                  <button
                    key={w.label}
                    onClick={() => setSelectedWeightIdx(idx)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                      selectedWeightIdx === idx
                        ? 'bg-[#7A1F2B] text-[#FFF0AA] border-[#7A1F2B] shadow-md'
                        : 'bg-white text-[#332219] border-[#D4AF37]/30 hover:bg-[#F5EBDD]'
                    }`}
                  >
                    <div>{w.label}</div>
                    <div className="text-[10px] opacity-90">₹{w.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-[#7A1F2B]">Quantity:</span>
              <div className="flex items-center gap-3 bg-white border border-[#D4AF37]/30 rounded-full px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 rounded-full font-bold text-[#7A1F2B] hover:bg-[#F5EBDD] flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-sm font-bold w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 rounded-full font-bold text-[#7A1F2B] hover:bg-[#F5EBDD] flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="space-y-3 pt-4 border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#332219]/60 block uppercase font-medium">Total Amount</span>
                <span className="font-serif font-bold text-2xl text-[#7A1F2B]">₹{totalPrice}</span>
              </div>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-2xl border border-[#D4AF37]/30 transition-all ${
                  isWishlisted ? 'bg-[#7A1F2B] text-[#FFF0AA]' : 'bg-white text-[#7A1F2B] hover:bg-[#F5EBDD]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#FFF0AA]' : ''}`} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                added
                  ? 'bg-[#2F6F4F] text-white'
                  : 'bg-gradient-to-r from-[#7A1F2B] to-[#58131C] text-[#FFF0AA] border border-[#D4AF37]/40 hover:opacity-95'
              }`}
            >
              {added ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                  <span>Add {quantity} Pack to Royal Cart • ₹{totalPrice}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
