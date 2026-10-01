import { Category } from '../types';

import imgKesarPeda from '../assets/images/prod_kesar_peda_1785069317594.jpg';
import imgMesubPak from '../assets/images/prod_mesub_pak_1785069329681.jpg';
import imgKajuKatli from '../assets/images/prod_kaju_katli_1785069340217.jpg';
import imgMohanthal from '../assets/images/prod_mohanthal_1785069397753.jpg';
import imgKesarShrikhand from '../assets/images/kesar_shrikhand_bowl_1786860572916.jpg';
import imgFarsanPlatter from '../assets/images/gujarati_farsan_platter_1786860590812.jpg';
import imgBengaliRasgulla from '../assets/images/bengali_rasgulla_sweet_1786860608299.jpg';
import imgMilkCake from '../assets/images/milk_cake_barfi_1786860624298.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'mava-items',
    name: 'Mava Items',
    slug: 'mava-items',
    image: imgKesarPeda,
    description: 'Traditional milk khoya delicacies including Penda, Gulab Pak, Dudhi Halvo, and Adadiya.',
    itemCount: 9,
    iconName: 'Crown'
  },
  {
    id: 'pure-ghee',
    name: 'Pure Ghee Items',
    slug: 'pure-ghee',
    image: imgMohanthal,
    description: 'Slow-cooked in 100% pure Desi Ghee — Mohanthar, Laddus, Sata, Meshukh, and Halvo.',
    itemCount: 11,
    iconName: 'Crown'
  },
  {
    id: 'tel-items',
    name: 'Tel Items',
    slug: 'tel-items',
    image: imgMesubPak,
    description: 'Crispy and traditional sweet delicacies prepared in refined oil.',
    itemCount: 1,
    iconName: 'Sparkles'
  },
  {
    id: 'kaju-special',
    name: 'Kaju Special',
    slug: 'kaju-special',
    image: imgKajuKatli,
    description: 'Luxury cashew creations — Kaju Katli, Rolls, Pizza, Biscoff, and Dryfruit combinations.',
    itemCount: 12,
    iconName: 'Sparkles'
  },
  {
    id: 'milk-items',
    name: 'Milk Items',
    slug: 'milk-items',
    image: imgMilkCake,
    description: 'Fresh milk barfi varieties, Milk Cake, Sekela Penda, and Malai Penda.',
    itemCount: 7,
    iconName: 'Heart'
  },
  {
    id: 'bengali-sweets',
    name: 'Bengali Sweets',
    slug: 'bengali-sweets',
    image: imgBengaliRasgulla,
    description: 'Authentic chhena sweets — Rasgulla, Malai Sandwich, Cham Cham, and Saffron Rabadi.',
    itemCount: 6,
    iconName: 'Heart'
  },
  {
    id: 'shrikhand',
    name: 'Shrikhand',
    slug: 'shrikhand',
    image: imgKesarShrikhand,
    description: 'Rich, creamy whipped hung curd in White and Keshar Dryfruits flavors.',
    itemCount: 2,
    iconName: 'Flame'
  },
  {
    id: 'farsan',
    name: 'Farsan',
    slug: 'farsan',
    image: imgFarsanPlatter,
    description: 'Crispy Gujarati savories — Papadi, Sev, Gathiya, Chavdo, and special mixtures.',
    itemCount: 18,
    iconName: 'Flame'
  }
];

