import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import camp from "@/assets/camp.jpg";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/custom-tour")({
  head: () => ({
    meta: [
      { title: "Custom Tour — Majestic Roams" },
      { name: "description", content: "Request a bespoke, hand-crafted Jaisalmer itinerary tailored to your pace, palate and curiosity." },
      { property: "og:title", content: "Custom Tour — Majestic Roams" },
      { property: "og:description", content: "Request a bespoke Jaisalmer itinerary tailored just for you." },
    ],
  }),
  component: CustomTour,
});

function CustomTour() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    travelers: "2",
    days: "3",
    arrival: "",
    requests: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*New Custom Tour Request — Majestic Roams*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Travelers:* ${form.travelers}%0A` +
      `*Days:* ${form.days}%0A` +
      `*Arrival Date:* ${form.arrival}%0A` +
      `*Special Requests:* ${form.requests || "—"}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
  };

  const field =
    "w-full bg-transparent gold-border px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors";

  return (
    <>
      <PageHero image={camp} eyebrow="Hand-crafted Itineraries" title="Design Your Majestic Tour">
        Tell us how you like to travel — we'll compose an itinerary just for you.
      </PageHero>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            onSubmit={handleSubmit}
            className="gold-border p-8 md:p-12 bg-card"
          >
            <p className="eyebrow text-center">Your enquiry travels via WhatsApp</p>
            <h2 className="mt-4 font-serif text-3xl text-cream text-center">
              Share a few details
            </h2>
            <div className="mt-4 flex justify-center"><span className="h-px w-16 bg-gold" /></div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="eyebrow block mb-2">Full Name</span>
                <input required value={form.name} onChange={update("name")} className={field} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Phone</span>
                <input required type="tel" value={form.phone} onChange={update("phone")} className={field} placeholder="+91" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Number of Travelers</span>
                <input required type="number" min="1" value={form.travelers} onChange={update("travelers")} className={field} />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Days</span>
                <input required type="number" min="1" value={form.days} onChange={update("days")} className={field} />
              </label>
              <label className="block md:col-span-2">
                <span className="eyebrow block mb-2">Arrival Date</span>
                <input required type="date" value={form.arrival} onChange={update("arrival")} className={field} />
              </label>
              <label className="block md:col-span-2">
                <span className="eyebrow block mb-2">Special Requests</span>
                <textarea rows={5} value={form.requests} onChange={update("requests")} className={field} placeholder="Tell us about your interests, dietary preferences, occasions..." />
              </label>
            </div>

            <div className="mt-10 flex justify-center">
              <button type="submit" className="btn-gold btn-gold-hover">
                Send Request <Send className="size-4" />
              </button>
            </div>
            <p className="mt-5 text-center text-xs text-cream/55">
              Your message opens in WhatsApp with your details pre-filled.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
