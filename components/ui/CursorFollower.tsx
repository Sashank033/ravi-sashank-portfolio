"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const HOVER_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "[role='button']",
  "[data-cursor='hover']",
  ".btn-primary",
  ".btn-ghost",
  ".btn-icon",
  ".featured-card",
].join(",");

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setEnabled(false);
      return;
    }

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(pointerQuery.matches);

    updateEnabled();
    pointerQuery.addEventListener("change", updateEnabled);

    return () => pointerQuery.removeEventListener("change", updateEnabled);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const render = () => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;

      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      frameRef.current = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      const targetElement = event.target;
      setHovering(targetElement instanceof Element && Boolean(targetElement.closest(HOVER_SELECTOR)));

      if (!hasMoved.current) {
        hasMoved.current = true;
        current.current = target.current;
        setVisible(true);
      }
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => hasMoved.current && setVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    document.documentElement.addEventListener("mouseenter", handlePointerEnter);

    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.documentElement.removeEventListener("mouseenter", handlePointerEnter);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`cursor-follower ${visible ? "cursor-follower-visible" : ""} ${
        hovering ? "cursor-follower-hover" : ""
      }`}
      aria-hidden="true"
    />
  );
}
