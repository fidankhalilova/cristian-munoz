import Image from "next/image";
import { SOCIALS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-10 px-5 py-6 md:px-8 md:py-8 lg:grid-cols-2 lg:gap-32 2xl:px-0"
    >
      <div className="mx-auto flex w-full flex-col justify-between gap-8 md:max-w-136 md:gap-10 lg:mx-0 lg:max-w-none">
        <h1 className="text-center font-display uppercase leading-[0.9] lg:text-left">
          <span className="block text-[22vw] sm:text-[160px] lg:text-[170px]">
            Product Designer
          </span>
          <span className="mt-4 block bg-linear-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-[14vw] text-transparent sm:text-[100px] lg:text-[110px]">
            Cristian Muñoz
          </span>
        </h1>
        <ul className="flex justify-between">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="grid size-13 place-items-center rounded-lg border border-neutral-200 text-lg transition hover:-translate-y-1 md:size-10 md:text-xl lg:size-13 dark:border-neutral-700"
              >
                <Icon aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="flex h-12 items-center justify-center gap-2 bg-ink text-sm text-white transition hover:opacity-80 md:h-14 md:text-base lg:text-xl"
        >
          Download Curriculum Vitae <span aria-hidden>↓</span>
        </a>
      </div>

      <Image
        src="/star.png"
        alt=""
        aria-hidden
        width={90}
        height={90}
        className="pointer-events-none absolute left-1/2 top-12 z-10 hidden h-auto w-20 -translate-x-1/2 lg:block xl:w-27"
      />
      <Image
        src="/hero.jpg"
        alt="Collage of a classical bust with colorful shapes"
        width={1000}
        height={1000}
        priority
        className="hidden h-full w-full object-cover lg:block"
      />
    </section>
  );
}
