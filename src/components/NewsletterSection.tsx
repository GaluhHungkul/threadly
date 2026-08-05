"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="w-full border-t border-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1c1c]">
              Join the Inner Circle
            </h3>
            <p className="text-xs sm:text-sm font-normal text-[#717171] max-w-md leading-relaxed">
              Receive early access to new collections and exclusive editorial content directly in your inbox.
            </p>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md text-xs font-medium text-[#1a1c1c] tracking-wide animate-fadeIn">
                Thank you for subscribing to THREADLY Inner Circle.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-[#f4f4f4] border border-[#e5e5e5] focus:border-[#000000] focus:bg-white text-xs text-[#1a1c1c] placeholder-[#717171] px-5 py-3.5 rounded-sm transition-all outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#000000] hover:bg-[#1b1b1b] text-white text-xs font-medium tracking-[0.2em] px-8 py-3.5 uppercase rounded-sm transition-colors duration-300 shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
