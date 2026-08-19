import Link from "next/link";

import {
  ImageBand,
  LocationCards,
  MenuGrid,
  SignatureTicker,
  SiteFooter,
  SiteHeader,
} from "./components";
import { images, location, signatures } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="hero-scroll relative isolate flex min-h-screen overflow-hidden bg-forest px-5 pt-24 text-paper sm:px-8">
        <div
          className="hero-scroll-image pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,67,49,0.98),rgba(18,67,49,0.82),rgba(23,20,16,0.3))]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.72fr]">
          <div className="scroll-reveal reveal-left is-visible">
            <p className="eyebrow text-gold">Elmhurst's Indo-Chinese original</p>
            <h1 className="scroll-headline mt-5 max-w-4xl font-serif text-6xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">
              Tangra Masala on Grand Avenue.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/76">
              The compact Queens storefront known for Chinese cuisine Indian
              style: halal meat, fiery Manchurian sauces, Hakka noodles,
              Tangra masala fish, paneer, tiger prawns, and the lollypop
              chicken people plan a trip around.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button button-gold" href="/menu">
                Explore Menu
              </a>
              <a className="button button-outline-light" href="/locations">
                Visit Us
              </a>
              <a className="button button-ghost" href={location.phoneHref}>
                Call Elmhurst
              </a>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="scroll-reveal reveal-right is-visible border border-paper/18 bg-paper/10 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="eyebrow text-gold">House signatures</p>
              <div className="mt-6 grid gap-3">
                {signatures.map((item) => (
                  <div
                    className="flex items-center justify-between border-b border-paper/12 pb-3 font-serif text-2xl font-bold"
                    key={item}
                  >
                    <span>{item}</span>
                    <span className="text-gold">+</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SignatureTicker />

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">About Masala</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              The Elmhurst room that made Tangra a craving.
            </h2>
          </div>
          <div className="scroll-reveal reveal-right">
            <p className="text-lg leading-8 text-ink/72">
              Tangra Masala keeps the focus on the original Grand Avenue
              experience: no-fuss Queens dining, generous shared plates, and
              Chinese-Indian flavors shaped by Kolkata's Tangra neighborhood.
              Build the table around dry-or-gravy sauces, spicy soups, noodles,
              fried rice, and crisp starters.
            </p>
            <Link className="button button-dark mt-8" href="/story">
              Read Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section-rise bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Menu preview</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight sm:text-5xl">
                Wok-fired, spicy, and built for Elmhurst regulars.
              </h2>
            </div>
            <Link className="button button-dark shrink-0" href="/menu">
              Full Menu
            </Link>
          </div>
          <div className="mt-12">
            <MenuGrid compact />
          </div>
        </div>
      </section>

      <ImageBand />

      <section className="split-scroll grid bg-ink text-paper lg:grid-cols-2">
        <div
          className="image-pan min-h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${images.friedRice})` }}
        />
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <div className="scroll-reveal reveal-right">
            <p className="eyebrow text-gold">Halal meat</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black leading-tight sm:text-5xl">
              Familiar comfort, finished with Tangra heat.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/70">
              Order the table around contrast: crispy chicken and pakora,
              peppery soups, fragrant fried rice, Hakka noodles, seafood, goat,
              tofu, paneer, and the house masala sauces that tie it together.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Visit</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                One Grand Avenue destination.
              </h2>
            </div>
            <Link className="button button-dark shrink-0" href="/locations">
              Hours & Directions
            </Link>
          </div>
          <div className="mt-12">
            <LocationCards compact />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
