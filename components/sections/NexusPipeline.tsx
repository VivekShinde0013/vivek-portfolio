"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { pipelineStages } from "@/lib/data/pipeline";

const PipelineCanvas = dynamic(
  () => import("@/components/3d/PipelineScene").then((m) => m.PipelineCanvas),
  { ssr: false, loading: () => null }
);

const stepCopy = [
  "A document enters the workshop.",
  "It's broken into chunks the model can reason over.",
  "Each chunk becomes an embedding vector.",
  "Vectors are indexed in a vector store.",
  "The retriever selects the relevant chunks.",
  "The LLM reasons over the retrieved context.",
  "A grounded answer is returned.",
];

export default function NexusPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step"));
            setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nexusai" className="relative py-28 px-6 border-t border-line bg-panel/30">
      <div className="mx-auto max-w-6xl">
        <div className="tick-line w-full mb-6" />
        <p className="font-mono text-xs tracking-wide text-cyan mb-4">SCENE 05 · THE INTELLIGENCE PIPELINE</p>
        <h2 className="text-display-2 font-semibold text-ink mb-2">NexusAI</h2>
        <p className="font-mono text-xs text-inkdim tracking-wide mb-10">
          Document Intelligence · Generative AI
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-start">
          <div className="order-2 md:order-1 space-y-10">
            {pipelineStages.map((label, i) => (
              <div
                key={label}
                data-step={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`transition-opacity duration-300 ${
                  activeStep === i ? "opacity-100" : "opacity-40"
                }`}
              >
                <p className="font-mono text-[11px] tracking-wide text-cyan mb-1">{label}</p>
                <p className="text-ink">{stepCopy[i]}</p>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 sticky top-24 h-[380px] md:h-[460px] rounded-md border border-line bg-void/60">
            <PipelineCanvas activeStep={activeStep} />
          </div>
        </div>

        <p className="mt-14 max-w-2xl text-inkdim leading-relaxed">
          NexusAI lets you upload documents and ask questions about what's inside them.
          Retrieval and language-model reasoning work together so answers stay grounded
          in the source material, using RAG, LangChain and FAISS for embeddings and
          vector search.
        </p>
      </div>
    </section>
  );
}
