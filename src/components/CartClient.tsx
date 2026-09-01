"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ChevronDown, Truck, Lock, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/zustand/cart";
 

interface CartItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  color: string;
  size: string;
  stockStatus: string;
  quantity: number;
  image: string;
  alt: string;
}

export default function CartClient() {
  const { items, removeItem, decreaseQuantity, increaseQuantity } = useCart()

  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    if (promoCode.trim().toUpperCase() === "WELCOME10" || promoCode.trim().toUpperCase() === "MINIMAL") {
      setDiscountPercent(10);
      setPromoSuccess("10% promotional discount applied!");
    } else if (promoCode.trim().toUpperCase() === "AESTHETE20") {
      setDiscountPercent(20);
      setPromoSuccess("20% VIP promotional discount applied!");
    } else {
      setPromoError("Invalid promo code. Try WELCOME10");
    }
  };

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  // Calculations
  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + estimatedTax;
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Header */}
       

      {/* Main Container */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 md:px-16 py-8 md:py-12">
        {/* Page Title Row */}
        <div className="border-b border-[#e5e5e5] pb-6 mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1a1c1c] leading-tight">
                Shopping Bag
              </h1>
              <p className="text-xs font-medium tracking-[0.2em] text-[#717171] uppercase mt-2">
                {totalItemCount} {totalItemCount === 1 ? "ITEM" : "ITEMS"} IN YOUR SELECTION
              </p>
            </div>

            <Link
              href="/"
              className="text-xs font-normal text-[#1a1c1c] hover:text-[#717171] underline underline-offset-4 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {items.length > 0 ? (
          /* 2-Column Grid Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Cart Items (7 or 8 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id + item.color + item.size}
                  className="bg-white border border-[#e5e5e5] p-5 sm:p-7 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:border-[#cfc4c5]"
                >
                  {/* Item Image */}
                  <div className="relative w-full sm:w-40 aspect-[3/4] bg-[#f4f4f4] flex-shrink-0 overflow-hidden">
                    {!imageErrorMap[item.id] ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                        onError={() => handleImageError(item.id)}
                        sizes="(max-width: 640px) 100vw, 160px"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#e8e8e8] flex flex-col items-center justify-center p-3 text-center">
                        <span className="font-serif text-sm text-[#717171]">AESTHETE</span>
                        <span className="text-[10px] text-[#717171] uppercase mt-1">{item.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-lg font-normal text-[#1a1c1c] leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-sm font-normal text-[#1a1c1c] flex-shrink-0">
                          ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="text-xs font-medium tracking-wider text-[#717171] uppercase">
                        <div className="flex items-center gap-2">
                          COLOR: <div className={`size-4 rounded border`} style={{ background: `${item.color}`}}/> 
                        </div>
                        SIZE: {item.size}
                      </div>

                      {/* <p className="text-xs text-[#1a1c1c] font-normal pt-1">
                        {item.stockStatus}
                      </p> */}
                    </div>

                    {/* Quantity Stepper & Remove Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#eeeeee]">
                      <div className="inline-flex items-center border border-[#e5e5e5] bg-white px-3 py-1.5 space-x-3 text-xs font-medium">
                        <button
                          onClick={() => decreaseQuantity(item.id, item.size, item.color)}
                          className="text-[#1a1c1c] hover:text-[#717171] px-1 font-bold"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-[#1a1c1c] px-2">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id, item.size, item.color)}
                          className="text-[#1a1c1c] hover:text-[#717171] px-1 font-bold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-xs font-medium tracking-wider text-[#717171] hover:text-[#1a1c1c] uppercase flex items-center space-x-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                        <span>REMOVE</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code Accordion */}
              <div className="border-t border-b border-[#e5e5e5] py-4">
                <button
                  onClick={() => setIsPromoOpen(!isPromoOpen)}
                  className="w-full flex items-center justify-between text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase hover:text-[#717171] transition-colors py-1"
                >
                  <span>ADD A PROMO CODE</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isPromoOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isPromoOpen && (
                  <form onSubmit={handleApplyPromo} className="mt-4 pt-2 space-y-2 animate-fadeIn">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter code (e.g. WELCOME10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-2.5 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] uppercase tracking-wider"
                      />
                      <button
                        type="submit"
                        className="bg-[#000000] text-white px-5 py-2.5 text-xs font-medium tracking-widest uppercase hover:bg-[#222222] transition-colors"
                      >
                        APPLY
                      </button>
                    </div>
                    {promoError && <p className="text-[11px] text-[#ba1a1a]">{promoError}</p>}
                    {promoSuccess && <p className="text-[11px] text-[#1a1c1c] font-medium">{promoSuccess}</p>}
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Order Summary Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#f3f3f3]/60 border border-[#e5e5e5] p-6 sm:p-8 space-y-6 sticky top-28">
                <h2 className="font-serif text-xl font-normal text-[#1a1c1c]">
                  Order Summary
                </h2>

                <div className="space-y-3.5 text-xs text-[#4c4546]">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="text-[#1a1c1c]">
                      ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between items-center text-[#1a1c1c]">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span className="italic text-[#717171]">Calculated at checkout</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Estimated Tax</span>
                    <span className="text-[#1a1c1c]">${estimatedTax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-[#e5e5e5] pt-4 flex justify-between items-center text-sm font-semibold text-[#1a1c1c] uppercase tracking-wider">
                    <span>TOTAL</span>
                    <span className="text-base">${total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>

                {/* Proceed to Checkout Button */}
                <Link
                  href="/payment"
                  className="w-full bg-[#000000] text-white py-4 px-6 text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center space-x-2 hover:bg-[#222222] transition-colors block text-center"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>

                {/* Shipping & Security Badges */}
                <div className="pt-4 border-t border-[#e5e5e5] space-y-5">
                  {/* Feature 1 */}
                  <div className="flex items-start space-x-3.5">
                    <Truck size={18} className="text-[#1a1c1c] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-medium tracking-wider text-[#1a1c1c] uppercase">
                        COMPLIMENTARY SHIPPING
                      </p>
                      <p className="text-[11px] text-[#717171] leading-relaxed">
                        On all orders over $1,000. Express options available at checkout.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start space-x-3.5">
                    <Lock size={18} className="text-[#1a1c1c] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-medium tracking-wider text-[#1a1c1c] uppercase">
                        SECURE TRANSACTION
                      </p>
                      <p className="text-[11px] text-[#717171] leading-relaxed">
                        All transactions are encrypted and processed securely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="py-20 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#f3f3f3] text-[#717171] rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-normal text-[#1a1c1c]">
                Your Bag is Empty
              </h2>
              <p className="text-xs text-[#717171] leading-relaxed">
                Discover our latest editorial collection of minimalist essentials.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-[#000000] text-white py-4 px-8 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors"
            >
              EXPLORE NEW ARRIVALS
            </Link>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f9f9f9] border-t border-[#e5e5e5] pt-16 pb-12 mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
            {/* Brand */}
            <div className="md:col-span-5 space-y-3">
              <Link href="/" className="font-serif text-lg tracking-[0.25em] text-[#1a1c1c] uppercase block">
                AESTHETE
              </Link>
              <p className="text-xs text-[#717171] leading-relaxed max-w-xs font-normal">
                Curating minimalist excellence for the contemporary individual since 2024.
              </p>
            </div>

            {/* Customer Service */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                CUSTOMER SERVICE
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                LEGAL
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                CONNECT
              </h4>
              <div className="flex space-x-4 text-xs text-[#717171] mb-6">
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">Newsletter</Link>
              </div>
              <p className="text-[10px] tracking-[0.15em] text-[#717171] uppercase">
                © 2024 AESTHETE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
