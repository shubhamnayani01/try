import React, { useState, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  PhoneCall,
  Gift,
  Sparkles,
  ChevronDown,
  MapPin,
  MessageSquare,
  ArrowRight,
  Compass,
  Store
} from 'lucide-react';
import { ViewState } from '../types';
import { CATEGORIES } from '../data/categories';
import { BrandLogo } from './BrandLogo';
import { BlurImage } from './BlurImage';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState, categoryId?: string) => void;
  cartItemsCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenCustomHamper?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartItemsCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenCustomHamper,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Minimal Announcement Bar */}
      <div className="w-full bg-[#4A1017] text-[#FFF0AA] text-[10.5px] uppercase tracking-[0.18em] py-2 px-4 border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium">
            <span>Authentic Kutch Sweets Since 1955 • Shipped Pan-India, Dubai, China & Worldwide ✈️</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10.5px] tracking-wider font-sans">
            <span className="text-[#FFF0AA]/80">Nakhtrana, Kachchh (Gujarat)</span>
            <a 
              href="tel:+919925134060" 
              className="text-[#D4AF37] hover:text-white transition-colors pl-3 border-l border-[#D4AF37]/30"
            >
              +91 99251 34060
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#D4AF37]/25'
            : 'bg-[#FFFDF9] py-3.5 border-b border-stone-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* 1. Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group text-left focus:outline-none shrink-0"
          >
            <BrandLogo size="md" variant="purple" />
          </button>

          {/* 2. Desktop Navigation Center Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 font-sans font-medium text-[13px] tracking-wide text-[#332219]">
            {/* Home */}
            <button
              onClick={() => onNavigate('home')}
              className={`relative py-1 whitespace-nowrap hover:text-[#7A1F2B] transition-colors group ${
                currentView === 'home' ? 'text-[#7A1F2B] font-semibold' : ''
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7A1F2B] rounded-full transition-transform duration-300 ${
                  currentView === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* Collections Mega Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('shop')}
                className={`relative inline-flex items-center gap-1.5 py-1 whitespace-nowrap hover:text-[#7A1F2B] transition-colors group ${
                  currentView === 'shop' ? 'text-[#7A1F2B] font-semibold' : ''
                }`}
              >
                <span>Collections</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#7A1F2B]' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7A1F2B] rounded-full transition-transform duration-300 ${
                    currentView === 'shop' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>

              {/* Enhanced Mega Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[440px] bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#D4AF37]/35 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-[#D4AF37]/20 flex items-center justify-between mb-2">
                    <span className="text-xs font-serif font-bold text-[#7A1F2B] uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#D4AF37]" />
                      Royal Sweets Collection
                    </span>
                    <button
                      onClick={() => {
                        onNavigate('shop');
                        setDropdownOpen(false);
                      }}
                      className="text-[11px] text-[#7A1F2B] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onNavigate('shop', cat.id);
                          setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-[#F5EBDD]/70 text-left transition-all border border-transparent hover:border-[#D4AF37]/30 group/item"
                      >
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#F7F4EE] shrink-0">
                          <BlurImage
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                            wrapperClassName="w-full h-full"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#332219] group-hover/item:text-[#7A1F2B] truncate">
                            {cat.name}
                          </p>
                          <p className="text-[10.5px] text-[#332219]/60 truncate">
                            {cat.itemCount} Varieties
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Highlighted Custom Hamper Studio Callout in Mega Dropdown */}
                  {onOpenCustomHamper && (
                    <div className="mt-3 pt-3 border-t border-[#D4AF37]/25 flex items-center justify-between bg-[#F8F3EA] -mx-2 -mb-2 p-3 rounded-2xl border border-[#D4AF37]/30">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#7A1F2B] text-[#FFF0AA] flex items-center justify-center shrink-0">
                          <Gift className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-serif font-bold text-[#241812]">Custom Box Studio</p>
                          <p className="text-[10px] text-stone-600">Curate your own bespoke sweets hamper</p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onOpenCustomHamper();
                          setDropdownOpen(false);
                        }}
                        className="px-3 py-1.5 bg-[#7A1F2B] text-[#FFF0AA] text-[11px] font-bold rounded-xl hover:bg-[#5E1620] active:scale-95 transition-all shadow-2xs whitespace-nowrap cursor-pointer"
                      >
                        ✨ Build Box
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Festive Gift Hampers */}
            <button
              onClick={() => onNavigate('hampers')}
              className={`relative py-1 inline-flex items-center gap-1.5 whitespace-nowrap hover:text-[#7A1F2B] transition-colors group ${
                currentView === 'hampers' ? 'text-[#7A1F2B] font-semibold' : ''
              }`}
            >
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Gift Hampers</span>
              <span className="px-1.5 py-0.5 text-[8.5px] font-bold tracking-wider bg-[#7A1F2B] text-[#FFF0AA] rounded-full uppercase leading-none whitespace-nowrap shadow-2xs">
                Luxury
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7A1F2B] rounded-full transition-transform duration-300 ${
                  currentView === 'hampers' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* About Us */}
            <button
              onClick={() => onNavigate('story')}
              className={`relative py-1 whitespace-nowrap hover:text-[#7A1F2B] transition-colors group ${
                currentView === 'story' ? 'text-[#7A1F2B] font-semibold' : ''
              }`}
            >
              <span>About Us</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7A1F2B] rounded-full transition-transform duration-300 ${
                  currentView === 'story' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* FAQs & Ordering */}
            <button
              onClick={() => onNavigate('faqs')}
              className={`relative py-1 whitespace-nowrap hover:text-[#7A1F2B] transition-colors group ${
                currentView === 'faqs' ? 'text-[#7A1F2B] font-semibold' : ''
              }`}
            >
              <span>FAQs & Ordering</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7A1F2B] rounded-full transition-transform duration-300 ${
                  currentView === 'faqs' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          </nav>

          {/* 3. Utility Actions Group */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search sweets"
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-[#F5EBDD]/60 hover:bg-[#F5EBDD] text-[#332219] hover:text-[#7A1F2B] transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 hover:shadow-xs group"
            >
              <Search className="w-4 h-4 text-[#7A1F2B] group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-xs font-semibold text-[#332219]/80 group-hover:text-[#332219]">
                Search Mithai...
              </span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              aria-label="View Saved Sweets"
              className="relative p-2.5 rounded-full bg-[#F5EBDD]/60 hover:bg-[#F5EBDD] text-[#332219] hover:text-[#7A1F2B] transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 hover:shadow-xs group"
            >
              <Heart className="w-4 h-4 text-[#7A1F2B] group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7A1F2B] text-[#FFF0AA] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFFDF9] shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Pill Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-gradient-to-r from-[#7A1F2B] via-[#6B1723] to-[#4E1019] text-[#FFFDF9] px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow-md hover:brightness-105 active:scale-95 transition-all border border-[#D4AF37]/40 group"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#7A1F2B] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-[#FFF0AA] hidden sm:inline tracking-wide">
                {cartTotal > 0 ? `₹${cartTotal}` : 'Cart'}
              </span>
            </button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-2xl bg-[#7A1F2B]/10 text-[#7A1F2B] hover:bg-[#7A1F2B]/20 active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-[88%] max-w-sm bg-[#FFFDF9] h-full p-5 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#D4AF37]/40">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                <BrandLogo size="sm" variant="purple" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F5EBDD] text-[#7A1F2B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Shop Outlets Location Info */}
              <div className="mt-4 p-3 rounded-2xl bg-[#FBF9F5] border border-stone-200 text-[11px] text-[#241812] space-y-2">
                <span className="text-[10px] font-bold text-[#7A1F2B] uppercase tracking-wider block border-b border-stone-200 pb-1">
                  🏪 MH Sweets Outlets
                </span>
                <div className="space-y-1 text-[11px] text-stone-700">
                  <p><strong>Shop 1:</strong> Opp. Jain Derasar, Main Bazar</p>
                  <p><strong>Shop 2:</strong> Nilkanth Plaza, Highway Branch</p>
                </div>
              </div>

              {/* Visual Sweet Categories Menu in Mobile Drawer */}
              <div className="mt-3 p-3 rounded-2xl bg-[#FBF9F5] border border-stone-200">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                  <span className="text-[10px] font-bold text-[#7A1F2B] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C59B27]" />
                    Sweet Categories
                  </span>
                  <button
                    onClick={() => {
                      onNavigate('shop');
                      setMobileMenuOpen(false);
                    }}
                    className="text-[10px] font-bold text-[#7A1F2B] hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onNavigate('shop', cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#F7F4EE] group-hover:scale-105 transition-transform shadow-xs">
                        <BlurImage src={cat.image} alt={cat.name} className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
                      </div>
                      <span className="text-[9px] font-bold text-[#332219] mt-1 line-clamp-1 leading-tight">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Links */}
              <div className="py-3 space-y-1 font-bold text-xs uppercase tracking-wider text-[#332219]">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] flex items-center justify-between ${
                    currentView === 'home' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : ''
                  }`}
                >
                  <span>Home</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('shop');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] flex items-center justify-between ${
                    currentView === 'shop' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : 'text-[#7A1F2B]'
                  }`}
                >
                  <span>All Royal Mithai Catalog</span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('hampers');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] flex items-center justify-between ${
                    currentView === 'hampers' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : ''
                  }`}
                >
                  <span>Festive Gift Hampers</span>
                  <Gift className="w-4 h-4 text-[#D4AF37]" />
                </button>

                {onOpenCustomHamper && (
                  <button
                    onClick={() => {
                      onOpenCustomHamper();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-3 px-3.5 rounded-xl bg-gradient-to-r from-[#7A1F2B] via-[#6B1723] to-[#4E1019] text-[#FFFDF9] font-bold text-xs flex items-center justify-between shadow-xs border border-[#D4AF37]/40 active:scale-98 transition-transform"
                  >
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-[#D4AF37]" />
                      <span>✨ Build Custom Hamper Box</span>
                    </div>
                    <span className="text-[9px] bg-[#D4AF37] text-[#7A1F2B] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Studio
                    </span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onNavigate('wishlist');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] flex items-center justify-between ${
                    currentView === 'wishlist' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : ''
                  }`}
                >
                  <span>Saved Sweets ({wishlistCount})</span>
                  <Heart className="w-4 h-4 text-[#7A1F2B]" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('story');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] ${
                    currentView === 'story' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : ''
                  }`}
                >
                  <span>About MH Sweets</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('faqs');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-3.5 rounded-xl hover:bg-[#F5EBDD] ${
                    currentView === 'faqs' ? 'bg-[#7A1F2B]/10 text-[#7A1F2B]' : ''
                  }`}
                >
                  <span>FAQs & Ordering Info</span>
                </button>
              </div>
            </div>

            {/* Direct Order Actions */}
            <div className="pt-4 border-t border-[#D4AF37]/30 space-y-2">
              <a
                href="https://wa.me/919429673999?text=Hello%20MH%20Sweets%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Direct WhatsApp (+91 94296 73999)</span>
              </a>

              <a
                href="https://wa.me/919925134060?text=Hello%20MH%20Sweets%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#7A1F2B] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Shop 1 WhatsApp (+91 99251 34060)</span>
              </a>

              <a
                href="https://wa.me/919979916060?text=Hello%20MH%20Sweets%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Shop 2 WhatsApp (+91 99799 16060)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
