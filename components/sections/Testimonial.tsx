// Full-bleed blue-to-orange gradient with the client quote.
export default function Testimonial() {
  return (
    <section
      aria-label="Testimonial"
      className="bg-[radial-gradient(ellipse_at_center,#fb8a2a_0%,#f9a11b_30%,#b6cde0_100%)] px-5 py-20 text-center text-white lg:py-28"
    >
      <figure className="mx-auto max-w-250">
        <figcaption className="font-quote text-3xl not-italic">
          Kaleb Lechtenberg
        </figcaption>
        <blockquote className="mt-10 font-quote text-3xl leading-tight tracking-tight lg:text-5xl">
          &ldquo;Working with this freelancer has been great. His attention to
          detail is unparalleled and finished all work ahead of schedule. Will
          gladly send more work and I do not hesitate to recommend him to you on
          your project also.&rdquo;
        </blockquote>
      </figure>
    </section>
  );
}
