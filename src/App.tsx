import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewState, Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { BestSellers } from './components/BestSellers';
import { FestivalCollection } from './components/FestivalCollection';
import { MotichoorComparisonSection } from './components/MotichoorComparisonSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurStory } from './components/OurStory';
import { GlobalReach } from './components/GlobalReach';
import { InstagramGallery } from './components/InstagramGallery';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ShopView } from './components/ShopView';
import { WishlistView } from './components/WishlistView';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { CustomGiftBuilderModal } from './components/CustomGiftBuilderModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { preloadImage } from './components/BlurImage';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Preload top product images during idle time so they are cached instantly
  useEffect(() => {
    const idleCallback = (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 100));
    idleCallback(() => {
      // Preload the first batch of popular sweets
      PRODUCTS.slice(0, 8).forEach((p) => {
        if (p.image) preloadImage(p.image);
      });
    });
  }, []);

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mh_sweets_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted in localStorage)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mh_sweets_wishlist');
      return saved ? JSON.parse(saved) : ['kaju-katli-royal', 'motichoor-laddu-kesar'];
    } catch {
      return ['kaju-katli-royal', 'motichoor-laddu-kesar'];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCustomHamperOpen, setIsCustomHamperOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Checkout Data
  const [checkoutData, setCheckoutData] = useState({
    giftNote: ''
  });

  // Persist Cart & Wishlist
  useEffect(() => {
    try {
      localStorage.setItem('mh_sweets_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed saving cart', err);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('mh_sweets_wishlist', JSON.stringify(wishlistIds));
    } catch (err) {
      console.error('Failed saving wishlist', err);
    }
  }, [wishlistIds]);

  // Handlers
  const handleNavigate = (view: ViewState, categoryId?: string) => {
    setCurrentView(view);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds(wishlistIds.filter((id) => id !== product.id));
    } else {
      setWishlistIds([...wishlistIds, product.id]);
    }
  };

  const handleAddToCart = (product: Product, weightLabel: string, price: number, qty: number = 1) => {
    const cartItemId = `${product.id}-${weightLabel}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          selectedWeight: weightLabel,
          unitPrice: price,
          quantity: qty,
        },
      ];
    });
  };

  const handleAddCustomHamperToCart = (hamperName: string, price: number, itemNames: string[]) => {
    const customProduct: Product = {
      id: 'custom-hamper-' + Date.now(),
      name: hamperName,
      price: price,
      rating: 5,
      reviewsCount: 1,
      category: 'Festive Gift Hampers',
      categoryId: 'gift-hampers',
      image: PRODUCTS[8]?.image || '',
      description: itemNames.join(' • '),
      ingredients: itemNames,
      shelfLife: '30 Days',
      weights: [{ label: 'Custom Box', price: price }]
    };

    handleAddToCart(customProduct, 'Custom Box', price, 1);
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleProceedToCheckout = (giftNote: string) => {
    setCheckoutData({ giftNote });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE] text-[#332219] font-sans antialiased">
      {/* Floating Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartItemsCount={cartItemsCount}
        cartTotal={cartSubtotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => handleNavigate('wishlist')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCustomHamper={() => setIsCustomHamperOpen(true)}
      />

      {/* Main View Router with Subtle Fade-In Transition */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView + (currentView === 'shop' && selectedCategory ? `-${selectedCategory}` : '')}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            {currentView === 'home' && (
              <>
                <Hero
                  onExploreCatalog={() => handleNavigate('shop')}
                  onExploreHampers={() => setIsCustomHamperOpen(true)}
                />
                <FeaturedCategories
                  onSelectCategory={(catId) => handleNavigate('shop', catId)}
                />
                <BestSellers
                  wishlistIds={wishlistIds}
                  onToggleWishlist={handleToggleWishlist}
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                  onAddToCart={handleAddToCart}
                  onViewAll={() => handleNavigate('shop')}
                />
                <FestivalCollection
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                  onExploreHampers={() => setIsCustomHamperOpen(true)}
                />
                <MotichoorComparisonSection
                  onAddToCart={handleAddToCart}
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                />
                <GlobalReach
                  onExploreCatalog={() => handleNavigate('shop')}
                  onExploreHampers={() => setIsCustomHamperOpen(true)}
                />
                <InstagramGallery />
              </>
            )}

            {currentView === 'shop' && (
              <ShopView
                initialCategoryId={selectedCategory}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(prod) => setQuickViewProduct(prod)}
                onAddToCart={handleAddToCart}
                onOpenCustomHamper={() => setIsCustomHamperOpen(true)}
              />
            )}

            {currentView === 'hampers' && (
              <div className="py-8">
                <FestivalCollection
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                  onExploreHampers={() => setIsCustomHamperOpen(true)}
                />
                <ShopView
                  initialCategoryId="gift-hampers"
                  wishlistIds={wishlistIds}
                  onToggleWishlist={handleToggleWishlist}
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                  onAddToCart={handleAddToCart}
                  onOpenCustomHamper={() => setIsCustomHamperOpen(true)}
                />
              </div>
            )}

            {currentView === 'story' && (
              <div className="py-8 space-y-8">
                <OurStory />
                <GlobalReach
                  onExploreCatalog={() => handleNavigate('shop')}
                  onExploreHampers={() => setIsCustomHamperOpen(true)}
                />
                <MotichoorComparisonSection
                  onAddToCart={handleAddToCart}
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                />
                <WhyChooseUs />
              </div>
            )}

            {currentView === 'faqs' && (
              <div className="py-8">
                <FAQ />
                <WhyChooseUs />
              </div>
            )}

            {currentView === 'wishlist' && (
              <WishlistView
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(prod) => setQuickViewProduct(prod)}
                onAddToCart={handleAddToCart}
                onNavigate={handleNavigate}
                onOpenCart={() => setIsCartOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        subtotal={cartSubtotal}
        giftNote={checkoutData.giftNote}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
      />

      {/* Custom Gift Builder Modal */}
      <CustomGiftBuilderModal
        isOpen={isCustomHamperOpen}
        onClose={() => setIsCustomHamperOpen(false)}
        onAddCustomHamperToCart={handleAddCustomHamperToCart}
      />

      {/* Compact Floating Quick-Contact Widget (Call / WhatsApp Options) */}
      <FloatingContactWidget />

      {/* Mobile Sticky Quick Navigation & Cart Bar */}
      <MobileQuickBar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={cartItemsCount}
        cartTotal={cartSubtotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => handleNavigate('wishlist')}
      />
    </div>
  );
}
