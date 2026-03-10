"use client";

import Navbar from "./components/navbar";
import NeuralNetwork from "./components/NeuralNetwork";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <NeuralNetwork />

      <Navbar />

{/* HERO SECTION */}

<section className="h-screen flex flex-col items-center justify-center text-center">

<h1 className="text-6xl font-bold">
Vivek Shinde
</h1>

<h2 className="text-2xl mt-4 text-gray-400">

<Typewriter
words={[
"AI / ML Developer",
"Python Engineer",
"FastAPI Developer",
"Machine Learning Enthusiast"
]}
loop={true}
cursor
cursorStyle="|"
/>

</h2>

<div className="mt-6 flex gap-4">

<a
href="https://github.com/VivekShinde0013"
className="px-6 py-3 bg-white text-black rounded-lg"
>
GitHub
</a>

<a
href="https://www.linkedin.com/in/vivekshinde13"
className="px-6 py-3 border border-white rounded-lg"
>
LinkedIn
</a>

</div>

</section>

{/* ABOUT */}

<section id="about" className="max-w-5xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold mb-10 text-center">
About Me
</h2>

<p className="text-gray-400 text-lg leading-relaxed text-center max-w-3xl mx-auto">

I am a Computer Science student passionate about Artificial Intelligence,
Machine Learning, and backend development. I enjoy building intelligent
systems, developing machine learning APIs, and solving complex problems
using data-driven approaches.

</p>


{/* SKILLS */}

<div className="mt-16">

<h3 className="text-2xl font-semibold mb-8 text-center">
Skills
</h3>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

<div className="p-4 bg-gray-900 rounded-lg">Python</div>

<div className="p-4 bg-gray-900 rounded-lg">C++</div>

<div className="p-4 bg-gray-900 rounded-lg">Java</div>

<div className="p-4 bg-gray-900 rounded-lg">Machine Learning</div>

<div className="p-4 bg-gray-900 rounded-lg">FastAPI</div>

<div className="p-4 bg-gray-900 rounded-lg">TensorFlow</div>

<div className="p-4 bg-gray-900 rounded-lg">Pandas</div>

<div className="p-4 bg-gray-900 rounded-lg">NumPy</div>

</div>

</div>


{/* ACHIEVEMENTS */}

<div className="mt-20">

<h3 className="text-2xl font-semibold mb-8 text-center">
Achievements
</h3>

<ul className="space-y-4 text-gray-400 text-lg text-center">

<li>
🏆 Ranked Top 5 in NASA Space Apps Challenge (Virtual Amritsar)
</li>

<li>
🚀 Global Rank 1594 in LeetCode Weekly Contest
</li>

<li>
💻 Built Machine Learning APIs using FastAPI
</li>

<li>
📊 Developed ML models achieving 94%+ accuracy
</li>

</ul>

</div>

</section>


{/* PROJECTS */}

<section id="projects" className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold mb-14 text-center">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-8">

{/* Project 1 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
Insurance Category Prediction
</h3>

<p className="text-gray-400 mt-3">
Machine learning API built with FastAPI that predicts insurance
categories using trained ML models.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>


{/* Project 2 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
PDF Summarizer
</h3>

<p className="text-gray-400 mt-3">
NLP based application that summarizes uploaded PDF
documents using transformer language models.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>


{/* Project 3 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
ATM Banking System
</h3>

<p className="text-gray-400 mt-3">
Java based ATM system implementing authentication,
withdrawals, deposits and transaction history.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>


{/* Project 4 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
Crop Recommendation System
</h3>

<p className="text-gray-400 mt-3">
AI based system that recommends the best crops
based on soil conditions and environmental data.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>


{/* Project 5 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
Cattle Breed Recognition
</h3>

<p className="text-gray-400 mt-3">
Computer vision model that identifies cattle breeds
from images using deep learning techniques.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>


{/* Project 6 */}

<div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

<h3 className="text-2xl font-semibold">
Sports League Management System
</h3>

<p className="text-gray-400 mt-3">
Software system that manages teams, matches,
scores and league standings for sports tournaments.
</p>

<div className="mt-5">

<a
href="https://github.com/VivekShinde0013"
target="_blank"
className="px-4 py-2 bg-white text-black rounded-lg"
>
GitHub
</a>

</div>

</div>

</div>

</section>

{/* CERTIFICATES */}

<section id="certificates" className="bg-gray-900 py-20 px-6">

<h2 className="text-4xl font-bold mb-10 text-center">
Certificates
</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-black p-6 rounded-lg">
FastAPI for Machine Learning
</div>

<div className="bg-black p-6 rounded-lg">
Oracle OCI AI Foundations
</div>

<div className="bg-black p-6 rounded-lg">
Data Structures & Algorithms
</div>

</div>

</section>

{/* LEETCODE STATS */}

<section id="leetcode" className="py-20 text-center">

<h2 className="text-4xl font-bold mb-10">
LeetCode Stats
</h2>

<div className="flex flex-col items-center justify-center gap-6">

<img
src="https://leetcard.jacoblin.cool/vivekshinde061?theme=dark&font=Karma"
alt="LeetCode Stats"
/>



</div>

</section>

{/* RESUME SECTION */}

<section id="resume" className="py-20 text-center bg-gray-900">

<h2 className="text-4xl font-bold mb-6">
Resume
</h2>

<p className="text-gray-400 mb-8">
Download my resume to know more about my projects,
skills, and experience in AI, Machine Learning,
and backend development.
</p>

<div className="flex justify-center gap-6">

<a
href="/resume.pdf"
download
className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
>
Download Resume
</a>

<a
href="mailto:vivekshinde061@gmail.com"
className="px-6 py-3 border border-white rounded-lg"
>
Hire Me
</a>

</div>

</section>
{/* CONTACT */}

<section id="contact" className="bg-gray-900 py-20 text-center">

<h2 className="text-4xl font-bold mb-6">
Contact
</h2>

<p>Email: vivekshinde061@gmail.com</p>
<p className="mt-2">Phone: +91 8605291635</p>

</section>

</main>
);
}