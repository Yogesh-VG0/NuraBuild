"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { qualityItems, processSteps } from "../../data/siteData";
import { ArrowRight, FileCheck, MessageSquare } from "lucide-react";

export default function QualitySafetyContent() {
  return (
    <>
      {/* Quality items full detail */}
      <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-noise">
        <div className="max-w-7xl mx-auto space-y-12">
          {qualityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-border/40 p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-accent" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-accent/40 tracking-wider">0{i + 1}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h2>
                </div>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Communication & documentation */}
      <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg)] rounded-xl p-8 border border-border/40"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-4">
              <MessageSquare size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">Communication Standards</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Clear, regular communication keeps all project stakeholders aligned. Progress updates
              are shared at agreed intervals, issues are raised promptly, and decisions are documented
              to maintain accountability throughout the project lifecycle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--color-bg)] rounded-xl p-8 border border-border/40"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-4">
              <FileCheck size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">Handover Process</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Every project concludes with a structured handover process — final walkthrough,
              snag list resolution, documentation package, and warranty information. Nothing
              is considered complete until the client signs off on the finished works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process reminder */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white mb-10">
            Our Project Flow
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step}>
                <span className="text-3xl font-bold text-accent/30 font-[family-name:var(--font-heading)]">{step.step}</span>
                <h3 className="text-sm font-semibold text-white mt-1 mb-1">{step.title}</h3>
                <p className="text-[12px] text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-noise border-t border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-[family-name:var(--font-heading)] text-primary mb-2">
              Have a project to discuss?
            </h2>
            <p className="text-sm text-text-secondary">Get in touch for a structured project conversation.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-primary/90 transition-all group"
          >
            Request a quote
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
