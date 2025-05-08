import About from "@/components/about";
import Contact from "@/components/contact";
import DevelopmentStrategies from "@/components/development-strategies";
import HomeHero from "@/components/home-hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <About />
      <Projects />
      <Skills />
      <DevelopmentStrategies />
      <Contact />
    </div>
  );
}
