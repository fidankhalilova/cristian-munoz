// Big condensed headline with gradient name, social icons, CV button and hero image.
import Image from "next/image";
import { SOCIALS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-382 gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1fr_693px] lg:gap-20 2xl:px-0"
    >
      <div className="flex flex-col justify-between gap-10">
        <h1 className="font-display uppercase leading-[0.9]">
          <span className="block text-[22vw] sm:text-[160px] lg:text-[190px]">
            Product Designer
          </span>
          <span className="mt-4 block bg-linear-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-[14vw] text-transparent sm:text-[100px] lg:text-[110px]">
            Cristian Muñoz
          </span>
        </h1>
        <ul className="flex flex-wrap gap-6 lg:justify-between">
          {SOCIALS.map((s) => (
            <li key={s}>
              <a
                href="#"
                aria-label={s}
                className="grid size-13 place-items-center rounded-lg border border-neutral-200 text-xs transition hover:-translate-y-1 dark:border-neutral-700"
              >
                {s[0]}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="flex h-14 items-center justify-center gap-2 bg-ink text-xl text-white transition hover:opacity-80 dark:bg-white dark:text-ink"
        >
          Download Curriculum Vitae <span aria-hidden>↓</span>
        </a>
      </div>
      <Image
        src="/hero.jpg"
        alt="Collage of a classical bust with colorful shapes"
        width={693}
        height={922}
        priority
        className="h-auto w-full"
      />
    </section>
  );
}
