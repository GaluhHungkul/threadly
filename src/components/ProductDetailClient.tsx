"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Check, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductAccordion from "@/components/ProductAccordion";
import SizeGuideModal from "@/components/SizeGuideModal";
import ReviewModal from "@/components/ReviewModal";
import { defaultProduct, ProductReview, CompleteLookItem } from "@/data/productData";

interface ProductDetailClientProps {
  productId?: string;
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const product = defaultProduct;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [buyNowOpen, setBuyNowOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(product.reviews);
  const [lookImageErrors, setLookImageErrors] = useState<Record<string, boolean>>({});

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const handleAddReview = (newReview: ProductReview) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  const handleLookImageError = (id: string) => {
    setLookImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Top Header / Navigation */}
      <Navbar />

      {/* Toast Notification when item added to cart */}
      {addedToCart && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a1c1c] text-white px-5 py-3.5 text-xs font-medium tracking-wider flex items-center gap-3 shadow-xl animate-fadeIn">
          <div className="w-5 h-5 bg-white text-[#1a1c1c] rounded-full flex items-center justify-center">
            <Check size={12} strokeWidth={2.5} />
          </div>
          <span>ADDED {quantity} × {product.name.toUpperCase()} TO BAG</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 md:px-16 py-6 md:py-10">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex items-center space-x-2 text-[11px] font-medium tracking-[0.15em] text-[#717171] uppercase">
            {product.breadcrumb.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {index > 0 && <span className="text-[#cfc4c5] font-normal">&gt;</span>}
                <Link
                  href={index === product.breadcrumb.length - 1 ? "#" : "/"}
                  className={`hover:text-[#1a1c1c] transition-colors ${
                    index === product.breadcrumb.length - 1 ? "text-[#1a1c1c]" : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Product Display Grid (Gallery + Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Product Gallery (7 Cols) */}
          <div className="lg:col-span-7">
            <ProductGallery
              mainImage={product.images.main}
              thumbnails={product.images.thumbnails}
              productName={product.name}
            />
          </div>

          {/* Right Column: Product Metadata & Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col pt-1">
            {/* Title & Price */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#1a1c1c] leading-[1.2] tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#1a1c1c] mb-6">
              {product.price}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#4c4546] leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="w-full h-[1px] bg-[#e5e5e5] mb-8" />

            {/* Color Selection */}
            <div className="mb-8">
              <label className="block text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase mb-3">
                COLOR: {selectedColor.name}
              </label>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select color ${color.name}`}
                      className={`w-7 h-7 rounded-full transition-all duration-200 ${
                        isSelected
                          ? "ring-1 ring-offset-2 ring-[#1a1c1c]"
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase">
                  SIZE
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] font-normal text-[#717171] hover:text-[#1a1c1c] transition-colors"
                >
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-xs font-medium tracking-wider text-center transition-all duration-200 ${
                        isSelected
                          ? "border border-[#1a1c1c] bg-[#1a1c1c] text-white"
                          : "border border-[#e5e5e5] bg-white text-[#1a1c1c] hover:border-[#1a1c1c]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Call-to-Action Buttons */}
            <div className="space-y-3 mb-8">
              {/* Stepper + Add to Cart row */}
              <div className="flex gap-3">
                <div className="flex items-center justify-between border border-[#e5e5e5] px-4 py-3.5 w-28 flex-shrink-0 bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="text-[#1a1c1c] hover:text-[#717171] text-sm font-medium px-1"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-xs font-medium text-[#1a1c1c]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="text-[#1a1c1c] hover:text-[#717171] text-sm font-medium px-1"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#000000] text-white py-3.5 px-6 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={15} strokeWidth={1.5} />
                  <span>ADD TO CART</span>
                </button>
              </div>

              {/* Buy Now Link */}
              <Link
                href="/payment"
                className="block text-center w-full border border-[#e5e5e5] bg-white text-[#1a1c1c] py-3.5 px-6 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#f3f3f3] transition-colors"
              >
                BUY NOW
              </Link>
            </div>

            {/* Expandable Accordions */}
            <ProductAccordion
              detailsAndCare={product.detailsAndCare}
              shippingAndReturns={product.shippingAndReturns}
            />
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="py-16 md:py-24 border-t border-[#e5e5e5] mt-16 md:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1c1c] mb-2">
                Customer Reviews
              </h2>
              <div className="flex items-center space-x-2 text-xs text-[#1a1c1c]">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="#1a1c1c"
                      stroke="#1a1c1c"
                      strokeWidth={1}
                      className="mr-0.5"
                    />
                  ))}
                </div>
                <span className="font-medium">4.9</span>
                <span className="text-[#717171]">({reviewsList.length} Reviews)</span>
              </div>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="self-start sm:self-auto border border-[#e5e5e5] bg-white text-[#1a1c1c] px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#f3f3f3] transition-colors"
            >
              WRITE A REVIEW
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#f3f3f3]/80 p-6 sm:p-8 flex flex-col justify-between space-y-4 rounded-none"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-[#1a1c1c] uppercase">
                      {rev.author}
                    </span>
                    <span className="text-[11px] text-[#717171] uppercase">
                      {rev.date}
                    </span>
                  </div>

                  <div className="flex items-center space-x-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="#1a1c1c"
                        stroke="#1a1c1c"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4c4546] italic leading-relaxed font-normal">
                  &quot;{rev.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete The Look Section */}
        <section className="py-16 md:py-24 border-t border-[#e5e5e5]">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.05em] uppercase text-[#1a1c1c] mb-10">
            COMPLETE THE LOOK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {product.completeTheLook.map((item: CompleteLookItem) => {
              const hasError = lookImageErrors[item.id];
              return (
                <Link
                  href={`/products/${item.id}`}
                  key={item.id}
                  className="group cursor-pointer flex flex-col bg-white rounded-none p-3 transition-all duration-300 ambient-shadow-hover border border-transparent hover:border-[#eeeeee]"
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden mb-4">
                    {item.hasWatermark && (
                      <div className="absolute top-4 left-0 right-0 z-10 text-center pointer-events-none px-2">
                        <span className="font-serif text-xs tracking-[0.25em] text-[#1a1c1c]/50 uppercase font-normal">
                          {item.watermarkText}
                        </span>
                      </div>
                    )}

                    {!hasError ? (
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        onError={() => handleLookImageError(item.id)}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#e8e8e8] flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-12 h-16 border border-[#717171]/30 mb-2 flex items-center justify-center">
                          <span className="font-serif text-xs text-[#717171]">A</span>
                        </div>
                        <span className="text-[10px] font-medium text-[#717171] uppercase tracking-wider">
                          {item.name}
                        </span>
                      </div>
                    )}

                    {/* Watermark subtext overlay box matching design image on card 3 */}
                    {item.hasWatermark && item.watermarkSubtext && (
                      <div className="absolute bottom-2 left-2 right-2 bg-white/85 backdrop-blur-xs p-2 text-center pointer-events-none">
                        <p className="text-[9px] font-serif text-[#1a1c1c]">
                          Minimalist Wool Coat — AESTHETE
                        </p>
                        <p className="text-[8px] text-[#717171]">
                          Polished Leather Chelsea Boot - Black
                        </p>
                        <p className="text-[8px] text-[#1a1c1c] font-medium">
                          Price: $620 USD
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="px-1 space-y-1">
                    <h3 className="text-xs font-medium tracking-[0.12em] text-[#1a1c1c] uppercase group-hover:text-[#717171] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-normal text-[#717171]">
                      {item.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Review Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      {/* Buy Now Checkout Drawer / Modal Simulation */}
      {buyNowOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 border border-[#e5e5e5] shadow-2xl relative">
            <button
              onClick={() => setBuyNowOpen(false)}
              className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] p-1"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl font-normal text-[#1a1c1c] mb-1">
              Express Checkout
            </h3>
            <p className="text-xs text-[#717171] uppercase tracking-[0.15em] mb-6">
              EXCLUSIVE ORDER SUMMARY
            </p>

            <div className="border-t border-b border-[#e5e5e5] py-4 my-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#717171]">{product.name} ({selectedColor.name}, SIZE {selectedSize})</span>
                <span className="font-medium">{product.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717171]">Quantity</span>
                <span className="font-medium">{quantity}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#eeeeee] font-medium text-sm text-[#1a1c1c]">
                <span>Total</span>
                <span>$1,250.00</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Thank you for your order! Order confirmation sent.");
                setBuyNowOpen(false);
              }}
              className="w-full bg-[#000000] text-white py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222] transition-colors"
            >
              COMPLETE PURCHASE
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
