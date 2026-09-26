"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden blueprint">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void to-panel/40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full px-6 pt-32 pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">ENTER THE WORKSHOP</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-display-1 font-semibold text-warm"
          >
            Vivek
            <br />
            Shinde
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 font-mono text-sm text-inkdim tracking-wide"
          >
            AI / ML ENGINEER · PYTHON DEVELOPER
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-6 max-w-md text-lg text-ink leading-relaxed"
          >
            Building intelligent systems that turn data into useful products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="mt-4 font-mono text-xs text-inkdim tracking-wide"
          >
            Machine Learning · Deep Learning · Generative AI · Computer Vision · NLP · RAG
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="font-mono text-xs px-5 py-3 bg-cyan text-void rounded-sm hover:bg-warm transition-colors">
              View the systems
            </a>
            <a href="https://www.linkedin.com/in/vivekshinde13/" target="_blank" rel="noreferrer" className="font-mono text-xs px-5 py-3 border border-line text-ink rounded-sm hover:border-cyan hover:text-cyan transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/5] max-w-sm mx-auto w-full hero-photo-stage"
          initial={{ opacity: 0, scale: 0.94, rotateY: -8 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ rotateY: 5, rotateX: -3, scale: 1.015 }}
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        >
          <div className="absolute inset-[-14%] hero-photo-halo fresh-glow" />
          <div className="absolute -inset-8 rounded-[2rem] border border-emerald/10 rotate-2 pointer-events-none" />
          <div className="absolute -inset-4 rounded-[1.5rem] border border-violet/10 -rotate-2 pointer-events-none" />
          <div className="absolute inset-0">
            <HeroScene />
          </div>
          <div className="hero-photo-card absolute inset-7 rounded-md border border-cyan/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-cyan/5 z-10 pointer-events-none" />
            <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan/90 z-20">NODE_01 · PROFILE</div>
            <Image
              src="/vivek-portrait.jpg"
              alt="Portrait of Vivek Shinde"
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 scanline opacity-30 mix-blend-screen z-20" />
            <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-between items-end font-mono text-[9px] tracking-wide">
              <span className="text-ink">VIVEK SHINDE</span>
              <span className="text-cyan">AI / ML</span>
            </div>
          </div>
          <div className="absolute -right-4 top-1/4 z-30 glass-chip">MODEL<br/><span>READY</span></div>
          <div className="absolute -left-4 bottom-1/4 z-30 glass-chip">PYTHON<br/><span>ACTIVE</span></div>
        </motion.div>
      </div>
    </section>
  );
}
