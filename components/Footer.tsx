import { NAV } from "@/lib/content";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 flow-root bg-ink text-white">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 2xl:px-0">
        <div className="relative -mt-16 flex items-center rounded-2xl bg-violet py-8 pl-32 pr-5 md:py-10 md:pl-48 md:pr-10 lg:pl-56">
          <Image
            src="/hero-element.png"
            alt=""
            aria-hidden
            width={207}
            height={290}
            className="absolute -left-2 bottom-0 z-10 h-auto w-28 md:-left-6 md:w-40 lg:w-52"
          />
          <p className="max-w-225 text-sm font-extrabold leading-tight md:text-base lg:text-lg">
            Thanks for visit my website
            <br />
            If you have any questions you can write me to any of my social
            networks, I am sure I will answer you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row md:py-12">
          <span className="text-3xl font-bold md:text-4xl">tian</span>
          <nav
            aria-label="Footer"
            className="flex gap-4 text-sm md:gap-6 md:text-base"
          >
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(" ", "")}`}
                className="hover:opacity-60"
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
