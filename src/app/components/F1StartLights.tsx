"use client";

import { useEffect, useState } from "react";

export default function F1StartLights({ onFinish }: { onFinish: () => void }) {
  const [lights, setLights] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          onFinish();
        }, 800);
        return prev;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[999]">
      <div className="flex gap-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`w-16 h-16 rounded-full transition-all duration-300 ${
              lights >= n ? "bg-red-600 shadow-[0_0_30px_red]" : "bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}