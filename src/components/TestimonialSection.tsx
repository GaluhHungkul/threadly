import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
        {/* Quotation Mark Icon */}
        <div className="font-serif text-5xl md:text-6xl text-[#1a1c1c] leading-none select-none">
          &rdquo;&rdquo;
        </div>

        {/* Quote Text */}
        <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-[#1a1c1c] italic">
          &ldquo;THREADLY has redefined my wardrobe with pieces that are as much works of art as they are garments. The quality is simply unmatched in the modern market.&rdquo;
        </blockquote>

        {/* Author Metadata with Avatar */}
        <div className="flex items-center gap-4 pt-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#e5e5e5] shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt="Elena Moretti"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              sizes="48px"
            />
          </div>

          <div className="text-left">
            <h4 className="text-xs font-semibold tracking-[0.18em] text-[#1a1c1c] uppercase">
              ELENA MORETTI
            </h4>
            <p className="text-[10px] font-medium tracking-[0.15em] text-[#717171] uppercase">
              CREATIVE DIRECTOR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
