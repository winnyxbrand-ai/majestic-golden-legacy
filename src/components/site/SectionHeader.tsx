import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">{title}</h2>
      <div className={`mt-6 flex ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-24 bg-gold" />
      </div>
      {subtitle && (
        <p className="mt-6 text-cream/70 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
