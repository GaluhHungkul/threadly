import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/layout/QueryProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THREADLY — Monochromatic Editorial Luxury Fashion",
  description: "Curating a legacy of minimalist excellence for the modern individual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <QueryProvider>
        <body className="min-h-full flex flex-col font-sans bg-[#f9f9f9] text-[#1a1c1c]">
          <Navbar />
          {children}
          <Toaster
            position="top-center"
            closeButton
            toastOptions={{
              classNames: {
                toast: "!bg-black !text-white border !border-white/10 shadow-xl",
                title: "text-sm font-medium",
                description: "text-xs text-white/50",
              },
            }}
          />
        </body>
      </QueryProvider>
    </html>
  );
}
