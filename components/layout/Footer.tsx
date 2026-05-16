import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-syne font-bold text-lg text-gradient-sky">{profile.nameShort}.</p>
            <p className="text-slate-500 text-sm mt-1">{profile.title}</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center
                text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center
                text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center
                text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-slate-600 text-xs">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
