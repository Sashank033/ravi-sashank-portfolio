"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/socials";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("hero");

  /* ── Scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* ── Body scroll lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 glass border-b border-white/[0.055] shadow-2xl"
            : "py-5 bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-syne font-extrabold text-lg tracking-tight text-gradient-sky
              hover:opacity-80 transition-opacity focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            aria-label="Scroll to top"
          >
            Ravi Sashank
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive ? "text-sky-400" : "text-slate-500 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-sky-500/8 border border-sky-500/18"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.38 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={profile.resume}
              download
              className="hidden md:flex btn-primary py-2 px-4 text-xs"
              aria-label="Download resume"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden w-9 h-9 glass border border-white/10 rounded-lg
                flex items-center justify-center text-slate-400
                hover:text-slate-200 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 glass-strong flex flex-col pt-24 pb-10 px-8"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-2xl font-syne font-semibold text-slate-300
                    hover:text-sky-400 py-3.5 border-b border-white/[0.05]
                    transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={profile.resume}
                download
                onClick={() => setMenuOpen(false)}
                className="btn-primary justify-center py-3.5"
                aria-label="Download resume"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMenuOpen(false)}
                className="btn-ghost justify-center py-3.5 text-sm"
                aria-label="Send email"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
