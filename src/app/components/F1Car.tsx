"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "projects",
  "certificates",
  "resume",
  "contact",
];

export default function F1Car() {
  const [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionIndex = 0;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= window.innerHeight / 2) {
            currentSectionIndex = index;
          }
        }
      });

      setCarPosition(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-10 z-50 transition-all duration-500"
      style={{
        top: `${150 + carPosition * 110}px`,
      }}
    >
      <img
        src="/f1car.png"
        alt="F1 Car"
        className="w-16 rotate-90 drop-shadow-[0_0_20px_red]"
      />
    </div>
  );
}