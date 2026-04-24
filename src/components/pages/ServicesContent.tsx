"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../../data/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesContent() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            id={service.slug}
            className="scroll-mt-24"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start bg-white rounded-xl border border-border/40 p-8 md:p-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold text-accent/40 tracking-wider">0{i + 1}</span>
                  <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h2>
                </div>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.scopeTags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-accent/70 bg-accent/6 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-text-secondary">
                  <span className="font-semibold text-primary">Best suited for: </span>
                  {service.bestFor}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary mb-4">What this includes</h3>
                <div className="space-y-2.5 mb-6">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
                >
                  Discuss this service
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
