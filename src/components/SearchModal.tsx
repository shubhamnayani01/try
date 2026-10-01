import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { BlurImage } from './BlurImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const popularSearches = ['Kaju Katli', 'Desi Ghee Laddu', 'Anjeer Barfi', 'Gulab Jamun', 'Sugar-Free', 'Gift Hamper'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-[#D4AF37]/20 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sweets, ingredients (e.g. Kaju, Saffron, Desi Ghee)..."
            className="w-full text-sm font-medium text-[#332219] focus:outline-none placeholder:text-[#332219]/40"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F5EBDD] text-[#7A1F2B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {query.trim() === '' ? (
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2.5">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 rounded-full bg-[#F5EBDD] hover:bg-[#7A1F2B] text-[#7A1F2B] hover:text-[#FFF0AA] text-xs font-semibold transition-colors flex items-center gap-1.5 border border-[#D4AF37]/30"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Sweets Visual Picks */}
              <div>
                <p className="text-xs uppercase font-bold text-[#7A1F2B] tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Trending Sweets
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PRODUCTS.slice(0, 6).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="p-2.5 rounded-2xl bg-white hover:bg-[#FAF3EA] border border-[#D4AF37]/30 flex items-center gap-2.5 cursor-pointer transition-all hover:shadow-xs group"
                    >
                      <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#D4AF37]/30 shrink-0">
                        <BlurImage
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          wrapperClassName="w-full h-full"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-[11px] text-[#332219] truncate group-hover:text-[#7A1F2B]">
                          {p.name}
                        </h4>
                        <span className="font-serif font-bold text-xs text-[#7A1F2B]">
                          ₹{p.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-[#332219]/60">
              <p className="font-serif font-bold text-lg text-[#332219]">No sweets found matching "{query}"</p>
              <p className="text-xs mt-1">Try searching for "Kaju", "Saffron", "Ghee", or "Hamper".</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#7A1F2B] uppercase tracking-wider">
                Found {filteredProducts.length} Match{filteredProducts.length > 1 ? 'es' : ''}:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-white hover:bg-[#F5EBDD]/60 border border-[#D4AF37]/20 flex items-center gap-3 cursor-pointer transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#D4AF37]/30 shrink-0">
                      <BlurImage
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        wrapperClassName="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs text-[#332219] group-hover:text-[#7A1F2B]">
                          {p.name}
                        </h4>
                        <span className="font-serif font-bold text-sm text-[#7A1F2B]">
                          ₹{p.price}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#C59B27] uppercase font-bold tracking-wider">
                        {p.category}
                      </p>
                      <p className="text-[10px] text-[#332219]/60 line-clamp-1">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
