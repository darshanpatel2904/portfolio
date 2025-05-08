"use client";
import { motion } from "framer-motion";
import ShinyText from "./ui/shiny-text";
import StarBorder from "./ui/star-border";
import Image from "next/image";
type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: any;
  animationDirection: "left" | "right" | "up";
};
export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
  animationDirection,
}: ProjectCardProps) {
  const animationVariants = {
    left: { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    up: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  };

  return (
    <motion.div
      initial={animationVariants[animationDirection].initial}
      animate={animationVariants[animationDirection].animate}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group bg-gradient-to-br from-[#0f0f15] to-[#1b1f2a] border border-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition duration-300 hover:scale-[1.02]"
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-60 aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-space-grotesk">
          {title}
        </h3>
        <ShinyText
          text={description}
          disabled={false}
          speed={3}
          className="text-sm font-inter"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, index) => (
            <span key={index}>
              <StarBorder
                as="span"
                color="cyan"
                speed="3s"
                className="px-2 py-1 font-mono text-xs bg-zinc-800"
              >
                {item}
              </StarBorder>
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}
