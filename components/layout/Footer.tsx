import { profile } from "@/data/profile";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Brand */}
          <div className="text-center">
            <p className="font-syne font-bold text-lg text-gradient-sky">{profile.nameShort}.</p>
            <p className="mt-1">
              <AnimatedShinyText variant="text" className="text-sm">
                {profile.title}
              </AnimatedShinyText>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-slate-600 text-xs">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
