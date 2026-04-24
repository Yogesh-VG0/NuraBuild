"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Ruler, CheckCircle2 } from "lucide-react";

interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  sector: string;
  sampleScale: string;
  scope: string;
  description: string;
  image: string;
  scopeOverview: string;
  requirements: string[];
  deliveryNotes: string;
  finishNotes: string;
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <>
      {/* Hero image + title */}
      <section className="relative">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} — concept project visual`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/10" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary rounded tracking-wide uppercase mb-3">
                {project.type}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-white leading-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Project info bar */}
      <section className="bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" />
              {project.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 size={14} className="text-accent" />
              {project.sector}
            </div>
            <div className="flex items-center gap-1.5">
              <Ruler size={14} className="text-accent" />
              Sample scale: {project.sampleScale}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-noise">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-primary mb-4">
                  Scope Overview
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed">{project.scopeOverview}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-primary mb-4">
                  Project Requirements
                </h2>
                <div className="space-y-2.5">
                  {project.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2.5 text-[14px] text-text-secondary">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      {req}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-primary mb-4">
                  Delivery Considerations
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed">{project.deliveryNotes}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-primary mb-4">
                  Finishes &amp; Coordination
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed">{project.finishNotes}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border/40 p-6">
                <h3 className="text-sm font-semibold text-primary mb-3">Scope Tags</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.scope.split(", ").map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-accent/80 bg-accent/6 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border/40 p-6">
                <h3 className="text-sm font-semibold text-primary mb-3">Project Status</h3>
                <p className="text-[13px] text-text-secondary">
                  This is a fictional project scope created for demonstration purposes. No real project or client is represented.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all group"
              >
                Request a similar scope
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="block text-center text-[13px] text-accent hover:text-accent-light font-medium transition-colors"
              >
                ← Back to all projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
