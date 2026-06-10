import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl tracking-[0.18em] text-gold uppercase">
            Majestic Roams
          </h3>
          <p className="mt-4 text-cream/70 max-w-md leading-relaxed">
            A bespoke heritage travel atelier crafting royal sojourns across the
            Golden City of Jaisalmer and the timeless Thar.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-cream/75 hover:text-gold text-sm">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><Phone className="size-4 text-gold mt-0.5" />{SITE.phone}</li>
            <li className="flex gap-3"><Mail className="size-4 text-gold mt-0.5" />{SITE.email}</li>
            <li className="flex gap-3"><MapPin className="size-4 text-gold mt-0.5" />{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="gold-rule" />
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs uppercase tracking-[0.25em] text-cream/50 text-center">
        © {new Date().getFullYear()} Majestic Roams · Jaisalmer, India
      </div>
    </footer>
  );
}
