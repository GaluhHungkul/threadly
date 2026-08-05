import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Best Sellers", href: "#best-sellers" },
    { name: "Collections", href: "#collections" },
    { name: "The Archive", href: "#archive-sale" },
  ];

  const companyLinks = [
    { name: "Sustainability", href: "#sustainability" },
    { name: "Shipping", href: "#shipping" },
    { name: "Returns", href: "#returns" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="w-full bg-[#f9f9f9] border-t border-[#e5e5e5] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="font-serif text-lg tracking-[0.25em] text-[#1a1c1c] uppercase block"
            >
              THREADLY
            </Link>
            <p className="text-xs text-[#717171] leading-relaxed max-w-xs font-normal">
              Curating a legacy of minimalist excellence for the modern individual.
            </p>
          </div>

          {/* Shop Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
              SHOP
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#717171] hover:text-[#1a1c1c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#717171] hover:text-[#1a1c1c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-medium tracking-[0.2em] text-[#1a1c1c] uppercase">
              LEGAL
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#717171] hover:text-[#1a1c1c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#eeeeee] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.15em] text-[#717171] uppercase">
            © 2026 THREADLY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-5 text-[#1a1c1c]">
            <Link href="#locale" className="hover:text-[#717171] transition-colors p-1" aria-label="Language selector">
              <Globe size={16} strokeWidth={1.5} />
            </Link>
            <Link href="#social" className="hover:text-[#717171] transition-colors p-1" aria-label="Social link">
              <Share2 size={16} strokeWidth={1.5} />
            </Link>
            <Link href="#contact" className="hover:text-[#717171] transition-colors p-1" aria-label="Email contact">
              <Mail size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
