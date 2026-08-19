import { LocationCards, PageIntro, SiteFooter, SiteHeader } from "../components";
import { images } from "../content";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Visit"
        image={images.storefront}
        title="Tangra Masala in Elmhurst."
        text="Find the original Grand Avenue storefront for Chinese cuisine Indian style, halal meat, and the house signatures diners come back for."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-left max-w-3xl">
            <p className="eyebrow text-red">Visit</p>
            <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Hours, calls, and directions for Grand Avenue.
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
