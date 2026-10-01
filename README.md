# 🍬 MH Sweets — Official Website

> Premium Gujarati sweets & farsan from Nakhtrana, Gujarat — delivered fresh across India & worldwide.

---

## 🏪 About

**MH Sweets** (Mukhantraj Halwai Sweets) is a traditional Indian sweet shop based in **Nakhtrana, Kutch, Gujarat**. This is their official e-commerce website built with React + Vite, featuring a full product catalog, cart, checkout with UPI QR payment, custom gift builder, and global reach showcase.

---

## ✨ Features

- 🛒 **Full Shopping Cart** — Add to cart, update quantities, remove items
- 🔍 **Product Search & Filters** — Filter by category, best sellers, festive, dry fruit, pure ghee
- 👁️ **Quick View Modal** — View product details, ingredients, shelf life without leaving the page
- 💝 **Custom Gift Builder** — Build personalised gift boxes for festivals and special occasions
- 📦 **Checkout with UPI QR** — WhatsApp order + UPI QR code payment flow
- ❤️ **Wishlist** — Save favourite products for later
- 🎂 **Festival Collection** — Curated seasonal & festive sweets
- 🌍 **Global Reach Section** — Dubai & Middle East, China & East Asia shipping info
- 📸 **Before/After Comparison Slider** — Interactive Motichoor Laddu craft showcase
- 📱 **Mobile Quick Bar** — Sticky bottom navigation bar for mobile users
- 💬 **Floating Contact Widget** — WhatsApp / call / Instagram quick links
- 🔎 **Instagram Gallery** — Live social proof section

---

## 🗂️ Product Categories

| Category | Count |
|---|---|
| Mava Items | 9 |
| Pure Ghee Items | 11 |
| Tel Items | 1 |
| Kaju Special | 12 |
| Milk Items | 7 |
| Bengali Sweets | 6 |
| Shrikhand | 2 |
| Farsan | 18 |
| **Total** | **66** |

---

## 🛠️ Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.8 |
| Vite | 6 |
| Tailwind CSS | 4 |
| Lucide React | 0.546 |
| GSAP | 3.15 |
| Motion | 12 |
| Lenis (Smooth Scroll) | 1.3 |
| Three.js | 0.185 |
| Canvas Confetti | 1.9 |

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

App runs at: **http://localhost:3000**

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # All product & UI images
├── components/
│   ├── Navbar.tsx               # Top navigation + search + cart icon
│   ├── Hero.tsx                 # Hero banner with auto-sliding carousel
│   ├── FeaturedCategories.tsx   # Category quick-links grid
│   ├── BestSellers.tsx          # Best seller products section
│   ├── MotichoorComparisonSection.tsx  # Before/After slider section
│   ├── FestivalCollection.tsx   # Festive sweets showcase
│   ├── GlobalReach.tsx          # International shipping section
│   ├── ShopView.tsx             # Full product listing + filters
│   ├── ProductCard.tsx          # Individual product card
│   ├── QuickViewModal.tsx       # Product detail modal
│   ├── CartDrawer.tsx           # Slide-in cart drawer
│   ├── CheckoutModal.tsx        # Checkout + UPI QR payment
│   ├── CustomGiftBuilderModal.tsx # Gift box builder
│   ├── WishlistView.tsx         # Saved wishlist
│   ├── SearchModal.tsx          # Full-screen search
│   ├── OurStory.tsx             # Brand story section
│   ├── WhyChooseUs.tsx          # Trust signals section
│   ├── FAQ.tsx                  # Frequently asked questions
│   ├── InstagramGallery.tsx     # Instagram feed section
│   ├── Footer.tsx               # Site footer
│   ├── FloatingContactWidget.tsx # WhatsApp/Call/Instagram widget
│   └── MobileQuickBar.tsx       # Mobile bottom navigation
├── data/
│   └── products.ts      # All 66 product definitions with images
├── types.ts             # TypeScript interfaces
└── App.tsx              # Root app component
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📞 Contact

- 📍 **Shop:** Nakhtrana, Kutch, Gujarat, India
- 📱 **WhatsApp / Phone:** Available via the floating contact widget on the website
- 🌐 **Exports to:** Dubai, Middle East, China & East Asia

---

> Made with ❤️ for MH Sweets — *Taste the Tradition of Kutch*
