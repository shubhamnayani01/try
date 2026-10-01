import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { BlurImage } from './BlurImage';

interface FestivalCollectionProps {
  onQuickView: (product: Product) => void;
  onExploreHampers: () => void;
}

export const FestivalCollection: React.FC<FestivalCollectionProps> = ({
  onQuickView,
  onExploreHampers,
}) => {
  const hampers = PRODUCTS.filter((p) => p.categoryId === 'gift-hampers' || p.isFestive);

  return (
    <section className="py-14 sm:py-20 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            Festive & Celebrations
          </span>

          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#241812] tracking-tight">
            Luxury Gift Hampers
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {hampers.slice(0, 2).map((hamper) => (
            <div
              key={hamper.id}
              className="bg-white text-[#241812] rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center group"
            >
              <div className="w-full sm:w-1/2 aspect-square rounded-xl overflow-hidden bg-[#F7F4EE] shrink-0 relative">
                <BlurImage
                  src={hamper.image}
                  alt={hamper.name}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  wrapperClassName="w-full h-full"
                />
              </div>

              <div className="w-full sm:w-1/2 space-y-2.5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#241812] leading-snug">
                    {hamper.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 leading-relaxed line-clamp-2 mt-1">
                    {hamper.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                  <span className="font-serif font-bold text-lg text-[#7A1F2B]">
                    ₹{hamper.price}
                  </span>

                  <button
                    onClick={() => onQuickView(hamper)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#7A1F2B] text-[#FFF0AA] text-xs font-semibold hover:bg-[#5E1620] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Box</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Hamper Interactive Studio Showcase */}
        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EA] to-[#F5EBDD] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-md relative overflow-hidden">
          {/* Subtle background decorative badge */}
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#7A1F2B]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A1F2B]/10 border border-[#7A1F2B]/20 text-[#7A1F2B] text-[11px] font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#7A1F2B] animate-pulse" />
                <span>Custom Box Studio</span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-[#241812] leading-tight">
                Design Your Own Signature Mithai Box
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Curate a bespoke gift box with your choice of sweets. Select our royal keepsake box, pick up to 6 freshly prepared pure Desi Ghee specialties, and add a personalized gold-foil greeting card.
              </p>

              {/* 3-Step Process Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-stone-700 text-xs font-semibold border border-stone-200 shadow-2xs">
                  <span className="w-4 h-4 rounded-full bg-[#7A1F2B] text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  Choose Luxury Box
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-stone-700 text-xs font-semibold border border-stone-200 shadow-2xs">
                  <span className="w-4 h-4 rounded-full bg-[#7A1F2B] text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  Select Up to 6 Sweets
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-stone-700 text-xs font-semibold border border-stone-200 shadow-2xs">
                  <span className="w-4 h-4 rounded-full bg-[#7A1F2B] text-white text-[10px] flex items-center justify-center font-bold">3</span>
                  Custom Card Message
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto text-center">
              <button
                onClick={onExploreHampers}
                className="px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#7A1F2B] via-[#6B1723] to-[#4E1019] text-[#FFFDF9] font-bold text-xs sm:text-sm hover:shadow-lg hover:brightness-105 active:scale-98 transition-all border border-[#D4AF37]/50 shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>✨ Build Custom Hamper</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919925134060?text=Hello%20MH%20Sweets%2C%20I%20want%20to%20inquire%20about%20corporate%20or%20bulk%20wedding%20custom%20gift%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-stone-500 hover:text-[#7A1F2B] font-medium transition-colors underline decoration-stone-300 hover:decoration-[#7A1F2B]"
              >
                Need bulk corporate or wedding orders? WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
