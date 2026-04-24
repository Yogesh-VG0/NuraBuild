"use client";

import { motion } from "framer-motion";
import { capabilities } from "../data/siteData";

export default function TrustStrip() {
  return (
    <section className="relative z-30 py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-xl overflow-hidden border border-border/60">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-6 md:p-7 group hover:bg-[var(--color-bg)] transition-colors duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-start gap-4">
                <span className="text-[11px] font-bold text-accent/50 tracking-wider mt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-primary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
