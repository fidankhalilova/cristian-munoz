// Logo, centered nav (desktop), theme toggle and dark "Button".
import ThemeToggle from "./ThemeToggle";
import { NAV } from "@/lib/content";

export default function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-382 items-center justify-between px-5 md:h-30 md:px-8 2xl:px-0">
      <a href="#home" className="text-2xl font-bold">
        tian
      </a>
      <nav aria-label="Main" className="hidden gap-8 text-lg md:flex">
        {NAV.map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase().replace(" ", "")}`}
            className="transition hover:opacity-60"
          >
            {n}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a
          href="#aboutme"
          className="hidden rounded-md bg-ink px-6 py-3 text-base text-white transition hover:opacity-80 sm:block dark:bg-white dark:text-ink"
        >
          Button
        </a>
      </div>
    </header>
  );
}
