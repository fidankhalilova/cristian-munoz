// Three text/photo rows that alternate sides; highlighted words use a gradient.
import Image from "next/image";
import { Fragment } from "react";

const hi =
  "bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent";
const ROWS = [
  {
    img: "/about-1.jpg",
    alt: "Childhood photo",
    text: (
      <>
        I am a <b className={hi}>Product Designer</b> and Frontend Developer, I
        fully understand the process of design and development of a digital
        product, my job is to make a product usable and visually appealing,
        through the <b className={hi}>Design Thinking</b> methodology I manage
        to create products that are endearing to users.
      </>
    ),
  },
  {
    img: "/about-2.jpg",
    alt: "Teenager with a robot",
    text: (
      <>
        I am passionate about <b className={hi}>never stop learning</b>, I am
        constantly training and learning about new and changing{" "}
        <b className={hi}>technology</b> trends that way I bring an updated
        opinion of the Tech industry.
      </>
    ),
  },
  {
    img: "/about-3.jpg",
    alt: "Smiling on a hillside",
    text: (
      <>
        My full name is <b className={hi}>Cristian David Muñoz Camayo</b> and
        more than what I said before I am a dreamer, I am proudly{" "}
        <b className={hi}>Colombian</b> and in me you will find a human being
        with the desire to do his best to help others.
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="aboutme"
      className="mx-auto max-w-382 px-5 py-12 md:px-8 lg:py-20 2xl:px-0"
    >
      <h2 className="font-display text-6xl uppercase lg:text-8xl">About me</h2>
      <div className="mt-10 grid lg:grid-cols-2">
        {ROWS.map((r, i) => (
          <Fragment key={r.alt}>
            <p
              className={`flex items-center py-8 text-2xl font-extrabold leading-tight lg:px-0 lg:py-0 lg:text-[32px] ${i % 2 ? "order-3 lg:order-0 lg:justify-end lg:text-right" : "order-1"}`}
            >
              <span className="max-w-140">{r.text}</span>
            </p>
            <Image
              src={r.img}
              alt={r.alt}
              width={750}
              height={540}
              className={`h-full w-full object-cover grayscale ${i % 2 ? "order-2 lg:order-0" : "order-2"}`}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
