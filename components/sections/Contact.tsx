"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-line overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs tracking-wide text-cyan mb-6">SCENE 08 · LET'S BUILD</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-display-2 font-semibold text-warm mb-8"
        >
          Let&apos;s build something intelligent.
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:vivekshinde061@gmail.com"
            className="font-mono text-sm px-6 py-3 bg-cyan text-void rounded-sm hover:bg-warm transition-colors"
          >
            vivekshinde061@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vivekshinde13/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm px-6 py-3 border border-line text-ink rounded-sm hover:border-cyan hover:text-cyan transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/VivekShinde0013"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm px-6 py-3 border border-line text-ink rounded-sm hover:border-cyan hover:text-cyan transition-colors"
          >
            github.com/VivekShinde0013
          </a>
        </div>
      </div>
    </section>
  );
}
