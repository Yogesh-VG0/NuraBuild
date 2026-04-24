"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sectors } from "../data/siteData";
import SectionWrapper from "./SectionWrapper";

export default function Sectors() {
  return (
    <SectionWrapper id="sectors">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
      >
        Sectors
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 mb-12"
      >
        Sectors we support
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden h-72 cursor-default"
          >
            <Image
              src={sector.image}
              alt={`${sector.title} — sector`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-semibold text-white mb-1 font-[family-name:var(--font-heading)]">
                {sector.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {sector.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
