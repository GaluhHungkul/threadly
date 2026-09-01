"use client"

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f3] text-[#111111]">
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#777777]">
            Threadly
          </p>

          <div className="mt-8 h-px w-32 overflow-hidden bg-[#d6d6d2]">
            <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] bg-[#111111]" />
          </div>

          <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#999999]">
            Loading
          </p>
        </div>
      </div>

      <footer className="flex items-center justify-between border-t border-[#d6d6d2] px-6 py-5 text-[9px] uppercase tracking-[0.25em] text-[#777777] md:px-10">
        <span>Threadly</span>
        <span>Please Wait</span>
      </footer>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </main>
  );
}