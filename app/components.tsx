import Link from "next/link";

import {
  galleryImages,
  location,
  menuSections,
  navItems,
  signatures,
  site,
} from "./content";

type MenuItem = (typeof menuSections)[number]["items"][number];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/12 bg-[#0f2419]/88 text-cream backdrop-blur">
      <div className="scroll-progress" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link className="leading-none" href="/" aria-label="Tangra Masala home">
          <span className="block font-serif text-3xl font-black">
            Tangra Masala
          </span>
          <span className="mt-1 block text-[0.72rem] font-black uppercase text-gold">
            Elmhurst
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs font-black uppercase text-cream/68 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-gold button-fit" href="/menu">
          View Menu
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer-glow relative overflow-hidden bg-forest px-5 py-14 text-ink sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.6fr_1fr]">
        <div className="scroll-reveal reveal-left">
          <p className="font-serif text-4xl font-black uppercase">{site.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-ink/64">
            {site.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="button button-gold" href="/menu">
              View Menu
            </Link>
            <a className="button button-outline-light" href={location.phoneHref}>
              Call Elmhurst
            </a>
          </div>
        </div>

        <div className="scroll-reveal reveal-up reveal-stagger-1">
          <h3 className="footer-title">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-ink/68">
            {navItems.map((item) => (
              <Link className="transition hover:text-cream" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="transition hover:text-cream" href={site.yelpUrl}>
              Yelp
            </a>
            <a className="transition hover:text-cream" href={site.menuSourceUrl}>
              Menu Source
            </a>
          </div>
        </div>

        <div className="scroll-reveal reveal-right reveal-stagger-2">
          <h3 className="footer-title">Visit</h3>
          <div className="mt-5 text-sm leading-6 text-ink/68">
            <p className="font-bold text-ink">{location.name}</p>
            <p>{location.address}</p>
            <a className="transition hover:text-cream" href={location.phoneHref}>
              {location.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-reveal reveal-up mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-ink/10 pt-6 text-xs uppercase text-ink/52 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tangra Masala. All rights reserved.</p>
        <p>
          Made by{" "}
          <a className="volta-link" href="https://www.novusnyc.org/" rel="noreferrer" target="_blank">
            Novus
          </a>
        </p>
      </div>
    </footer>
  );
}

export function SignatureTicker() {
  return (
    <section className="overflow-hidden border-y border-forest/30 bg-forest/25 py-4 text-ink">
      <div className="ticker-track flex min-w-max gap-8 text-sm font-black uppercase">
        {[...signatures, ...signatures, ...signatures].map((item, index) => (
          <span className="flex items-center gap-8" key={`${item}-${index}`}>
            {item}
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  image,
  title,
  text,
}: {
  eyebrow: string;
  image?: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest px-5 pb-16 pt-32 text-ink sm:px-8 lg:pb-20">
      {image && (
        <>
          <div
            className="intro-image pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.18]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(237,246,239,0.94),rgba(237,246,239,0.82),rgba(111,159,124,0.5))]" />
        </>
      )}
      <div className="scroll-reveal reveal-left intro-copy mx-auto max-w-7xl">
        <p className="eyebrow text-red">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black uppercase leading-[0.94] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72">{text}</p>
      </div>
    </section>
  );
}

export function MenuGrid({ compact = false }: { compact?: boolean }) {
  const sections = compact
    ? menuSections.slice(0, 3).map((section) => ({
        ...section,
        items: section.items.slice(0, 3),
      }))
    : menuSections;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section, index) => (
        <MenuCard
          index={index}
          items={section.items}
          key={section.title}
          note={section.note}
          title={section.title}
        />
      ))}
    </div>
  );
}

export function MenuCard({
  index,
  items,
  note,
  title,
}: {
  index: number;
  items: MenuItem[];
  note?: string;
  title: string;
}) {
  const revealVariants = ["reveal-left", "reveal-up", "reveal-right", "reveal-zoom"];

  return (
    <article
      className={`menu-card scroll-reveal ${
        revealVariants[index % revealVariants.length]
      } border border-ink/12 bg-paper p-7 shadow-[8px_8px_0_rgba(18,67,49,0.1)]`}
      style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-serif text-6xl font-black text-forest/30">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-serif text-3xl font-black uppercase">{title}</h3>
        </div>
        {note && (
          <p className="hidden max-w-[11rem] text-right text-xs font-semibold leading-5 text-ink/46 sm:block">
            {note}
          </p>
        )}
      </div>

      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li className="border-t border-ink/10 pt-4" key={item.name}>
            <h4 className="text-base font-black leading-tight">{item.name}</h4>
            <p className="mt-2 text-sm font-medium leading-6 text-ink/60">
              {item.description}
            </p>
            {item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="menu-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ImageBand() {
  return (
    <section className="image-band grid sm:grid-cols-2 lg:grid-cols-4">
      {galleryImages.map((image, index) => (
        <figure
          className={`image-tile scroll-reveal ${
            index % 2 === 0 ? "reveal-left" : "reveal-right"
          }`}
          style={{ transitionDelay: `${index * 70}ms` }}
          key={image.src}
        >
          <img alt={image.alt} src={image.src} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export function LocationCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="location-card scroll-reveal reveal-left overflow-hidden border border-forest/40 bg-cream shadow-[10px_10px_0_rgba(111,159,124,0.38)]">
        <div className="relative min-h-72 overflow-hidden bg-ink">
          <img
            alt={location.imageAlt}
            className="h-full min-h-72 w-full object-cover transition duration-700 hover:scale-105"
            src={location.image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.62),rgba(0,0,0,0.04))]" />
          <p className="absolute bottom-5 left-5 eyebrow text-gold">{location.shortName}</p>
        </div>
      </article>
      <article className="location-card scroll-reveal reveal-right border border-forest/40 bg-paper p-7 shadow-[10px_10px_0_rgba(111,159,124,0.38)]">
        <p className="eyebrow text-red">Original location</p>
        <h3 className="mt-4 font-serif text-4xl font-black uppercase sm:text-5xl">
          {location.name}
        </h3>
        <p className="mt-5 text-lg font-semibold leading-7">{location.address}</p>
        <a className="mt-2 inline-flex text-lg font-bold text-red" href={location.phoneHref}>
          {location.phone}
        </a>
        {!compact && (
          <div className="mt-6 space-y-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">
            {location.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
        )}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a className="button button-dark" href={location.mapsUrl}>
            Directions
          </a>
          <a className="button button-outline-dark" href={location.phoneHref}>
            Call
          </a>
        </div>
      </article>
    </div>
  );
}

export function YelpMenuLink() {
  return (
    <a className="button button-outline-dark" href={site.menuSourceUrl} rel="noreferrer" target="_blank">
      Menu Source
    </a>
  );
}
