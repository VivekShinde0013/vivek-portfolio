"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}

        <h1 className="text-xl font-bold">
          Vivek
        </h1>

        {/* Menu */}

        <div className="flex gap-8 text-sm">

          <a href="#" className="hover:text-gray-400">Home</a>

          <a href="#about" className="hover:text-gray-400">About</a>

          <a href="#projects" className="hover:text-gray-400">Projects</a>

          <a href="#resume" className="hover:text-gray-400">Resume</a>

          <a href="#contact" className="hover:text-gray-400">Contact</a>

        </div>

      </div>
    </motion.nav>
  );
}