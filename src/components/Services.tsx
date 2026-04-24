"use client";

import { motion } from "framer-motion";
import { services } from "../data/siteData";
import SectionWrapper from "./SectionWrapper";

const scopeTags: Record<string, string[]> = {
  "Villa Renovation": ["Layout", "Finishing", "Coordination"],
  "Apartment Refurbishment": ["Interior", "Space Planning", "Upgrades"],
  "Commercial Fit-Out": ["Office", "Retail", "Handover"],
  "Office Partitions & Interiors": ["Partitions", "Ceiling", "Flooring"],
  "Approval Support": ["Drawings", "Documentation", "Authority"],
  "Project Supervision": ["Progress", "Quality", "Handover"],
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-noise">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
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
            Contracting Services for Homes, Offices &amp; Commercial Spaces
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-20 h-[2px] bg-accent hidden md:block mb-2"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group py-7 border-b border-border/60 last:border-b-0"
          >
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-bold text-accent/40 tracking-wider mt-1 shrink-0">
                0{i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-primary">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[13px] text-text-secondary leading-relaxed mb-3">
                  {service.description}
                </p>

                {scopeTags[service.title] && (
                  <div className="flex flex-wrap gap-1.5">
                    {scopeTags[service.title].map((tag) => (
                      <span key={tag} className="text-[10px] font-medium text-accent/70 bg-accent/6 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
