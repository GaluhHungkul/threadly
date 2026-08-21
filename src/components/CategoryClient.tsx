"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CategoryInfo, CategoryProduct } from "@/data/categoryData";

interface CategoryClientProps {
  category: CategoryInfo;
}

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

const PRICE_RANGES = [
  { label: "Under $300", min: 0, max: 300 },
  { label: "$300 – $600", min: 300, max: 600 },
  { label: "$600 – $1,000", min: 600, max: 1000 },
  { label: "Over $1,000", min: 1000, max: Infinity },
];

function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, ""), 10);
}

export default function CategoryClient({ category }: CategoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;

  // All unique colors from products
  
  const clearAll = () => {
    setSelectedSubcategories([]);
    setSelectedPriceRange(null);
    setSelectedColors([]);
    setSearchQuery("");
    setCurrentPage(1);
    setSelectedSize(null)
  };


  const allColors = useMemo(() => {
    const seen = new Set<string>();
    const result: { hex: string; name: string }[] = [];
    category.products.forEach((p) => {
      p.colors.forEach((hex) => {
        if (!seen.has(hex)) {
          seen.add(hex);
          result.push({ hex, name: hex });
        }
      });
    });
    return result;
  }, [category.products]);

  const toggleSubcategory = (name: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
    setCurrentPage(1);
  };

  const toggleColor = (hex: string) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
    setCurrentPage(1);
  };

  const toggleSize = (size: string) => {
    setSelectedSize((prev) =>
      prev === size ? null : size
    );
    setCurrentPage(1);
  };

  const hasFilters =
    selectedSubcategories.length > 0 ||
    selectedPriceRange !== null ||
    selectedColors.length > 0 ||
    searchQuery.trim() !== "";


  const filteredProducts = useMemo(() => {
    let result: CategoryProduct[] = [...category.products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.colorName.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }

    if (selectedSubcategories.length > 0) {
      result = result.filter((p) =>
        selectedSubcategories.includes(p.subcategory)
      );
    }

    if (selectedPriceRange !== null) {
      const range = PRICE_RANGES[selectedPriceRange];
      result = result.filter((p) => {
        const price = parsePrice(p.price);
        return price >= range.min && price < range.max;
      });
    }

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c))
      );
    }

    if (selectedSize !== null) {
      result = result.filter((p) =>
        p.sizes.some((c) => selectedSize === c)
      );
    }

    if (sortBy === "price-asc") result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    else if (sortBy === "price-desc") result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    else if (sortBy === "newest") result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));

    return result;
  }, [category.products, searchQuery, selectedSubcategories, selectedPriceRange, selectedColors, sortBy, selectedSize]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Featured";

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Banner ── */}
        <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-4 pb-10">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-lg group">
            <Image
              src={category.heroImage}
              alt={category.heroAlt}
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-10 left-8 md:bottom-14 md:left-14 z-10 max-w-lg text-white space-y-3">
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#d4d4d4] uppercase">
                {category.tagline}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight">
                {category.title}
              </h1>
              <p className="text-sm text-[#d0cdcd] leading-relaxed max-w-sm font-normal">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ── */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-[11px] font-medium tracking-[0.15em] text-[#717171] uppercase">
              <li>
                <Link href="/" className="hover:text-[#1a1c1c] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[#cfc4c5]">/</li>
              <li className="text-[#1a1c1c]">{category.slug.toUpperCase()}</li>
            </ol>
          </nav>
        </div>

        {/* ── Main Content: Filters + Grid ── */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pb-24">
          {/* Toolbar: Search + Sort + Mobile filter toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[#e5e5e5] pb-6">
            {/* Search */}
            <div className="relative flex items-center border-b border-[#1a1c1c] pb-1 max-w-xs w-full">
              <Search
                size={14}
                strokeWidth={1.5}
                className="text-[#717171] mr-2 flex-shrink-0"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={`Search ${category.slug}...`}
                className="bg-transparent text-xs text-[#1a1c1c] focus:outline-none w-full placeholder-[#717171]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-[#717171] hover:text-[#1a1c1c] transition-colors"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Result count */}
              <span className="text-[11px] text-[#717171] tracking-wider hidden sm:block">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "piece" : "pieces"}
              </span>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase border border-[#e5e5e5] px-4 py-2 hover:bg-[#f3f3f3] transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-[#1a1c1c] uppercase border border-[#e5e5e5] px-4 py-2 hover:bg-[#f3f3f3] transition-colors min-w-[160px] justify-between"
                >
                  <span>{currentSortLabel}</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.5}
                    className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-[#e5e5e5] shadow-lg min-w-[180px]">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-xs tracking-wider transition-colors ${
                          sortBy === opt.value
                            ? "text-[#1a1c1c] font-medium bg-[#f3f3f3]"
                            : "text-[#717171] hover:text-[#1a1c1c] hover:bg-[#f9f9f9]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-12 lg:gap-16">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-[200px] flex-shrink-0">
              <FilterSidebar
              hasFilters={hasFilters}
              clearAll={clearAll}
              category={category}
              selectedSubcategories={selectedSubcategories}
              toggleSubcategory={toggleSubcategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              allColors={allColors}
              selectedColors={selectedColors}
              toggleColor={toggleColor}
              toggleSize={toggleSize}
              selectedSize={selectedSize}
            />
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {paginatedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="font-serif text-2xl text-[#1a1c1c] mb-3">
                    No pieces found
                  </p>
                  <p className="text-xs text-[#717171] mb-6 tracking-wide">
                    Try adjusting your filters or search query.
                  </p>
                  <button
                    onClick={clearAll}
                    className="text-xs font-medium tracking-[0.2em] uppercase text-[#1a1c1c] border border-[#1a1c1c] px-6 py-3 hover:bg-[#1a1c1c] hover:text-white transition-colors duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} categorySlug={category.slug} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > PRODUCTS_PER_PAGE && (
                <div className="mt-16 flex flex-col items-center gap-6">
                  {/* Progress indicator */}
                  <div className="w-full max-w-xs">
                    <div className="flex justify-between text-[11px] text-[#717171] tracking-wider mb-2 uppercase">
                      <span>Showing {Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length}</span>
                    </div>
                    <div className="h-[1px] bg-[#e5e5e5] w-full">
                      <div
                        className="h-[1px] bg-[#1a1c1c] transition-all duration-500"
                        style={{
                          width: `${Math.min((currentPage * PRODUCTS_PER_PAGE) / filteredProducts.length, 1) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Page buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase border border-[#e5e5e5] text-[#717171] hover:border-[#1a1c1c] hover:text-[#1a1c1c] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ← Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 text-[11px] font-medium transition-colors ${
                          currentPage === page
                            ? "bg-[#1a1c1c] text-white"
                            : "border border-[#e5e5e5] text-[#717171] hover:border-[#1a1c1c] hover:text-[#1a1c1c]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase border border-[#e5e5e5] text-[#717171] hover:border-[#1a1c1c] hover:text-[#1a1c1c] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-80 max-w-[90vw] h-full bg-[#f9f9f9] overflow-y-auto p-8 shadow-2xl">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] transition-colors"
              aria-label="Close filters"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <FilterSidebar
              hasFilters={hasFilters}
              clearAll={clearAll}
              category={category}
              selectedSubcategories={selectedSubcategories}
              toggleSubcategory={toggleSubcategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              allColors={allColors}
              selectedColors={selectedColors}
              toggleColor={toggleColor}
              toggleSize={toggleSize}
              selectedSize={selectedSize}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-[#1a1c1c] text-white py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#333] transition-colors"
            >
              Apply Filters ({filteredProducts.length} results)
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function ProductCard({
  product,
  categorySlug,
}: {
  product: CategoryProduct;
  categorySlug: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/products/${product.id}`}
      className="group cursor-pointer flex flex-col bg-white rounded-lg p-3 transition-all duration-300 ambient-shadow-hover border border-transparent hover:border-[#eeeeee]"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#f4f4f4] mb-4">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.alt}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center">
            <span className="font-serif text-lg text-[#717171]">T</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-[#1a1c1c] text-white text-[9px] font-medium tracking-[0.18em] px-2.5 py-1 uppercase">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="bg-white text-[#1a1c1c] text-[9px] font-medium tracking-[0.18em] px-2.5 py-1 uppercase border border-[#e5e5e5]">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick shop overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-[#1a1c1c]/90 py-3 flex items-center justify-center gap-2 backdrop-blur-sm z-10">
          <span className="text-[10px] font-medium tracking-[0.2em] text-white uppercase">
            Quick Shop
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div className="px-1 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-xs font-medium tracking-[0.1em] text-[#1a1c1c] uppercase group-hover:text-[#717171] transition-colors leading-snug">
            {product.name}
          </h2>
          <span className="text-xs font-normal text-[#1a1c1c] flex-shrink-0">
            {product.price}
          </span>
        </div>
        <p className="text-[11px] font-normal text-[#717171]">
          {product.colorName}
        </p>
        {/* Color swatches */}
        {product.colors.length > 1 && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.colors.map((hex) => (
              <span
                key={hex}
                className="w-3 h-3 rounded-full border border-[#e5e5e5]"
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

type FilterSidebarProps = {
  hasFilters: boolean;
  clearAll: () => void;

  category: {
    subcategories: {
      name: string;
      count: number;
    }[];
  };

  selectedSubcategories: string[];
  toggleSubcategory: (subcategory: string) => void;

  selectedPriceRange: number | null;
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<number | null>>;

  allColors: {
    hex: string;
  }[];

  selectedColors: string[];
  toggleColor: (hex: string) => void;
  toggleSize: (size: string) => void;
  selectedSize: string | null
};

const FilterSidebar = ({
  hasFilters,
  clearAll,
  category,
  selectedSubcategories,
  toggleSubcategory,
  selectedPriceRange,
  setSelectedPriceRange,
  allColors,
  selectedColors,
  toggleColor,
  toggleSize,
  selectedSize
}: FilterSidebarProps) => {
    
  return (
    <aside className="w-full space-y-8">
      {/* Filters Header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
          Filters
        </span>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-[11px] text-[#717171] hover:text-[#1a1c1c] transition-colors tracking-wide"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Subcategory Filter */}
      <div className="space-y-3">
        <p className="text-[11px] font-medium tracking-[0.12em] text-[#1a1c1c] uppercase">
          Category
        </p>
        <ul className="space-y-2.5">
          {category.subcategories.map((sub) => {
            const active = selectedSubcategories.includes(sub.name);
            return (
              <li key={sub.name}>
                <button
                  onClick={() => toggleSubcategory(sub.name)}
                  className="flex items-center gap-3 w-full group"
                >
                  <span
                    className={`w-3.5 h-3.5 flex-shrink-0 border transition-colors ${
                      active
                        ? "bg-[#1a1c1c] border-[#1a1c1c]"
                        : "border-[#c0bcbc] group-hover:border-[#1a1c1c]"
                    } flex items-center justify-center`}
                  >
                    {active && (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L3 6L7 2"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-xs text-[#4c4546] group-hover:text-[#1a1c1c] transition-colors">
                    {sub.name}{" "}
                    <span className="text-[#717171]">({sub.count})</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <p className="text-[11px] font-medium tracking-[0.12em] text-[#1a1c1c] uppercase">
          Price
        </p>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((range, i) => {
            const active = selectedPriceRange === i;
            return (
              <li key={range.label}>
                <button
                  onClick={() =>
                    setSelectedPriceRange(active ? null : i)
                  }
                  className="flex items-center gap-3 w-full group"
                >
                  <span
                    className={`w-3.5 h-3.5 flex-shrink-0 rounded-full border transition-colors ${
                      active
                        ? "bg-[#1a1c1c] border-[#1a1c1c]"
                        : "border-[#c0bcbc] group-hover:border-[#1a1c1c]"
                    }`}
                  />
                  <span className="text-xs text-[#4c4546] group-hover:text-[#1a1c1c] transition-colors">
                    {range.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Color Filter */}
      <div className="space-y-3">
        <p className="text-[11px] font-medium tracking-[0.12em] text-[#1a1c1c] uppercase">
          Color
        </p>
        <div className="flex flex-wrap gap-2.5">
          {allColors.map(({ hex }) => {
            const active = selectedColors.includes(hex);
            return (
              <button
                key={hex}
                onClick={() => toggleColor(hex)}
                aria-label={`Filter by color ${hex}`}
                title={hex}
                className={`w-7 h-7 rounded-full transition-all duration-200 ${
                  active
                    ? "ring-1 ring-offset-2 ring-[#1a1c1c] scale-105"
                    : "hover:scale-105 ring-1 ring-transparent"
                }`}
                style={{ backgroundColor: hex }}
              />
            );
          })}
        </div>
      </div>

      {/* Size Filter */}
      <div className="space-y-3">
        <p className="text-[11px] font-medium tracking-[0.12em] text-[#1a1c1c] uppercase">
          Size
        </p>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => {
            const active = selectedSize === size
            return (
              <button
                key={size}
                className={`px-3 py-1.5 text-[11px] font-medium tracking-wider border border-[#e5e5e5] text-[#717171]  transition-colors ${active ? "bg-on-surface text-neutral-mid" : "hover:border-[#1a1c1c] hover:text-[#1a1c1c]"}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}