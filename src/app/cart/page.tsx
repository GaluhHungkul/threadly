import { Metadata } from "next";
import CartClient from "@/components/CartClient";

export const metadata: Metadata = {
  title: "Shopping Bag — THREADLY",
  description: "View and edit your selected luxury pieces.",
};

export default function CartPage() {
  return <CartClient />;
}
