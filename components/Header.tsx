import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { NAV } from "@/lib/content";

export default function Header() {
  return (
    <header className="relative mx-auto flex h-20 container items-center justify-between px-5 md:h-30 md:px-8 2xl:px-0">
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
      <div className="hidden items-center gap-4 md:flex">
        <ThemeToggle />
        <a
          href="#aboutme"
          className="rounded-md bg-ink px-6 py-3 text-base text-white transition hover:opacity-80 dark:bg-[#935EF1]"
        >
          Contact me
        </a>
      </div>
      <MobileMenu />
    </header>
  );
}
