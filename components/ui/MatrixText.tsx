"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const MATRIX_CHARS = "01";

type MatrixTextProps = {
  text: string;
  className?: string;
  activeClassName?: string;
  triggerKey?: number | string;
  initialDelayMs?: number;
  durationMs?: number;
  tickMs?: number;
};

function getMatrixText(text: string, progress: number) {
  const revealCount = Math.floor(text.length * progress);

  return text
    .split("")
    .map((char, index) => {
      if (index < revealCount || /\s/.test(char)) return char;
      return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    })
    .join("");
}

export default function MatrixText({
  text,
  className = "",
  activeClassName = "matrix-text-active",
  triggerKey = 0,
  initialDelayMs = 100,
  durationMs = 850,
  tickMs = 45,
}: MatrixTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setDisplayText(text);
      setIsAnimating(false);
      return;
    }

    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      const startedAt = performance.now();
      setIsAnimating(true);
      setDisplayText(getMatrixText(text, 0));

      interval = window.setInterval(() => {
        const elapsed = performance.now() - startedAt;
        const progress = Math.min(elapsed / durationMs, 1);

        setDisplayText(progress >= 1 ? text : getMatrixText(text, progress));

        if (progress >= 1 && interval) {
          setIsAnimating(false);
          window.clearInterval(interval);
        }
      }, tickMs);
    }, initialDelayMs);

    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, [durationMs, initialDelayMs, isInView, shouldReduceMotion, text, tickMs, triggerKey]);

  return (
    <span ref={ref} className={`${className} ${isAnimating ? activeClassName : ""}`}>
      {displayText}
    </span>
  );
}
