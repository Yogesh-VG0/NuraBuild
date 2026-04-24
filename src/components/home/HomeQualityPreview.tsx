"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { qualityItems } from "../../data/siteData";
import { ArrowRight } from "lucide-react";

export default function HomeQualityPreview() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
            >
              Quality &amp; Safety
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 max-w-2xl"
            >
              Built Around Coordination and Clear Delivery
            </motion.h2>
          </div>
          <Link
            href="/quality-safety"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
          >
            Learn more
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {qualityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-border/40"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
