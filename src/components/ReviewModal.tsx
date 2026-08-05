"use client";

import { useState } from "react";
import { X, Star } from "lucide-react";
import { ProductReview } from "@/data/productData";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ProductReview) => void;
}

export default function ReviewModal({
  isOpen,
  onClose,
  onAddReview,
}: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newReview: ProductReview = {
      id: `r-${Date.now()}`,
      author: author.toUpperCase() + (author.includes(".") ? "" : "."),
      date: new Date()
        .toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
        .toUpperCase(),
      rating,
      comment,
    };

    onAddReview(newReview);
    setAuthor("");
    setComment("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white max-w-md w-full p-6 sm:p-8 border border-[#e5e5e5] shadow-2xl relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#1a1c1c] hover:text-[#717171] transition-colors p-1"
          aria-label="Close review modal"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <h3 className="font-serif text-2xl font-normal text-[#1a1c1c] mb-1">
          Write a Review
        </h3>
        <p className="text-xs text-[#717171] uppercase tracking-[0.15em] mb-6">
          SHARE YOUR EXPERIENCE WITH THIS PIECE
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Rating Selection */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-[#1a1c1c] uppercase mb-2">
              YOUR RATING
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-[#1a1c1c] hover:scale-110 transition-transform"
                >
                  <Star
                    size={20}
                    fill={star <= rating ? "#1a1c1c" : "none"}
                    stroke="#1a1c1c"
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-[#1a1c1c] uppercase mb-1.5">
              YOUR NAME / INITIALS
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ELARA V."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c] transition-colors"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-[#1a1c1c] uppercase mb-1.5">
              YOUR REVIEW
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe fit, craftsmanship, wool texture, or overall satisfaction..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-[#e5e5e5] px-3.5 py-2.5 text-xs text-[#1a1c1c] focus:outline-none focus:border-[#1a1c1c] transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full bg-[#000000] text-white py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#222] transition-colors"
          >
            SUBMIT REVIEW
          </button>
        </form>
      </div>
    </div>
  );
}
