import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";
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
          <p className="mt-4 text-center text-cream/60 text-sm">Tap any image to reveal full details.</p>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
            {ADDITIONAL_TOURS.map((t, i) => (
              <CuratedCard key={t.name} tour={t} index={i} isOpen={openTour === t.name} onToggle={() => setOpenTour(openTour === t.name ? null : t.name)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Good to Know" title="Booking & cancellation policies." />
          <div className="mt-12 space-y-8 text-cream/75 text-sm leading-relaxed">
            <div>
              <p className="eyebrow mb-2">Confirmation</p>
              <p>You receive a confirmation voucher via WhatsApp / email within 24 hours of booking. If your preferred slot is unavailable, we'll arrange an alternate schedule of your preference — or process a full refund if you'd rather cancel before confirmation.</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Refunds</p>
              <p>Applicable refunds are processed within 10 business days into the traveller's account.</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Cancellation</p>
              <ul className="space-y-1.5">
                <li>· 30+ days before travel — 25% of total tour cost is charged.</li>
                <li>· 15–30 days before travel — 50% is charged.</li>
                <li>· 0–15 days before travel — 100% is charged.</li>
                <li>· In case of weather, union, government or other force-majeure cancellations, an alternate feasible option is provided. Cash refunds are not available in these cases.</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-2">Payment</p>
              <p>100% of total tour cost is payable at the time of confirmation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CuratedCard({ tour, index, isOpen, onToggle }: { tour: typeof ADDITIONAL_TOURS[number]; index: number; isOpen: boolean; onToggle: () => void }) {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Majestic Roams, I'd like to enquire about: ${tour.name} (${tour.duration}).`)}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="gold-border bg-ink/40 overflow-hidden"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="block w-full text-left zoom-img aspect-[4/3] cursor-pointer"
      >
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" loading="lazy" />
      </button>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow text-[10px]">{tour.duration}</p>
            <h3 className="mt-2 font-serif text-lg text-cream">{tour.name}</h3>
          </div>
          <button onClick={onToggle} aria-label={isOpen ? "Collapse" : "Expand"} className="text-gold mt-1 shrink-0 cursor-pointer">
            <ChevronDown className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        <p className="mt-3 text-sm text-cream/70 leading-relaxed">{tour.blurb}</p>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6 text-sm">
                {tour.note && (
                  <p className="text-xs text-gold/80 italic">Note: {tour.note}</p>
                )}
                <div>
                  <p className="eyebrow mb-2">Highlights</p>
                  <ul className="grid grid-cols-1 gap-1.5 text-cream/80">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex gap-2"><Check className="size-4 text-gold shrink-0 mt-0.5" />{h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">About</p>
                  <p className="text-cream/75 leading-relaxed">{tour.about}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Itinerary</p>
                  <div className="space-y-3">
                    {tour.itinerary.map((it) => (
                      <div key={it.title}>
                        <p className="font-serif uppercase tracking-[0.25em] text-gold text-[11px]">{it.title}</p>
                        <p className="mt-1.5 text-cream/80 leading-relaxed">{it.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="eyebrow mb-2">Inclusions</p>
                    <ul className="space-y-1.5">
                      {tour.inclusions.map((i) => (
                        <li key={i} className="flex gap-2 text-cream/80"><Check className="size-4 text-gold shrink-0 mt-0.5" />{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Exclusions</p>
                    <ul className="space-y-1.5">
                      {tour.exclusions.map((i) => (
                        <li key={i} className="flex gap-2 text-cream/60"><X className="size-4 text-gold/60 shrink-0 mt-0.5" />{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold btn-gold-hover w-full justify-center"
                >
                  Enquire Now on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
