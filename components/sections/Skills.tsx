import { SKILLS } from "@/lib/content";
import Reveal from "../ui/Reveal";

const R = 80,
  C = 2 * Math.PI * R;

function Ring({ pct }: { pct: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="size-50 shrink-0 -rotate-90"
      role="img"
      aria-label={`${pct}%`}
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#fb7b9a" />
          <stop offset="1" stopColor="#fddb3f" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r={R}
        fill="none"
        stroke="url(#g)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * C} ${C}`}
      />
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="central"
        transform="rotate(90 100 100)"
        className="fill-current text-4xl font-extrabold"
      >
        {pct}%
      </text>
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-20 2xl:px-0"
    >
      <h2 className="font-display text-4xl uppercase lg:text-6xl">Skills</h2>
      <ul className="mt-8 grid gap-6 lg:grid-cols-2">
        {SKILLS.map((s) => (
          <li key={s.name}>
            <Reveal>
              <article className="flex flex-col items-center gap-6 rounded-xl border border-[#b9b9b9] p-6 text-center sm:flex-row sm:p-8 sm:text-left dark:border-neutral-700">
                <Ring pct={s.pct} />
                <div>
                  <h3 className="text-3xl font-extrabold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-snug md:text-base">
                    {s.text}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
