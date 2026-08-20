import Link from "next/link";

import {
  ImageBand,
  LocationCards,
  MenuGrid,
  SiteFooter,
  SiteHeader,
} from "./components";
import { images, location, signatures } from "./content";
import { WokField } from "./wok-field";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="hero-shell">
        <WokField />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content-grid">
          <div className="hero-copy-block scroll-reveal reveal-left is-visible">
            <p className="eyebrow hero-kicker">Elmhurst, Queens · Chinese-Indian kitchen</p>
            <h1 className="hero-title scroll-headline mt-5 font-serif">
              Wok-born.<br />
              <em>Queens</em> raised.
            </h1>
            <p className="hero-copy mt-7">
              Indo-Chinese cooking with a live-wire edge. Follow the sizzle to
              Grand Avenue for Hakka noodles, smoky Manchurian, crisp starters,
              and house masala made for passing around.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button button-electric" href="/menu">
                Enter the Menu <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline-light" href="/locations">
                Find our table
              </a>
            </div>
            <div className="hero-meta" aria-label="Restaurant details">
              <span>Halal meat</span><span>Hakka noodles</span><span>Big flavors</span>
            </div>
          </div>

          <aside className="signature-panel scroll-reveal reveal-right is-visible">
            <div className="signature-panel-top">
              <p className="eyebrow">The hit list</p>
              <span>01 — 05</span>
            </div>
            {signatures.slice(0, 5).map((item) => (
              <div className="signature-panel-row" key={item}>
                <span>{item}</span>
                <span>↗</span>
              </div>
            ))}
            <a className="signature-link" href={location.phoneHref}>Call for takeout <span>→</span></a>
          </aside>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>Scroll to stir</span></div>
      </section>

      <section className="section-rise intro-section bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div className="scroll-reveal reveal-left section-heading">
            <p className="eyebrow text-red">The Tangra code</p>
            <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Heat. Crunch.<br />&amp; repeat.
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
            <div className="order-note p-6">
              <p className="eyebrow text-forest-dark">Order like a regular</p>
              <p className="mt-4 text-base font-bold leading-7 text-ink/70">
                Start crisp, add soup, split rice or noodles, then choose dry
                or gravy for the main plates.
              </p>
              <Link className="button button-dark mt-6" href="/story">
                Our story <span aria-hidden="true">↗</span>
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
