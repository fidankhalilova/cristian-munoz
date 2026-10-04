"use client";
// hamburger that opens a panel with nav, toggle and contact button.
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV } from "@/lib/content";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid size-10 place-items-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-20 z-50 flex flex-col gap-6 bg-white px-5 py-6 shadow-lg dark:bg-black">
          <nav aria-label="Mobile" className="flex flex-col gap-4 text-lg">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(" ", "")}`}
                onClick={() => setOpen(false)}
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <a
              href="#aboutme"
              onClick={() => setOpen(false)}
              className="rounded-md bg-ink px-6 py-3 text-white dark:bg-[#935EF1]"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
