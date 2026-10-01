import { Product } from '../types';

// Mava Items
import imgKesarPeda from '../assets/images/white-penda.jpeg';
import imgGulabPak from '../assets/images/sp-gulabpaak.jpeg';
import imgGulabJamun from '../assets/images/gulab-jamun.jpeg';
import imgTopraPak from '../assets/images/sp-topra-pak.jpeg';
import imgAdadiyaPak from '../assets/images/prod_adadiya_pak_1785069354396.jpg';
import imgDudhiHalwa from '../assets/images/dudhi-halwa.jpeg';
import imgBadamPeda from '../assets/images/badam-peda.jpeg';

// Pure Ghee Items
import imgMohanthal from '../assets/images/special-mohanthal.jpeg';
import imgMagdariyaLaddu from '../assets/images/magdadiya-laddu.jpeg';
import imgMotichoorLaddu from '../assets/images/motichoor-ladoo.jpeg';
import imgChurmiyaLaddu from '../assets/images/churma-laddu.jpeg';
import imgDryfruitsLaddu from '../assets/images/motichoor-ladoo.jpeg';
import imgSaata from '../assets/images/saata.jpeg';
import imgMesubPak from '../assets/images/mesuk.jpeg';
import imgAnjeerBarfi from '../assets/images/prod_anjeer_barfi_1785069382538.jpg';
import imgBadamiNiloHalvo from '../assets/images/badami-nela-halwa.jpeg';
import imgKarachiHalwa from '../assets/images/karachi_bombay_halwa_1786862462408.jpg';

// Tel Items
import imgRegulerSaata from '../assets/images/sp-mini-sata.jpeg';

// Kaju Special
import imgKajuKatli from '../assets/images/kaju-katli.jpeg';
import imgKajuKesharRoll from '../assets/images/kaju-roll.jpeg';
import imgKajuPizza from '../assets/images/sp-kaju-pizza.jpeg';
import imgKajuSahiGulab from '../assets/images/kaju-sahi-gulab.jpeg';
import imgKajuChocoLava from '../assets/images/kaju-choco-lava.jpeg';
import imgKajuDryfruitsMalai from '../assets/images/malai-sandwich.jpeg';
import imgRostala from '../assets/images/rosetella.jpeg';
import imgKajuKesharMilk from '../assets/images/kaju-kesar-milk.jpeg';
import imgKajuBiscooof from '../assets/images/kaju-biscoff.jpeg';
import imgBiscooofPizza from '../assets/images/biscoff-pizza.jpeg';

// Milk Items
import imgWhiteBarfi from '../assets/images/white-barfi.jpeg';
import imgRoseBarfi from '../assets/images/rose-barfi.jpeg';
import imgSekelaPenda from '../assets/images/roasted-penda.jpeg';
import imgMilkCake from '../assets/images/roasted-milk-cake.jpeg';
import imgRoastedGulabPak from '../assets/images/roasted-gulabpak.jpeg';

// Farsan & Others
import imgKesarShrikhand from '../assets/images/srikhand.jpeg';
import imgFarsanPlatter from '../assets/images/gujarati_farsan_platter_1786860590812.jpg';
import imgBhavnagariGathiya from '../assets/images/bhavnagari_gathiya_farsan_1787562820088.jpg';
import imgBesanPapdi from '../assets/images/crispy_besan_papdi_1787562839870.jpg';
import imgGoldenSev from '../assets/images/golden_crispy_sev_1787562859650.jpg';
import imgMixChavanu from '../assets/images/gujarati_mix_chavanu_1787562876669.jpg';
import imgPauvaBatakaChavdo from '../assets/images/pauva_bataka_chavdo_1787562897152.jpg';
import imgSpicyAluBhujia from '../assets/images/spicy_alu_bhujia_1787562915726.jpg';
import imgBengaliRasgulla from '../assets/images/bengali_rasgulla_sweet_1786860608299.jpg';

