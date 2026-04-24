"use client";

import { motion } from "framer-motion";
import { qualityItems } from "../data/siteData";
import SectionWrapper from "./SectionWrapper";

export default function QualitySafety() {
  return (
    <SectionWrapper id="quality" className="bg-white">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
      >
        Quality & Safety
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 mb-12 max-w-2xl"
      >
        Built Around Better Communication and Clearer Delivery
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {qualityItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group bg-white rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />

            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <item.icon size={26} className="text-accent" />
            </div>

            <h3 className="text-lg font-semibold text-primary mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
