import Image from "next/image";

export default function Testimonial() {
  return (
    <section
      aria-label="Testimonial"
      className="relative isolate overflow-hidden px-5 py-16 text-center text-white md:py-20 lg:py-28"
    >
      <Image
        src="/quote-bg.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <figure className="mx-auto max-w-250">
        <figcaption className="font-quote text-lg not-italic md:text-2xl lg:text-3xl">
          Kaleb Lechtenberg
        </figcaption>
        <blockquote className="mt-6 font-quote text-xl font-bold italic leading-tight tracking-tight md:mt-8 md:text-4xl lg:mt-10 lg:text-5xl lg:font-normal lg:not-italic">
          &ldquo;Working with this freelancer has been great. His attention to
          detail is unparalleled and finished all work ahead of schedule. Will
          gladly send more work and I do not hesitate to recommend him to you on
          your project also.&rdquo;
        </blockquote>
      </figure>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="mx-auto mt-8 size-10 fill-white md:mt-10 md:size-12 lg:hidden"
      >
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
      </svg>
    </section>
  );
}
