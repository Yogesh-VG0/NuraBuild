"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/siteData";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function ProjectsListing() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-500 bg-white"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — concept project visual`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary rounded tracking-wide uppercase">
                      Concept Project
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs">
                    <MapPin size={12} />
                    {project.location}
                  </div>
                </div>
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
                  <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent group-hover:text-accent-light transition-colors">
                    View project scope
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
