"use client";

import { footerLinks } from "../data/siteData";
import LogoMark from "./LogoMark";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Bronze top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size={24} className="text-white/80" />
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                  NuraBuild
                </span>
                <span className="text-xs text-accent font-semibold tracking-[0.12em] uppercase">
                  Contracting
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Fictional contractor website concept for portfolio demonstration.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/50">
                Demo Concept
              </span>
              <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/50">
                Not a Real Company
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Concepts */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 uppercase tracking-wider">
              Project Concepts
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              &copy;&nbsp;{currentYear}&nbsp;NuraBuild Contracting&nbsp;&mdash;&nbsp;Fictional portfolio
              demo. Not affiliated with any real company. Built by Yogesh Vadivel.
            </p>
            <p className="text-xs text-white/30">
              All images sourced from Pexels / Unsplash under free license.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
