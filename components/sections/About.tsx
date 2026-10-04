import Image from "next/image";
import { type ReactNode } from "react";

const PINK = "from-pink-400 to-orange-300";
const TEAL = "from-cyan-300 to-emerald-300";
const LAVENDER = "from-indigo-300 to-violet-300";
const COLOMBIA = "from-yellow-300 via-blue-500 to-red-500";

function H({ g, children }: { g: string; children: ReactNode }) {
  return (
    <span className={`bg-linear-to-r ${g} bg-clip-text text-transparent`}>
      {children}
    </span>
  );
}

const ROWS = [
  {
    img: "/about-1.jpg",
    alt: "Childhood photo",
    text: (
      <>
        I am a <H g={PINK}>Product Designer</H> and Frontend Developer, I fully
        understand the process of design and development of a digital product,
        my job is to make a product usable and visually appealing, through the{" "}
        <H g={PINK}>Design Thinking</H> methodology I manage to create products
        that are endearing to users.
      </>
    ),
  },
  {
    img: "/about-2.jpg",
    alt: "Teenager with a robot",
    text: (
      <>
        I am passionate about <H g={TEAL}>never stop learning</H>, I am
        constantly training and learning about new and changing{" "}
        <H g={TEAL}>technology</H> trends that way I bring an updated opinion of
        the Tech industry.
      </>
    ),
  },
  {
    img: "/about-3.jpg",
    alt: "Smiling on a hillside",
    text: (
      <>
        My full name is <H g={LAVENDER}>Cristian David Muñoz Camayo</H> and more
        than what I said before I am a dreamer, I am proudly{" "}
        <H g={COLOMBIA}>Colombian</H> and in me you will find a human being with
        the desire to do his best to help others.
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="aboutme"
      className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-20 2xl:px-0"
    >
      <div className="flex items-center gap-6">
        <h2 className="font-display text-4xl uppercase lg:text-6xl">
          About me
        </h2>
        <svg
          aria-hidden
          viewBox="0 0 200 30"
          className="hidden h-7 w-48 sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="0,5 20,25 40,5 60,25 80,5 100,25 120,5 140,25 160,5 180,25 200,5" />
        </svg>
      </div>

      <div className="mt-8 md:mt-10">
        {ROWS.map((r, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={r.alt} className="grid grid-cols-1 md:grid-cols-2">
              <p
                className={`flex items-center py-6 text-lg font-extrabold leading-tight md:py-0 lg:text-[32px] ${
                  flip
                    ? "md:order-2 md:justify-end md:pl-4 md:text-right lg:justify-start lg:pl-12 lg:text-left"
                    : "md:pr-4 lg:pr-12"
                }`}
              >
                <span className="max-w-140">{r.text}</span>
              </p>
              <div
                className={`relative aspect-5/6 md:aspect-4/5 lg:aspect-3/2 ${flip ? "md:order-1" : ""}`}
              >
                <Image
                  src={r.img}
                  alt={r.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
