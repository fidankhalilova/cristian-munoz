"use client";
// Pill switch (matches the sun/toggle in the design) wired to the theme hook.
import { useTheme } from "@/lib/useTheme";

export default function ThemeToggle() {
  const [dark, toggle] = useTheme();
  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      className="relative h-8 w-13 rounded-full bg-ink dark:bg-neutral-700"
    >
      <span
        aria-hidden
        className={`absolute top-1 size-6 rounded-full bg-white transition-all duration-300 ${dark ? "left-7" : "left-1"}`}
      />
    </button>
  );
}
