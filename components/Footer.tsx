export default function Footer() {
  return (
    <footer className="border-t border-line py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-ink">Vivek Shinde</p>
          <p className="font-mono text-xs text-inkdim mt-1">AI / ML Engineer</p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-xs text-inkdim">
          <span>Machine Learning &middot; Generative AI &middot; Python</span>
          <a href="https://www.linkedin.com/in/vivekshinde13/" target="_blank" rel="noreferrer" className="hover:text-cyan">LinkedIn ↗</a>
        </div>
        <p className="font-mono text-xs text-inkdim">&copy; 2026</p>
      </div>
    </footer>
  );
}
