import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Tag, Sparkles, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';
import { BlurImage } from './BlurImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: (giftNote: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [giftNote, setGiftNote] = useState('');
  const [showGiftInput, setShowGiftInput] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const grandTotal = subtotal;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FFF8EE] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/40 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#D4AF37]/20 bg-[#FFFDF9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7A1F2B] text-[#FFF0AA] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#332219]">Your Royal Cart</h2>
              <p className="text-[11px] text-[#7A1F2B] font-medium">{items.length} items selected</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F5EBDD] text-[#7A1F2B] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#332219]/60 py-12">
              <div className="w-16 h-16 rounded-full bg-[#F5EBDD] flex items-center justify-center text-[#7A1F2B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-[#332219]">Your Cart is Empty</p>
                <p className="text-xs mt-1">Explore our 100% Desi Ghee & Kaju delicacies.</p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-xs flex items-center gap-3"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#D4AF37]/20 shrink-0">
                  <BlurImage
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-bold text-[#332219] truncate pr-2">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600/70 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7A1F2B] font-medium">
                    Pack: {item.selectedWeight} • ₹{item.unitPrice}
                  </p>

                  {/* Included Box Contents for Custom Hampers */}
                  {item.product.ingredients && item.product.ingredients.length > 0 && (
                    <div className="p-2 rounded-xl bg-[#FAF3EA] border border-[#D4AF37]/30 text-[10px] text-[#332219] my-1.5 space-y-0.5">
                      <strong className="text-[#7A1F2B] block font-bold uppercase tracking-wider text-[9px]">
                        Included Box Contents ({item.product.ingredients.length}):
                      </strong>
                      <p className="leading-relaxed text-[#332219]/90 font-medium">
                        {item.product.ingredients.join(' • ')}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 border border-[#D4AF37]/30 rounded-full px-2 py-0.5 bg-[#FAF3EA]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-[#7A1F2B] font-bold text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-[#7A1F2B] font-bold text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-serif font-bold text-sm text-[#7A1F2B]">
                      ₹{item.unitPrice * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Gift Note Option */}
          {items.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-[#F5EBDD]/60 border border-[#D4AF37]/30 space-y-2">
              <button
                onClick={() => setShowGiftInput(!showGiftInput)}
                className="w-full flex items-center justify-between text-xs font-bold text-[#7A1F2B]"
              >
                <span className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add Complimentary Greeting Card Note</span>
                </span>
                <span className="text-xs text-[#D4AF37] font-serif">{showGiftInput ? '−' : '+'}</span>
              </button>

              {showGiftInput && (
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="e.g. Wishing you a festive season filled with warmth & joy! - The Kapoor Family"
                  className="w-full p-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs text-[#332219] focus:outline-none focus:border-[#7A1F2B] h-20 resize-none"
                />
              )}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#D4AF37]/30 bg-[#FFFDF9] space-y-3">
            <div className="space-y-1.5 text-xs text-[#332219]/80">
              <div className="flex justify-between font-serif text-base font-bold text-[#7A1F2B]">
                <span>Total Amount</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onProceedToCheckout(giftNote);
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7A1F2B] to-[#58131C] text-[#FFF0AA] font-bold text-sm flex items-center justify-center gap-2 border border-[#D4AF37]/40 shadow-xl hover:opacity-95 active:scale-98 transition-all"
            >
              <span>Proceed to Royal Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#332219]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F6F4F]" />
              <span>Encrypted Payment • Guaranteed Fresh Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
