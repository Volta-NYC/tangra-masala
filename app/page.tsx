import Link from "next/link";

import {
  ImageBand,
  LocationCards,
  MenuGrid,
  SiteFooter,
  SiteHeader,
} from "./components";
import { images, location, signatures } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="hero-shell relative isolate overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3 bg-forest/30" />
        <div className="mx-auto grid w-full max-w-7xl items-end gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="hero-panel scroll-reveal reveal-left is-visible p-7 sm:p-10 lg:mb-12">
            <p className="eyebrow text-red">Elmhurst Indo-Chinese kitchen</p>
            <h1 className="scroll-headline mt-5 max-w-3xl font-serif text-6xl font-black uppercase leading-[0.84] text-ink sm:text-7xl lg:text-8xl">
              Tangra Masala
            </h1>
            <p className="mt-5 max-w-xl text-xl font-bold leading-8 text-forest-dark">
              87-09 Grand Avenue. Halal meat, Hakka noodles, Manchurian sauce,
              Tangra masala fish, paneer, tiger prawns, and lollypop chicken.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button button-dark" href="/menu">
                Explore Menu
              </a>
              <a className="button button-outline-dark" href="/locations">
                Visit Grand Avenue
              </a>
              <a className="button button-gold" href={location.phoneHref}>
                Call Now
              </a>
            </div>
          </div>

          <div className="hero-photo-stack scroll-reveal reveal-right is-visible">
            <figure className="hero-photo">
              <img alt="Tangra Masala storefront" src={images.hero} />
            </figure>
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <figure className="hero-photo">
                <img alt="Tangra Masala fried rice" src={images.friedRice} />
              </figure>
              <aside className="bg-cream/90 p-6">
                <p className="eyebrow text-red">House rhythm</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {signatures.map((item) => (
                    <span
                      className="border border-forest/30 bg-forest/15 px-3 py-2 text-sm font-black text-forest-dark"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rise bg-cream px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div className="scroll-reveal reveal-left border-l-8 border-forest/50 pl-6">
            <p className="eyebrow text-red">About Masala</p>
            <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              The Elmhurst room that made Tangra a craving.
            </h2>
          </div>
          <div className="scroll-reveal reveal-right grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <p className="text-lg leading-8 text-ink/72">
              Tangra Masala keeps the focus on the original Grand Avenue
              experience: no-fuss Queens dining, generous shared plates, and
              Chinese-Indian flavors shaped by Kolkata's Tangra neighborhood.
              Build the table around dry-or-gravy sauces, spicy soups, noodles,
              fried rice, and crisp starters.
            </p>
            <div className="bg-forest/20 p-6">
              <p className="eyebrow text-forest-dark">Order style</p>
              <p className="mt-4 text-base font-bold leading-7 text-ink/70">
                Start crisp, add soup, split rice or noodles, then choose dry
                or gravy for the main plates.
              </p>
              <Link className="button button-dark mt-6" href="/story">
                Read Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rise kitchen-board px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">Menu preview</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Wok-fired, spicy, and built for Elmhurst regulars.
            </h2>
            <figure className="menu-strip mt-8">
              <img alt="Tangra-style chilli chicken" src={images.chilliChicken} />
            </figure>
            <Link className="button button-dark mt-8" href="/menu">
              Full Menu
            </Link>
          </div>
          <div className="mt-2 lg:mt-16">
            <MenuGrid compact />
          </div>
        </div>
      </section>

      <ImageBand />

      <section className="split-scroll grid bg-forest/30 text-ink lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <div className="scroll-reveal reveal-right">
            <p className="eyebrow text-red">Halal meat</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Familiar comfort, finished with Tangra heat.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              Order the table around contrast: crispy chicken and pakora,
              peppery soups, fragrant fried rice, Hakka noodles, seafood, goat,
              tofu, paneer, and the house masala sauces that tie it together.
            </p>
          </div>
        </div>
        <div
          className="image-pan min-h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${images.friedRice})` }}
        />
      </section>

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Visit</p>
              <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
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
