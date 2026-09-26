"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { fieldStages } from "@/lib/data/field";

const FieldCanvas = dynamic(() => import("@/components/3d/FieldScene"), {
  ssr: false,
  loading: () => null,
});

const stageCopy = [
  "The farmer captures a crop image directly with a mobile phone camera.",
  "Detected symptoms are assessed for disease confidence and severity.",
  "Weather context feeds a short-term risk forecast for the field.",
  "The farmer receives an early warning and a recommendation.",
];

export default function AgriGuard() {
  const [stage, setStage] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-stage"));
            setStage(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="agriguard" className="relative py-28 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="tick-line w-full mb-6" />
        <p className="font-mono text-xs tracking-wide text-cyan mb-4">SCENE 06 · AI MEETS THE REAL WORLD</p>
        <h2 className="text-display-2 font-semibold text-ink mb-2">AgriGuard AI</h2>
        <p className="font-mono text-xs text-inkdim tracking-wide mb-10">
          Agriculture AI · Mobile Image Capture · Computer Vision · Smart India Hackathon
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-start">
          <div className="h-[380px] md:h-[460px] rounded-md border border-line bg-panel/40 overflow-hidden">
            <FieldCanvas stage={stage} />
          </div>

          <div className="space-y-10">
            {fieldStages.map((label, i) => (
              <div
                key={label}
                data-stage={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`transition-opacity duration-300 ${
                  stage === i ? "opacity-100" : "opacity-40"
                }`}
              >
                <p className="font-mono text-[11px] tracking-wide text-emerald mb-1">{label}</p>
                <p className="text-ink">{stageCopy[i]}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 max-w-2xl text-inkdim leading-relaxed">
          AgriGuard AI combines crop image analysis, disease and severity assessment,
          weather context and farm-level monitoring into early warnings and
          recommendations — developed in the context of Smart India Hackathon work.
        </p>
      </div>
    </section>
  );
}
