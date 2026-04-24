"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { aboutImage, aboutFeatures } from "../../data/siteData";
import { ArrowRight } from "lucide-react";

export default function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
            >
              About NuraBuild
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 mb-5"
            >
              Structured Contracting Support from Enquiry to Handover
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="w-12 h-[2px] bg-accent mb-5"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary leading-relaxed mb-8 text-[15px]"
            >
              NuraBuild Contracting provides clarity, coordination, and professional
              project delivery for residential and commercial spaces across the UAE.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {aboutFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">{f.title}</h4>
                    <p className="text-[12px] text-text-secondary leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
            >
              Learn more about us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src={aboutImage}
              alt="Construction professionals reviewing building plans on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
