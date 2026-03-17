"use client";

import { useState } from "react";
import TrackNavigation from "./components/TrackNavigation";
import RacingTrackBackground from "./components/RacingTrackBackground";
import F1StartLights from "./components/F1StartLights";
import F1Car from "./components/F1Car";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [raceStarted, setRaceStarted] = useState(false);

  if (!raceStarted) {
    return <F1StartLights onFinish={() => setRaceStarted(true)} />;
  }

  return (
    <main className="relative text-white overflow-hidden checkered-bg">
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-black -z-20"></div>

      {/* TRACK + CAR */}
      <RacingTrackBackground />
      <F1Car />

      {/* TRACK NAVIGATION */}
      <TrackNavigation />

      {/* HERO SECTION */}

      <section id="home" className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/f1bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold">Vivek Shinde</h1>

          <h2 className="text-2xl mt-4 text-gray-400">
            <Typewriter
              words={[
                "AI / ML Developer",
                "Python Engineer",
                "FastAPI Developer",
                "Machine Learning Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
            />
          </h2>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/VivekShinde0013"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vivekshinde13"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        className="relative py-28 px-10 max-w-7xl mx-auto pl-32"
      >
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am Vivek Shinde, a passionate Computer Science student with a
              strong interest in Artificial Intelligence, Machine Learning and
              Software Development.
            </p>

            <p>
              Currently pursuing my B.Tech in Computer Science, I enjoy solving
              real-world problems through programming and building intelligent
              systems.
            </p>

            <p>
              I have experience working with languages like Python, C++, Java
              and building Machine Learning models and APIs using FastAPI.
            </p>

            <p>
              My goal is to grow as an AI/ML engineer and contribute to
              impactful technological solutions.
            </p>
          </div>

          {/* PHOTO */}

          <div className="flex justify-center">
            <img
              src="/my-photo.jpeg"
              alt="Vivek Shinde"
              className="w-[320px] rounded-xl border border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.5)] hover:scale-105 transition"
            />
          </div>
        </div>

        {/* SKILLS */}

{/* SKILLS */}

<div className="mt-24">

  <h3 className="text-2xl font-semibold mb-12 text-center">
    Skills
  </h3>

  <div className="grid md:grid-cols-2 gap-10">

    {[
      { name: "Python", level: "80%" },
      { name: "C++", level: "65%" },
      { name: "Java", level: "80%" },
      { name: "Machine Learning", level: "80%" },
      { name: "FastAPI", level: "75%" },
      { name: "TensorFlow", level: "70%" },
      { name: "Pandas", level: "75%" },
      { name: "NumPy", level: "70%" },
    ].map((skill, i) => (

      <div
        key={i}
        className="relative bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 overflow-hidden hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      >

        {/* TOP LINE (CYAN THEME) */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400"></div>

        {/* SKILL NAME */}
        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold">{skill.name}</span>
          <span className="text-gray-400">{skill.level}</span>
        </div>

        {/* TRACK BAR */}
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 transition-all duration-700"
            style={{ width: skill.level }}
          ></div>

        </div>

        {/* LIGHT SWEEP EFFECT */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
        </div>

      </div>

    ))}

  </div>

</div>  
      </section> {/* ✅ FIXED: CLOSED ABOUT SECTION */}

      {/* ===================== ACHIEVEMENTS ===================== */}

      <section
        id="achievements"
        className="relative py-24 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Secured a Top 5 position in the prestigious NASA Space Apps Challenge, demonstrating strong problem-solving and innovation skills",
            "Achieved a Global Rank of 1594 in a LeetCode Weekly Contest, competing among 16,000+ participants worldwide",
            "Designed and deployed Machine Learning APIs using FastAPI, enabling efficient and scalable model integration",
            "Developed and optimized Machine Learning models with accuracy exceeding 94%, showcasing strong analytical and modeling capabilities",
          ].map((text, index) => (
            <div
              key={index}
              className="relative group bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 via-white to-red-600"></div>

              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-red-600 to-transparent"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"></div>
              </div>

              <p className="relative text-gray-300 leading-relaxed text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Insurance Category Prediction",
              desc: "Machine learning API built with FastAPI.",
            },
            {
              title: "PDF Summarizer",
              desc: "NLP application that summarizes documents.",
            },
            {
              title: "ATM Banking System",
              desc: "Java based ATM system with authentication.",
            },
            {
              title: "Crop Recommendation System",
              desc: "AI model recommending crops from soil data.",
            },
            {
              title: "Cattle Breed Recognition",
              desc: "Computer vision model for cattle breeds.",
            },
            {
              title: "Sports League Management",
              desc: "Software managing sports tournaments.",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 mt-3">{project.desc}</p>

              <div className="mt-5">
                <a
                  href="https://github.com/VivekShinde0013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REST CODE REMAINS SAME (Certificates, Resume, Contact) */}
      {/* CERTIFICATES */}

      <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">Certificates</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Automation Anywhere Professional",
              img: "/automation-cert.png",
            },
            {
              title: "Oracle OCI AI Foundations",
              img: "/oracle-cert.png",
            },
            {
              title: "FastAPI for Machine Learning",
              img: "/fastapi-cert.png",
            },
            {
              title: "Data Structures & Algorithms",
              img: "/dsa-cert.png",
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 rounded-xl p-4 border border-white/10 hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]"
            >
              {/* IMAGE CONTAINER */}
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-[220px] object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-center">
                {cert.title}
              </h3>

              {/* BUTTON */}
              <div className="mt-4 flex justify-center">
                <a
                  href={cert.img}
                  target="_blank"
                  className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* RESUME SECTION */}

      <section id="resume" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Resume</h2>

        <p className="text-gray-400 mb-10">
          Choose the resume based on your requirement
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* GENERAL RESUME */}

          <div className="bg-gray-900 p-8 rounded-xl border border-white/10 hover:scale-105 transition hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-[300px]">
            <h3 className="text-2xl font-semibold mb-4">General Resume</h3>

            <p className="text-gray-400 mb-6">
              Complete overview of skills, education and projects.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="/general-resume.pdf"
                target="_blank"
                className="px-4 py-2 border border-white rounded-lg"
              >
                View
              </a>

              <a
                href="/general-resume.pdf"
                download
                className="px-4 py-2 bg-white text-black rounded-lg"
              >
                Download
              </a>
            </div>
          </div>

          {/* AI/ML RESUME */}

          <div className="bg-gray-900 p-8 rounded-xl border border-red-500/30 hover:scale-105 transition hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] w-[300px]">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              Specialized Resume
            </h3>

            <p className="text-gray-400 mb-6">
              Focused on Machine Learning, AI projects and skills.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="/ai-ml-resume.pdf"
                target="_blank"
                className="px-4 py-2 border border-red-400 rounded-lg text-red-400"
              >
                View
              </a>

              <a
                href="/ai-ml-resume.pdf"
                download
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-28 px-6 bg-gradient-to-b from-gray-900 to-black text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 mb-12 text-lg">
          I'm always open to discussing AI, Machine Learning projects,
          internships and collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* EMAIL */}

          <a
            href="mailto:vivekshinde061@gmail.com"
            className="px-6 py-4 bg-gray-900 rounded-lg border border-red-500 hover:scale-105 transition shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            📧 Email
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/vivekshinde13"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-gray-900 rounded-lg border border-red-500 hover:scale-105 transition shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            💼 LinkedIn
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/VivekShinde0013"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-gray-900 rounded-lg border border-red-500 hover:scale-105 transition shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            💻 GitHub
          </a>

          {/* PHONE */}

          <div className="px-6 py-4 bg-gray-900 rounded-lg border border-red-500">
            📱 +91 8605291635
          </div>
        </div>
      </section>
 

    </main>
  );
}
