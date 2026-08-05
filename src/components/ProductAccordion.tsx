"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string[];
}

interface ProductAccordionProps {
  detailsAndCare: string[];
  shippingAndReturns: string[];
}

export default function ProductAccordion({
  detailsAndCare,
  shippingAndReturns,
}: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: AccordionItem[] = [
    {
      title: "DETAILS & CARE",
      content: detailsAndCare,
    },
    {
      title: "SHIPPING & RETURNS",
      content: shippingAndReturns,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5] my-6">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title} className="py-4">
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-xs font-medium tracking-[0.15em] text-[#1a1c1c] uppercase group-hover:text-[#717171] transition-colors">
                {item.title}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#1a1c1c] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                strokeWidth={1.5}
              />
            </button>
            {isOpen && (
              <div className="mt-3 pt-1 pb-2 space-y-2 animate-fadeIn">
                <ul className="space-y-1.5 list-disc list-inside text-xs text-[#4c4546] leading-relaxed">
                  {item.content.map((point, i) => (
                    <li key={i} className="marker:text-[#717171]">
                      <span className="inline-block -ml-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
