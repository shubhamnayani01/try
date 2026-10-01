import React, { useState, useRef, useEffect } from 'react';
import { Phone, MessageSquare, X, Store, Headphones } from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={widgetRef} className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Contact Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#FFF8EE] rounded-3xl p-4 shadow-2xl border-2 border-[#D4AF37]/50 animate-in fade-in slide-in-from-bottom-4 duration-200 text-[#332219]">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#7A1F2B] text-[#FFF0AA] flex items-center justify-center shrink-0">
                <Headphones className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#7A1F2B]">Store Order & Support</h4>
                <p className="text-[10px] text-[#332219]/70">Connect directly with our outlets</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#332219]/60 hover:text-[#7A1F2B] hover:bg-[#7A1F2B]/10 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Shop Outlets List */}
          <div className="space-y-2.5">
            {/* Shop 1 */}
            <div className="p-2.5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#7A1F2B] flex items-center gap-1">
                  <Store className="w-3.5 h-3.5 text-[#D4AF37]" /> Shop 1 (Main Bazar)
                </span>
                <span className="text-[9px] bg-[#7A1F2B]/10 text-[#7A1F2B] px-1.5 py-0.5 rounded-full font-bold">Main</span>
              </div>
              <p className="text-[10px] text-[#332219]/70">Opp. Jain Derasar, Main Bazar</p>
              
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <a
                  href="tel:+919925134060"
                  className="flex items-center justify-center gap-1.5 bg-[#7A1F2B] text-[#FFF0AA] py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#58131C] transition-all"
                >
                  <Phone className="w-3 h-3 text-[#D4AF37]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/919925134060?text=Hello%20MH%20Sweets%20Shop%201%2C%20I%20would%20like%20to%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#20bd5a] transition-all"
                >
                  <MessageSquare className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Mobile / Quick Orders */}
            <div className="p-2.5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#7A1F2B] flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Direct Mobile / Orders
                </span>
                <span className="text-[9px] bg-[#C59B27]/15 text-[#8A6A23] px-1.5 py-0.5 rounded-full font-bold">+91 94296 73999</span>
              </div>
              <p className="text-[10px] text-[#332219]/70">Direct phone call & WhatsApp orders</p>
              
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <a
                  href="tel:+919429673999"
                  className="flex items-center justify-center gap-1.5 bg-[#7A1F2B] text-[#FFF0AA] py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#58131C] transition-all"
                >
                  <Phone className="w-3 h-3 text-[#D4AF37]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/919429673999?text=Hello%20MH%20Sweets%2C%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#20bd5a] transition-all"
                >
                  <MessageSquare className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Shop 2 */}
            <div className="p-2.5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#7A1F2B] flex items-center gap-1">
                  <Store className="w-3.5 h-3.5 text-[#D4AF37]" /> Shop 2 (Highway)
                </span>
                <span className="text-[9px] bg-[#2F6F4F]/10 text-[#2F6F4F] px-1.5 py-0.5 rounded-full font-bold">Branch</span>
              </div>
              <p className="text-[10px] text-[#332219]/70">Nilkanth Plaza, Highway Rd</p>
              
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <a
                  href="tel:+919979916060"
                  className="flex items-center justify-center gap-1.5 bg-[#7A1F2B] text-[#FFF0AA] py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#58131C] transition-all"
                >
                  <Phone className="w-3 h-3 text-[#D4AF37]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/919979916060?text=Hello%20MH%20Sweets%20Shop%202%2C%20I%20would%20like%20to%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-1.5 px-2 rounded-xl text-[11px] font-bold hover:bg-[#20bd5a] transition-all"
                >
                  <MessageSquare className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Sleek Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-2 p-3 rounded-full shadow-2xl border-2 transition-all duration-300 active:scale-95 ${
          isOpen
            ? 'bg-[#7A1F2B] text-[#FFF0AA] border-[#D4AF37]'
            : 'bg-[#7A1F2B] hover:bg-[#58131C] text-[#FFF0AA] border-[#D4AF37]'
        }`}
        title="Quick Call & WhatsApp Options"
      >
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="w-5 h-5 text-[#D4AF37]" />
          ) : (
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <Phone className="w-4 h-4 text-[#D4AF37]" />
            </div>
          )}
          
          {/* Subtle Notification Pulse Dot when closed */}
          {!isOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
            </span>
          )}
        </div>

        {/* Compact Label visible on hover or desktop */}
        <span className="hidden sm:inline font-bold text-xs pr-1">
          {isOpen ? 'Close' : 'Quick Order'}
        </span>
      </button>
    </div>
  );
};
