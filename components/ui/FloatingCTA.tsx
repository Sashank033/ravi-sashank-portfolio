"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X, Mail, FileText, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      label: "Send Email",
      icon: Mail,
      href: `mailto:${profile.email}`,
      color: "bg-sky-500 hover:bg-sky-400",
    },
    {
      label: "Resume",
      icon: FileText,
      href: profile.resume,
      download: true,
      color: "bg-violet-500 hover:bg-violet-400",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: profile.linkedin,
      color: "bg-blue-600 hover:bg-blue-500",
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 left-6 z-50 flex flex-col-reverse items-center gap-3"
        >
          {/* Action buttons */}
          <AnimatePresence>
            {open &&
              actions.map((action, i) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.download ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={action.download}
                  initial={{ opacity: 0, y: 12, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.85 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className={`flex items-center gap-2 ${action.color} text-white text-xs font-medium
                    px-3 py-2 rounded-xl shadow-lg transition-all duration-150`}
                  aria-label={action.label}
                >
                  <action.icon className="w-3.5 h-3.5" />
                  <span>{action.label}</span>
                </motion.a>
              ))}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen((p) => !p)}
            className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 text-white
              shadow-glow flex items-center justify-center transition-all duration-200"
            aria-label="Open contact shortcuts"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
