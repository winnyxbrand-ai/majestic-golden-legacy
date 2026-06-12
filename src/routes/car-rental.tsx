import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import safariAsset from "@/assets/safari.jpg.asset.json";
const safari = safariAsset.url;
import { CARS } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/car-rental")({
  head: () => ({
    meta: [
      { title: "Car Rental — Majestic Roams" },
      { name: "description", content: "Chauffeured car rentals in Jaisalmer — Sedan, Innova, Scorpio, Tempo Traveler and luxury coaches." },
      { property: "og:title", content: "Car Rental — Majestic Roams" },
      { property: "og:description", content: "Chauffeured car rentals across Jaisalmer and Rajasthan." },
    ],
  }),
  component: CarRental,
});

function CarRental() {
  return (
    <>
      <PageHero image={safari} eyebrow="Private Chauffeured Travel" title="Car Rental">
        From elegant sedans to spacious coaches — all journeys begin in comfort.
      </PageHero>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Our Fleet" title="Choose your carriage." align="center" />

          <div className="mt-14 gold-border overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-card">
                <tr className="text-gold uppercase tracking-[0.2em] text-[0.7rem]">
                  <th className="p-5">Vehicle</th>
                  <th className="p-5 hidden sm:table-cell">Seating</th>
                  <th className="p-5">Rate</th>
                  <th className="p-5 text-right">Reserve</th>
                </tr>
              </thead>
              <tbody>
                {CARS.map((c, i) => (
                  <motion.tr
                    key={c.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="border-t border-gold/20"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <Car className="size-4 text-gold" />
                        <span className="font-serif text-cream">{c.name}</span>
                      </div>
                    </td>
                    <td className="p-5 hidden sm:table-cell text-cream/70 text-sm">{c.seats}</td>
                    <td className="p-5 text-gold text-sm">{c.rate}</td>
                    <td className="p-5 text-right">
                      <a
                        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Majestic Roams, I'd like to enquire about renting a ${c.name}.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.7rem] uppercase tracking-[0.25em] text-gold hover:underline"
                      >
                        Enquire
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-cream/55 italic">
            * Rates are indicative and subject to season, route and minimum kilometre policy. Driver bata, parking and toll are additional unless specified.
          </p>
        </div>
      </section>

      {/* REFUND POLICY */}
      <section className="py-24 px-6 bg-card">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Policy"
            title="Car Rental Refund & Cancellation Policy"
            subtitle="We understand that plans may change. The following policy provides clarity on cancellations and refunds for car rental bookings. Majestic Roams reserves the right to alter or amend this policy at any time without notice."
          />

          <div className="mt-12 space-y-8">
            <div className="gold-border p-7 bg-ink/40">
              <h3 className="font-serif text-xl text-gold">Payment</h3>
              <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                For all services contracted, full payment shall be made in advance via one of the accepted methods. All prices are quoted in Indian Rupees and are exclusive of taxes.
              </p>
            </div>

            <div className="gold-border p-7 bg-ink/40">
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

            <div className="gold-border p-7 bg-ink/40">
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
