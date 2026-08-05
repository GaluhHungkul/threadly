"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  thumbnails: string[];
  productName: string;
}

export default function ProductGallery({
  mainImage,
  thumbnails,
  productName,
}: ProductGalleryProps) {
  const allImages = [mainImage, ...thumbnails];
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (imgUrl: string) => {
    setImageErrorMap((prev) => ({ ...prev, [imgUrl]: true }));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
      {/* Thumbnail Column (Left on Desktop, Bottom on Mobile) */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none flex-shrink-0">
        {allImages.slice(0, 3).map((imgUrl, index) => {
          const isSelected = selectedImage === imgUrl;
          const hasError = imageErrorMap[imgUrl];

          return (
            <button
              key={index}
              onClick={() => setSelectedImage(imgUrl)}
              className={`relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 flex-shrink-0 bg-[#eee] overflow-hidden transition-all duration-200 ${
                isSelected
                  ? "ring-1 ring-[#1a1c1c] opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Select product image view ${index + 1}`}
            >
              {!hasError ? (
                <Image
                  src={imgUrl}
                  alt={`${productName} view ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  onError={() => handleImageError(imgUrl)}
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full bg-[#e8e8e8] flex flex-col items-center justify-center p-2 text-center text-[10px] text-[#717171]">
                  <div className="w-6 h-8 border border-[#717171]/40 rounded-sm mb-1 flex items-center justify-center">
                    <span className="text-[8px] font-serif">A</span>
                  </div>
                  <span>VIEW {index + 1}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Image Display */}
      <div className="relative flex-1 aspect-[3/4] bg-[#eee] overflow-hidden group">
        {/* Subtle Watermark Branding in top-left matching design image */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
          <span className="font-serif text-sm tracking-[0.25em] text-[#1a1c1c]/40 font-normal uppercase">
            AESTHETE
          </span>
        </div>

        {!imageErrorMap[selectedImage] ? (
          <Image
            src={selectedImage}
            alt={productName}
            fill
            priority
            className="object-cover object-center transition-all duration-500 group-hover:scale-[1.02]"
            onError={() => handleImageError(selectedImage)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          /* SVG / Stylized Architectural Fallback for Main Product Coat */
          <div className="w-full h-full bg-gradient-to-b from-[#f3f3f3] to-[#e8e8e8] flex flex-col items-center justify-center relative p-8">
            <svg
              className="w-48 h-72 text-[#2f3131] opacity-90 drop-shadow-md"
              viewBox="0 0 200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mannequin stand */}
              <ellipse cx="100" cy="270" rx="40" ry="8" fill="#dadada" />
              <line x1="100" y1="200" x2="100" y2="270" stroke="#7e7576" strokeWidth="3" />
              {/* Coat silhouette */}
              <path
                d="M100 30 C80 30 55 45 40 70 L25 150 L55 160 L60 230 L140 230 L145 160 L175 150 L160 70 C145 45 120 30 100 30 Z"
                fill="#2b2d2f"
              />
              {/* Lapels and buttons */}
              <path d="M100 30 L85 90 L100 110 L115 90 Z" fill="#1b1c1c" />
              <circle cx="103" cy="130" r="2.5" fill="#cfc4c5" />
              <circle cx="103" cy="160" r="2.5" fill="#cfc4c5" />
              {/* Hanger neck */}
              <path d="M100 20 L100 30" stroke="#7e7576" strokeWidth="2" />
              <circle cx="100" cy="16" r="4" stroke="#7e7576" strokeWidth="2" fill="none" />
            </svg>
            <p className="mt-4 font-serif text-sm tracking-[0.2em] text-[#1a1c1c]">
              SCULPTURAL WOOL COAT
            </p>
            <p className="text-[11px] tracking-widest text-[#717171] uppercase mt-1">
              CHARCOAL — VIRGIN WOOL
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
