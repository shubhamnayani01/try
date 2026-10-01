import React from 'react';
import { ShoppingBag, MessageSquare, Phone, Store, Heart } from 'lucide-react';
import { ViewState } from '../types';

interface MobileQuickBarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
}) => {
  return (
    <aside aria-label="Mobile Navigation Bar" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFF8EE]/95 backdrop-blur-md border-t border-[#D4AF37]/40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] py-2 px-3">
      <div className="flex items-center justify-around max-w-md mx-auto text-center">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors min-w-[56px] ${
            currentView === 'home' ? 'text-[#7A1F2B] font-bold' : 'text-[#332219]/70'
          }`}
        >
          <Store className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Home</span>
        </button>

        {/* Catalog */}
        <button
          onClick={() => onNavigate('shop')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors min-w-[56px] ${
            currentView === 'shop' ? 'text-[#7A1F2B] font-bold' : 'text-[#332219]/70'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Menu</span>
        </button>

        {/* WhatsApp Order */}
        <a
          href="https://wa.me/919925134060?text=Hello%20M%20H%20Sweet%2C%20I%20would%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#25D366] text-white p-2 rounded-full shadow-md min-w-[48px] h-[48px] active:scale-95 transition-transform shrink-0 -mt-3 border-2 border-white"
          title="Order via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors relative min-w-[56px] ${
            currentView === 'wishlist' ? 'text-[#7A1F2B] font-bold' : 'text-[#332219]/70'
          }`}
        >
          <div className="relative">
            <Heart className={`w-5 h-5 ${currentView === 'wishlist' ? 'fill-[#7A1F2B] text-[#7A1F2B]' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#7A1F2B] text-[#FFF0AA] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold">Saved</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-0.5 p-1 rounded-xl text-[#7A1F2B] relative min-w-[56px]"
        >
          <div className="relative">
            <div className="bg-[#7A1F2B] text-[#FFF0AA] p-1.5 rounded-xl shadow-xs">
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D4AF37] text-[#7A1F2B] text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-[#7A1F2B]">
            {cartTotal > 0 ? `₹${cartTotal}` : 'Cart'}
          </span>
        </button>
      </div>
    </aside>
  );
};
