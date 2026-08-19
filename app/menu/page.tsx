import {
  ImageBand,
  MenuGrid,
  PageIntro,
  SiteFooter,
  SiteHeader,
  YelpMenuLink,
} from "../components";
import { images } from "../content";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Menu"
        image={images.friedRice}
        title="Tangra masala, Manchurian, Hakka, chilli, and more."
        text="Menu highlights are based on public Tangra Masala menu listings. Please call the restaurant for current prices, availability, and takeout timing."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-red">Highlights</p>
              <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
                Built around the wok and the sauce.
              </h2>
            </div>
            <YelpMenuLink />
          </div>
          <MenuGrid />
        </div>
      </section>
      <ImageBand />
      <SiteFooter />
    </main>
  );
}
