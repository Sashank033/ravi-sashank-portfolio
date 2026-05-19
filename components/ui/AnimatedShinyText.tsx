type AnimatedShinyTextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "pill" | "text";
};

export default function AnimatedShinyText({
  children,
  className = "",
  variant = "pill",
}: AnimatedShinyTextProps) {
  const variantClassName =
    variant === "pill"
      ? "inline-flex items-center rounded-full border border-cyan-400/10 bg-slate-900/60 px-3 py-1 text-[10px] font-medium tracking-wide shadow-sm backdrop-blur"
      : "inline-flex items-center";

  return (
    <span
      className={`animated-shiny-text ${variantClassName} ${className}`}
    >
      {children}
    </span>
  );
}
