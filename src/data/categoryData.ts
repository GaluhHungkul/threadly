export interface CategoryProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  colorName: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  subcategory: string;
  sizes: string[];
  colors: string[];
}

export interface CategoryInfo {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  subcategories: { name: string; count: number }[];
  products: CategoryProduct[];
}

export const categoryData: Record<string, CategoryInfo> = {
  women: {
    slug: "women",
    title: "Women — The Archive",
    tagline: "AUTUMN / WINTER 2026",
    description:
      "A curation of foundational silhouettes. Structural outerwear, fluid silks, and precise tailoring designed for the modern wardrobe.",
    heroImage:
      "https://images.unsplash.com/photo-1627489105008-063e31b2dbcd?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Women's editorial collection — model in structural wool coat",
    subcategories: [
      { name: "Outerwear", count: 12 },
      { name: "Dresses", count: 24 },
      { name: "Tops & Silks", count: 18 },
      { name: "Tailoring", count: 8 },
    ],
    products: [
      {
        id: "w-1",
        name: "Architectural Wool Coat",
        price: "$1,250",
        image:
          "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop",
        alt: "Charcoal architectural wool coat",
        colorName: "Charcoal",
        isNew: false,
        isBestSeller: true,
        subcategory: "Outerwear",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#1c1d1f", "#3f4239", "#e2e2e2"],
      },
      {
        id: "w-2",
        name: "Bias-Cut Silk Slip",
        price: "$680",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        alt: "Ivory bias-cut silk slip dress",
        colorName: "Ivory",
        isNew: true,
        subcategory: "Dresses",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e8e0d0", "#1c1d1f"],
      },
      {
        id: "w-3",
        name: "Oversized Poplin Shirt",
        price: "$450",
        image:
          "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
        alt: "Optic white oversized poplin shirt",
        colorName: "Optic White",
        isNew: true,
        subcategory: "Tops & Silks",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#f9f9f9", "#1c1d1f"],
      },
      {
        id: "w-4",
        name: "Fluid Crepe Midi",
        price: "$790",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        alt: "Fluid charcoal crepe midi dress",
        colorName: "Slate",
        subcategory: "Dresses",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#4a4a4a", "#2b2b2b"],
      },
      {
        id: "w-5",
        name: "Tailored Blazer",
        price: "$920",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
        alt: "Ivory tailored blazer",
        colorName: "Ivory",
        isBestSeller: true,
        subcategory: "Tailoring",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#d4cec4", "#1c1d1f"],
      },
      {
        id: "w-6",
        name: "Silk Charmeuse Blouse",
        price: "$560",
        image:
          "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
        alt: "Charcoal silk charmeuse blouse",
        colorName: "Graphite",
        isNew: true,
        subcategory: "Tops & Silks",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#3d3d3d", "#f5f0e8"],
      },
    ],
  },
  men: {
    slug: "men",
    title: "Men — The Form",
    tagline: "AUTUMN / WINTER 2026",
    description:
      "Refined essentials built on precise construction. Technical fabrics, clean silhouettes, and a permanent wardrobe designed to endure.",
    heroImage:
      "https://images.unsplash.com/photo-1665832103026-462c445cad5b?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Men's editorial collection — model in structured coat",
    subcategories: [
      { name: "Outerwear", count: 9 },
      { name: "Knitwear", count: 14 },
      { name: "Trousers", count: 11 },
      { name: "Shirts", count: 16 },
    ],
    products: [
      {
        id: "m-1",
        name: "Double-Breasted Topcoat",
        price: "$1,450",
        image:
          "https://images.unsplash.com/photo-1619603364904-c0498317e145?q=80&w=800&auto=format&fit=crop",
        alt: "Charcoal double-breasted topcoat",
        colorName: "Charcoal",
        isBestSeller: true,
        subcategory: "Outerwear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1c1d1f", "#3f4239"],
      },
      {
        id: "m-2",
        name: "Merino Crewneck",
        price: "$380",
        image:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
        alt: "Off-white merino wool crewneck sweater",
        colorName: "Off-White",
        isNew: true,
        subcategory: "Knitwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#e2ddd5", "#1c1d1f", "#4a4a4a"],
      },
      {
        id: "m-3",
        name: "Tapered Wool Trousers",
        price: "$520",
        image:
          "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=800&auto=format&fit=crop",
        alt: "Charcoal tapered wool trousers",
        colorName: "Charcoal",
        subcategory: "Trousers",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#1c1d1f", "#4a4a4a"],
      },
      {
        id: "m-4",
        name: "Linen Dress Shirt",
        price: "$290",
        image:
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop",
        alt: "Optic white linen dress shirt",
        colorName: "Optic White",
        isNew: true,
        subcategory: "Shirts",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#f9f9f9", "#1c1d1f"],
      },
      {
        id: "m-5",
        name: "Cashmere Rollneck",
        price: "$640",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
        alt: "Charcoal cashmere rollneck sweater",
        colorName: "Charcoal",
        isBestSeller: true,
        subcategory: "Knitwear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1c1d1f", "#e2ddd5"],
      },
      {
        id: "m-6",
        name: "Structured Field Jacket",
        price: "$880",
        image:
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
        alt: "Olive structured field jacket",
        colorName: "Dark Olive",
        isNew: true,
        subcategory: "Outerwear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#3f4239", "#1c1d1f"],
      },
    ],
  },
  accessories: {
    slug: "accessories",
    title: "Accessories — The Detail",
    tagline: "CURATED SELECTION",
    description:
      "Every piece considered. Sculptural hardware, refined leather goods, and silk that moves like water — the finishing grammar of a complete wardrobe.",
    heroImage:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Accessories editorial — leather goods and sculptural details",
    subcategories: [
      { name: "Bags", count: 15 },
      { name: "Jewellery", count: 20 },
      { name: "Scarves", count: 8 },
      { name: "Belts", count: 6 },
    ],
    products: [
      {
        id: "a-1",
        name: "Pebbled Leather Tote",
        price: "$890",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
        alt: "Black pebbled leather structured tote",
        colorName: "Noir",
        isBestSeller: true,
        subcategory: "Bags",
        sizes: ["OS"],
        colors: ["#1c1d1f", "#3a3028"],
      },
      {
        id: "a-2",
        name: "Sculptural Silver Cuff",
        price: "$310",
        image:
          "https://images.unsplash.com/photo-1724896728449-fae038f93e59?q=80&w=800&auto=format&fit=crop",
        alt: "Sterling silver sculptural cuff bracelet",
        colorName: "Sterling",
        isNew: true,
        subcategory: "Jewellery",
        sizes: ["OS"],
        colors: ["#c0c0c0"],
      },
      {
        id: "a-3",
        name: "Silk Twill Scarf",
        price: "$180",
        image:
          "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
        alt: "Ivory and charcoal silk twill scarf",
        colorName: "Ivory & Charcoal",
        subcategory: "Scarves",
        sizes: ["OS"],
        colors: ["#e8e0d0", "#1c1d1f"],
      },
      {
        id: "a-4",
        name: "Leather Belt",
        price: "$220",
        image:
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
        alt: "Cognac leather belt with silver hardware",
        colorName: "Cognac",
        isBestSeller: true,
        subcategory: "Belts",
        sizes: ["S", "M", "L"],
        colors: ["#8B5E3C", "#1c1d1f"],
      },
      {
        id: "a-5",
        name: "Structured Mini Bag",
        price: "$650",
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
        alt: "Ivory structured leather mini bag",
        colorName: "Parchment",
        isNew: true,
        subcategory: "Bags",
        sizes: ["OS"],
        colors: ["#e8e0d0", "#1c1d1f", "#3a3028"],
      },
      {
        id: "a-6",
        name: "Gold Geometric Earrings",
        price: "$190",
        image:
          "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
        alt: "Gold geometric architectural earrings",
        colorName: "Gold",
        isNew: true,
        subcategory: "Jewellery",
        sizes: ["OS"],
        colors: ["#B8860B"],
      },
    ],
  },
};

export const defaultCategoryInfo: CategoryInfo = categoryData.women;

export function getCategoryInfo(slug: string): CategoryInfo | null {
  return categoryData[slug.toLowerCase()] ?? null;
}
