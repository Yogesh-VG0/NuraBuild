"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { projectTypes, contactInfo, contactFaq } from "../../data/siteData";
import { Send, CheckCircle, ChevronDown } from "lucide-react";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Form + contact info */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-noise">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary mb-10 text-[15px] leading-relaxed"
            >
              This frontend-only enquiry form demonstrates the kind of quote request
              flow a contractor website can support.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="bg-white rounded-xl p-5 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <info.icon size={18} className="text-accent" />
                  </div>
                  <p className="text-xs text-text-secondary mb-1">{info.label}</p>
                  <p className="text-sm font-semibold text-primary">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-border/50 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Demo Enquiry Submitted
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                  Demo enquiry submitted. In a real project, this would connect to
                  email, WhatsApp, or a CRM.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent hover:text-accent-light font-medium underline underline-offset-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-border/50 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Name</label>
                  <input
                    type="text" id="name" name="name" required placeholder="Your full name"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-border/70 rounded-lg text-sm text-primary placeholder:text-muted/60 focus:ring-0 transition-colors hover:border-border"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-medium text-primary mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel" id="phone" name="phone" placeholder="+971 ..."
                      className="w-full px-4 py-3 bg-[var(--color-bg)] border border-border/70 rounded-lg text-sm text-primary placeholder:text-muted/60 focus:ring-0 transition-colors hover:border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-primary mb-1.5">Email</label>
                    <input
                      type="email" id="email" name="email" required placeholder="you@email.com"
                      className="w-full px-4 py-3 bg-[var(--color-bg)] border border-border/70 rounded-lg text-sm text-primary placeholder:text-muted/60 focus:ring-0 transition-colors hover:border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-1.5">Project Type</label>
                  <select
                    id="projectType" name="projectType" required
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-border/70 rounded-lg text-sm text-primary focus:ring-0 transition-colors hover:border-border"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" rows={4} placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-border/70 rounded-lg text-sm text-primary placeholder:text-muted/60 focus:ring-0 resize-none transition-colors hover:border-border"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl group"
                >
                  Send Enquiry
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white border-t border-border/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {contactFaq.map((faq, i) => (
              <div
                key={i}
                className="bg-[var(--color-bg)] rounded-lg border border-border/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  {faq.q}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-[13px] text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
