// Rounded mint card with three big stats separated by starburst icons.
import { STATS } from "@/lib/content";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="mx-auto max-w-382 px-5 py-12 md:px-8 lg:py-20 2xl:px-0">
      <Reveal>
        <dl className="grid gap-10 rounded-4xl border border-black bg-mint px-6 py-12 text-center md:grid-cols-3 md:px-12 dark:border-neutral-600 dark:bg-neutral-900">
          {STATS.map((s) => (
            <div key={s.value} className="flex flex-col items-center">
              <dd className="order-1 font-display text-7xl text-leaf lg:text-[130px] lg:leading-none">
                {s.value}
              </dd>
              <dt className="order-2 mt-4 max-w-75 text-2xl font-extrabold leading-tight text-leaf">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
