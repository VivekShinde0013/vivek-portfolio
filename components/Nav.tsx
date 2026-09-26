"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("vivek-theme");
    const isLight = saved === "light";
    setLight(isLight);
    document.documentElement.dataset.theme = isLight ? "light" : "dark";

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("vivek-theme", next ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-void/70 border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-wide text-ink">
          Vivek Shinde
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide text-inkdim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-cyan transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${light ? "dark" : "light"} theme`}
            className="theme-toggle font-mono text-[10px] px-3 py-2 border border-line rounded-full text-inkdim hover:text-cyan transition-all"
          >
            <span className="theme-dot">{light ? "☾" : "☼"}</span>
            {light ? "DARK" : "LIGHT"}
          </button>

          <a href="https://www.linkedin.com/in/vivekshinde13/" target="_blank" rel="noreferrer" className="font-mono text-xs text-inkdim hover:text-cyan transition-colors">
            LinkedIn ↗
          </a>
          <a href="/resume.pdf" className="font-mono text-xs px-4 py-2 border border-line rounded-sm text-ink hover:border-cyan hover:text-cyan transition-colors">
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-void px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] text-inkdim">DISPLAY MODE</span>
            <button type="button" onClick={toggleTheme} className="theme-toggle font-mono text-[10px] px-3 py-2 border border-line rounded-full text-inkdim">
              {light ? "☾ DARK" : "☼ LIGHT"}
            </button>
          </div>
          <ul className="flex flex-col gap-4 font-mono text-sm text-inkdim">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-cyan">{l.label}</a>
              </li>
            ))}
            <li><a href="https://www.linkedin.com/in/vivekshinde13/" target="_blank" rel="noreferrer" className="hover:text-cyan">LinkedIn ↗</a></li>
            <li><a href="/resume.pdf" className="hover:text-cyan">Resume</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
