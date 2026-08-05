import Link from "next/link";

export default function ArchiveSaleBanner() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-8 md:py-12">
      <div className="w-full bg-[#000000] text-[#ffffff] rounded-lg px-8 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center justify-center space-y-5 shadow-xl">
        <p className="text-[11px] font-medium tracking-[0.3em] text-[#c6c6c6] uppercase">
          LIMITED TIME
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white">
          The Archive Sale
        </h2>

        <p className="text-xs sm:text-sm font-normal text-[#848484] max-w-md mx-auto leading-relaxed">
          Select pieces from our previous collections, now available at a refined price point.
        </p>

        <div className="pt-4">
          <Link
            href="#archive-sale"
            className="inline-block border border-white text-white hover:bg-white hover:text-black text-xs font-medium tracking-[0.2em] px-8 py-3.5 uppercase rounded-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            EXPLORE SALE
          </Link>
        </div>
      </div>
    </section>
  );
}
