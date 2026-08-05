import { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";
import { defaultProduct } from "@/data/productData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const productName = defaultProduct.name;
  return {
    title: `${productName} — THREADLY`,
    description: defaultProduct.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <ProductDetailClient productId={productId} />;
}
