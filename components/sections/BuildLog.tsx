"use client";

import { motion } from "framer-motion";
import { buildLog, buildStages } from "@/lib/data/hackathons";

export default function BuildLog() {
  return (
    <section id="journey" className="relative py-28 px-6 border-t border-line blueprint">
      <div className="mx-auto max-w-6xl">
        <div className="tick-line w-full mb-6" />
        <p className="font-mono text-xs tracking-wide text-cyan mb-4">SCENE 07 · THE BUILD LOG</p>
        <h2 className="text-display-2 font-semibold text-ink mb-12">Where the systems got tested.</h2>

        <div className="space-y-10">
          {buildLog.map((entry, i) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid md:grid-cols-[220px_1fr] gap-6 border-b border-line pb-8 last:border-b-0"
            >
              <div>
                <p className="font-mono text-[10px] text-inkdim mb-1">LOG_{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-semibold text-ink">{entry.name}</h3>
              </div>
              <div>
                <p className="text-inkdim leading-relaxed mb-4">{entry.note}</p>
                <div className="flex flex-wrap gap-2">
                  {buildStages.map((s) => (
                    <span key={s} className="font-mono text-[10px] px-2 py-1 rounded-sm border border-line text-inkdim">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
