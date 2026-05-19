"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterTextProps = {
  staticText: string;
  phrases: string[];
  className?: string;
  staticClassName?: string;
  phraseClassName?: string;
  cursorClassName?: string;
  phraseMinWidthClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
};

export default function TypewriterText({
  staticText,
  phrases,
  className = "",
  staticClassName = "",
  phraseClassName = "",
  cursorClassName = "",
  phraseMinWidthClassName = "",
  typeSpeed = 48,
  deleteSpeed = 30,
  pauseMs = 1450,
}: TypewriterTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || phrases.length === 0) {
      setDisplayText(phrases[0] ?? "");
      return;
    }

    const currentPhrase = phrases[phraseIndex] ?? "";
    const isComplete = !isDeleting && displayText === currentPhrase;
    const isCleared = isDeleting && displayText === "";

    const delay = isComplete ? pauseMs : isDeleting ? deleteSpeed : typeSpeed;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isCleared) {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }

      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      setDisplayText(currentPhrase.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    deleteSpeed,
    displayText,
    isDeleting,
    pauseMs,
    phraseIndex,
    phrases,
    shouldReduceMotion,
    typeSpeed,
  ]);

  const accessibleText = `${staticText} ${phrases[0] ?? ""}`;

  return (
    <span className={className} aria-label={accessibleText}>
      <span className="sr-only">{accessibleText}</span>
      <span aria-hidden="true">
        <span className={staticClassName}>{staticText}</span>{" "}
        <span className={`${phraseMinWidthClassName} ${phraseClassName}`}>
          {displayText}
        </span>
        {!shouldReduceMotion && (
          <span
            className={`ml-1 inline-block translate-y-[0.08em] animate-[blink_1s_steps(2,end)_infinite] ${cursorClassName}`}
          >
            |
          </span>
        )}
      </span>
    </span>
  );
}
