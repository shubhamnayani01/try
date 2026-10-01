import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import { BlurImage } from './BlurImage';

import imgKajuKatli from '../assets/images/prod_kaju_katli_1785069340217.jpg';
import imgMotichoor from '../assets/images/prod_motichoor_laddu_1785069370521.jpg';
import imgGulabJamun from '../assets/images/prod_gulab_jamun_1785069413701.jpg';
import imgAnjeerBarfi from '../assets/images/prod_anjeer_barfi_1785069382538.jpg';
import imgGulabPak from '../assets/images/hero_slide_2_gulab_pak_1785046969331.jpg';
import imgKesarPeda from '../assets/images/prod_kesar_peda_1785069317594.jpg';

export const InstagramGallery: React.FC = () => {
  const posts = [
    { id: 1, image: imgKajuKatli, likes: '2.4K', title: 'Shahi Kaju Katli' },
    { id: 2, image: imgMotichoor, likes: '3.1K', title: 'Kesar Motichoor' },
    { id: 3, image: imgGulabJamun, likes: '1.8K', title: 'Soft Gulab Jamun' },
    { id: 4, image: imgAnjeerBarfi, likes: '4.2K', title: 'Anjeer Dryfruit Barfi' },
    { id: 5, image: imgGulabPak, likes: '5.0K', title: 'Special Gulab Pak' },
    { id: 6, image: imgKesarPeda, likes: '2.9K', title: 'Traditional Kesar Peda' }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6A23]">
            <Instagram className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>@mhsweets.1955</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#241812] tracking-tight">
            Follow Us on Instagram
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Connect with <a href="https://www.instagram.com/mhsweets.1955" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7A1F2B] hover:underline">@mhsweets.1955</a> for fresh daily updates & kitchen stories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/mhsweets.1955"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F7F4EE] border border-stone-200/80 shadow-xs hover:shadow-md transition-all block"
            >
              <BlurImage
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-[#7A1F2B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center space-y-1 z-10">
                <Instagram className="w-4 h-4 text-[#E6C687]" />
                <span className="text-xs font-semibold">{post.title}</span>
                <span className="text-[10px] flex items-center gap-1 text-[#E6C687]">
                  <Heart className="w-3 h-3 fill-[#E6C687]" /> {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
