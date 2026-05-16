import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-navy-950 flex items-center justify-center
      px-6 text-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-sky w-96 h-96 top-1/4 left-1/4 opacity-15" />
        <div className="blob blob-violet w-80 h-80 bottom-1/4 right-1/4 opacity-10" />
      </div>

      <div className="relative z-10">
        <p className="font-syne font-extrabold text-[120px] md:text-[180px] leading-none
          text-gradient-sky opacity-20 select-none">
          404
        </p>
        <h1 className="font-syne font-bold text-2xl md:text-3xl text-slate-100 -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
          Head back to the portfolio.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex"
          aria-label="Go back to portfolio home"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
