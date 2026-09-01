import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "01899f15-e1d7-44bc-85da-b3b64deb087b",
    name: "Gold Geometric Earrings",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    alt: "Gold geometric architectural earrings",
    slug: "gold-geometric-earrings",
  },
  {
    id: "2799a5b0-58c8-4aef-ab3f-f27647e7ad54",
    name: "Structured Mini Bag",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    alt: "Ivory structured leather mini bag",
    slug: "structured-mini-bag",
  },
  {
    id: "38b83ff0-bd8e-4b90-b58e-0064c2dc86ae",
    name: "Sculptural Silver Cuff",
    price: 310,
    image:
      "https://images.unsplash.com/photo-1724896728449-fae038f93e59?q=80&w=800&auto=format&fit=crop",
    alt: "Sterling silver sculptural cuff bracelet",
    slug: "sculptural-silver-cuff",
  },
  {
    id: "56e96b71-9f83-45b2-bfa1-835d75e96c21",
    name: "Silk Twill Scarf",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
    alt: "Ivory and charcoal silk twill scarf",
    slug: "silk-twill-scarf",
  },
];

export default function NewArrivalsSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.25em] text-[#717171] uppercase mb-1">
            CURATED SELECTION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1c1c]">
            New Arrivals
          </h2>
        </div>

        <Link
          href="#new-arrivals"
          className="text-xs font-medium tracking-[0.2em] text-[#1a1c1c] uppercase relative py-1 hover:text-[#717171] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#1a1c1c] hover:after:bg-[#717171] after:transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group cursor-pointer flex flex-col bg-white rounded-lg p-3 transition-all duration-300 ambient-shadow-hover border border-transparent hover:border-[#eeeeee]"
          >
            {/* Product Image Container */}
            <div className="relative aspect-3/4 w-full rounded-md overflow-hidden bg-[#f4f4f4] mb-4">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Product Metadata */}
            <div className="px-1 space-y-1">
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#1a1c1c] uppercase group-hover:text-[#717171] transition-colors">
                {product.name}
              </h3>
              <p className="text-xs font-normal text-[#717171]">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
