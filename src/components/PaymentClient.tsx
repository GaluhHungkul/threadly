"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CreditCard, Lock, ArrowRight, CheckCircle2, ShoppingBag, Search } from "lucide-react";
 

interface OrderItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  formattedPrice: string;
  image: string;
}

export default function PaymentClient() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("Paris");
  const [postalCode, setPostalCode] = useState("75001");
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentTab, setPaymentTab] = useState<"card" | "paypal">("card");

  // Credit Card state
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Order Placement Modal
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [lookImageErrors, setLookImageErrors] = useState<Record<string, boolean>>({});

  const orderItems: OrderItem[] = [
    {
      id: "item-1",
      name: "STRUCTURED WOOL COAT",
      subtitle: "Size: Medium / Noir",
      price: 1250,
      formattedPrice: "€1,250.00",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "item-2",
      name: "SILK RIBBON SCARF",
      subtitle: "One Size / Bone",
      price: 220,
      formattedPrice: "€220.00",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const shippingCost = shippingMethod === "standard" ? 15 : 45;
  const total = subtotal + shippingCost;

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    // Format into 4-digit groups
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 3) {
      value = `${value.slice(0, 2)} / ${value.slice(2)}`;
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvv(value);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  const handleImageError = (id: string) => {
    setLookImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Shared Navbar */}
       

      {/* Main Payment Container */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 md:px-16 py-6 md:py-12">
        {/* Breadcrumb Trail / Checkout Steps */}
        <nav aria-label="Checkout Progress" className="mb-8 md:mb-12">
          <ol className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-[#717171] uppercase">
            <li>
              <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                CART
              </Link>
            </li>
            <li className="text-[#cfc4c5] font-normal">›</li>
            <li>
              <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                INFORMATION
              </Link>
            </li>
            <li className="text-[#cfc4c5] font-normal">›</li>
            <li>
              <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                SHIPPING
              </Link>
            </li>
            <li className="text-[#cfc4c5] font-normal">›</li>
            <li className="text-[#1a1c1c] font-semibold">PAYMENT</li>
          </ol>
        </nav>

        {/* 2-Column Grid Layout */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form Sections (Shipping Address, Shipping Method, Payment Method) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Section 1: Shipping Address */}
            <section className="space-y-5">
              <h2 className="font-sans text-2xl font-normal text-[#1a1c1c]">
                Shipping Address
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vane"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none"
                  />
                </div>

                {/* Address Line */}
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                    ADDRESS LINE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 124 Rue de Rivoli"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none"
                  />
                </div>

                {/* City & Zip / Postal Code Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                      CITY
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Paris"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                      ZIP / POSTAL CODE
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="75001"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Shipping Method */}
            <section className="space-y-5">
              <h2 className="font-sans text-2xl font-normal text-[#1a1c1c]">
                Shipping Method
              </h2>

              <div className="space-y-3">
                {/* Standard Delivery Option */}
                <label
                  onClick={() => setShippingMethod("standard")}
                  className={`flex items-center justify-between p-4 sm:p-5 border cursor-pointer transition-all ${
                    shippingMethod === "standard"
                      ? "border-[#1a1c1c] bg-[#f3f3f3]/50"
                      : "border-[#e5e5e5] bg-white hover:border-[#717171]"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        shippingMethod === "standard"
                          ? "border-[#1a1c1c]"
                          : "border-[#717171]"
                      }`}
                    >
                      {shippingMethod === "standard" && (
                        <div className="w-2 h-2 rounded-full bg-[#1a1c1c]" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider text-[#1a1c1c] uppercase">
                        STANDARD DELIVERY
                      </p>
                      <p className="text-[11px] text-[#717171]">
                        3-5 business days
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#1a1c1c]">
                    €15.00
                  </span>
                </label>

                {/* Express Shipping Option */}
                <label
                  onClick={() => setShippingMethod("express")}
                  className={`flex items-center justify-between p-4 sm:p-5 border cursor-pointer transition-all ${
                    shippingMethod === "express"
                      ? "border-[#1a1c1c] bg-[#f3f3f3]/50"
                      : "border-[#e5e5e5] bg-white hover:border-[#717171]"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        shippingMethod === "express"
                          ? "border-[#1a1c1c]"
                          : "border-[#717171]"
                      }`}
                    >
                      {shippingMethod === "express" && (
                        <div className="w-2 h-2 rounded-full bg-[#1a1c1c]" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider text-[#1a1c1c] uppercase">
                        EXPRESS SHIPPING
                      </p>
                      <p className="text-[11px] text-[#717171]">
                        Next business day
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#1a1c1c]">
                    €45.00
                  </span>
                </label>
              </div>
            </section>

            {/* Section 3: Payment Method */}
            <section className="space-y-5">
              <h2 className="font-sans text-2xl font-normal text-[#1a1c1c]">
                Payment Method
              </h2>

              <div className="bg-white border border-[#e5e5e5] rounded-none p-6 sm:p-8 space-y-6">
                {/* Tabs Header */}
                <div className="flex border-b border-[#e5e5e5]">
                  <button
                    type="button"
                    onClick={() => setPaymentTab("card")}
                    className={`pb-3 px-6 text-xs font-medium tracking-[0.15em] uppercase transition-colors relative ${
                      paymentTab === "card"
                        ? "text-[#1a1c1c] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1a1c1c]"
                        : "text-[#717171] hover:text-[#1a1c1c]"
                    }`}
                  >
                    CREDIT CARD
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentTab("paypal")}
                    className={`pb-3 px-6 text-xs font-medium tracking-[0.15em] uppercase transition-colors relative ${
                      paymentTab === "paypal"
                        ? "text-[#1a1c1c] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1a1c1c]"
                        : "text-[#717171] hover:text-[#1a1c1c]"
                    }`}
                  >
                    PAYPAL
                  </button>
                </div>

                {paymentTab === "card" ? (
                  <div className="space-y-4 pt-2">
                    {/* Card Number */}
                    <div>
                      <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                        CARD NUMBER
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="0000 0000 0000 0000"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 pr-10 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none tracking-widest"
                        />
                        <CreditCard
                          size={18}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#717171]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Expiry & CVV Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                          EXPIRY DATE
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM / YY"
                          value={expiryDate}
                          onChange={handleExpiryChange}
                          className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none tracking-wider"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase mb-1.5">
                          CVV
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="***"
                          value={cvv}
                          onChange={handleCvvChange}
                          className="w-full bg-[#f3f3f3]/70 border border-[#e5e5e5] px-4 py-3 text-xs text-[#1a1c1c] placeholder-[#717171] focus:outline-none focus:border-[#1a1c1c] focus:bg-white transition-all rounded-none tracking-widest"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center space-y-3">
                    <p className="text-xs text-[#4c4546]">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                  </div>
                )}

                {/* Encrypted Notice */}
                <div className="pt-4 flex items-start space-x-2.5 text-[10px] text-[#717171] leading-relaxed">
                  <Lock size={14} className="flex-shrink-0 mt-0.5 text-[#717171]" strokeWidth={1.5} />
                  <span>
                    Your payment information is encrypted and securely processed. We do not store full card details on our servers.
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <h2 className="font-sans text-xl font-normal text-[#1a1c1c] pb-3 border-b border-[#e5e5e5]">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-4 pb-6 border-b border-[#e5e5e5]">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-20 bg-[#f4f4f4] overflow-hidden flex-shrink-0">
                      {!lookImageErrors[item.id] ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                          onError={() => handleImageError(item.id)}
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center">
                          <span className="font-serif text-xs text-[#717171]">A</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <h3 className="text-xs font-medium tracking-wider text-[#1a1c1c] uppercase">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#717171]">
                        {item.subtitle}
                      </p>
                      <p className="text-xs font-normal text-[#1a1c1c] pt-1">
                        {item.formattedPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="space-y-3 text-xs text-[#4c4546] pb-6 border-b border-[#e5e5e5]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#1a1c1c]">€{subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#1a1c1c]">€{shippingCost.toFixed(2)}</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="flex justify-between items-center text-sm font-medium text-[#1a1c1c] pt-1">
                <span>Total</span>
                <span className="text-base font-semibold">€{total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#000000] text-white py-4 px-6 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>PROCESSING...</span>
                ) : (
                  <>
                    <span>PLACE ORDER</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </>
                )}
              </button>

              <p className="text-[10px] text-[#717171] text-center leading-relaxed">
                By placing your order, you agree to our{" "}
                <Link href="#terms" className="underline underline-offset-2 hover:text-[#1a1c1c]">
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </form>
      </main>

      {/* Confirmation Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-md w-full p-8 border border-[#e5e5e5] shadow-2xl text-center space-y-5">
            <div className="w-12 h-12 bg-[#1a1c1c] text-white rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 size={24} strokeWidth={1.5} />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-normal text-[#1a1c1c]">
                Order Confirmed
              </h3>
              <p className="text-xs text-[#717171] uppercase tracking-widest">
                ORDER #TH-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>

            <p className="text-xs text-[#4c4546] leading-relaxed">
              Thank you for your purchase. A confirmation email with receipt and tracking details has been sent.
            </p>

            <div className="pt-2">
              <Link
                href="/"
                onClick={() => setOrderConfirmed(false)}
                className="inline-block w-full bg-[#000000] text-white py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors"
              >
                RETURN TO HOME
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#f9f9f9] border-t border-[#e5e5e5] pt-16 pb-12 mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
            {/* Logo */}
            <div className="space-y-2">
              <Link href="/" className="font-serif text-lg tracking-[0.25em] text-[#1a1c1c] uppercase block">
                AESTHETE
              </Link>
            </div>

            {/* Service */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                SERVICE
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-[#1a1c1c] transition-colors">Privacy</Link></li>
              </ul>
            </div>

            {/* Follow */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                FOLLOW
              </h4>
              <div className="flex space-x-4 text-xs text-[#717171]">
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">Vimeo</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
