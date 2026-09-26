"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
      className="group project-card-3d relative rounded-md border border-line bg-panel/60 p-6 hover:border-cyan/60 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <p className="font-mono text-[11px] text-inkdim mt-1">{project.category}</p>
        </div>
        <span className="font-mono text-[10px] text-cyan/70 border border-line rounded-sm px-2 py-1 shrink-0">
          SYS_{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="text-sm text-inkdim leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2 py-1 rounded-sm border border-line text-inkdim group-hover:border-line"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 font-mono text-[11px]">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="text-cyan hover:text-warm">
            GitHub →
          </a>
        ) : (
          <span className="text-inkdim/50">Source not linked</span>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="text-cyan hover:text-warm">
            Demo →
          </a>
        )}
      </div>
    </motion.article>
  );
}
