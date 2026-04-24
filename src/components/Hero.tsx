"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroImage } from "../data/siteData";
import { ArrowRight, MapPin, Ruler, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Architects reviewing blueprints in a professional office setting"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/[.97] via-[#FAF7F2]/90 to-[#FAF7F2]/50 lg:to-[#FAF7F2]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-[#FAF7F2]/70" />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 z-[1] blueprint-grid opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/8 border border-accent/15 rounded text-[11px] font-semibold text-accent uppercase tracking-[0.15em] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Fictional Demo Concept
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-[2.25rem] md:text-5xl lg:text-[3.5rem] xl:text-6xl font-[family-name:var(--font-heading)] text-primary leading-[1.08] mb-5 tracking-tight"
            >
              Contracting &amp; Fit-Out
              <br />
              <span className="text-accent">Solutions</span> for Modern
              <br className="hidden md:block" /> UAE Spaces
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-16 h-[2px] bg-accent mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              Residential renovation, commercial fit-out, approval coordination, and
              site supervision — presented through a clear, professional digital
              experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold tracking-wide rounded hover:bg-primary/90 transition-all hover:shadow-xl group"
              >
                Request a Quote
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary/20 text-primary text-sm font-semibold tracking-wide rounded hover:border-accent hover:text-accent transition-all"
              >
                View Project Concepts
              </a>
            </motion.div>
          </div>

          {/* Right column — project spec card (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="bg-white/85 backdrop-blur-md border border-border/60 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">Sample Project Scope</span>
                <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent font-semibold rounded">Concept</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-1 font-[family-name:var(--font-heading)]">
                Jumeirah Villa Renovation
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-4">
                <MapPin size={12} className="text-accent" />
                Dubai, UAE
              </div>
              <div className="space-y-2.5 mb-4">
                {["Layout refinement & space planning", "Interior finishing coordination", "Material selection & procurement", "Handover & quality review"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-text-secondary">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="border-t border-border/50 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <Ruler size={12} />
                  <span>~320 sqm</span>
                </div>
                <a href="#projects" className="text-xs font-semibold text-accent hover:text-accent-light transition-colors">
                  View all concepts →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bronze line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bronze-divider" />
    </section>
  );
}
