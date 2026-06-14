import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import haveli from "@/assets/haveli.jpg";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Majestic Roams" },
      { name: "description", content: "Reach Majestic Roams in Jaisalmer — phone, WhatsApp, email and address." },
      { property: "og:title", content: "Contact — Majestic Roams" },
      { property: "og:description", content: "Reach Majestic Roams in Jaisalmer." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${SITE.whatsapp}` },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Address", value: SITE.address },
  ];
  return (
    <>
      <PageHero image={haveli} eyebrow="In Touch" title="Contact Majestic Roams">
        We welcome enquiries from the curious. Reach us at your leisure.
      </PageHero>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {items.map((it, i) => {
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="gold-border p-8 bg-card flex items-start gap-5 h-full hover:bg-ink/40 transition-colors"
              >
                <it.icon className="size-6 text-gold mt-1" />
                <div>
                  <p className="eyebrow">{it.label}</p>
                  <p className="mt-2 font-serif text-xl text-cream">{it.value}</p>
                </div>
              </motion.div>
            );
            return it.href ? (
              <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a>
            ) : (
              <div key={it.label}>{Inner}</div>
            );
          })}
        </div>

        <div className="mx-auto max-w-5xl mt-12 text-center">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
