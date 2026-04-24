"use client";

import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Bronze divider */}
          <div className="w-16 h-0.5 bg-accent mx-auto mb-10" />

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-white leading-snug mb-8">
            Every project starts with a clear scope, a practical plan, and
            communication that keeps everyone aligned.
          </blockquote>

          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            From residential renovations to commercial fit-outs, we bring
            structure and accountability to every stage of the process.
          </p>

          {/* Bronze divider */}
          <div className="w-16 h-0.5 bg-accent mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
