"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-[var(--color-bg)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-10 md:p-16 border border-border/50 shadow-lg relative overflow-hidden overflow-x-clip"
      >
        {/* Accent decorations */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent/5 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-primary leading-tight mb-4 relative z-10">
          Planning a renovation, fit-out,
          <br className="hidden md:block" /> or contracting project?
        </h2>

        <p className="text-base md:text-lg text-text-secondary mb-8 relative z-10">
          Start with a clear enquiry and a structured project conversation.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/90 transition-all hover:shadow-xl relative z-10 group"
        >
          Request a Quote
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
