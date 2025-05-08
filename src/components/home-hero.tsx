import Image from "next/image";
import RotatingText from "./ui/rotating-text";
import SplashCursor from "./ui/splash-cursor";
import SkyStartsImage from "../../public/sky-star.jpeg";
import MaxWidthWrapper from "./max-width-wrapper";

export default function HomeHero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-[#0f1117]">
      <div>
        <SplashCursor>
          <div className="absolute -mt-20 inset-0 text-white flex flex-col items-center justify-center text-center gap-8 px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-inter">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                fast
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                elegant
              </span>{" "}
              web experiences.
            </h2>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-space-grotesk flex flex-wrap items-center justify-center">
              Shaping the future of&nbsp;
              <RotatingText
                texts={[
                  "technology",
                  "finance",
                  "education",
                  "blockchain",
                  "startups",
                  "ecommerce",
                ]}
                mainClassName="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full shadow-lg font-semibold"
                staggerFrom="center"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 20, stiffness: 500 }}
                rotationInterval={1800}
              />
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-300 font-jetbrains-mono max-w-2xl">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold">
                Darshan Patel
              </span>{" "}
              — a Full Stack Developer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                empowered with AI
              </span>{" "}
              to build faster, smarter, and sharper.
            </p>
          </div>
        </SplashCursor>
      </div>
    </div>
  );
}
