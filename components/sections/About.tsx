"use client";

import { motion } from "framer-motion";

const facts = [
  ["FOCUS", "AI / ML"],
  ["LANGUAGE", "PYTHON"],
  ["SPECIALTY", "GENERATIVE AI"],
  ["BUILD STYLE", "MODEL → PRODUCT"],
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <div className="relative about-machine">
          <div className="tick-line w-full mb-6" />
          <p className="font-mono text-xs tracking-wide text-cyan mb-5">SCENE 02 · THE ENGINEER</p>

          <div className="about-orbit">
            <div className="about-core">VS</div>
            <div className="about-ring about-ring-a" />
            <div className="about-ring about-ring-b" />
            <span className="about-node n1">ML</span>
            <span className="about-node n2">RAG</span>
            <span className="about-node n3">CV</span>
            <span className="about-node n4">GENAI</span>
          </div>

          <div className="about-console">
            <span>ENGINEER_PROFILE</span>
            <b>ONLINE</b>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display-2 font-semibold text-ink mb-2">Vivek Shinde</h2>
          <p className="font-mono text-xs text-inkdim tracking-wide mb-8">AI / ML Engineer · Python Developer</p>

          <p className="text-lg text-ink leading-relaxed max-w-xl">
            I build intelligent systems across machine learning, deep learning, computer
            vision, NLP, Generative AI and Python-based application development.
          </p>
          <p className="mt-5 text-lg text-inkdim leading-relaxed max-w-xl">
            My work focuses on connecting AI models with useful applications — from
            document intelligence and RAG systems to agriculture and computer-vision workflows.
          </p>

          <div className="about-facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
