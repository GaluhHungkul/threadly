import { Metadata } from "next";
import AccountClient from "@/components/AccountClient";

export const metadata: Metadata = {
  title: "Account Dashboard — THREADLY",
  description: "Manage your luxury orders, primary shipping address, and curated wishlist.",
};

export default function AccountPage() {
  return <AccountClient />;
}
