"use client";

import { X } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white max-w-lg w-full p-6 sm:p-8 border border-[#e5e5e5] shadow-2xl relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] transition-colors p-1"
          aria-label="Close size guide"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1c1c] mb-1">
          Size Guide
        </h3>
        <p className="text-xs text-[#717171] uppercase tracking-[0.15em] mb-6">
          SCULPTURAL WOOL COAT — GARMENT MEASUREMENTS (INCHES)
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1a1c1c]">
                <th className="py-2.5 font-medium tracking-wider uppercase text-[#1a1c1c]">
                  SIZE
                </th>
                <th className="py-2.5 font-medium tracking-wider uppercase text-[#1a1c1c]">
                  CHEST
                </th>
                <th className="py-2.5 font-medium tracking-wider uppercase text-[#1a1c1c]">
                  SHOULDER
                </th>
                <th className="py-2.5 font-medium tracking-wider uppercase text-[#1a1c1c]">
                  SLEEVE
                </th>
                <th className="py-2.5 font-medium tracking-wider uppercase text-[#1a1c1c]">
                  LENGTH
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee] text-[#4c4546]">
              <tr>
                <td className="py-3 font-medium text-[#1a1c1c]">XS</td>
                <td className="py-3">42"</td>
                <td className="py-3">19.5"</td>
                <td className="py-3">23.0"</td>
                <td className="py-3">45.5"</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-[#1a1c1c]">S</td>
                <td className="py-3">44"</td>
                <td className="py-3">20.0"</td>
                <td className="py-3">23.5"</td>
                <td className="py-3">46.5"</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-[#1a1c1c]">M</td>
                <td className="py-3">46"</td>
                <td className="py-3">20.5"</td>
                <td className="py-3">24.0"</td>
                <td className="py-3">47.5"</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-[#1a1c1c]">L</td>
                <td className="py-3">48"</td>
                <td className="py-3">21.0"</td>
                <td className="py-3">24.5"</td>
                <td className="py-3">48.5"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e5e5e5] text-[11px] text-[#717171] space-y-1">
          <p>• Model is 178 cm / 5'10" and is wearing size S.</p>
          <p>• Designed for a relaxed, architectural oversized fit. Take your normal size.</p>
        </div>
      </div>
    </div>
  );
}
