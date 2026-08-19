import { LocationCards, PageIntro, SiteFooter, SiteHeader } from "../components";
import { images, location } from "../content";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Contact"
        image={images.tangraPlate}
        title="Call Tangra Masala directly."
        text="Reach the Elmhurst restaurant for hours, takeout questions, menu availability, and same-day details."
      />

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">Reach us</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              For fastest service, call Grand Avenue.
            </h2>
            <article className="mt-8 border border-ink/12 bg-cream p-5">
              <h3 className="font-serif text-2xl font-black">{location.name}</h3>
              <p className="mt-2 text-sm font-semibold text-ink/62">
                {location.address}
              </p>
              <a className="mt-3 inline-flex text-lg font-black text-red" href={location.phoneHref}>
                {location.phone}
              </a>
            </article>
          </div>

          <aside className="scroll-reveal reveal-right border border-ink bg-cream p-6 shadow-[10px_10px_0_#171410] sm:p-8">
            <p className="eyebrow text-red">Call ahead</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Check hours and menu availability before you go.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/68">
              Tangra Masala handles practical details best over the phone:
              takeout timing, current specials, larger orders, and whether a
              specific dish is available today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button button-dark" href={location.phoneHref}>
                Call Now
              </a>
              <a className="button button-outline-dark" href={location.mapsUrl}>
                Directions
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up max-w-3xl">
            <p className="eyebrow text-red">Visit</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Find Tangra Masala in Elmhurst.
            </h2>
          </div>
          <div className="mt-12">
            <LocationCards />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
