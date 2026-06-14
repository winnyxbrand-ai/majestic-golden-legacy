import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import haveliAsset from "@/assets/haveli.jpg.asset.json";
import att01 from "@/assets/attractions/att-01.jpg.asset.json";
import att02 from "@/assets/attractions/att-02.jpg.asset.json";
import att03 from "@/assets/attractions/att-03.jpg.asset.json";
import att04 from "@/assets/attractions/att-04.jpg.asset.json";
import att05 from "@/assets/attractions/att-05.jpg.asset.json";
import att06 from "@/assets/attractions/att-06.jpg.asset.json";
import att07 from "@/assets/attractions/att-07.jpg.asset.json";
import att08 from "@/assets/attractions/att-08.jpg.asset.json";
import att09 from "@/assets/attractions/att-09.jpg.asset.json";
import att10 from "@/assets/attractions/att-10.jpg.asset.json";
import att11 from "@/assets/attractions/att-11.jpg.asset.json";
import att12 from "@/assets/attractions/att-12.jpg.asset.json";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

const haveli = haveliAsset.url;
const ATT_IMAGES = [att01, att02, att03, att04, att05, att06, att07, att08, att09, att10, att11, att12].map((a) => a.url);

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Jaisalmer Attractions — Majestic Roams" },
      { name: "description", content: "Explore the must-visit attractions of Jaisalmer with Majestic Roams — the Golden Fort, Patwon ki Haveli, Sam Sand Dunes, Tanot, Bada Bagh and more." },
      { property: "og:title", content: "Jaisalmer Attractions — Majestic Roams" },
      { property: "og:description", content: "A curated guide to Jaisalmer's most iconic sights — forts, havelis, dunes, lakes and frontier memorials." },
    ],
  }),
  component: Attractions,
});

type Attraction = { name: string; description: string };

const ATTRACTIONS: Attraction[] = [
  {
    name: "Jaisalmer Fort",
    description:
      "The crown jewel of the Golden City — a UNESCO World Heritage Site and one of the very few living forts in the world. Built in 1156 AD by Rawal Jaisal, the fort rises from the desert in honey-gold sandstone, its bastions and palaces glowing through every hour of the day.",
  },
  {
    name: "Patwon ki Haveli, Salim Singh ki Haveli & Nathmal ki Haveli",
    description:
      "Three of Rajasthan's most exquisite merchant mansions. Patwon ki Haveli is a cluster of five interconnected havelis renowned for their lattice work; Salim Singh ki Haveli is crowned by an elegant peacock-blue roof; Nathmal ki Haveli blends Rajputana and Islamic motifs in stone and paint.",
  },
  {
    name: "Gadisar Lake",
    description:
      "A serene man-made reservoir built in the 14th century, ringed by temples, ghats and chhatris. Glide across the still water on a wooden boat at dawn — it remains one of the most quietly cinematic moments in Jaisalmer.",
  },
  {
    name: "Jain Temples inside the Fort",
    description:
      "A complex of seven Jain temples dedicated to the Tirthankaras, built between the 12th and 15th centuries. The Parshvanath Temple is the most celebrated — every column and ceiling carved entirely from yellow sandstone in impossibly fine detail.",
  },
  {
    name: "Kuldhara Village",
    description:
      "An abandoned 19th-century Paliwal Brahmin village that, by legend, was deserted in a single night. Walk among the silent stone ruins at golden hour and you will understand why Kuldhara is whispered about across Rajasthan.",
  },
  {
    name: "Sam Sand Dunes",
    description:
      "The classic Thar landscape — 42 km from Jaisalmer, where camel and jeep safaris cross golden crests and watch the sun sink into the horizon. The Desert Festival in February brings folk performances, camel races and Rajasthani gala to the sands.",
  },
  {
    name: "Bada Bagh",
    description:
      "An isolated garden complex of royal cenotaphs (chhatris) raised in memory of the Bhatti rulers. Visit at sunrise or sunset for an extraordinary play of light against the carved arches — one of Jaisalmer's most photographed locations.",
  },
  {
    name: "Vyas Chhatri",
    description:
      "Built in honour of the sage Vyas and known as Jaisalmer's sunset point. The cenotaphs sit on a hill that offers a sweeping panorama of the fort and city — a gentle ten-minute ritual to close the day.",
  },
  {
    name: "Khaba Fort",
    description:
      "Another abandoned Paliwal settlement, with a small on-site museum of rare artefacts. The ramparts open up to a sweeping view of the surrounding desert village — quiet, evocative, almost untouched by tourism.",
  },
  {
    name: "Jaisalmer War Museum",
    description:
      "A tribute to the Indian Army, especially the legendary Battle of Longewala. Captured tanks, regimental memorabilia and a moving audio-visual room make this a stirring stop for every Indian traveller.",
  },
  {
    name: "Lodurva",
    description:
      "The ancient Bhatti capital before Jaisalmer was founded — 15 km from the city. Lodurva is best known for its intricately carved Parshwanath Jain Temple and the calm lake beside the Shiva shrine.",
  },
  {
    name: "Tanot & Longewala",
    description:
      "About 120 km from Jaisalmer, on the frontier of the Thar. The 1971 Indo-Pak war was fought here; Tanot Mata Temple is revered for the legend of unexploded shells, and the Longewala memorial commemorates the bravery of the Indian Army.",
  },
];

function Attractions() {
  return (
    <>
      <PageHero image={haveli} eyebrow="The Golden City, Curated" title="Jaisalmer Attractions">
        From the ramparts of the Golden Fort to the silent frontier of Tanot — the places we love to take our guests.
      </PageHero>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Overview"
            title="Twelve sights that define Jaisalmer."
            subtitle="Every Majestic Roams itinerary is composed around these landmarks — paced gently, with time for stillness. Choose a few, or pair them all into a multi-day sojourn."
          />
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {ATTRACTIONS.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="gold-border bg-card/70 flex flex-col overflow-hidden hover:bg-card transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ATT_IMAGES[i]}
                  alt={a.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-gold text-sm tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gold/40" />
                  <MapPin className="size-4 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-cream leading-snug">{a.name}</h3>
                <div className="mt-4 h-px w-12 bg-gold" />
                <p className="mt-5 text-sm text-cream/75 leading-relaxed flex-1">{a.description}</p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hello Majestic Roams, I'd like to include ${a.name} in my Jaisalmer itinerary.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-gold hover:gap-3 transition-all"
                >
                  Include in my tour →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <SectionHeader
          eyebrow="Compose Your Journey"
          title="Let us thread these sights into a Majestic itinerary."
          subtitle="Tell us which attractions move you most — we'll craft the pace, the stays and the chauffeured drives around them."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              "Hello Majestic Roams, I'd like to plan a tour around Jaisalmer's attractions.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover"
          >
            Plan on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
