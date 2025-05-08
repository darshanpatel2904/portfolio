"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function AnimatedNavLink({
  href,
  icon,
  text,
  download = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group"
    >
      <Link
        href={href}
        target="_blank"
        download={download}
        className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-700 hover:text-white group-hover:shadow-md"
      >
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {icon}
        </motion.div>
        <span className="text-sm font-medium">{text}</span>
      </Link>
    </motion.div>
  );
}
