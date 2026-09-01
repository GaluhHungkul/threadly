"use client";

import { useEffect } from "react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#111111] text-[#f5f5f3]">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#888888]">
          System Error
        </p>

        <h1 className="text-[clamp(5rem,15vw,12rem)] font-light leading-[0.8] tracking-[-0.06em]">
          500
        </h1>

        <div className="mt-12 max-w-md">
          <h2 className="text-xl font-medium tracking-tight">
            Something went wrong.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#888888]">
            An unexpected error occurred. Please try again or return to the
            homepage.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="mt-10 border border-[#f5f5f3] px-8 py-3 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[#f5f5f3] hover:text-[#111111]"
        >
          Try Again
        </button>
      </div>

      <footer className="flex items-center justify-between border-t border-[#2d2d2d] px-6 py-5 text-[9px] uppercase tracking-[0.25em] text-[#666666] md:px-10">
        <span>Threadly</span>
        <span>500 / Internal Error</span>
      </footer>
    </main>
  );
}