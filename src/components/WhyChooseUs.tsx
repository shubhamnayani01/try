import React from 'react';
import { Truck, Award, Flame, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: '100% Pure Desi Ghee',
      desc: 'Crafted exclusively with traditional Desi Ghee for rich aroma and wholesome purity.'
    },
    {
      icon: Award,
      title: 'Heritage Halwai Recipes',
      desc: 'Authentic 1955 recipes slow-cooked in traditional brass kadhais.'
    },
    {
      icon: Truck,
      title: 'Fresh Daily Batches',
      desc: 'Prepared every morning in Nakhtrana with vacuum-sealed packaging.'
    },
    {
      icon: Heart,
      title: 'Pure & Natural',
      desc: 'Zero artificial preservatives, zero palm oil, only the finest natural nuts & saffron.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            The MH Promise
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#241812] tracking-tight">
            Purity In Every Bite
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7A1F2B]/10 text-[#7A1F2B] flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div>
                  <h3 className="font-serif font-bold text-base text-[#241812] leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-[11.5px] text-stone-500 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
