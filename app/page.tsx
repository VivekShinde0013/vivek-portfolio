import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import NexusPipeline from "@/components/sections/NexusPipeline";
import AgriGuard from "@/components/sections/AgriGuard";
import BuildLog from "@/components/sections/BuildLog";
import Contact from "@/components/sections/Contact";
import dynamic from "next/dynamic";

const ScrollExperienceLayer = dynamic(() => import("@/components/3d/ScrollExperience").then((m) => m.ScrollExperienceLayer), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <ScrollExperienceLayer />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <NexusPipeline />
      <AgriGuard />
      <BuildLog />
      <Contact />
      <Footer />
    </main>
  );
}
