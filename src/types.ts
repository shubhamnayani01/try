export interface Product {
  id: string;
  name: string;
  price: number; // base price for 500g or 1kg
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  categoryId: string;
  isBestSeller?: boolean;
  isFestive?: boolean;
  isNew?: boolean;
  isPureGhee?: boolean;
  isSugarFree?: boolean;
  isDryFruit?: boolean;
  image: string;
  description: string;
  ingredients: string[];
  shelfLife: string;
  tag?: string;
  calories?: string;
  sweetnessLevel?: 'Mild' | 'Moderate' | 'Rich';
  texture?: string;
  origin?: string;
  weights: { label: string; price: number }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
  iconName: string;
}

export interface CartItem {
  id: string; // unique cart item id (product.id + weight)
  product: Product;
  selectedWeight: string;
  unitPrice: number;
  quantity: number;
}

export interface Review {
  id: string;
  productId?: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  location?: string;
  productTitle?: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
  isPureGhee?: boolean;
  isSugarFree?: boolean;
  isDryFruit?: boolean;
}

export type ViewState = 'home' | 'shop' | 'product-detail' | 'story' | 'hampers' | 'contact' | 'faqs' | 'wishlist';
