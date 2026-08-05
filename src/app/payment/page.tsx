import { Metadata } from "next";
import PaymentClient from "@/components/PaymentClient";

export const metadata: Metadata = {
  title: "Payment — THREADLY",
  description: "Complete your luxury purchase securely with THREADLY.",
};

export default function PaymentPage() {
  return <PaymentClient />;
}
