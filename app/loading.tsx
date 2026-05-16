export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner ring */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-sky-500/20" />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent
              border-t-sky-400 animate-spin"
          />
        </div>
        <p className="font-syne text-slate-500 text-xs uppercase tracking-widest">
          Loading...
        </p>
      </div>
    </div>
  );
}
