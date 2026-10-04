import Image from "next/image";
import { Fragment } from "react";
import { STATS } from "@/lib/content";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-20 2xl:px-0">
      <Reveal>
        <dl className="grid gap-10 rounded-4xl border border-black bg-mint px-6 py-12 md:grid-cols-3 md:gap-4 md:px-8 lg:flex lg:items-center lg:justify-between lg:px-12 dark:border-neutral-600 dark:bg-neutral-900">
          {STATS.map((s, i) => (
            <Fragment key={s.value}>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <dd className="order-1 font-display text-7xl text-leaf md:text-6xl lg:text-[130px] lg:leading-none dark:text-[#C9FFC6]">
                  {s.value}
                </dd>
                <dt className="order-2 mt-4 max-w-75 text-lg font-extrabold leading-tight text-leaf md:text-base lg:text-2xl dark:text-[#C9FFC6]">
                  {s.label}
                </dt>
              </div>
              {i < STATS.length - 1 && (
                <Image
                  src="/green-star.png"
                  alt=""
                  aria-hidden
                  width={58}
                  height={58}
                  className="hidden size-14 shrink-0 lg:block"
                />
              )}
            </Fragment>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
