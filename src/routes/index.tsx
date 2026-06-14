import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Hotel, Car, Sparkles } from "lucide-react";
import heroAsset from "@/assets/hero-jaisalmer.jpg.asset.json";
import campAsset from "@/assets/camp.jpg.asset.json";
import safariAsset from "@/assets/safari.jpg.asset.json";
import haveliAsset from "@/assets/haveli.jpg.asset.json";
import culturalAsset from "@/assets/cultural.jpg.asset.json";
import { SITE } from "@/lib/site";
import { PACKAGES } from "@/lib/packages";
import { SectionHeader } from "@/components/site/SectionHeader";

const hero = heroAsset.url;
const camp = campAsset.url;
const safari = safariAsset.url;
const haveli = haveliAsset.url;
const cultural = culturalAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Majestic Roams — Luxury Heritage Tours in Jaisalmer" },
      { name: "description", content: "Experience the Golden Legacy of Jaisalmer with bespoke heritage tours, desert safaris, royal camps and curated car rentals." },
      { property: "og:title", content: "Majestic Roams — Luxury Heritage Tours in Jaisalmer" },
      { property: "og:description", content: "Bespoke heritage tours, desert safaris and luxury stays in the Golden City." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="eyebrow"
          >
            Heritage · Hospitality · Hand-crafted Journeys
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="mt-6 font-serif text-5xl md:text-7xl text-cream leading-[1.05]"
          >
            Experience the Golden<br />Legacy of Jaisalmer.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex justify-center"
          >
            <span className="h-px w-28 bg-gold" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 text-cream/85 max-w-2xl mx-auto leading-relaxed"
          >
            Royal Swiss tents under a sky of stars, cinematic dune safaris,
            and heritage sojourns across the Thar — orchestrated with quiet luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Majestic Roams, I'd like to book a Majestic journey.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover"
            >
              Book Your Majestic Journey <ArrowRight className="size-4" />
            </a>
            <Link to="/packages" className="btn-ghost-gold">Explore Packages</Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-[0.65rem] uppercase tracking-[0.35em]"
        >
          Scroll
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Welcome to Majestic Roams"
            title="A heritage atelier in the heart of the Thar."
            subtitle="From the ramparts of the Golden Fort to the silken silence of the dunes, every Majestic itinerary is composed with the patience of a Rajasthani miniaturist — measured, considered, and entirely yours."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Atelier" title="Four ways to roam, majestically." />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Hotel, title: "Heritage Stays", text: "Royal Swiss tents and boutique havelis curated for restful luxury." },
              { icon: Compass, title: "Curated Packages", text: "Multi-day sojourns balancing forts, dunes and quiet moments." },
              { icon: Car, title: "Private Car Rental", text: "From Innova to luxury coaches — chauffeured across Rajasthan." },
              { icon: Sparkles, title: "Bespoke Itineraries", text: "We compose your journey down to the last grain of sand." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="gold-border p-8 text-center bg-ink/40"
              >
                <s.icon className="size-7 text-gold mx-auto" />
                <h3 className="mt-5 font-serif text-xl text-cream tracking-wide">{s.title}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX */}
      <section
        className="relative h-[60vh] min-h-[420px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${safari})` }}
      >
        <div className="absolute inset-0 bg-ink/65" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-3xl px-6"
        >
          <p className="eyebrow">A timeless ritual</p>
          <p className="mt-6 font-serif italic text-3xl md:text-4xl text-cream leading-relaxed">
            "There is a stillness in the Thar that even kings travelled to find."
          </p>
        </motion.div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Signature Sojourns" title="Our most-loved packages." />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group gold-border bg-card overflow-hidden flex flex-col"
              >
                <div className="zoom-img aspect-[4/3]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="eyebrow">{p.duration}</p>
                  <h3 className="mt-3 font-serif text-xl text-cream leading-snug">{p.name}</h3>
                  <p className="mt-4 text-sm text-cream/70 leading-relaxed flex-1">{p.blurb}</p>
                  <Link
                    to="/packages"
                    hash={p.slug}
                    className="mt-6 inline-flex items-center gap-2 text-gold uppercase tracking-[0.25em] text-[0.72rem] hover:gap-3 transition-all"
                  >
                    View itinerary <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Glimpses" title="The Golden City, in moments." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[hero, camp, cultural, haveli].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="zoom-img aspect-square gold-border"
              >
                <img src={img} alt="Jaisalmer" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <SectionHeader
          eyebrow="Begin your journey"
          title="Let us compose your Majestic sojourn."
          subtitle="Share a few details and we will return with a hand-crafted itinerary, tailored to your pace, palate and curiosity."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/custom-tour" className="btn-gold btn-gold-hover">Design my journey</Link>
          <Link to="/contact" className="btn-ghost-gold">Contact us</Link>
        </div>
      </section>
    </>
  );
}
