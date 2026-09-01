import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f3] text-[#111111]">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#777777]">
          Error 404
        </p>

        <h1 className="text-[clamp(5rem,15vw,12rem)] font-light leading-[0.8] tracking-[-0.06em]">
          404
        </h1>

        <div className="mt-12 max-w-md">
          <h2 className="text-xl font-medium tracking-tight">
            This page doesn&apos;t exist.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#666666]">
            The page you&apos;re looking for may have been moved, removed, or
            never existed.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 border border-[#111111] px-8 py-3 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[#111111] hover:text-white"
        >
          Back to Home
        </Link>
      </div>

      <footer className="flex items-center justify-between border-t border-[#d6d6d2] px-6 py-5 text-[9px] uppercase tracking-[0.25em] text-[#777777] md:px-10">
        <span>Threadly</span>
        <span>404 / Page Not Found</span>
      </footer>
    </main>
  );
}