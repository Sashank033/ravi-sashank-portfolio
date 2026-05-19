"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpNumberProps = {
  value: number;
  start?: boolean;
  delayMs?: number;
  durationMs?: number;
};

export default function CountUpNumber({
  value,
  start = true,
  delayMs = 0,
  durationMs = 1300,
}: CountUpNumberProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (!start) {
      setDisplayValue(0);
      return;
    }

    let animationFrame: number;
    let timeout: number;

    timeout = window.setTimeout(() => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.min(Math.round(value * eased), value));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [delayMs, durationMs, shouldReduceMotion, start, value]);

  return <>{displayValue}</>;
}
