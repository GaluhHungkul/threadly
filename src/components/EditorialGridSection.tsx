import Image from "next/image";
import Link from "next/link";

export default function EditorialGridSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column - Large Image Card (7 Columns on large screens) */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[640px] rounded-lg overflow-hidden group">
          <Image
            src="/images/editorial_suit.png"
            alt="Capsule Collection - Sustainability"
            fill
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white z-10 space-y-1">
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#dadada] uppercase">
              SUSTAINABILITY
            </p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal tracking-wide">
              CAPSULE COLLECTION
            </h2>
          </div>
        </div>

        {/* Right Column - 2 Stacked Cards (5 Columns on large screens) */}
        <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
          {/* Right Top Card - Leather Handbag */}
          <div className="relative h-[240px] sm:h-[290px] md:h-[300px] rounded-lg overflow-hidden group">
            <Image
              src="/images/leather_bag.png"
              alt="New Arrival - Leather Handbag"
              fill
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white z-10 space-y-1">
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#dadada] uppercase">
                New Arrival
              </p>
              <Link
                href="#details"
                className="inline-block font-serif text-lg md:text-xl font-normal tracking-wide hover:underline decoration-1 underline-offset-4"
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>

          {/* Right Bottom Card - Journal Quote */}
          <div className="flex-1 bg-[#eeeeee] rounded-lg p-8 sm:p-10 flex flex-col justify-between items-start min-h-[240px] sm:min-h-[290px] hover:bg-[#e8e8e8] transition-colors duration-300">
            <div>
              <p className="text-[11px] font-medium tracking-[0.25em] text-[#717171] uppercase mb-4">
                THE JOURNAL
              </p>
              <blockquote className="font-serif text-xl sm:text-2xl md:text-2xl font-normal leading-snug text-[#1a1c1c] italic">
                &ldquo;The true essence of style lies in the absence of noise.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6">
              <Link
                href="#editorial"
                className="text-xs font-medium tracking-[0.2em] text-[#1a1c1c] uppercase relative py-1 hover:text-[#717171] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#1a1c1c] hover:after:bg-[#717171] after:transition-colors"
              >
                READ THE EDITORIAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
