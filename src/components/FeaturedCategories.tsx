import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { BlurImage } from './BlurImage';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            Artisanal Range
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#241812] tracking-tight">
            Explore by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 border border-stone-200/70 hover:border-stone-300 flex flex-col justify-between"
            >
              {/* Image Container with Blur-up and Cream BG */}
              <div className="relative aspect-4/3 w-full bg-[#F7F4EE] overflow-hidden">
                <BlurImage
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-1.5">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-[17px] text-[#241812] group-hover:text-[#7A1F2B] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-medium text-[#7A1F2B]">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 text-[#7A1F2B] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
