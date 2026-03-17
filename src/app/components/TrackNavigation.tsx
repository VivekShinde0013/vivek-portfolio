"use client";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function TrackNavigation() {
  return (
    <div className="fixed left-7 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-8">

      {sections.map((section, i) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-4 group"
        >

          {/* Track Marker */}
          <div className="w-4 h-4 rounded-full bg-white group-hover:bg-red-500 transition"></div>

          {/* Section Label */}
          <span className="text-sm text-gray-300 group-hover:text-white transition">
            {section.label}
          </span>

        </a>
      ))}

    </div>
  );
}