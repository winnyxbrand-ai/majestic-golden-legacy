import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-serif text-5xl md:text-6xl text-cream">{title}</h1>
        <div className="mt-6 flex justify-center">
          <span className="h-px w-24 bg-gold" />
        </div>
        {children && <div className="mt-6 text-cream/80 max-w-2xl mx-auto">{children}</div>}
      </motion.div>
    </section>
  );
}
