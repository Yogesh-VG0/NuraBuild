"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutFeatures, aboutImage } from "../data/siteData";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-noise">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text side */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            What We Do
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
            We focus on clarity, coordination, and predictable delivery so owners
            and tenants understand scope, milestones, and handover from day one.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-5">
            {aboutFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <feature.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage}
              alt="Construction professionals reviewing building plans on site"
              width={800}
              height={600}
              className="object-cover w-full h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          {/* Accent corner */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-xl -z-10" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