// New Farsan Images
import imgLasaniyaLakadiya from '../assets/images/lasaniya_lakadiya.jpeg';
import imgLakadiya from '../assets/images/lakadiya.jpeg';
import imgJinaBhavnagari from '../assets/images/jina_bhavnagari.jpeg';
import imgChevdo from '../assets/images/chevdo.jpeg';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. MAVA ITEMS
  // ==========================================
  {
    id: 'mava-penda',
    name: 'Penda',
    price: 400,
    rating: 4.9,
    reviewsCount: 142,
    category: 'Mava Items',
    categoryId: 'mava-items',
    isBestSeller: true,
    image: imgKesarPeda,
    description: 'Authentic mava penda made with fresh khoya, green cardamom, and love.',
    ingredients: ['Fresh Khoya (Milk Mawa)', 'Sugar', 'Green Cardamom'],
    shelfLife: '20 Days',
    tag: 'Popular Mava',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'mava-gulab-pak',
    name: 'Gulab pak',
    price: 400,
    rating: 4.95,
    reviewsCount: 280,
    category: 'Mava Items',
    categoryId: 'mava-items',
    isBestSeller: true,
    image: imgGulabPak,
    description: 'Traditional Gulab Pak made with fresh milk mawa and fragrant rose petals.',
    ingredients: ['Fresh Milk Mawa', 'Rose Petals', 'Sugar', 'Cardamom', 'Nuts'],
    shelfLife: '25 Days',
    tag: 'Nakhtrana Special',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'mava-gulab-jamun',
    name: 'Gulab jamun',
    price: 360,
    rating: 4.88,
    reviewsCount: 195,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgGulabJamun,
    description: 'Soft mava dumplings fried to golden brown and soaked in aromatic sugar syrup.',
    ingredients: ['Fresh Khoya', 'Sugar Syrup', 'Cardamom', 'Saffron'],
    shelfLife: '10 Days (Refrigerated)',
    tag: 'Juicy Sweet',
    weights: [
      { label: '250g', price: 90 },
      { label: '500g', price: 180 },
      { label: '1 Kg', price: 360 }
    ]
  },
  {
    id: 'mava-topra-pak',
    name: 'Topra Pak',
    price: 460,
    rating: 4.85,
    reviewsCount: 110,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgTopraPak,
    description: 'Delicious coconut barfi blended with fresh mava and cardamom.',
    ingredients: ['Grated Coconut', 'Fresh Mawa', 'Sugar', 'Nutmeg'],
    shelfLife: '20 Days',
    weights: [
      { label: '250g', price: 115 },
      { label: '500g', price: 230 },
      { label: '1 Kg', price: 460 }
    ]
  },
  {
    id: 'mava-adadiya',
    name: 'Adadiya',
    price: 600,
    rating: 4.96,
    reviewsCount: 210,
    category: 'Mava Items',
    categoryId: 'mava-items',
    isFestive: true,
    image: imgAdadiyaPak,
    description: 'Nutritious winter mava adadiya pak rich in black gram flour and spices.',
    ingredients: ['Urad Flour', 'Fresh Mawa', 'Edible Gum', 'Dry Ginger', 'Almonds'],
    shelfLife: '30 Days',
    tag: 'Winter Energy',
    weights: [
      { label: '250g', price: 150 },
      { label: '500g', price: 300 },
      { label: '1 Kg', price: 600 }
    ]
  },
  {
    id: 'mava-gundar-pak',
    name: 'Gundar pak',
    price: 600,
    rating: 4.92,
    reviewsCount: 165,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgAdadiyaPak,
    description: 'Traditional mava sweet enriched with crunchy edible gum (gundar) and dry fruits.',
    ingredients: ['Edible Gum (Gundar)', 'Fresh Mawa', 'Sugar', 'Cashews', 'Almonds'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 150 },
      { label: '500g', price: 300 },
      { label: '1 Kg', price: 600 }
    ]
  },
  {
    id: 'mava-dudhi-halvo',
    name: 'Dudhi Halvo',
    price: 480,
    rating: 4.87,
    reviewsCount: 130,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgDudhiHalwa,
    description: 'Fresh bottle gourd halwa cooked with rich mava and silvered almonds.',
    ingredients: ['Fresh Bottle Gourd', 'Fresh Mawa', 'Sugar', 'Almonds', 'Cardamom'],
    shelfLife: '15 Days',
    weights: [
      { label: '250g', price: 120 },
      { label: '500g', price: 240 },
      { label: '1 Kg', price: 480 }
    ]
  },
  {
    id: 'mava-gor-vara-adadiya',
    name: 'Gor vara adadiya',
    price: 640,
    rating: 4.94,
    reviewsCount: 175,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgAdadiyaPak,
    description: 'Winter specialty adadiya prepared with pure organic jaggery (gor) and mava.',
    ingredients: ['Pure Jaggery (Gor)', 'Urad Flour', 'Fresh Mawa', 'Nuts', 'Herbs'],
    shelfLife: '30 Days',
    tag: 'Jaggery Special',
    weights: [
      { label: '250g', price: 160 },
      { label: '500g', price: 320 },
      { label: '1 Kg', price: 640 }
    ]
  },
  {
    id: 'mava-badam-penda',
    name: 'Badam penda',
    price: 440,
    rating: 4.91,
    reviewsCount: 150,
    category: 'Mava Items',
    categoryId: 'mava-items',
    image: imgBadamPeda,
    description: 'Rich mava penda blended with roasted almond paste and green cardamom.',
    ingredients: ['Roasted Almonds', 'Fresh Khoya', 'Sugar', 'Cardamom'],
    shelfLife: '20 Days',
    weights: [
      { label: '250g', price: 110 },
      { label: '500g', price: 220 },
      { label: '1 Kg', price: 440 }
    ]
  },

  // ==========================================
  // 2. PURE GHEE ITEMS
  // ==========================================
  {
    id: 'pure-ghee-mohanthar',
    name: 'Mohanthar',
    price: 540,
    rating: 4.95,
    reviewsCount: 310,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isBestSeller: true,
    isPureGhee: true,
    image: imgMohanthal,
    description: 'Authentic Gujarati Mohanthal slow-cooked in 100% pure Desi Ghee.',
    ingredients: ['Coarse Besan', 'Pure Desi Ghee', 'Sugar Syrup', 'Cardamom', 'Almonds'],
    shelfLife: '25 Days',
    tag: 'Desi Ghee Classic',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'pure-ghee-magdariya-laddu',
    name: 'Magdariya Laddu',
    price: 540,
    rating: 4.9,
    reviewsCount: 140,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgMagdariyaLaddu,
    description: 'Traditional coarse chickpea flour laddus roasted generously in pure Desi Ghee.',
    ingredients: ['Besan', 'Pure Desi Ghee', 'Sugar', 'Cardamom'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'pure-ghee-motichoor-laddu',
    name: 'Motichoor Laddu',
    price: 540,
    rating: 4.93,
    reviewsCount: 260,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isBestSeller: true,
    isPureGhee: true,
    image: imgMotichoorLaddu,
    description: 'Melt-in-mouth fine boondi laddus fried in pure Desi Ghee with saffron.',
    ingredients: ['Gram Flour', 'Pure Desi Ghee', 'Saffron Syrup', 'Melon Seeds'],
    shelfLife: '15 Days',
    tag: 'Festive Favorite',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'pure-ghee-churmiya-laddu',
    name: 'churmiya Laddu',
    price: 540,
    rating: 4.88,
    reviewsCount: 120,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgChurmiyaLaddu,
    description: 'Authentic wheat churma laddus prepared with pure Desi Ghee and nutmeg.',
    ingredients: ['Wheat Flour', 'Pure Desi Ghee', 'Jaggery/Sugar', 'Cardamom'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'pure-ghee-bundi-na-laddu',
    name: 'Bundi na Laddu',
    price: 520,
    rating: 4.86,
    reviewsCount: 115,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgMotichoorLaddu,
    description: 'Classic boondi laddus crafted in pure Desi Ghee with cardamom aroma.',
    ingredients: ['Gram Flour', 'Pure Desi Ghee', 'Sugar Syrup', 'Cardamom'],
    shelfLife: '20 Days',
    weights: [
      { label: '250g', price: 130 },
      { label: '500g', price: 260 },
      { label: '1 Kg', price: 520 }
    ]
  },
  {
    id: 'pure-ghee-dryfruits-laddu',
    name: 'Dryfruits Laddu',
    price: 520,
    rating: 4.92,
    reviewsCount: 180,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    isDryFruit: true,
    image: imgDryfruitsLaddu,
    description: 'Nutritious laddus made with pure Desi Ghee, almonds, cashews, and pistachios.',
    ingredients: ['Cashews', 'Almonds', 'Pistachios', 'Pure Desi Ghee', 'Cardamom'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 130 },
      { label: '500g', price: 260 },
      { label: '1 Kg', price: 520 }
    ]
  },
  {
    id: 'pure-ghee-sata',
    name: 'Desi Ghee Sata',
    price: 500,
    rating: 4.91,
    reviewsCount: 160,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgSaata,
    description: 'Crisp layered sweet sata made in 100% pure Desi Ghee.',
    ingredients: ['Refined Flour', 'Pure Desi Ghee', 'Sugar Coating'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 125 },
      { label: '500g', price: 250 },
      { label: '1 Kg', price: 500 }
    ]
  },
  {
    id: 'pure-ghee-meshukh',
    name: 'Meshukh',
    price: 640,
    rating: 4.97,
    reviewsCount: 290,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isBestSeller: true,
    isPureGhee: true,
    image: imgMesubPak,
    description: 'Iconic porous melt-in-mouth Meshukh (Mesub Pak) overflowing with pure Desi Ghee.',
    ingredients: ['Roasted Besan', 'Pure Desi Ghee', 'Sugar Syrup'],
    shelfLife: '25 Days',
    tag: 'Melt in Mouth',
    weights: [
      { label: '250g', price: 160 },
      { label: '500g', price: 320 },
      { label: '1 Kg', price: 640 }
    ]
  },
  {
    id: 'pure-ghee-khajur-pak',
    name: 'Khajur Pak',
    price: 560,
    rating: 4.89,
    reviewsCount: 145,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    isDryFruit: true,
    image: imgAnjeerBarfi,
    description: 'Naturally sweet date barfi cooked with pure Desi Ghee and mixed nuts.',
    ingredients: ['Dates (Khajur)', 'Pure Desi Ghee', 'Almonds', 'Cashews'],
    shelfLife: '40 Days',
    weights: [
      { label: '250g', price: 140 },
      { label: '500g', price: 280 },
      { label: '1 Kg', price: 560 }
    ]
  },
  {
    id: 'pure-ghee-badami-nilo-halvo',
    name: 'Badami Nilo Halvo',
    price: 520,
    rating: 4.87,
    reviewsCount: 105,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgBadamiNiloHalvo,
    description: 'Unique green wheat extract halwa studded with roasted almonds and pure Desi Ghee.',
    ingredients: ['Wheat Extract', 'Pure Desi Ghee', 'Almonds', 'Green Cardamom'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 130 },
      { label: '500g', price: 260 },
      { label: '1 Kg', price: 520 }
    ]
  },
  {
    id: 'pure-ghee-suko-halvo',
    name: 'Suko Halvo',
    price: 600,
    rating: 4.9,
    reviewsCount: 130,
    category: 'Pure Ghee Items',
    categoryId: 'pure-ghee',
    isPureGhee: true,
    image: imgKarachiHalwa,
    description: 'Classic dry bombay halwa prepared with rich Desi Ghee and cashew bits.',
    ingredients: ['Cornstarch/Wheat', 'Pure Desi Ghee', 'Sugar', 'Cashews'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 150 },
      { label: '500g', price: 300 },
      { label: '1 Kg', price: 600 }
    ]
  },

  // ==========================================
  // 3. TEL ITEM
  // ==========================================
  {
    id: 'tel-reguler-sata',
    name: 'Reguler sata',
    price: 240,
    rating: 4.75,
    reviewsCount: 90,
    category: 'Tel Items',
    categoryId: 'tel-items',
    image: imgRegulerSaata,
    description: 'Crispy layered sweet regular sata prepared with refined cooking oil.',
    ingredients: ['Refined Wheat Flour', 'Refined Oil', 'Sugar Coating'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 60 },
      { label: '500g', price: 120 },
      { label: '1 Kg', price: 240 }
    ]
  },

  // ==========================================
  // 4. KAJU SPECIAL
  // ==========================================
  {
    id: 'kaju-katli',
    name: 'Kaju katli',
    price: 960,
    rating: 4.98,
    reviewsCount: 420,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isBestSeller: true,
    isDryFruit: true,
    image: imgKajuKatli,
    description: 'Classic diamond-cut Kaju Katli made from 100% premium W240 cashews.',
    ingredients: ['Goan Cashews', 'Pure Sugar', 'Green Cardamom'],
    shelfLife: '30 Days',
    tag: 'Best Seller',
    weights: [
      { label: '250g', price: 240 },
      { label: '500g', price: 480 },
      { label: '1 Kg', price: 960 }
    ]
  },
  {
    id: 'kaju-keshar-roll',
    name: 'Kaju keshar Roll',
    price: 1000,
    rating: 4.94,
    reviewsCount: 230,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuKesharRoll,
    description: 'Cashew rolls infused with Kashmiri saffron and filled with pistachio crumbles.',
    ingredients: ['Cashews', 'Saffron', 'Pistachios', 'Sugar'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 250 },
      { label: '500g', price: 500 },
      { label: '1 Kg', price: 1000 }
    ]
  },
  {
    id: 'kaju-pizza',
    name: 'Kaju Pizza',
    price: 1060,
    rating: 4.92,
    reviewsCount: 180,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuPizza,
    description: 'Artisanal cashew sweet crafted into pizza slices with rich dry fruit toppings.',
    ingredients: ['Cashews', 'Almonds', 'Pistachios', 'Saffron'],
    shelfLife: '30 Days',
    tag: 'Royal Special',
    weights: [
      { label: '250g', price: 265 },
      { label: '500g', price: 530 },
      { label: '1 Kg', price: 1060 }
    ]
  },
  {
    id: 'kaju-sahi-gulab',
    name: 'Kaju Sahi Gulab',
    price: 1140,
    rating: 4.96,
    reviewsCount: 210,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuSahiGulab,
    description: 'Shahi rose-flavored cashew sweet with real silver vark and rose essence.',
    ingredients: ['Cashews', 'Rose Petals', 'Edible Silver Foil', 'Sugar'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 285 },
      { label: '500g', price: 570 },
      { label: '1 Kg', price: 1140 }
    ]
  },
  {
    id: 'kaju-choco-lava',
    name: 'Kaju Choco Lava',
    price: 1100,
    rating: 4.91,
    reviewsCount: 155,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuChocoLava,
    description: 'Cashew rolls filled with smooth cocoa chocolate lava fudge center.',
    ingredients: ['Cashews', 'Cocoa Solids', 'Sugar', 'Milk Solids'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 275 },
      { label: '500g', price: 550 },
      { label: '1 Kg', price: 1100 }
    ]
  },
  {
    id: 'dryfruits-anjir-halvo',
    name: 'Dryfruits Anjir Halvo',
    price: 1100,
    rating: 4.95,
    reviewsCount: 240,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgAnjeerBarfi,
    description: 'Rich fig and cashew halwa loaded with almonds and pistachios.',
    ingredients: ['Sun-dried Figs', 'Cashews', 'Almonds', 'Pistachios'],
    shelfLife: '40 Days',
    tag: 'Nutrient Rich',
    weights: [
      { label: '250g', price: 275 },
      { label: '500g', price: 550 },
      { label: '1 Kg', price: 1100 }
    ]
  },
  {
    id: 'kaju-dryfruits-malai',
    name: 'Kaju Dryfruits Malai',
    price: 1040,
    rating: 4.89,
    reviewsCount: 125,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuDryfruitsMalai,
    description: 'Smooth cashew malai rolls stuffed with coarsely ground dry fruits.',
    ingredients: ['Cashews', 'Milk Malai', 'Almonds', 'Pistachios'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 260 },
      { label: '500g', price: 520 },
      { label: '1 Kg', price: 1040 }
    ]
  },
  {
    id: 'kaju-rostala',
    name: 'Rostala',
    price: 1100,
    rating: 4.88,
    reviewsCount: 110,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgRostala,
    description: 'Roasted cashew and dry fruit crunch slices.',
    ingredients: ['Roasted Cashews', 'Almonds', 'Sugar Syrup'],
    shelfLife: '30 Days',
    weights: [
      { label: '250g', price: 275 },
      { label: '500g', price: 550 },
      { label: '1 Kg', price: 1100 }
    ]
  },
  {
    id: 'kaju-keshar-milk',
    name: 'Kaju Keshar Milk',
    price: 1100,
    rating: 4.92,
    reviewsCount: 140,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuKesharMilk,
    description: 'Cashew saffron rolls infused with condensed milk flavor.',
    ingredients: ['Cashews', 'Kashmiri Saffron', 'Milk Powder', 'Sugar'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 275 },
      { label: '500g', price: 550 },
      { label: '1 Kg', price: 1100 }
    ]
  },
  {
    id: 'kaju-biscooof',
    name: 'Kaju Biscooof',
    price: 1200,
    rating: 4.97,
    reviewsCount: 190,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgKajuBiscooof,
    description: 'Modern fusion cashew rolls with lotus biscoff caramel cream center.',
    ingredients: ['Cashews', 'Biscoff Paste', 'Sugar', 'Butter'],
    shelfLife: '25 Days',
    tag: 'Fusion Special',
    weights: [
      { label: '250g', price: 300 },
      { label: '500g', price: 600 },
      { label: '1 Kg', price: 1200 }
    ]
  },
  {
    id: 'kaju-biscooof-pizza',
    name: 'Biscooof Pizza',
    price: 1200,
    rating: 4.96,
    reviewsCount: 170,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgBiscooofPizza,
    description: 'Speculoos biscoff-infused cashew pizza slices topped with caramelized cookie crumbs.',
    ingredients: ['Cashews', 'Biscoff Biscuit Crumbles', 'Caramel', 'Sugar'],
    shelfLife: '25 Days',
    weights: [
      { label: '250g', price: 300 },
      { label: '500g', price: 600 },
      { label: '1 Kg', price: 1200 }
    ]
  },
  {
    id: 'kaju-anjir-kasata',
    name: 'Anjir Kasata',
    price: 1100,
    rating: 4.93,
    reviewsCount: 160,
    category: 'Kaju Special',
    categoryId: 'kaju-special',
    isDryFruit: true,
    image: imgAnjeerBarfi,
    description: 'Multi-layered fig, cashew, and pistachio cassata slices.',
    ingredients: ['Figs', 'Cashews', 'Pistachios', 'Sugar'],
    shelfLife: '35 Days',
    weights: [
      { label: '250g', price: 275 },
      { label: '500g', price: 550 },
      { label: '1 Kg', price: 1100 }
    ]
  },

  // ==========================================
  // 5. MILK ITEMS
  // ==========================================
  {
    id: 'milk-white-barfi',
    name: 'White Barfi',
    price: 540,
    rating: 4.89,
    reviewsCount: 150,
    category: 'Milk Items',
    categoryId: 'milk-items',
    image: imgWhiteBarfi,
    description: 'Classic pure white milk barfi delicately seasoned with cardamom.',
    ingredients: ['Milk Solids (Mawa)', 'Sugar', 'Green Cardamom'],
    shelfLife: '15 Days',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'milk-rose-barfi',
    name: 'Rose Barfi',
    price: 540,
    rating: 4.91,
    reviewsCount: 165,
    category: 'Milk Items',
    categoryId: 'milk-items',
    image: imgRoseBarfi,
    description: 'Fragrant rose water infused milk barfi topped with pistachios.',
    ingredients: ['Milk Mawa', 'Damask Rose Essence', 'Sugar', 'Pistachios'],
    shelfLife: '15 Days',
    weights: [
      { label: '250g', price: 135 },
      { label: '500g', price: 270 },
      { label: '1 Kg', price: 540 }
    ]
  },
  {
    id: 'milk-sekela-penda',
    name: 'Sekela Penda',
    price: 560,
    rating: 4.94,
    reviewsCount: 220,
    category: 'Milk Items',
    categoryId: 'milk-items',
    isBestSeller: true,
    image: imgSekelaPenda,
    description: 'Slow-roasted golden brown milk pedas with rich caramel notes.',
    ingredients: ['Slow-Roasted Khoya', 'Sugar', 'Cardamom', 'Nutmeg'],
    shelfLife: '20 Days',
    tag: 'Roasted Legend',
    weights: [
      { label: '250g', price: 140 },
      { label: '500g', price: 280 },
      { label: '1 Kg', price: 560 }
    ]
  },
  {
    id: 'milk-cake',
    name: 'Milk Cake',
    price: 560,
    rating: 4.92,
    reviewsCount: 200,
    category: 'Milk Items',
    categoryId: 'milk-items',
    image: imgMilkCake,
    description: 'Traditional grainy two-tone caramelized milk cake.',
    ingredients: ['Full Cream Milk', 'Sugar', 'Lemon Juice', 'Cardamom'],
    shelfLife: '15 Days',
    weights: [
      { label: '250g', price: 140 },
      { label: '500g', price: 280 },
      { label: '1 Kg', price: 560 }
    ]
  },
  {
    id: 'milk-malai-penda',
    name: 'Malai Penda',
    price: 480,
    rating: 4.88,
    reviewsCount: 135,
    category: 'Milk Items',
    categoryId: 'milk-items',
    image: imgKesarPeda,
    description: 'Soft cream malai pedas seasoned with organic cardamom.',
    ingredients: ['Milk Cream (Malai)', 'Khoya', 'Sugar', 'Cardamom'],
    shelfLife: '15 Days',
    weights: [
      { label: '250g', price: 120 },
      { label: '500g', price: 240 },
      { label: '1 Kg', price: 480 }
    ]
  },
  {
    id: 'milk-roasted-gulab-pak',
    name: 'Roasted Gulab Pak',
    price: 560,
    rating: 4.95,
    reviewsCount: 240,
    category: 'Milk Items',
    categoryId: 'milk-items',
    image: imgRoastedGulabPak,
    description: 'Slow-roasted milk gulab pak with caramel mawa flavor.',
    ingredients: ['Roasted Milk Mawa', 'Rose Petals', 'Sugar', 'Almonds'],
    shelfLife: '20 Days',
    weights: [
      { label: '250g', price: 140 },
      { label: '500g', price: 280 },
      { label: '1 Kg', price: 560 }
    ]
  },
  {
    id: 'milk-sp-gulab-pak',
    name: 'Sp.Gulab Pak',
    price: 520,
    rating: 4.93,
    reviewsCount: 210,
    category: 'Milk Items',
    categoryId: 'milk-items',
    isBestSeller: true,
    image: imgGulabPak,
    description: 'Special edition Gulab Pak with extra saffron and pistachios.',
    ingredients: ['Fresh Mawa', 'Rose Petals', 'Saffron', 'Cashews', 'Pistachios'],
    shelfLife: '25 Days',
    tag: 'House Special',
    weights: [
      { label: '250g', price: 130 },
      { label: '500g', price: 260 },
      { label: '1 Kg', price: 520 }
    ]
  },

  // ==========================================
  // 6. BENGALI SWEETS
  // ==========================================
  {
    id: 'bengali-rasgulla',
    name: 'Rasgulla',
    price: 400,
    rating: 4.89,
    reviewsCount: 190,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Soft and spongy fresh chhena balls soaked in light rose sugar syrup.',
    ingredients: ['Fresh Cottage Cheese (Chhena)', 'Sugar Syrup', 'Rose Water'],
    shelfLife: '7 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'bengali-malai-sendwich',
    name: 'Malai Sendwich',
    price: 400,
    rating: 4.92,
    reviewsCount: 175,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Soft chhena sandwich stuffed with sweet cream malai and pistachios.',
    ingredients: ['Chhena', 'Sweetened Cream', 'Pistachios', 'Sugar Syrup'],
    shelfLife: '7 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'bengali-keshar-kali',
    name: 'Keshar Kali',
    price: 400,
    rating: 4.88,
    reviewsCount: 130,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Saffron-infused chhena sweet dipped in cardamom syrup.',
    ingredients: ['Chhena', 'Kashmiri Saffron', 'Sugar Syrup', 'Cardamom'],
    shelfLife: '7 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'bengali-cham-cham',
    name: 'Cham Cham',
    price: 380,
    rating: 4.86,
    reviewsCount: 120,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Traditional oval chhena sweet coated in dried coconut flakes.',
    ingredients: ['Chhena', 'Coconut Flakes', 'Sugar Syrup', 'Rose Water'],
    shelfLife: '7 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 95 },
      { label: '500g', price: 190 },
      { label: '1 Kg', price: 380 }
    ]
  },
  {
    id: 'bengali-keshar-angur-rabadi',
    name: 'Keshar Angur Rabadi',
    price: 400,
    rating: 4.95,
    reviewsCount: 210,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    isBestSeller: true,
    image: imgBengaliRasgulla,
    description: 'Mini chhena grape pearls soaked in thick saffron rabadi.',
    ingredients: ['Mini Chhena Balls', 'Saffron Rabadi', 'Pistachios', 'Cardamom'],
    shelfLife: '5 Days (Refrigerated)',
    tag: 'Royal Chhena',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },
  {
    id: 'bengali-mango-dilite',
    name: 'Mango Dilite',
    price: 400,
    rating: 4.9,
    reviewsCount: 140,
    category: 'Bengali Sweets',
    categoryId: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Fresh mango pulp flavored chhena sweet delight.',
    ingredients: ['Chhena', 'Alphonso Mango Pulp', 'Sugar Syrup'],
    shelfLife: '7 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 100 },
      { label: '500g', price: 200 },
      { label: '1 Kg', price: 400 }
    ]
  },

  // ==========================================
  // 7. SHRIKHAND
  // ==========================================
  {
    id: 'shrikhand-white',
    name: 'White Shrikhand',
    price: 240,
    rating: 4.88,
    reviewsCount: 130,
    category: 'Shrikhand',
    categoryId: 'shrikhand',
    image: imgKesarShrikhand,
    description: 'Creamy hung curd whipped with cardamom, nutmeg, and sugar.',
    ingredients: ['Hung Curd (Chakka)', 'Sugar', 'Green Cardamom', 'Nutmeg'],
    shelfLife: '10 Days (Refrigerated)',
    weights: [
      { label: '250g', price: 60 },
      { label: '500g', price: 120 },
      { label: '1 Kg', price: 240 }
    ]
  },
  {
    id: 'shrikhand-keshar-dryfruits',
    name: 'Keshar Dryfruits Shrikhand',
    price: 380,
    rating: 4.96,
    reviewsCount: 220,
    category: 'Shrikhand',
    categoryId: 'shrikhand',
    isBestSeller: true,
    image: imgKesarShrikhand,
    description: 'Rich saffron shrikhand loaded with almonds, pistachios, and cashews.',
    ingredients: ['Hung Curd', 'Kashmiri Saffron', 'Almonds', 'Pistachios', 'Sugar'],
    shelfLife: '10 Days (Refrigerated)',
    tag: 'Cool Refreshment',
    weights: [
      { label: '250g', price: 95 },
      { label: '500g', price: 190 },
      { label: '1 Kg', price: 380 }
    ]
  },

  // ==========================================
  // 8. FARSAN MENU
  // ==========================================
  {
    id: 'farsan-papadi',
    name: 'Papadi',
    price: 280,
    rating: 4.9,
    reviewsCount: 180,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgBesanPapdi,
    description: 'Crispy gram flour papadi spiced with carom seeds (ajwain).',
    ingredients: ['Besan', 'Oil', 'Ajwain', 'Black Pepper', 'Salt'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 70 },
      { label: '500g', price: 140 },
      { label: '1 Kg', price: 280 }
    ]
  },
  {
    id: 'farsan-sev',
    name: 'Sev',
    price: 260,
    rating: 4.87,
    reviewsCount: 160,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgGoldenSev,
    description: 'Classic crunchy besan sev snack.',
    ingredients: ['Besan', 'Refined Oil', 'Salt', 'Asafoetida'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-bhavnagari-gathiya',
    name: 'Bhavnagari Gathiya',
    price: 260,
    rating: 4.93,
    reviewsCount: 210,
    category: 'Farsan',
    categoryId: 'farsan',
    isBestSeller: true,
    image: imgBhavnagariGathiya,
    description: 'Soft and porous authentic Bhavnagari gathiya.',
    ingredients: ['Besan', 'Black Pepper', 'Ajwain', 'Oil', 'Salt'],
    shelfLife: '45 Days',
    tag: 'Gujarati Classic',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-champakali-gathiya',
    name: 'Champakali Gathiya',
    price: 260,
    rating: 4.88,
    reviewsCount: 130,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgBhavnagariGathiya,
    description: 'Crispy flower-shaped champakali gathiya savory.',
    ingredients: ['Besan', 'Oil', 'Spices', 'Salt'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-lakadiya',
    name: 'Lakadiya',
    price: 260,
    rating: 4.85,
    reviewsCount: 110,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgLakadiya,
    description: 'Crispy stick-shaped savory lakadiya gathiya.',
    ingredients: ['Besan', 'Black Pepper', 'Oil', 'Salt'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-jina-lakadiya',
    name: 'Jina Lakadiya',
    price: 260,
    rating: 4.86,
    reviewsCount: 105,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgJinaBhavnagari,
    description: 'Thin and extra crispy jina lakadiya sticks.',
    ingredients: ['Besan', 'Spices', 'Oil', 'Salt'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-alu-sev',
    name: 'Alu Sev',
    price: 300,
    rating: 4.92,
    reviewsCount: 175,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgSpicyAluBhujia,
    description: 'Crispy potato-infused bhujia sev seasoned with tangy spices.',
    ingredients: ['Mashed Potatoes', 'Besan', 'Chili Powder', 'Amchur', 'Salt'],
    shelfLife: '40 Days',
    weights: [
      { label: '250g', price: 75 },
      { label: '500g', price: 150 },
      { label: '1 Kg', price: 300 }
    ]
  },
  {
    id: 'farsan-masala-papdi',
    name: 'Masala Papdi',
    price: 300,
    rating: 4.89,
    reviewsCount: 140,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgBesanPapdi,
    description: 'Spicy masala papdi blended with chili and chatpata spices.',
    ingredients: ['Besan', 'Red Chili', 'Garam Masala', 'Ajwain', 'Oil'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 75 },
      { label: '500g', price: 150 },
      { label: '1 Kg', price: 300 }
    ]
  },
  {
    id: 'farsan-lasaniya',
    name: 'Lasaniya',
    price: 280,
    rating: 4.91,
    reviewsCount: 155,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgLasaniyaLakadiya,
    description: 'Garlic-infused spicy lasaniya sev mixture.',
    ingredients: ['Fresh Garlic Paste', 'Besan', 'Red Chili', 'Salt', 'Oil'],
    shelfLife: '40 Days',
    weights: [
      { label: '250g', price: 70 },
      { label: '500g', price: 140 },
      { label: '1 Kg', price: 280 }
    ]
  },
  {
    id: 'farsan-nailon-sev',
    name: 'Nailon Sev',
    price: 280,
    rating: 4.87,
    reviewsCount: 125,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgGoldenSev,
    description: 'Ultra-thin nylon sev ideal for chaat toppings and bhel.',
    ingredients: ['Gram Flour', 'Oil', 'Turmeric', 'Salt'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 70 },
      { label: '500g', price: 140 },
      { label: '1 Kg', price: 280 }
    ]
  },
  {
    id: 'farsan-chavanu',
    name: 'Chavanu',
    price: 260,
    rating: 4.9,
    reviewsCount: 170,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgMixChavanu,
    description: 'Classic Gujarati mixture chavanu with puffed rice and fried lentil nuggets.',
    ingredients: ['Puffed Rice', 'Besan Sev', 'Peanuts', 'Fried Lentils', 'Spices'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-khatta-mittha',
    name: 'Khatta Mittha',
    price: 260,
    rating: 4.93,
    reviewsCount: 185,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgMixChavanu,
    description: 'Tangy-sweet crunchy mixture with sago, peanuts, and sev.',
    ingredients: ['Besan Sev', 'Puffed Rice', 'Peanuts', 'Sugar', 'Mango Powder'],
    shelfLife: '45 Days',
    tag: 'Family Mix',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-banglori',
    name: 'Banglori',
    price: 280,
    rating: 4.88,
    reviewsCount: 115,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgMixChavanu,
    description: 'Crispy South-style spiced banglori mixture with curry leaves.',
    ingredients: ['Fried Gram Flour', 'Curry Leaves', 'Peanuts', 'Chili'],
    shelfLife: '40 Days',
    weights: [
      { label: '250g', price: 70 },
      { label: '500g', price: 140 },
      { label: '1 Kg', price: 280 }
    ]
  },
  {
    id: 'farsan-pauva-no-chavdo',
    name: 'Pauva No Chavdo',
    price: 260,
    rating: 4.91,
    reviewsCount: 150,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgChevdo,
    description: 'Light roasted flattened rice (pauva) chavdo with peanuts and mustard seeds.',
    ingredients: ['Roasted Flattened Rice', 'Peanuts', 'Turmeric', 'Green Chili', 'Mustard Seeds'],
    shelfLife: '45 Days',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-masala-mamra',
    name: 'Masala Mamra',
    price: 20,
    rating: 4.85,
    reviewsCount: 95,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgPauvaBatakaChavdo,
    description: 'Chatpata spiced puffed rice packet.',
    ingredients: ['Puffed Rice', 'Turmeric', 'Chili Powder', 'Salt', 'Oil'],
    shelfLife: '60 Days',
    weights: [
      { label: '1 Packet', price: 20 },
      { label: '5 Packets', price: 100 }
    ]
  },
  {
    id: 'farsan-dryfruits-chavdo-300g',
    name: 'Dryfruits Chavdo 300Gm',
    price: 200,
    rating: 4.96,
    reviewsCount: 220,
    category: 'Farsan',
    categoryId: 'farsan',
    isBestSeller: true,
    isDryFruit: true,
    image: imgChevdo,
    description: 'Royal dry fruit chavdo packet packed with cashews, raisins, and almonds.',
    ingredients: ['Cashews', 'Almonds', 'Raisins', 'Potato Wafers', 'Spices'],
    shelfLife: '45 Days',
    tag: 'Royal Snack Packet',
    weights: [
      { label: '300g Packet', price: 200 },
      { label: '2 Packets (600g)', price: 400 }
    ]
  },
  {
    id: 'farsan-farali-bataka-chavdo',
    name: 'Farali Bataka Chavdo',
    price: 260,
    rating: 4.92,
    reviewsCount: 165,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgChevdo,
    description: 'Fasting (Farali) crispy potato stick chavdo with peanuts and rock salt.',
    ingredients: ['Potato Shreds', 'Peanuts', 'Rock Salt (Sendha Namak)', 'Black Pepper'],
    shelfLife: '45 Days',
    tag: 'Farali Special',
    weights: [
      { label: '250g', price: 65 },
      { label: '500g', price: 130 },
      { label: '1 Kg', price: 260 }
    ]
  },
  {
    id: 'farsan-gajar-chavdo',
    name: 'Gajar Chavdo',
    price: 320,
    rating: 4.89,
    reviewsCount: 110,
    category: 'Farsan',
    categoryId: 'farsan',
    image: imgChevdo,
    description: 'Special carrot shred (gajar) savory chavdo snack.',
    ingredients: ['Crispy Carrot Shreds', 'Potato', 'Peanuts', 'Spices'],
    shelfLife: '40 Days',
    weights: [
      { label: '250g', price: 80 },
      { label: '500g', price: 160 },
      { label: '1 Kg', price: 320 }
    ]
  }
];
