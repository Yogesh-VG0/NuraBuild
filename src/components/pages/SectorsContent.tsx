"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sectors } from "../../data/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SectorsContent() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
      <div className="max-w-7xl mx-auto space-y-12">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-border/40 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className={`relative h-56 lg:h-auto min-h-[220px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={sector.image}
                  alt={`${sector.title} sector concept`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={`p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)] mb-3">
                  {sector.title}
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
                  {sector.description}
                </p>

                <h3 className="text-sm font-semibold text-primary mb-3">Common Project Needs</h3>
                <div className="space-y-2 mb-5">
                  {sector.needs.map((need) => (
                    <div key={need} className="flex items-start gap-2 text-[13px] text-text-secondary">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      {need}
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-primary mb-2">Relevant Services</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sector.relevantServices.map((s) => (
                    <span key={s} className="text-[10px] font-medium text-accent/70 bg-accent/6 px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-[13px] text-text-secondary italic mb-5">
                  Example scope: {sector.exampleScope}
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent hover:text-accent-light transition-colors group"
                  >
                    View services
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary hover:text-accent transition-colors group"
                  >
                    Request a quote
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
