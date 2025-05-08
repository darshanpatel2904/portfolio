import MaxWidthWrapper from "./max-width-wrapper";
import ProjectCard from "./project-card";
import AiowProjectImage from "@/assets/aiow-project.jpg";
import CloudIdeProjectImage from "@/assets/cloud-ide-project.png";
import AiVerseProjectImage from "@/assets/ai-verse-project.png";

export default function Projects() {
  return (
    <MaxWidthWrapper className="py-16 md:py-24 w-full flex flex-col items-center justify-center gap-16">
      <div className="text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-space-grotesk drop-shadow-sm">
          Showcasing My Projects
        </h2>
        <p className="text-zinc-400 mt-4 text-lg font-inter">
          A collection of ideas turned into interactive, scalable, and modern
          web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full px-4">
        <ProjectCard
          title="Web3 Launchpad"
          description="Multi-chain NFT platform with 20+ successful collection launches generating 10,000+ mints from 5,800+ users. Features intuitive smart contract deployment, whitelist management, and a no-code marketing website builder."
          tech={[
            "Next.js",
            "Solidity",
            "TypeScript",
            "Web3.js",
            "MongoDB",
            "AWS",
          ]}
          link="https://w3lp.io"
          image={AiowProjectImage}
          animationDirection="left"
        />

        <ProjectCard
          title="AI Verse"
          description="Intelligent workflow automation platform using LangChain, OpenAI, and vector databases for content generation, data extraction, and multi-agent collaboration with long-term memory capabilities."
          tech={[
            "Next.js",
            "LangChain",
            "OpenAI API",
            "Pinecone",
            "TailwindCSS",
            "Clerk Auth",
          ]}
          link="https://ai-verse-peach.vercel.app/"
          image={AiVerseProjectImage}
          animationDirection="up"
        />

        <ProjectCard
          title="Cloud-IDE"
          description="Real-time collaborative development environment featuring live streaming capabilities via Socket.io and WebRTC. Built with a Docker-based sandbox environment enabling secure and scalable access."
          tech={["Docker", "Socket.io", "WebRTC", "JavaScript", "React.js"]}
          link="https://github.com/darshanpatel2904/cloud-ide"
          image={CloudIdeProjectImage}
          animationDirection="right"
        />
      </div>
    </MaxWidthWrapper>
  );
}
