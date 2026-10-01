import React, { useState, useEffect, useRef } from 'react';

// Global in-memory cache to remember images loaded in the current browser session
// Once an image URL has loaded once, it is rendered immediately with 0 delay / 0 re-blur / 0 skeleton.
const LOADED_IMAGE_CACHE = new Set<string>();

// Preload helper to cache images in advance
export const preloadImage = (src: string): Promise<void> => {
  if (!src || LOADED_IMAGE_CACHE.has(src)) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      LOADED_IMAGE_CACHE.add(src);
      resolve();
    };
    img.onerror = () => resolve();
  });
};

// Lightweight inlined warm SVG blur-up placeholder with golden/warm mithai tones
const DEFAULT_BLUR_SVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='none'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23F6EFE5'/%3E%3Ccircle cx='50%25' cy='50%25' r='40%25' fill='%23EAD9C3' filter='url(%23b)' opacity='0.7'/%3E%3Ccircle cx='30%25' cy='40%25' r='30%25' fill='%23D4AF37' filter='url(%23b)' opacity='0.25'/%3E%3C/svg%3E`;

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  placeholderSrc?: string;
  priority?: boolean;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  loading,
  placeholderSrc = DEFAULT_BLUR_SVG,
  priority = false,
  ...props
}) => {
  const isAlreadyCached = src ? LOADED_IMAGE_CACHE.has(src) : false;
  const [isLoaded, setIsLoaded] = useState<boolean>(isAlreadyCached);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(priority || isAlreadyCached);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state if src changes or was loaded previously
  useEffect(() => {
    if (src && LOADED_IMAGE_CACHE.has(src)) {
      setIsLoaded(true);
      setIsInView(true);
    }
  }, [src]);

  // IntersectionObserver for lazy loading un-cached images
  useEffect(() => {
    if (priority || isAlreadyCached || isInView) return;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '350px 0px' } // Preload 350px before entering viewport
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority, isAlreadyCached, isInView]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (src) {
      LOADED_IMAGE_CACHE.add(src);
    }
    setIsLoaded(true);
    props.onLoad?.(e);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#F7F4EE] select-none ${wrapperClassName}`}
    >
      {/* 1. Low-Res SVG Blur-Up Placeholder (only shown if NOT already loaded/cached) */}
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 filter blur-xs"
        />
      )}

      {/* 2. Soft Warm Shimmer Pulse when loading for the very first time */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skeleton-shimmer pointer-events-none z-1" />
      )}

      {/* 3. Actual Image */}
      {(isInView || priority || isAlreadyCached) && (
        <img
          src={src}
          alt={alt}
          loading={priority || isAlreadyCached ? 'eager' : loading || 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={handleImageLoad}
          onError={(e) => {
            setHasError(true);
            props.onError?.(e);
          }}
          ref={(imgElement) => {
            if (imgElement && imgElement.complete && !isLoaded) {
              if (src) LOADED_IMAGE_CACHE.add(src);
              setIsLoaded(true);
            }
          }}
          className={`relative z-2 ${
            isAlreadyCached
              ? 'opacity-100 blur-0 scale-100'
              : `transition-all duration-500 ease-out ${
                  isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-102'
                }`
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};


