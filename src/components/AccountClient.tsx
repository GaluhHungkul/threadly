"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutGrid,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Pencil,
  Truck,
  X,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface WishlistItem {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

export default function AccountClient() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "orders" | "wishlist" | "addresses" | "settings"
  >("dashboard");

  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isEditAddressOpen, setIsEditAddressOpen] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  // Address state
  const [addressData, setAddressData] = useState({
    name: "Julianne Sterling",
    street: "742 Vía de la Paz",
    cityStateZip: "Pacific Palisades, CA 90272",
    country: "United States",
    phone: "+1 (310) 555-0192",
  });

  const wishlistItems: WishlistItem[] = [
    {
      id: "w1",
      name: "STERLING SILVER ORBIT HOOPS",
      price: "$480.00",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
      alt: "Sterling silver orbit hoops",
    },
    {
      id: "w2",
      name: "THE ARCHETYPE TOTE",
      price: "$2,100.00",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
      alt: "Brown luxury archetype tote",
    },
    {
      id: "w3",
      name: "HEAVY SILK DRAPE BLOUSE",
      price: "$750.00",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=600&auto=format&fit=crop",
      alt: "Heavy silk drape blouse on hanger",
    },
    {
      id: "w4",
      name: "POINTED ANKLE BOOT",
      price: "$1,150.00",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
      alt: "Black leather pointed ankle boot",
    },
  ];

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const navItems = [
    { id: "dashboard", label: "DASHBOARD", icon: LayoutGrid },
    { id: "orders", label: "ORDERS", icon: Package },
    { id: "wishlist", label: "WISHLIST", icon: Heart },
    { id: "addresses", label: "ADDRESSES", icon: MapPin },
    { id: "settings", label: "SETTINGS", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 md:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sidebar Navigation (4 Cols) */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Welcome Customer Title */}
            <div className="space-y-1">
              <h1 className="font-serif text-3xl font-normal text-[#1a1c1c] tracking-tight">
                Welcome back,
              </h1>
              <p className="text-xs text-[#717171] font-normal">
                {addressData.name}
              </p>
            </div>

            {/* Sidebar Navigation Items */}
            <nav aria-label="Account navigation" className="space-y-1 pt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center space-x-3.5 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 text-left ${
                      isActive
                        ? "text-[#1a1c1c] border-b border-[#1a1c1c] pb-2.5 mb-1"
                        : "text-[#1a1c1c]/70 hover:text-[#1a1c1c]"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.5} className="flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* Sign Out Link */}
              <div className="pt-6">
                <button
                  onClick={() => alert("You have been signed out.")}
                  className="flex items-center space-x-3 text-xs font-medium tracking-[0.15em] uppercase text-[#a84848] hover:opacity-80 transition-opacity"
                >
                  <LogOut size={16} strokeWidth={1.5} />
                  <span>SIGN OUT</span>
                </button>
              </div>
            </nav>
          </aside>

          {/* Right Content Area (9 Cols) */}
          <div className="lg:col-span-9 space-y-14">
            {/* Top Cards Row: Latest Activity & Primary Shipping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Latest Order Card */}
              <div className="bg-white border border-[#e5e5e5] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Top metadata line */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#717171] uppercase">
                      LATEST ACTIVITY
                    </span>
                    <span className="bg-[#eeeeee] text-[#1a1c1c] text-[9px] font-medium tracking-[0.15em] uppercase px-2.5 py-1">
                      IN TRANSIT
                    </span>
                  </div>

                  {/* Order Number & Date */}
                  <div>
                    <h2 className="font-serif text-2xl font-normal text-[#1a1c1c]">
                      Order #AS-92841
                    </h2>
                    <p className="text-xs text-[#717171] mt-1">
                      Placed on Oct 24, 2023
                    </p>
                  </div>

                  {/* Product thumbnail & Info */}
                  <div className="flex items-center space-x-4 pt-2">
                    <div className="relative w-16 h-20 bg-[#f4f4f4] flex-shrink-0 overflow-hidden">
                      {!imageErrorMap["order-thumb"] ? (
                        <Image
                          src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=600&auto=format&fit=crop"
                          alt="Structured wool overcoat"
                          fill
                          className="object-cover object-center"
                          onError={() => handleImageError("order-thumb")}
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center">
                          <span className="font-serif text-xs text-[#717171]">A</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-xs font-medium tracking-wider text-[#1a1c1c] uppercase">
                        STRUCTURED WOOL OVERCOAT
                      </h3>
                      <p className="text-xs text-[#717171]">$1,250.00</p>
                    </div>
                  </div>
                </div>

                {/* Track Shipment CTA */}
                <button
                  onClick={() => setIsTrackModalOpen(true)}
                  className="w-full bg-[#000000] text-white py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors text-center"
                >
                  TRACK SHIPMENT
                </button>
              </div>

              {/* Card 2: Primary Shipping Address Card */}
              <div className="bg-white border border-[#e5e5e5] p-6 sm:p-8 flex flex-col justify-between space-y-6 relative">
                <div className="space-y-4">
                  {/* Top metadata line */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#717171] uppercase">
                      PRIMARY SHIPPING
                    </span>
                    <button
                      onClick={() => setIsEditAddressOpen(true)}
                      className="text-[#1a1c1c] hover:text-[#717171] transition-colors p-1"
                      aria-label="Edit primary address"
                    >
                      <Pencil size={15} strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Customer Name */}
                  <h2 className="font-serif text-2xl font-normal text-[#1a1c1c]">
                    {addressData.name}
                  </h2>

                  {/* Full Shipping Address */}
                  <div className="text-xs text-[#4c4546] space-y-1 leading-relaxed">
                    <p>{addressData.street}</p>
                    <p>{addressData.cityStateZip}</p>
                    <p>{addressData.country}</p>
                  </div>

                  {/* Phone Number */}
                  <p className="text-xs text-[#717171] pt-1">
                    {addressData.phone}
                  </p>
                </div>

                {/* Manage Addresses link */}
                <div>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className="text-[11px] font-medium tracking-[0.15em] text-[#1a1c1c] uppercase underline underline-offset-4 hover:text-[#717171] transition-colors"
                  >
                    MANAGE ADDRESSES
                  </button>
                </div>
              </div>
            </div>

            {/* Curated Wishlist Section */}
            <section className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1c1c]">
                    Curated Wishlist
                  </h2>
                  <p className="text-xs text-[#717171] mt-1 font-normal">
                    A selection of pieces you're currently observing.
                  </p>
                </div>

                <Link
                  href="/products/1"
                  className="text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase underline underline-offset-4 hover:text-[#717171] transition-colors"
                >
                  VIEW ALL (12)
                </Link>
              </div>

              {/* Wishlist 4-Product Horizontal Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                  <Link
                    key={item.id}
                    href="/products/1"
                    className="group cursor-pointer flex flex-col bg-white p-3 border border-transparent hover:border-[#eeeeee] transition-all duration-300 ambient-shadow-hover"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden mb-3">
                      {!imageErrorMap[item.id] ? (
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          onError={() => handleImageError(item.id)}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#e8e8e8] flex flex-col items-center justify-center p-3 text-center">
                          <div className="w-10 h-12 border border-[#717171]/30 mb-1 flex items-center justify-center">
                            <span className="font-serif text-xs text-[#717171]">A</span>
                          </div>
                          <span className="text-[9px] font-medium text-[#717171] uppercase">
                            {item.name}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="px-1 space-y-1">
                      <h3 className="text-xs font-medium tracking-[0.1em] text-[#1a1c1c] uppercase group-hover:text-[#717171] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs font-normal text-[#717171]">
                        {item.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Track Shipment Modal */}
      {isTrackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 border border-[#e5e5e5] shadow-2xl relative space-y-6">
            <button
              onClick={() => setIsTrackModalOpen(false)}
              className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] p-1"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div>
              <h3 className="font-serif text-2xl font-normal text-[#1a1c1c]">
                Shipment Tracking
              </h3>
              <p className="text-xs text-[#717171] uppercase tracking-widest mt-1">
                ORDER #AS-92841 — DHL EXPRESS #849204812
              </p>
            </div>

            {/* Tracking timeline */}
            <div className="space-y-4 pt-2 border-t border-[#eeeeee]">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#1a1c1c] text-white flex items-center justify-center flex-shrink-0 text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a1c1c]">In Transit — Out for Delivery</p>
                  <p className="text-[11px] text-[#717171]">Paris Logistics Facility — Today, 08:30 AM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#eeeeee] text-[#1a1c1c] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  2
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a1c1c]">Departed Sorting Hub</p>
                  <p className="text-[11px] text-[#717171]">Milan Distribution Center — Oct 25, 2023</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#eeeeee] text-[#1a1c1c] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  3
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a1c1c]">Order Processed & Packaged</p>
                  <p className="text-[11px] text-[#717171]">Atelier Florence — Oct 24, 2023</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsTrackModalOpen(false)}
              className="w-full bg-[#000000] text-white py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Edit Address Modal */}
      {isEditAddressOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 border border-[#e5e5e5] shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsEditAddressOpen(false)}
              className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] p-1"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <h3 className="font-serif text-2xl font-normal text-[#1a1c1c]">
              Edit Primary Address
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-medium tracking-wider text-[#717171] uppercase mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  value={addressData.name}
                  onChange={(e) =>
                    setAddressData({ ...addressData, name: e.target.value })
                  }
                  className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-medium tracking-wider text-[#717171] uppercase mb-1">
                  STREET ADDRESS
                </label>
                <input
                  type="text"
                  value={addressData.street}
                  onChange={(e) =>
                    setAddressData({ ...addressData, street: e.target.value })
                  }
                  className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-medium tracking-wider text-[#717171] uppercase mb-1">
                  CITY, STATE & ZIP
                </label>
                <input
                  type="text"
                  value={addressData.cityStateZip}
                  onChange={(e) =>
                    setAddressData({
                      ...addressData,
                      cityStateZip: e.target.value,
                    })
                  }
                  className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-medium tracking-wider text-[#717171] uppercase mb-1">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  value={addressData.phone}
                  onChange={(e) =>
                    setAddressData({ ...addressData, phone: e.target.value })
                  }
                  className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c]"
                />
              </div>
            </div>

            <button
              onClick={() => setIsEditAddressOpen(false)}
              className="w-full bg-[#000000] text-white py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222222] transition-colors"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      )}

      {/* Footer matching design image */}
      <footer className="w-full bg-[#f9f9f9] border-t border-[#e5e5e5] pt-16 pb-12 mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-3">
              <Link
                href="/"
                className="font-serif text-lg tracking-[0.25em] text-[#1a1c1c] uppercase block"
              >
                AESTHETE
              </Link>
              <p className="text-xs text-[#717171] leading-relaxed max-w-xs font-normal">
                Elevating the everyday through curated editorial vision and uncompromising minimalist design.
              </p>
            </div>

            {/* Service */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                SERVICE
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs text-[#717171]">
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
                CONNECT
              </h4>
              <div className="flex space-x-4 text-xs text-[#717171] mb-6">
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-[#1a1c1c] transition-colors">
                  Journal
                </Link>
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
