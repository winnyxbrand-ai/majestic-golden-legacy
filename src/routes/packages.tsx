import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import heroAsset from "@/assets/hero-jaisalmer.jpg.asset.json";
import { PACKAGES, ADDITIONAL_TOURS } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

const hero = heroAsset.url;

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Majestic Roams" },
      { name: "description", content: "Hand-crafted Jaisalmer tour packages — royal desert nights, heritage city walks and multi-day sojourns across the Thar." },
      { property: "og:title", content: "Tour Packages — Majestic Roams" },
      { property: "og:description", content: "Royal desert nights, heritage walks and multi-day sojourns across the Thar." },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero image={hero} eyebrow="Signature Sojourns" title="Tour Packages">
        Three flagship itineraries and a portfolio of curated experiences across Jaisalmer.
      </PageHero>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {PACKAGES.map((p, idx) => (
            <motion.article
              key={p.slug}
              id={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className={`grid gap-12 lg:grid-cols-2 items-center ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="zoom-img gold-border aspect-[4/3]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <p className="eyebrow">{p.duration}</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-cream leading-tight">{p.name}</h2>
                <div className="mt-5 h-px w-20 bg-gold" />
                <p className="mt-5 text-cream/75 leading-relaxed">{p.blurb}</p>

                <div className="mt-8 space-y-5">
                  {p.itinerary.map((d) => (
                    <div key={d.day}>
                      <p className="font-serif uppercase tracking-[0.3em] text-gold text-xs">{d.day}</p>
                      <p className="mt-2 text-sm text-cream/80 leading-relaxed">{d.details}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow mb-3">Inclusions</p>
                    <ul className="space-y-2">
                      {p.inclusions.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-cream/80">
                          <Check className="size-4 text-gold shrink-0 mt-0.5" />{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Exclusions</p>
                    <ul className="space-y-2">
                      {p.exclusions.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-cream/60">
                          <X className="size-4 text-gold/60 shrink-0 mt-0.5" />{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Majestic Roams, I'm interested in: ${p.name} (${p.duration}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold btn-gold-hover mt-10"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="More Experiences" title="Additional curated tours." />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_TOURS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="gold-border bg-ink/40 overflow-hidden"
              >
                <div className="zoom-img aspect-[4/3]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-cream">{t.name}</h3>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{t.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
