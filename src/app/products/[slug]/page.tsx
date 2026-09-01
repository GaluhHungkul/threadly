import { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";
import { defaultProduct } from "@/data/productData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const productName = defaultProduct.name;
  return {
    title: `${productName} — THREADLY`,
    description: defaultProduct.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProductDetailClient slug={slug} />;
}
