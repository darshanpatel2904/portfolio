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
          title="Multi-Chain Web3 Launchpad"
          description="A platform supporting Ethereum, Polygon, and Solana with smart contract deployment, NFT minting, and real-time user interactions."
          tech={["Next.js", "Solidity", "TailwindCSS", "Framer Motion"]}
          link="https://launchpad.example.com"
          image={AiowProjectImage}
          animationDirection="left"
        />

        <ProjectCard
          title="Real-time Collaborative Cloud IDE"
          description="A Docker-powered cloud IDE with WebRTC and Socket.io for seamless team collaboration and live coding."
          tech={["React", "Docker", "WebRTC", "Node.js"]}
          link="https://cloudide.example.com"
          image={CloudIdeProjectImage}
          animationDirection="up"
        />

        <ProjectCard
          title="Learning Management System (LMS)"
          description="Scalable LMS with Clerk auth, country-wise pricing via PPP, and role-based content access."
          tech={["Next.js", "PostgreSQL", "Drizzle ORM", "GSAP"]}
          link="https://lms.example.com"
          image={AiVerseProjectImage}
          animationDirection="right"
        />
      </div>
    </MaxWidthWrapper>
  );
}
