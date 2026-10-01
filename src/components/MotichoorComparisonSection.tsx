import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ShoppingBag, ArrowLeftRight, Check, Star, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import imgBoondi from '../assets/images/boondi_golden_pearls_1787807425958.jpg';
import imgMotichoorLadoo from '../assets/images/motichoor_ladoo_finished_1787807442392.jpg';

interface MotichoorComparisonSectionProps {
  onAddToCart: (product: Product, weightLabel: string, price: number, qty?: number) => void;
  onQuickView: (product: Product) => void;
}

export const MotichoorComparisonSection: React.FC<MotichoorComparisonSectionProps> = ({
  onAddToCart,
  onQuickView
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100%
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedWeight, setSelectedWeight] = useState<'250g' | '500g' | '1 Kg'>('500g');
  const [isAdded, setIsAdded] = useState(false);

  const motichoorProduct = PRODUCTS.find((p) => p.id === 'pure-ghee-motichoor-laddu') || PRODUCTS[0];

  const weightPrices: Record<'250g' | '500g' | '1 Kg', number> = {
    '250g': 135,
    '500g': 270,
    '1 Kg': 540
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleAddLadduToCart = () => {
    const price = weightPrices[selectedWeight];
    onAddToCart(motichoorProduct, selectedWeight, price, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] relative overflow-hidden border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            Craft & Tradition
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241812] tracking-tight">
            The Craft of Motichoor
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            From golden Desi Ghee boondi pearls to hand-rolled Motichoor Laddu.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Before & After Slider */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-stone-200/80">
              <div
                ref={containerRef}
                onClick={handleContainerClick}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                className="relative aspect-16/10 sm:aspect-16/9 rounded-xl overflow-hidden cursor-ew-resize select-none border border-stone-200/60 bg-[#F7F4EE]"
              >
                {/* AFTER IMAGE (Underneath / Background) */}
                <img
                  src={imgMotichoorLadoo}
                  alt="After: Pure Desi Ghee Motichoor Laddu"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />

                {/* BEFORE IMAGE (Clipped on the left) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={imgBoondi}
                    alt="Before: Golden Boondi Pearls"
                    className="absolute inset-0 h-full object-cover max-w-none"
                    style={{
                      width: `${100 / (sliderPosition / 100)}%`,
                      maxWidth: 'none'
                    }}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md z-20 pointer-events-none transition-all duration-75"
                  style={{ left: `calc(${sliderPosition}% - 1px)` }}
                >
                  {/* Central Handle Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7A1F2B] border-2 border-white shadow-md flex items-center justify-center text-[#FFF0AA]">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Badges on the Image */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#FFF0AA] text-[10px] sm:text-[11px] font-medium tracking-wide">
                    Before: Boondi Pearls
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-[#4A1017]/85 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-medium tracking-wide">
                    After: Motichoor Laddu
                  </span>
                </div>
              </div>

              {/* Preset Buttons & Slider Control */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSliderPosition(0)}
                    className={`text-[10.5px] px-2.5 py-1 rounded-full font-medium transition-all ${
                      sliderPosition === 0
                        ? 'bg-[#7A1F2B] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    Motichoor Laddu
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPosition(50)}
                    className={`text-[10.5px] px-2.5 py-1 rounded-full font-medium transition-all ${
                      sliderPosition === 50
                        ? 'bg-[#7A1F2B] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    Split View
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPosition(100)}
                    className={`text-[10.5px] px-2.5 py-1 rounded-full font-medium transition-all ${
                      sliderPosition === 100
                        ? 'bg-[#7A1F2B] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    Boondi Pearls
                  </button>
                </div>

                <span className="text-[11px] text-stone-500 font-medium">
                  {Math.round(100 - sliderPosition)}% Laddu
                </span>
              </div>
            </div>
          </div>

          {/* Product Details & Direct Order Action */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A6A23] block mb-1">
                  100% Pure Desi Ghee
                </span>
                <h3 className="font-serif text-xl font-bold text-[#241812]">
                  Shahi Motichoor Laddu
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Slow-fried micro-droplet boondi simmered in saffron syrup and gently hand-shaped with melon seeds and pistachio flakes.
                </p>
              </div>

              {/* Weight Selector */}
              <div className="pt-2 border-t border-stone-100 space-y-2">
                <label className="text-xs font-semibold text-[#241812] block">Select Size:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['250g', '500g', '1 Kg'] as const).map((wt) => (
                    <button
                      key={wt}
                      type="button"
                      onClick={() => setSelectedWeight(wt)}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        selectedWeight === wt
                          ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 text-[#7A1F2B] font-semibold'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="text-[11px]">{wt}</div>
                      <div className="text-xs font-bold mt-0.5">₹{weightPrices[wt]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleAddLadduToCart}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-98 ${
                    isAdded
                      ? 'bg-emerald-800 text-white'
                      : 'bg-[#7A1F2B] text-[#FFF0AA] hover:bg-[#5E1620]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Cart (₹{weightPrices[selectedWeight]})</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                      <span>Add to Cart • ₹{weightPrices[selectedWeight]}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onQuickView(motichoorProduct)}
                  className="w-full py-1 text-center text-xs font-medium text-[#7A1F2B] hover:underline"
                >
                  View Details & Ingredients
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
