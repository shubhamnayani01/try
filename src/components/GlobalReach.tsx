import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';
import { BlurImage } from './BlurImage';

// Actual photos for worldwide reach
import imgDubai from '../assets/images/dubai.jpeg';
import imgChina from '../assets/images/china.jpeg';

interface GlobalReachProps {
  onExploreCatalog?: () => void;
  onExploreHampers?: () => void;
}

export const GlobalReach: React.FC<GlobalReachProps> = () => {
  const handleWhatsApp = (country: string) => {
    const text = `Hello MH Sweets! I would like to inquire about sweets packaging for travel / delivery to ${country}.`;
    window.open(`https://wa.me/919925134060?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Simple Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1F2B]/10 text-[#7A1F2B] border border-[#7A1F2B]/20 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Reach</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#241812]">
            Our Sweets Reached <span className="text-[#7A1F2B]">Worldwide</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Export-grade vacuum packing loved by customers across Dubai (UAE) and China.
          </p>
        </div>

        {/* 2 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Picture 1: Dubai */}
          <div className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
              <BlurImage
                src={imgDubai}
                alt="MH Sweets in Dubai (UAE)"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-[#241812]/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span>🇦🇪</span>
                <span>Dubai (UAE)</span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#241812]">
                  Dubai & Middle East
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Travel & courier packs for NRI families & festivals
                </p>
              </div>
              <button
                onClick={() => handleWhatsApp('Dubai (UAE)')}
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </button>
            </div>
          </div>

          {/* Picture 2: China */}
          <div className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
              <BlurImage
                src={imgChina}
                alt="MH Sweets in China"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-[#241812]/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span>🇨🇳</span>
                <span>China (Yiwu & Guangzhou)</span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#241812]">
                  China & East Asia
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Long-stay vacuum aroma-lock packs for trade merchants
                </p>
              </div>
              <button
                onClick={() => handleWhatsApp('China')}
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
