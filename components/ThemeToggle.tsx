"use client";
// yellow + moon in dark mode, navy + sun in light mode.
import { useTheme } from "@/lib/useTheme";

export default function ThemeToggle() {
  const [dark, toggle] = useTheme();
  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      className="relative h-8 w-14 shrink-0 rounded-full bg-[#0A1721] transition-colors duration-300 dark:bg-[#FAEB82]"
    >
      {/* sun (visible in light mode, left side) */}
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="absolute left-1.5 top-1/2 size-4 -translate-y-1/2 fill-[#FAEB82] opacity-100 transition-opacity duration-300 dark:opacity-0"
      >
        <circle cx="8" cy="8" r="3.2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <circle
            key={a}
            cx={8 + 6.3 * Math.cos((a * Math.PI) / 180)}
            cy={8 + 6.3 * Math.sin((a * Math.PI) / 180)}
            r="0.7"
          />
        ))}
      </svg>
      {/* moon (visible in dark mode, right side) */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="absolute right-1.5 top-1/2 size-4 -translate-y-1/2 fill-[#0A1721] opacity-0 transition-opacity duration-300 dark:opacity-100"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <span
        aria-hidden
        className="absolute left-7 top-1 size-6 rounded-full bg-white transition-all duration-300 dark:left-1 dark:bg-[#FFFFF0]"
      />
    </button>
  );
}
