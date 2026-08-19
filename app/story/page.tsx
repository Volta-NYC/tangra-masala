import Link from "next/link";

import {
  ImageBand,
  PageIntro,
  SignatureTicker,
  SiteFooter,
  SiteHeader,
} from "../components";
import { images, storyParagraphs } from "../content";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Story"
        image={images.awning}
        title="Chinese-Indian cooking from the Elmhurst storefront."
        text="Tangra Masala brought Kolkata-style Chinese food to New York diners looking for spice, comfort, and a table full of shared plates."
      />
      <SignatureTicker />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">About Tangra</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              From Kolkata's Tangra flavors to Queens tables.
            </h2>
            <Link className="button button-dark mt-8" href="/menu">
              View Menu
            </Link>
          </div>
          <div className="scroll-reveal reveal-right space-y-6 text-lg leading-8 text-ink/72">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <ImageBand />
      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div
          className="image-pan min-h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${images.chilliChicken})` }}
        />
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <div className="scroll-reveal reveal-right">
            <p className="eyebrow text-gold">What to order</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black leading-tight sm:text-5xl">
              Lolly pop chicken, chilli fish, Manchurian fried rice.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/70">
              The menu keeps its focus on crisp textures, bright spice, and
              generous family-style plates.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
