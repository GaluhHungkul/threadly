export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface ProductReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
}

export interface CompleteLookItem {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string
  alt: string;
  hasWatermark?: boolean;
  watermarkText?: string;
  watermarkSubtext?: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  breadcrumb: string[];
  colors: ProductColor[];
  sizes: string[];
  images: {
    main: string;
    thumbnails: string[];
  };
  detailsAndCare: string[];
  shippingAndReturns: string[];
  reviews: ProductReview[];
  // completeTheLook: CompleteLookItem[];
}

export const defaultProduct: ProductDetail = {
  id: "1",
  name: "Sculptural Wool Coat",
  price: "$1,250.00",
  description:
    "An exercise in architectural minimalism. This coat is crafted from 100% sustainably sourced virgin wool, featuring dropped shoulders and a hidden button placket for a clean, uninterrupted silhouette. Designed for a lifetime of elegance.",
  category: "OUTERWEAR",
  breadcrumb: ["SHOP", "WOMEN", "OUTERWEAR", "SCULPTURAL WOOL COAT"],
  colors: [
    { id: "charcoal", name: "CHARCOAL", hex: "#1c1d1f" },
    { id: "olive", name: "DARK OLIVE", hex: "#3f4239" },
    { id: "cream", name: "OFF-WHITE", hex: "#e2e2e2" },
  ],
  sizes: ["XS", "S", "M", "L"],
  images: {
    main: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    ],
  },
  detailsAndCare: [
    "100% sustainably sourced virgin wool exterior",
    "Full interior lining crafted from 100% cupro fabric",
    "Dropped shoulder design with hidden horn button placket",
    "Structured oversized architectural silhouette",
    "Two concealed side seam flap pockets",
    "Professional dry clean only",
    "Handcrafted in Italy",
  ],
  shippingAndReturns: [
    "Complimentary signature express delivery on all orders over $500",
    "Standard delivery within 3–5 business days",
    "14-day hassle-free returns and exchanges in original packaging",
    "Delivered in our zero-waste luxury storage box with cotton garment bag",
  ],
  reviews: [
    {
      id: "r1",
      author: "ELARA V.",
      date: "MAR 12, 2024",
      rating: 5,
      comment:
        "The construction of this coat is truly superior. It feels substantial yet incredibly light when worn. The silhouette is precisely what I was looking for.",
    },
    {
      id: "r2",
      author: "MARCUS T.",
      date: "FEB 28, 2024",
      rating: 5,
      comment:
        "Gifted this to my partner. The packaging alone felt like a luxury experience. The wool is soft and the charcoal color is deep and rich.",
    },
  ],
  // completeTheLook: [
  //   {
  //     id: "ctl-1",
  //     name: "TAPERED TROUSERS",
  //     price: "$450.00",
  //     image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
  //     alt: "Model wearing black tapered trousers with coat",
  //   },
  //   {
  //     id: "ctl-2",
  //     name: "SILK SCARF",
  //     price: "$180.00",
  //     image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
  //     alt: "Dark charcoal luxury silk scarf folded on marble block",
  //   },
  //   {
  //     id: "ctl-3",
  //     name: "LEATHER BOOTS",
  //     price: "$620.00",
  //     image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  //     alt: "Black leather Chelsea boots",
  //     hasWatermark: true,
  //     watermarkText: "AESTHETE",
  //     watermarkSubtext: "Minimalist Wool Coat — AESTHETE\nPolished Leather Chelsea Boot - Black\nPrice: $620 USD",
  //   },
  //   {
  //     id: "ctl-4",
  //     name: "PEBBLED TOTE",
  //     price: "$890.00",
  //     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
  //     alt: "Model carrying black pebbled leather tote bag",
  //   },
  // ],
};
