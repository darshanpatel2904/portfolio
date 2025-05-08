"use client";
import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedNavLink from "@/components/ui/animated-nav-link";

const githubUrl = "https://github.com/darshanpatel2904";
const linkedinUrl = "https://www.linkedin.com/in/darshan-patel-091418234/";
const resumeUrl = "/resume.pdf";

export default function Navbar() {
  return (
    <nav className="relative top-0 left-0 w-full z-50 bg-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-bold text-white"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            <Link href="/">Darshan</Link>
          </span>
        </motion.div>

        {/* Links */}
        <div className="flex items-center space-x-3">
          <AnimatedNavLink href={githubUrl} icon={<Github />} text="GitHub" />
          <AnimatedNavLink
            href={linkedinUrl}
            icon={<Linkedin />}
            text="LinkedIn"
          />
          <AnimatedNavLink
            href={resumeUrl}
            icon={<Download />}
            text="Resume"
            download
          />
        </div>
      </div>
    </nav>
  );
}
