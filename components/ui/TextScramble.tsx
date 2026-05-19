"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

type TextScrambleProps = {
  text: string;
  className?: string;
  durationMs?: number;
  tickMs?: number;
};

function scrambleText(text: string, progress: number) {
  const revealCount = Math.floor(text.length * progress);

  return text
    .split("")
    .map((char, index) => {
      if (index < revealCount || /[\s.,'’\-]/.test(char)) return char;
      return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    })
    .join("");
}

export default function TextScramble({
  text,
  className = "",
  durationMs = 950,
  tickMs = 32,
}: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    const startedAt = performance.now();
    setDisplayText(scrambleText(text, 0));

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const progress = Math.min(elapsed / durationMs, 1);

      setDisplayText(progress >= 1 ? text : scrambleText(text, progress));

      if (progress >= 1) {
        window.clearInterval(interval);
      }
    }, tickMs);

    return () => window.clearInterval(interval);
  }, [durationMs, isInView, shouldReduceMotion, text, tickMs]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
