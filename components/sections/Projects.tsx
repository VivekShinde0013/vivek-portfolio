"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="tick-line w-full mb-6" />
        <p className="font-mono text-xs tracking-wide text-cyan mb-4">SCENE 04 · THE SYSTEMS</p>
        <h2 className="text-display-2 font-semibold text-ink mb-4">Ten systems, built to work.</h2>
        <p className="text-inkdim max-w-lg mb-4">
          NexusAI and AgriGuard AI get their own labs further down this page — everything
          else is archived here.
        </p>
        <div className="flex gap-4 font-mono text-xs mb-12">
          <a href="#nexusai" className="text-cyan hover:text-warm">
            Jump to NexusAI →
          </a>
          <a href="#agriguard" className="text-cyan hover:text-warm">
            Jump to AgriGuard →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
