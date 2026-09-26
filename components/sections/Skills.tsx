"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, skillNotes } from "@/lib/data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6 border-t border-line blueprint">
      <div className="mx-auto max-w-6xl">
        <div className="tick-line w-full mb-6" />
        <p className="font-mono text-xs tracking-wide text-cyan mb-4">SCENE 03 · THE TOOLBOX</p>
        <h2 className="text-display-2 font-semibold text-ink mb-4">Tools on the bench.</h2>
        <p className="text-inkdim max-w-lg mb-12">
          Hover a tool to see how it fits into the systems below.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] tracking-wide text-inkdim mb-3">
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item} className="relative">
                    <button
                      onMouseEnter={() => setHovered(item)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(item)}
                      onBlur={() => setHovered(null)}
                      className={`font-mono text-xs px-3 py-2 rounded-sm border transition-all duration-200 ${
                        hovered === item
                          ? "border-cyan text-cyan bg-cyan/5 -translate-y-0.5"
                          : "border-line text-ink hover:border-inkdim"
                      }`}
                    >
                      {item}
                    </button>
                    {skillNotes[item] && hovered === item && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 top-full mt-2 left-0 w-56 rounded-sm border border-line bg-panel px-3 py-2 font-mono text-[10px] text-inkdim leading-relaxed shadow-lg"
                      >
                        {skillNotes[item]}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
