// Purple thank-you banner that overlaps the dark footer with logo and links.
import { NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto max-w-382 px-5 md:px-8 2xl:px-0">
        <div className="-mt-16 rounded-2xl bg-violet px-6 py-10 sm:pl-70 lg:-mt-20 lg:py-14">
          <p className="max-w-225 text-lg font-extrabold leading-tight">
            Thanks for visit my website
            <br />
            If you have any questions you can write me to any of my social
            networks, I am sure I will answer you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 py-12 sm:flex-row">
          <span className="text-4xl font-bold">tian</span>
          <nav aria-label="Footer" className="flex gap-6">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(" ", "")}`}
                className="hover:opacity-60"
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
