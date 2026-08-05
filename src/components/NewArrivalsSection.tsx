import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "CASHMERE ESSENTIAL",
    price: "$450.00",
    image: "/images/cashmere_sweater.png",
    alt: "Dark charcoal cashmere sweater",
  },
  {
    id: "2",
    name: "SILK TAILORED TROUSER",
    price: "$580.00",
    image: "/images/silk_trousers.png",
    alt: "Cream silk tailored trousers",
  },
  {
    id: "3",
    name: "SCULPTURAL SILVER CUFF",
    price: "$310.00",
    image: "/images/silver_cuff.png",
    alt: "Sculptural silver cuff bracelet",
  },
  {
    id: "4",
    name: "NOMAD TRAVEL TOTE",
    price: "$850.00",
    image: "/images/travel_tote.jpg",
    alt: "Brown leather travel tote bag",
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
            href={`/products/${product.id}`}
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
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
