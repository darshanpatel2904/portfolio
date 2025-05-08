"use client";
import MaxWidthWrapper from "./max-width-wrapper";
import PixelCard from "./ui/pixel-card";
import { motion } from "framer-motion";

export default function DevelopmentStrategies() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20 w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text text-center bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 mb-4 select-none">
        My Core Strategies. Your Next Big Win.
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-center">
        <PixelCard variant="cyan">
          <motion.div
            className="absolute top-1/2 left-1/2 w-full p-10 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 px-6 rounded-full bg-cyan-300/20 backdrop-blur-md group-hover:hidden transition-all duration-300">
              <h3 className="text-white text-center font-semibold text-lg">
                Strategy 1
              </h3>
            </div>
            <div className="group-hover:flex flex-col gap-4 items-center justify-center hidden text-center transition-all duration-300">
              <h3 className="text-cyan-400 text-2xl font-bold">
                🔧 Build Smart. Ship Fast.
              </h3>
              <p className="text-cyan-200 text-base">
                From pixel to production, I architect scalable apps with
                cutting-edge tools—ensuring speed, stability, and seamless UX.
              </p>
            </div>
          </motion.div>
        </PixelCard>
        <PixelCard variant="pink">
          <motion.div
            className="absolute top-1/2 left-1/2 w-full p-10 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="p-3 px-6 rounded-full bg-pink-300/20 backdrop-blur-md group-hover:hidden transition-all duration-300">
              <h3 className="text-white text-center font-semibold text-lg">
                Strategy 2
              </h3>
            </div>
            <div className="group-hover:flex flex-col gap-4 items-center justify-center hidden text-center transition-all duration-300">
              <h3 className="text-pink-400 text-2xl font-bold">
                🌐 Code That Connects
              </h3>
              <p className="text-pink-200 text-base">
                I bridge frontend beauty and backend power—crafting systems that
                users love and businesses rely on.
              </p>
            </div>
          </motion.div>
        </PixelCard>
        <PixelCard variant="yellow">
          <motion.div
            className="absolute top-1/2 left-1/2 w-full p-10 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeIn" }}
          >
            <div className="p-3 px-6 rounded-full bg-yellow-300/20 backdrop-blur-md group-hover:hidden transition-all duration-300">
              <h3 className="text-white text-center font-semibold text-lg">
                Strategy 3
              </h3>
            </div>
            <div className="group-hover:flex flex-col gap-4 items-center justify-center hidden text-center transition-all duration-300">
              <h3 className="text-yellow-400 text-2xl font-bold">
                🚀 Beyond the Stack
              </h3>
              <p className="text-yellow-200 text-base">
                More than just Full Stack—I bring strategy, scalability, and
                soul to every line of code.
              </p>
            </div>
          </motion.div>
        </PixelCard>
      </div>
    </MaxWidthWrapper>
  );
}
