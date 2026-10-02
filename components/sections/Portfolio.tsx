// Section title plus a responsive grid of project cards.
import Image from "next/image";
import { PROJECTS } from "@/lib/content";
import Reveal from "../ui/Reveal";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-382 px-5 py-12 md:px-8 lg:py-20 2xl:px-0"
    >
      <h2 className="font-display text-6xl uppercase lg:text-8xl">Portfolio</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <li key={i}>
            <Reveal>
              <article className="flex h-full flex-col gap-4 rounded-xl border border-black p-7.5 transition hover:-translate-y-1 dark:border-neutral-600">
                <Image
                  src="/project.jpg"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full rounded-lg object-cover"
                />
                <h3 className="text-3xl font-extrabold">{p.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-violet bg-tag px-2.5 py-0.5 text-sm text-violet dark:bg-violet/20"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-auto bg-ink py-2.5 text-center text-lg text-white transition hover:opacity-80 dark:bg-white dark:text-ink"
                >
                  Figma Community
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
