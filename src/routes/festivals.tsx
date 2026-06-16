import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import heroAsset from "@/assets/hero-jaisalmer.jpg.asset.json";
import culturalAsset from "@/assets/cultural.jpg.asset.json";
import campAsset from "@/assets/camp.jpg.asset.json";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

const hero = heroAsset.url;
const cultural = culturalAsset.url;
const camp = campAsset.url;

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Festivals & Special Events — Majestic Roams" },
      { name: "description", content: "Celebrate Jaisalmer's most spectacular nights — Maru Mahotsav and the legendary 31st December New Year's Eve in the Thar Desert." },
      { property: "og:title", content: "Festivals & Special Events — Majestic Roams" },
      { property: "og:description", content: "Maru Mahotsav and New Year's Eve in the Thar — curated, royal, unforgettable." },
    ],
  }),
  component: Festivals,
});

type Event = {
  slug: string;
  name: string;
  when: string;
  image: string;
  tagline: string;
  about: string;
  highlights: string[];
  inclusions: string[];
  closing: string;
};

const EVENTS: Event[] = [
  {
    slug: "maru-mahotsav",
    name: "Majestic Maru Mahotsav",
    when: "February · Three Golden Days in the Thar",
    image: cultural,
    tagline:
      "The Desert Festival of Jaisalmer — three days where the Thar transforms into a stage of colour, camels and Rajasthani spirit.",
    about:
      "Held every February under a Phalguna full moon, the Maru Mahotsav (Desert Festival) is Jaisalmer's most celebrated cultural gathering. The dunes of Sam come alive with turban-tying contests, the Mr. Desert pageant, camel polo, camel decoration competitions, gair and fire dancers, kalbeliya performers and folk musicians from across Rajasthan. The festival opens with a grand procession from the Golden Fort and closes with a sound-and-light extravaganza beneath the desert sky.",
    highlights: [
      "Opening procession from Jaisalmer Fort to Shahid Poonam Singh Stadium",
      "Mr. Desert pageant & turban-tying contest",
      "Camel polo, camel races and camel-decoration competitions",
      "Folk performances — kalbeliya, gair, fire dance",
      "Closing-night cultural gala on the Sam Sand Dunes with sound & light show",
      "Local artisan bazaar and Rajasthani cuisine stalls",
    ],
    inclusions: [
      "Festival transfers from Jaisalmer city / camp",
      "Reserved seating at the main cultural arena",
      "Curated camel & jeep safari around event venues",
      "Welcome drinks, Rajasthani buffet meals",
      "Overnight in Swiss luxury tents at our Sam camp",
    ],
    closing:
      "Maru Mahotsav books out months in advance — connect with us early to secure premium tents and arena seating.",
  },
  {
    slug: "new-year-eve",
    name: "Majestic 31st December · New Year's Eve in the Dunes",
    when: "31 December – 1 January · One Royal Night",
    image: camp,
    tagline:
      "Ring in the new year under a million Thar stars — a curated gala of folk fire, gourmet dining and a midnight countdown on the dunes.",
    about:
      "Our flagship New Year's Eve celebration unfolds at the Sam Sand Dunes — a private camp transformed for a single night of royalty. Guests are welcomed with tilak, garlands and chilled cocktails as the sun melts into the dunes. The evening flows through camel rides, a Rajasthani folk-and-fire show, a live DJ, an open-bar gala and a midnight countdown with fireworks over the desert. Overnight in Swiss luxury tents, breakfast at leisure on New Year's Day.",
    highlights: [
      "Traditional welcome with tilak, garland & welcome drinks",
      "Sunset camel & jeep safari on the Sam dunes",
      "Live folk performances — kalbeliya, gair, fire dance",
      "Gala buffet dinner with multi-cuisine spread",
      "Live DJ, dance floor & open bar (premium add-on)",
      "Midnight countdown with bonfire & fireworks on the dunes",
      "Overnight in Swiss luxury tents · breakfast on Jan 1",
    ],
    inclusions: [
      "Transfers from Jaisalmer to camp and back",
      "Royal Swiss Tent accommodation (twin / triple sharing)",
      "Welcome drinks, hi-tea, gala dinner, breakfast",
      "Cultural program & DJ night",
      "Bonfire and midnight fireworks",
    ],
    closing:
      "Spots are strictly limited every year — reserve your Royal Swiss Tent and gala seats on WhatsApp.",
  },
];

function Festivals() {
  return (
    <>
      <PageHero image={hero} eyebrow="Special Nights · Limited Availability" title="Festivals & Events">
        Curated experiences around the Thar's most spectacular celebrations — Maru Mahotsav and New Year's Eve.
      </PageHero>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {EVENTS.map((e, idx) => {
            const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Majestic Roams, I'd like to enquire about: ${e.name}.`)}`;
            return (
              <motion.article
                key={e.slug}
                id={e.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9 }}
                className={`grid gap-12 lg:grid-cols-2 items-center ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="zoom-img gold-border aspect-[4/3]">
                  <img src={e.image} alt={e.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-2"><Calendar className="size-3.5 text-gold" />{e.when}</p>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl text-cream leading-tight">{e.name}</h2>
                  <div className="mt-5 h-px w-20 bg-gold" />
                  <p className="mt-5 text-cream/80 italic leading-relaxed">{e.tagline}</p>
                  <p className="mt-5 text-cream/75 leading-relaxed">{e.about}</p>

                  <div className="mt-8">
                    <p className="eyebrow mb-3 flex items-center gap-2"><Sparkles className="size-3.5 text-gold" />Highlights</p>
                    <ul className="grid sm:grid-cols-2 gap-1.5 text-sm text-cream/80">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-2"><span className="text-gold">·</span>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="eyebrow mb-3">Inclusions</p>
                    <ul className="space-y-1.5 text-sm text-cream/80">
                      {e.inclusions.map((i) => (
                        <li key={i} className="flex gap-2"><span className="text-gold">·</span>{i}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 text-sm text-gold/80 italic">{e.closing}</p>

                  <a
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold btn-gold-hover mt-8"
                  >
                    Enquire Now on WhatsApp
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader eyebrow="Plan Ahead" title="Reserve your night in the Thar." />
          <p className="mt-6 text-cream/75 leading-relaxed">
            Both Maru Mahotsav and our 31st December gala are highly limited — premium tents and arena seats book out months in advance. The fastest way to confirm is a quick message on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Majestic Roams, I'd like to enquire about your festival packages.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover mt-8 inline-flex"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
