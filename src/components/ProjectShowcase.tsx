"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/siteData";
import { MapPin, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function ProjectShowcase() {
  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-primary leading-tight mt-3 max-w-lg"
          >
            Featured work &amp; case studies
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[13px] text-text-secondary max-w-xs"
        >
          Representative scopes across residential, commercial, and light industrial
          environments in the UAE.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-500 bg-[var(--color-bg)]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} — project photo`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary rounded tracking-wide uppercase">
                  {project.sector}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs">
                <MapPin size={12} />
                {project.location}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.scope.split(", ").map((s) => (
                  <span key={s} className="text-[10px] font-medium text-accent/70 bg-accent/6 px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent hover:text-accent-light transition-colors group/link"
              >
                View project scope
                <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
