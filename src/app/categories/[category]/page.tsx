import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryClient from "@/components/CategoryClient";
import { getCategoryInfo } from "@/data/categoryData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = getCategoryInfo(category);

  if (!info) {
    return { title: "Category Not Found — THREADLY" };
  }

  return {
    title: `${info.title} — THREADLY`,
    description: info.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = getCategoryInfo(category);

  if (!info) {
    notFound();
  }

  return <CategoryClient category={info} />;
}
