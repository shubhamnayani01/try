import React, { useState } from 'react';
import { X, Check, Gift, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { BlurImage } from './BlurImage';
import imgKhazanaBox from '../assets/images/hero_slide_3_khazana_boxes_1785046983582.jpg';

interface CustomGiftBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomHamperToCart: (hamperName: string, price: number, items: string[]) => void;
}

export const CustomGiftBuilderModal: React.FC<CustomGiftBuilderModalProps> = ({
  isOpen,
  onClose,
  onAddCustomHamperToCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const boxes = [
    { 
      id: 'heritage-box', 
      name: 'MH Sweets Signature Luxury Keepsake Box', 
      price: 650, 
      image: imgKhazanaBox,
      description: 'Gold-embossed royal velvet casing with individual compartments, crafted for authentic festive assortments.'
    }
  ];

  const [selectedBox] = useState(boxes[0]);
  const [selectedSweets, setSelectedSweets] = useState<Product[]>([PRODUCTS[0], PRODUCTS[1]]);
  const [greetingText, setGreetingText] = useState('With Best Compliments & Warm Regards');

  const toggleSweet = (product: Product) => {
    if (selectedSweets.some((p) => p.id === product.id)) {
      setSelectedSweets(selectedSweets.filter((p) => p.id !== product.id));
    } else {
      if (selectedSweets.length < 6) {
        setSelectedSweets([...selectedSweets, product]);
      } else {
        alert('You can select up to 6 sweets for this gift box.');
      }
    }
  };

  const sweetsPrice = selectedSweets.reduce((acc, p) => acc + (p.weights[0]?.price || p.price), 0);
  const totalHamperPrice = selectedBox.price + sweetsPrice;

  const handleFinish = () => {
    const sweetsList = selectedSweets.map((s) => s.name);
    const allContents = [
      ...sweetsList,
      greetingText && greetingText.trim() ? `Card: "${greetingText.trim()}"` : null
    ].filter(Boolean) as string[];

    onAddCustomHamperToCart('Bespoke Custom Hamper (' + selectedBox.name + ')', totalHamperPrice, allContents);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#7A1F2B] text-[#FFF0AA] border-b border-[#D4AF37]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Gift className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <h2 className="font-serif font-bold text-xl text-white">Bespoke Royal Hamper Studio</h2>
              <p className="text-[11px] text-[#FFF0AA]/80">Create your tailored luxury gift box step-by-step</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Header */}
        <div className="bg-[#FAF3EA] px-6 py-3 border-b border-[#D4AF37]/20 flex justify-between text-xs font-bold text-[#7A1F2B]">
          <span className={step === 1 ? 'underline text-[#7A1F2B]' : 'opacity-60'}>1. Choose Box</span>
          <span className={step === 2 ? 'underline text-[#7A1F2B]' : 'opacity-60'}>2. Select up to 6 Sweets</span>
          <span className={step === 3 ? 'underline text-[#7A1F2B]' : 'opacity-60'}>3. Greeting Note (Optional)</span>
          <span className={step === 4 ? 'underline text-[#7A1F2B]' : 'opacity-60'}>4. Final Preview</span>
        </div>

        {/* Step Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#332219]">Step 1: Signature Luxury Box Packaging</h3>
              <div className="max-w-md mx-auto">
                <div
                  className="p-4 sm:p-5 rounded-2xl border-2 border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-md flex flex-col gap-3"
                >
                  <div className="relative rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#D4AF37]/30">
                    <BlurImage 
                      src={selectedBox.image} 
                      alt={selectedBox.name} 
                      className="w-full aspect-16/9 object-cover" 
                      wrapperClassName="w-full h-full"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-[#7A1F2B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full z-10">
                      Included
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#332219]">{selectedBox.name}</h4>
                    <p className="text-xs text-[#332219]/70 mt-1 leading-relaxed">{selectedBox.description}</p>
                    <p className="text-sm font-bold text-[#7A1F2B] mt-2">Box Packaging: ₹{selectedBox.price}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-serif font-bold text-lg text-[#332219]">
                  Step 2: Choose Sweets ({selectedSweets.length}/6 Selected)
                </h3>
                <span className="text-xs text-[#7A1F2B] font-bold">Pick up to 6 varieties</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCTS.map((prod) => {
                  const isSelected = selectedSweets.some((s) => s.id === prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => toggleSweet(prod)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#7A1F2B] bg-[#7A1F2B]/10 font-bold'
                          : 'border-[#D4AF37]/30 bg-white hover:bg-[#FAF3EA]'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F7F4EE] shrink-0">
                        <BlurImage src={prod.image} alt={prod.name} className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#332219] truncate">{prod.name}</h4>
                        <p className="text-[10px] text-[#7A1F2B]">₹{prod.weights[0]?.price || prod.price}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isSelected ? 'bg-[#7A1F2B] text-white' : 'border-gray-300'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg text-[#332219]">Step 3: Complimentary Greeting Note (Optional)</h3>
                <p className="text-xs text-[#332219]/70">Add a personalized message or festive wishes to accompany your luxury gift box.</p>
              </div>

              <div className="p-4 rounded-2xl border border-[#D4AF37]/30 bg-white space-y-2">
                <label className="block text-xs font-bold text-[#7A1F2B]">Gold Foil Embossed Card Message (Optional):</label>
                <textarea
                  value={greetingText}
                  onChange={(e) => setGreetingText(e.target.value)}
                  placeholder="e.g. Wishing you a festive season filled with warmth & joy! - The Family"
                  className="w-full p-3 rounded-xl bg-[#FAF3EA]/40 border border-[#D4AF37]/30 text-xs text-[#332219] focus:outline-none focus:border-[#7A1F2B] h-28 resize-none"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 text-xs">
              <h3 className="font-serif font-bold text-lg text-[#332219]">Step 4: Confirm Bespoke Royal Hamper</h3>

              <div className="p-5 rounded-2xl bg-[#FAF3EA] border border-[#D4AF37]/30 space-y-3">
                <div className="flex justify-between font-bold text-sm text-[#7A1F2B] pb-2 border-b border-[#D4AF37]/20">
                  <span>Selected Box:</span>
                  <span>{selectedBox.name}</span>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-[#332219]">Selected Sweets Assortment ({selectedSweets.length}/6):</span>
                  <ul className="list-disc list-inside text-[#332219]/80 pl-2 space-y-0.5">
                    {selectedSweets.map((s) => (
                      <li key={s.id}>{s.name} (₹{s.weights[0]?.price || s.price})</li>
                    ))}
                  </ul>
                </div>

                {greetingText && greetingText.trim() && (
                  <div className="pt-2 border-t border-[#D4AF37]/20 italic text-[#7A1F2B]">
                    Greeting Card: "{greetingText.trim()}"
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="p-5 border-t border-[#D4AF37]/30 bg-[#FFFDF9] flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase text-[#332219]/60 block">Hamper Total</span>
            <span className="font-serif font-bold text-2xl text-[#7A1F2B]">₹{totalHamperPrice}</span>
          </div>

          <div className="flex gap-2">
            {step > 1 && (
              <button
                onClick={() => setStep((step - 1) as any)}
                className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 text-xs font-bold text-[#7A1F2B] hover:bg-[#FAF3EA]"
              >
                Back
              </button>
            )}

            {step < 4 ? (
              <button
                onClick={() => setStep((step + 1) as any)}
                className="px-6 py-2.5 rounded-xl bg-[#7A1F2B] text-[#FFF0AA] text-xs font-bold hover:bg-[#58131C] flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7A1F2B] to-[#58131C] text-[#FFF0AA] text-xs font-bold shadow-xl border border-[#D4AF37]/40 hover:opacity-95"
              >
                Add Bespoke Hamper to Cart • ₹{totalHamperPrice}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
