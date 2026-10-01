import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Crown,
  Flame,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Imported Local High-Resolution Generated Assets matching exact prompt attachments
import slide1Img from '../assets/images/hero_slide_1_catalog_1785046954935.jpg';
import slide2Img from '../assets/images/hero_slide_2_gulab_pak_1785046969331.jpg';
import slide3Img from '../assets/images/hero_slide_3_khazana_boxes_1785046983582.jpg';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreHampers: () => void;
}

interface SlideData {
  id: number;
  image: string;
  category: string;
  badge: string;
  badgeIcon: React.ElementType;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  accentColor: string;
  actionType: 'catalog' | 'hampers';
}

const SLIDE_DURATION_MS = 5000;
const PROGRESS_INTERVAL_MS = 50;

const slides: SlideData[] = [
  {
    id: 1,
    image: slide1Img,
    category: "Royal Heritage • Est. 1955",
    badge: "Nakhatrana, Kachchh",
    badgeIcon: Crown,
    titleLine1: "70 Years of Kutch",
    titleLine2: "Sweet Traditions",
    description: "Savor original 1955 recipes handcrafted with 100% pure A2 Bilona Desi Ghee and Kashmiri saffron.",
    primaryCta: "Shop Now",
    secondaryCta: "Explore Collection",
    accentColor: "#D4AF37",
    actionType: "catalog"
  },
  {
    id: 2,
    image: slide2Img,
    category: "Signature Speciality",
    badge: "Nakhatrana Special",
    badgeIcon: Flame,
    titleLine1: "Authentic Kutch",
    titleLine2: "Gulab Pak",
    description: "Slow-cooked in brass kadhais with organic Damask rose petals, A2 Desi Ghee, and fresh nuts.",
    primaryCta: "Order Gulab Pak",
    secondaryCta: "Pure Ghee Menu",
    accentColor: "#E05263",
    actionType: "catalog"
  },
  {
    id: 3,
    image: slide3Img,
    category: "Luxury Hampers",
    badge: "Khazana Gift Boxes",
    badgeIcon: Sparkles,
    titleLine1: "Royal Khazana",
    titleLine2: "Dry Fruit Hampers",
    description: "Gold-embossed gift boxes with Kaju Katli, Rose Barfi, and dry fruits in vacuum freshness.",
    primaryCta: "Shop Gift Boxes",
    secondaryCta: "Build Custom Box",
    accentColor: "#C59B27",
    actionType: "hampers"
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onExploreHampers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mobile Touch Swipe references
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Preload Images on Mount
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // Autoplay Timer Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          handleNext();
          return 0;
        }
        return oldProgress + (PROGRESS_INTERVAL_MS / SLIDE_DURATION_MS) * 100;
      });
    }, PROGRESS_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Framer Motion drag end handler with velocity & offset detection
  const swipeConfidenceThreshold = 8000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold || info.offset.x < -40) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold || info.offset.x > 40) {
      handlePrev();
    }
  };

  // Touch fallback handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = slides[currentIndex];
  const BadgeIcon = currentSlide.badgeIcon;

  return (
    <section
      aria-label="MH Sweets Featured Banner"
      className="relative w-full bg-[#120507] text-white flex flex-col lg:block select-none overflow-hidden lg:h-[88vh] lg:min-h-[580px] lg:max-h-[820px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Ken Burns & Smooth Cross-Dissolve */}
      <div className="relative lg:absolute lg:inset-0 w-full h-[280px] sm:h-[380px] lg:h-full z-0 overflow-hidden shrink-0 bg-[#F7F4EE]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{
              opacity: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
              scale: { duration: 6, ease: "easeOut" }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.titleLine1}
              loading="eager"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Dark Gradient Overlay - Optimized so product remains clear centerpiece */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:bg-gradient-to-r lg:from-black/75 lg:via-black/25 lg:to-transparent z-10" />

        {/* Soft Ambient Sparkles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-60">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: Math.random() * 600,
                x: Math.random() * 1000,
                opacity: 0.2,
                scale: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [600, -50],
                opacity: [0.1, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 7,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
            />
          ))}
        </div>
      </div>

      {/* Hero Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 flex flex-col justify-between lg:h-full">

        {/* Top Minimal Tag */}
        <div className="flex items-center justify-between text-xs text-[#FFF0AA]/90 pb-2 lg:pb-0">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>Nakhatrana Kitchens • Fresh Daily</span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4AF37]/30 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
            <span>MH Sweets • Est. 1955</span>
          </div>
        </div>

        {/* Compact Floating Content Card (Positioned directly below the hero image on mobile) */}
        <div className="my-2 lg:my-auto py-2 lg:py-0 flex justify-center lg:justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-[85%] lg:w-[380px] xl:w-[420px] max-w-[420px] bg-[#FFFDF9] lg:bg-[#FFFDF9]/95 backdrop-blur-md text-[#332219] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{ backgroundColor: currentSlide.accentColor }}
              />

              {/* Slide Progress bar inside card top */}
              <div className="w-full h-1 bg-black/5 rounded-full mb-3.5 overflow-hidden">
                <motion.div
                  className="h-full bg-[#D4AF37]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="px-2.5 py-1 rounded-full bg-[#7A1F2B]/10 border border-[#D4AF37]/50 text-[#7A1F2B] font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                  <BadgeIcon className="w-3 h-3 text-[#D4AF37]" />
                  <span>{currentSlide.badge}</span>
                </div>
                <span className="text-[10px] font-serif font-bold text-[#C59B27] tracking-wider uppercase truncate">
                  {currentSlide.category}
                </span>
              </div>

              {/* Product Title (Largest Element) */}
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold text-[#7A1F2B] leading-tight mb-2">
                {currentSlide.titleLine1}{" "}
                <span className="italic font-normal text-[#C59B27] block sm:inline">
                  {currentSlide.titleLine2}
                </span>
              </h1>

              {/* Concise Short Description */}
              <p className="text-xs sm:text-xs text-[#332219]/80 leading-relaxed mb-4 font-sans line-clamp-3">
                {currentSlide.description}
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={() => {
                    if (currentSlide.actionType === 'hampers') {
                      onExploreCatalog();
                    } else {
                      onExploreCatalog();
                    }
                  }}
                  className="flex-1 px-4 py-2.5 maroon-gradient text-white text-[11px] uppercase tracking-wider font-bold rounded-xl hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-1.5 group active:scale-98 cursor-pointer"
                >
                  <span>{currentSlide.primaryCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    if (currentSlide.actionType === 'hampers') {
                      onExploreHampers();
                    } else {
                      onExploreHampers();
                    }
                  }}
                  className="px-4 py-2.5 border border-[#7A1F2B] text-[#7A1F2B] text-[11px] uppercase tracking-wider font-bold rounded-xl hover:bg-[#7A1F2B] hover:text-white transition-all flex items-center justify-center gap-1 active:scale-98 cursor-pointer"
                >
                  <span>{currentSlide.secondaryCta}</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Unobtrusive Bottom Controls Bar */}
        <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/20">
          {/* Slide counter & pagination dots */}
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-sm text-[#FFF0AA] tracking-widest">
              0{currentIndex + 1} <span className="text-white/40 text-xs">/ 0{slides.length}</span>
            </span>

            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setProgress(0);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Autoplay Toggle & Prev/Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white hover:bg-black/60 transition-colors text-xs flex items-center gap-1 cursor-pointer"
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full bg-black/40 border border-[#D4AF37]/40 backdrop-blur-md text-white hover:bg-[#D4AF37] hover:text-[#7A1F2B] transition-all flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full bg-black/40 border border-[#D4AF37]/40 backdrop-blur-md text-white hover:bg-[#D4AF37] hover:text-[#7A1F2B] transition-all flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
