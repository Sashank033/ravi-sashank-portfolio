"use client";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import CursorFollower from "@/components/ui/CursorFollower";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
      <ToastProvider>
        {children}
        <CursorFollower />
      </ToastProvider>
    </ThemeProvider>
  );
}
