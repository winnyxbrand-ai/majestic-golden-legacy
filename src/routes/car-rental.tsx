import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Car, Users } from "lucide-react";
import safariAsset from "@/assets/safari.jpg.asset.json";
import { FLEET_GROUPS } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

const safari = safariAsset.url;

export const Route = createFileRoute("/car-rental")({
  head: () => ({
    meta: [
      { title: "Car Rental — Majestic Roams" },
      { name: "description", content: "Chauffeured car rentals in Jaisalmer — Sedan, Innova, Scorpio, Tempo Traveler and luxury coaches. Rates on WhatsApp." },
      { property: "og:title", content: "Car Rental — Majestic Roams" },
      { property: "og:description", content: "Chauffeured car rentals across Jaisalmer and Rajasthan." },
    ],
  }),
  component: CarRental,
});

function CarRental() {
  const enquireHref = (vehicle: string) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      `Hello Majestic Roams, I'd like to enquire about renting a ${vehicle}. Please share the latest rates.`,
    )}`;

  return (
    <>
      <PageHero image={safari} eyebrow="Private Chauffeured Travel" title="Car Rental">
        From elegant sedans to spacious coaches — all journeys begin in comfort.
      </PageHero>

      {/* CHOOSE YOUR CARRIAGE — quick overview */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Choose your carriage."
            subtitle="All vehicles are tourist-permit cars driven by experienced local chauffeurs. Rates vary by season, route and minimum kilometres — please enquire on WhatsApp for the latest quote."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET_GROUPS.flatMap((g) => g.vehicles).map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="gold-border p-6 bg-card/70 flex items-start gap-4"
              >
                <Car className="size-5 text-gold mt-1 shrink-0" />
                <div className="flex-1">
                  <p className="font-serif text-cream text-lg leading-snug">{v.name}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-gold/80 flex items-center gap-2">
                    <Users className="size-3" /> {v.seats}
                  </p>
                  <a
                    href={enquireHref(v.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-[0.7rem] uppercase tracking-[0.25em] text-gold hover:underline"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-xs text-cream/55 italic text-center">
            * Driver bata, parking and toll are additional unless specified. Rates discussed on WhatsApp.
          </p>
        </div>
      </section>

      {/* DETAILED FLEET — grouped by category */}
      <section className="py-24 px-6 bg-card">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Detailed Fleet"
            title="Cars & coaches, in detail."
            subtitle="Whether you're travelling solo, with family, or as a large group — there is a vehicle in our fleet composed for the occasion."
            align="center"
          />

          <div className="mt-16 space-y-20">
            {FLEET_GROUPS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <p className="eyebrow">Category 0{gi + 1}</p>
                    <h3 className="mt-2 font-serif text-2xl md:text-3xl text-cream">{group.category}</h3>
                  </div>
                  <div className="md:max-w-md md:text-right">
                    <p className="text-sm text-cream/75 leading-relaxed">{group.intro}</p>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gold/30" />

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.vehicles.map((v, i) => (
                    <motion.div
                      key={v.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="gold-border bg-ink/40 flex flex-col overflow-hidden hover:bg-ink/60 transition-colors"
                    >
                      <div className="relative aspect-[4/3] bg-cream/5 overflow-hidden">
                        <img
                          src={v.image}
                          alt={v.name}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[1200ms] hover:scale-105"
                        />
                      </div>
                      <div className="p-7 flex flex-col flex-1">
                        <Car className="size-6 text-gold" />
                        <h4 className="mt-5 font-serif text-xl text-cream">{v.name}</h4>
                        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-gold/80 flex items-center gap-2">
                          <Users className="size-3" /> Seating {v.seats}
                        </p>
                        <p className="mt-4 text-sm text-cream/70 leading-relaxed flex-1">{v.note}</p>
                        <a
                          href={enquireHref(v.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 btn-ghost-gold w-full"
                        >
                          Enquire on WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REFUND POLICY */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Policy"
            title="Car Rental Refund & Cancellation Policy"
            subtitle="We understand that plans may change. The following policy provides clarity on cancellations and refunds for car rental bookings. Majestic Roams reserves the right to alter or amend this policy at any time without notice."
          />

          <div className="mt-12 space-y-8">
            <div className="gold-border p-7 bg-card/60">
              <h3 className="font-serif text-xl text-gold">Payment</h3>
              <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                For all services contracted, full payment shall be made in advance via one of the accepted methods. All prices are quoted in Indian Rupees and are exclusive of taxes.
              </p>
            </div>

            <div className="gold-border p-7 bg-card/60">
              <h3 className="font-serif text-xl text-gold">Cancellation Charges</h3>
              <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                In the event of cancellation by the User / Client, we must be notified immediately in writing. Cancellation charges are effective from the date written notice is received, and apply as follows:
              </p>
              <ol className="mt-5 space-y-4 text-sm text-cream/85 leading-relaxed">
                <li className="flex gap-4">
                  <span className="font-serif text-gold w-6 shrink-0">01</span>
                  <span><strong className="text-cream">30 days or more</strong> prior to the scheduled date — a cancellation fee of <strong className="text-gold">10%</strong> of the total booking amount applies; the remainder is refunded.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-gold w-6 shrink-0">02</span>
                  <span><strong className="text-cream">Between 15 and 29 days</strong> prior — a cancellation fee of <strong className="text-gold">25%</strong> of the total booking amount applies; the remainder is refunded.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-gold w-6 shrink-0">03</span>
                  <span><strong className="text-cream">Between 72 hours and 14 days</strong> prior — a cancellation fee of <strong className="text-gold">50%</strong> of the total booking amount applies; the remainder is refunded.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-gold w-6 shrink-0">04</span>
                  <span><strong className="text-cream">Less than 72 hours</strong> prior, or in case of a <strong className="text-cream">no-show</strong> — <strong className="text-gold">no refund</strong> will be provided.</span>
                </li>
              </ol>
            </div>

            <div className="gold-border p-7 bg-card/60">
              <h3 className="font-serif text-xl text-gold">Trips After Commencement</h3>
              <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                If you cancel any trip after commencement, refund for the unused portion will be solely at the discretion of Majestic Roams. Refunds, where applicable, are processed within a reasonable timeframe after deducting the respective cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
