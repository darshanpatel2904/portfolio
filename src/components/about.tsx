import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import Aurora from "./ui/aurora";
import FallingText from "./ui/falling-text";
import GridDistortion from "./ui/grid-distortion";
import LetterGlitch from "./ui/letter-glitch";
import Orb from "./ui/orb";
import ShinyText from "./ui/shiny-text";
import SpotlightCard from "./ui/spotlight-card";

export default function About() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20 flex items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-8 w-full md:grid-rows-3 gap-10">
        <div className="relative h-96 w-full md:col-span-5 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
          <Aurora
            colorStops={["#00d9ff", "#7bff67", "#00d9ff"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="flex -mt-20 m-5 max-w-md">
            <h2 className="text-xl md:text-2xl font-bold font-space-grotesk text-zinc-300">
              Building technology to empower creators and make a positive
              impact.
            </h2>
          </div>
        </div>

        <div className="h-96 size-full relative md:col-span-3 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
          <div className="absolute z-20 top-1/2 size-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-full">
            <Orb
              hoverIntensity={0.9}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
          <div className="text-zinc-300 flex flex-col gap-2 text-center text-sm font-semibold font-jetbrains-mono absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>git add --all</p>
            <p>
              git commit -m &ldquo;
              <span className="text-yellow-500 ">feat: message</span>&rdquo;
            </p>
            <p>
              git push origin <span className="text-yellow-500">main</span>
            </p>
          </div>
        </div>

        <div className="md:col-span-2 h-96 w-full bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
          <LetterGlitch
            glitchSpeed={10}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          />
        </div>

        <div className="relative h-96 w-full md:col-span-4 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden p-6 text-white flex flex-col justify-between">
          <FallingText
            text={`Engineering ideas into reality — from vision to code, with dynamic UIs, modular components, and full-stack fluidity.`}
            highlightWords={[
              "vision",
              "code",
              "dynamic",
              "UIs",
              "modular",
              "components",
            ]}
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />
        </div>

        <div className="h-96 w-full md:col-span-2 grid grid-cols-1 gap-10">
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden p-6 flex flex-col justify-center items-start ">
            <ShinyText
              text="🚀 Web3 Projects"
              disabled={false}
              speed={3}
              className="text-xl font-semibold mb-2"
            />
            <ShinyText
              text=" I build and deploy smart contracts, NFTs, and dApps on Ethereum,
              Polygon, and Solana."
              disabled={false}
              speed={3}
              className="text-sm "
            />
          </div>
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden p-6 flex flex-col justify-center items-start text-white shadow-xl">
            <h3 className="text-xl font-semibold mb-2">
              🤖 AI-Powered Workflows
            </h3>
            <p className="text-sm text-zinc-400">
              Leveraging AI to enhance productivity with automation, code
              generation, and optimization.
            </p>
          </div>
        </div>

        <SpotlightCard
          className="relative h-96 w-full md:col-span-3 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-700/50 rounded-2xl overflow-hidden text-white flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10"
          spotlightColor="rgba(6, 182, 212, 0.15)"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <code className="text-lg font-bold">&lt;/&gt;</code>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                Full Stack Developer @ AIOW bv
              </h3>
            </div>

            <p className="text-sm text-zinc-300 max-w-lg mt-4 leading-relaxed">
              Building cutting-edge Web3 and AI solutions with a focus on
              performance and scalability. Specialized in developing intelligent
              platforms that drive measurable business results.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Web3 Launchpad Success
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Deployed 20+ NFT collections generating 10,000+ mints from
                    5,800+ users
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Feature Development
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Launched key features driving 40% product revenue growth in
                    three months
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span>
                React.js
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span>
                Nest.js
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span>
                Solidity
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span>
                TypeScript
              </span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-zinc-500">
                Amsterdam, Netherlands
              </span>
              <Link
                className="group inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                href="https://aiow.io"
                target="_blank"
              >
                View Experience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </SpotlightCard>

        <div className="md:col-span-5 h-96 w-full relative bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
          <GridDistortion
            imageSrc="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            grid={10}
            mouse={0.25}
            strength={0.15}
            relaxation={0.9}
            className="custom-class"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
