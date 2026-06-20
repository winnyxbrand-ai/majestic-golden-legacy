import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, MapPin, ShieldCheck, Users } from "lucide-react";
import heroAsset from "@/assets/hero-jaisalmer.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE } from "@/lib/site";

const hero = heroAsset.url;

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Majestic Roams" },
      { name: "description", content: "Discover the story behind Majestic Roams — a bespoke heritage travel atelier crafting royal sojourns across Jaisalmer and the Thar Desert." },
      { property: "og:title", content: "About Us — Majestic Roams" },
      { property: "og:description", content: "Your trusted partner for unforgettable travel experiences in the Golden City." },
    ],
  }),
  component: AboutUs,
});

const VALUES = [
  {
    icon: Heart,
    title: "Passion for Heritage",
    text: "We are deeply passionate about showcasing the beauty, culture and timeless heritage of Rajasthan to every guest who travels with us.",
  },
  {
    icon: Users,
    title: "Guest First",
    text: "Customer satisfaction is our priority. Every journey should create lasting memories, and we work tirelessly to make that happen.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    text: "Born and raised in the shadow of the Golden Fort, our team knows every hidden lane, dune and sunset viewpoint in Jaisalmer.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    text: "From hand-picked camps to vetted transport partners, we ensure every detail meets the high standards our guests deserve.",
  },
];

function AboutUs() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Our Story"
        title="About Majestic Roams"
      >
        A bespoke heritage travel atelier crafting royal sojourns across the
        Golden City of Jaisalmer and the timeless Thar.
      </PageHero>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-cream/90 leading-relaxed"
          >
            Welcome to <span className="text-gold font-serif">The Majestic Roams</span>, your trusted partner for unforgettable travel experiences. We are passionate about showcasing the beauty, culture and heritage of our region.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-cream/75 leading-relaxed"
          >
            At Majestic Roams, customer satisfaction is our priority. We believe that every journey should create lasting memories, and we work hard to ensure that each guest enjoys a unique and authentic travel experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-cream/75 leading-relaxed"
          >
            Join us and discover the adventure that awaits!
          </motion.p>
        </div>
      </section>

      <div className="gold-rule" />

      {/* Values */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What Drives Us"
            title="The Majestic Promise"
            subtitle="Four pillars that guide every itinerary, every camp and every sunset safari we curate."
          />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <v.icon className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-cream">{v.title}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow mb-4">Begin Your Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            Let Us Craft Your Perfect Escape
          </h2>
          <div className="mt-6 flex justify-center">
            <span className="h-px w-24 bg-gold" />
          </div>
          <p className="mt-6 text-cream/75 leading-relaxed">
            Whether it is a romantic desert night, a family heritage walk or a grand New Year&apos;s Eve gala — we are here to turn your dream into an itinerary.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Majestic Roams, I'd like to plan a trip with you.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
