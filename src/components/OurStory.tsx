import React from 'react';
import { MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BlurImage } from './BlurImage';
import imgGulabPak from '../assets/images/hero_slide_2_gulab_pak_1785046969331.jpg';

export const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '1955',
      title: 'Nakhatrana Foundations',
      desc: 'MH Sweets established the legendary sweet house in Nakhatrana, Kachchh, perfecting authentic Kutch Gulab Pak and Mesub in pure Desi Ghee.'
    },
    {
      year: '1980',
      title: 'Kachchhi Heritage',
      desc: 'Expanded throughout Bhuj & Gandhidham, becoming the most beloved sweet destination for families across Kachchh and Gujarat.'
    },
    {
      year: '2005',
      title: 'Freshness Innovation',
      desc: 'Pioneered nitrogen-sealed vacuum freshness packaging allowing authentic Kutch sweets to be shipped across India without preservatives.'
    },
    {
      year: 'Today',
      title: '70+ Years of Legacy',
      desc: 'Serving over 100,000+ patrons globally with the exact 1955 secret family recipes from Nakhatrana, Bhuj, Kachchh, Gujarat 370605.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF7] border-y border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            Our Heritage & Craft
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#241812] tracking-tight">
            About MH Sweets
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs">
            "MH Sweets offers authentic Indian sweets and crispy farsan made with premium ingredients, traditional recipes, and pure love. From festivals to family celebrations, we make every moment sweeter."
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs space-y-2.5 hover:border-stone-300 transition-all"
            >
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#7A1F2B] block">
                {item.year}
              </span>

              <h3 className="font-serif font-bold text-base sm:text-lg text-[#241812]">
                {item.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage Banner Image & Quote */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-4/3 bg-[#F7F4EE] border border-stone-200">
            <BlurImage
              src={imgGulabPak}
              alt="MH Sweets Craftsmanship"
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
            />
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            <div className="inline-flex items-start gap-1.5 text-xs font-medium text-stone-600">
              <MapPin className="w-4 h-4 text-[#7A1F2B] shrink-0 mt-0.5" />
              <span>Shop 1: Opp. Jain Derasar, Main Bazar, Nakhtrana • Shop 2: Nilkanth Plaza, Shop No. 8, Highway, Nakhtrana</span>
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#241812] leading-snug">
              "From festivals to family celebrations, we make every moment sweeter."
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              MH Sweets offers authentic Indian sweets and crispy farsan made with premium ingredients, traditional recipes, and pure love. Visit our Nakhtrana shops or order online directly via WhatsApp.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <BrandLogo size="sm" variant="purple" showSubtitle={false} />
              <div>
                <p className="font-serif font-bold text-sm text-[#7A1F2B]">MH Sweets</p>
                <p className="text-[11px] text-stone-500 font-sans">Nakhtrana, Kachchh • (+91 99251 34060)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
