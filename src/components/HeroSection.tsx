import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-4 pb-16">
      <div className="relative w-full h-[650px] md:h-[750px] lg:h-[820px] rounded-lg overflow-hidden group">
        {/* Background Image using next/image */}
        <Image
          src="https://images.unsplash.com/photo-1763873993447-1d0be71a96d9"
          alt="The Architecture of Silence - Autumn / Winter Collection"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />

        {/* Gradient Overlay for subtle text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Content Container (Bottom Left) */}
        <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 max-w-xl text-white z-10 space-y-4">
          <p className="text-xs font-medium tracking-[0.25em] text-[#e2e2e2] uppercase">
            AUTUMN / WINTER 2024
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white">
            The Architecture of Silence
          </h1>

          <div className="pt-2">
            <Link
              href="#shop"
              className="inline-block bg-[#000000] hover:bg-[#1b1b1b] text-[#ffffff] text-xs font-medium tracking-[0.2em] px-8 py-4 uppercase rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20 shadow-md"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
