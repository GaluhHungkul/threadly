 
import HeroSection from "@/components/HeroSection";
import EditorialGridSection from "@/components/EditorialGridSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import ArchiveSaleBanner from "@/components/ArchiveSaleBanner";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Navigation Header */}
       

      {/* Main Content Sections */}
      <main className="grow">
        <HeroSection />
        <EditorialGridSection />
        <NewArrivalsSection />
        <ArchiveSaleBanner />
        <TestimonialSection />
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
