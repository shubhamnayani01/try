import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { ViewState } from '../types';
import { BrandLogo } from './BrandLogo';
import { BlurImage } from './BlurImage';
import imgStorefront from '../assets/images/mh_sweets_storefront_night_1787827621460.jpg';

interface FooterProps {
  onNavigate: (view: ViewState, categoryId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6B1723] text-stone-200 pt-12 pb-8 border-t border-[#872230] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Main 3-Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Legacy (Left) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <BrandLogo size="lg" variant="dark" />

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide leading-snug">
              A Legacy of Sweetness, Crafted with Love
            </h3>

            <p className="text-xs sm:text-sm text-[#F7E7CE]/80 leading-relaxed font-sans max-w-md">
              <strong className="text-white font-medium">Discover the authentic flavors of Kutch</strong> with every bite of our traditional mithai and savory namkeen. Made with age-old recipes and the finest ingredients, MH Sweets brings you a taste that feels like home.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mhsweets.1955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919925134060?text=Hello%20MH%20Sweets%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links (Middle) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3 md:pl-4">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white">
              Quick links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7E7CE]/90 font-sans">
              <li>
                <button
                  onClick={() => onNavigate('shop', 'all')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  All sweets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', 'farsan-namkeen')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  Namkeen & Farsan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', 'gift-hampers')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  Gift Hampers & Boxes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  Contact & Outlets
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Shop Storefront Picture (Right) */}
          <div className="md:col-span-3 lg:col-span-4 flex justify-start md:justify-end">
            <div className="w-full max-w-[340px] sm:max-w-[360px] aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-black/40 group">
              <BlurImage
                src={imgStorefront}
                alt="MH Sweets Flagship Storefront"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                wrapperClassName="w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* Subscribe Section (Bottom Row) */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="w-full max-w-md space-y-2">
            <h4 className="font-serif font-bold text-sm sm:text-base text-white">
              Subscribe to our emails
            </h4>
            <form onSubmit={handleSubscribe} className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-stone-300 text-xs focus:outline-none focus:border-[#D4AF37] focus:bg-white/15 transition-all pr-12"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-[#D4AF37] hover:text-[#7A1F2B] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#FFF0AA] font-medium animate-fade-in">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 text-xs text-[#F7E7CE]/70">
            <p>© {new Date().getFullYear()} MH Sweets, Nakhtrana, Kachchh.</p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
