"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aboutImage, aboutFeatures, processSteps } from "../../data/siteData";
import { ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <>
      {/* Company positioning */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 mb-5">
              A Contractor Focused on Clear Communication and Reliable Delivery
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-5" />
            <p className="text-text-secondary leading-relaxed text-[15px] mb-4">
              NuraBuild Contracting supports residential and commercial clients through
              structured project coordination — from the first enquiry through to
              handover. Our approach centres on clear scope definition, organized trade
              coordination, and regular progress communication.
            </p>
            <p className="text-text-secondary leading-relaxed text-[15px]">
              Based across Dubai and Sharjah, our services cover villa renovation,
              apartment refurbishment, office fit-out, approval support, and site
              supervision for projects of varying scale.
            </p>
          </motion.div>
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
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 max-w-lg mx-auto">
              What Guides Our Project Approach
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[var(--color-bg)] rounded-xl p-6 border border-border/40"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-[15px] font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project approach / process */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Project Approach</span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 max-w-xl">
              How We Deliver Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="text-4xl font-bold text-accent/15 font-[family-name:var(--font-heading)]">{step.step}</span>
                <h3 className="text-sm font-semibold text-primary mt-1 mb-1.5">{step.title}</h3>
                <p className="text-[12px] text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-16 px-6 md:px-8 bg-white border-t border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-text-secondary max-w-lg">
            NuraBuild Contracting is a fictional website concept. No real company, client, or project is represented. Created for portfolio demonstration purposes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary/90 transition-all group"
          >
            Get in touch
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
