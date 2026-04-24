"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../../data/siteData";
import { ArrowRight } from "lucide-react";

export default function HomeServicesPreview() {
  const preview = services.slice(0, 4);

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
              Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 max-w-xl"
            >
              Contracting &amp; Fit-Out Services
            </motion.h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
          >
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group p-6 bg-[var(--color-bg)] rounded-xl border border-border/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <s.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-[15px] font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
