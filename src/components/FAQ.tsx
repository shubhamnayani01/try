import React, { useState } from 'react';
import { ChevronDown, MapPin, MessageSquare, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Where are MH Sweets outlets located?',
      a: 'We have two flagship outlets in Nakhtrana, Kachchh, Gujarat:\n• Shop 1: Opp. Jain Derasar, Main Bazar, Nakhtrana (Ph: +91 99251 34060 / +91 94296 73999)\n• Shop 2: Nilkanth Plaza, Shop No. 8, Nakhtrana-Lakhpat Highway, Nakhtrana (Ph: +91 99799 16060)'
    },
    {
      q: 'How do I place an order online or via WhatsApp?',
      a: '1. Add your desired sweets and pack sizes to the cart on this website.\n2. Click "Checkout" and choose WhatsApp Order, UPI payment, or Cash on Pickup/Delivery.\n3. Your order details, quantities, and delivery address will be auto-formatted and sent directly to our master halwai counter on WhatsApp for instant confirmation.'
    },
    {
      q: 'Do you ship sweets internationally or provide travel-proof packaging for Dubai, China, and abroad?',
      a: 'Yes! We regularly pack and ship sweets for travelers and courier delivery to Dubai (UAE), China (Yiwu & Guangzhou), the USA, UK, Canada, and Australia.\nOur international packages use special multi-layer nitrogen vacuum sealing and rigid crush-proof outer tins that maintain pure Desi Ghee aroma and freshness for 30+ days. They are 100% compliant with international airport baggage regulations with clear ingredient labels.'
    },
    {
      q: 'How does nationwide shipping & packaging work?',
      a: 'All our sweets and farsan are vacuum-sealed with food-grade protective packaging to preserve moisture, aroma, and crispness. We partner with express courier networks for pan-India delivery, ensuring your sweets arrive as fresh as if picked straight from our counter.'
    },
    {
      q: 'Can I place bulk orders for weddings, festivals, or corporate events?',
      a: 'Yes! We specialize in custom festive hampers and bulk wedding orders. You can use our "Gift Hampers" studio or contact us directly at +91 99251 34060 to customize sweets assortment, box colors, and personalized greeting cards.'
    },
    {
      q: 'Are your sweets prepared with pure Desi Ghee?',
      a: 'Yes, 100%. All our signature Ghee sweets (including Gulab Pak, Shahi Motichoor Laddu, Mesub, Mohanthal, and Kaju Katli) are prepared exclusively in pure Desi Ghee without palm oil or artificial preservatives.'
    },
    {
      q: 'What is the shelf life of MH Sweets products?',
      a: '• Mava & Bengali Sweets: 4 to 7 days (refrigerate for best taste)\n• Ghee & Kaju Sweets: 15 to 30 days at room temperature\n• Farsan & Namkeen: 45 to 60 days in airtight storage'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-stone-200/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Title */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6A23] block">
            Help & Guidelines
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#241812] tracking-tight">
            FAQs & Ordering Information
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Find answers to common questions about ordering, packaging, store locations, and nationwide delivery.
          </p>
        </div>

        {/* Store Location Notice Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#7A1F2B] text-white shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#7A1F2B] text-sm block">MH Sweets Shop Outlets</span>
              <p className="text-stone-700"><strong>Shop 1:</strong> Opp. Jain Derasar, Main Bazar (Ph: <a href="tel:+919925134060" className="underline font-semibold text-[#7A1F2B]">+91 99251 34060</a>, <a href="tel:+919429673999" className="underline font-semibold text-[#7A1F2B]">+91 94296 73999</a>)</p>
              <p className="text-stone-700"><strong>Shop 2:</strong> Nilkanth Plaza, Highway Branch (Ph: <a href="tel:+919979916060" className="underline font-semibold text-[#7A1F2B]">+91 99799 16060</a>)</p>
              <p className="text-[#215E3F] font-medium pt-0.5">
                Open Daily 8:00 AM - 9:30 PM • Fresh Counter Pickups
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919925134060?text=Hello%20MH%20Sweets%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 shrink-0 shadow-xs hover:bg-[#20ba59] transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-serif font-bold text-sm sm:text-base text-[#241812] hover:text-[#7A1F2B] flex justify-between items-center gap-4 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#7A1F2B]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 whitespace-pre-line font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
