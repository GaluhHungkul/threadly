import { CategoryProduct } from "@/data/categoryData";
import { supabase } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

const getProducts = async ({
  category
}: { category: string }) : Promise<CategoryProduct[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) throw new Error(error.message);
  return data;
}

const getProductDetail = async (slug:string) : Promise<CategoryProduct> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle()

  if (error) throw new Error(error.message);
  console.log(data)
  return data;
}

export const useProductsByCategory = (category:string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => await getProducts({ category }),
  });
};

export const useProductDetail = (slug:string) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: async () => await getProductDetail(slug),
  });
};

