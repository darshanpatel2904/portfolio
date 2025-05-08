"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Server, Cpu, Bitcoin, Layout } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  name: string;
  description: string;
}

interface Skill {
  id: number;
  title: string;
  proficiency: number;
  icon: React.ReactNode;
  color: string;
  description: string;
  projects: Project[];
}

const skillsData: Skill[] = [
  {
    id: 1,
    title: "Full Stack Development",
    proficiency: 90,
    icon: <Code />,
    color: "#4f46e5",
    description:
      "Expert in building secure, scalable web applications with modern JavaScript frameworks and backend technologies.",
    projects: [
      {
        name: "Cloud-IDE",
        description:
          "Real-time collaborative development environment with Socket.io and WebRTC",
      },
      {
        name: "Web3 Launchpad",
        description:
          "Multi-chain NFT platform with intuitive contract deployment and minting",
      },
    ],
  },
  {
    id: 2,
    title: "Web3 & Blockchain",
    proficiency: 95,
    icon: <Bitcoin />,
    color: "#8b5cf6",
    description:
      "Deep expertise in smart contract development, multi-chain NFT solutions, and decentralized applications.",
    projects: [
      {
        name: "NFT Collection Deployments",
        description:
          "Orchestrated 20+ successful NFT collections with 10,000+ mints",
      },
      {
        name: "Multi-chain Architecture",
        description:
          "Built cross-chain solutions for Ethereum, Polygon, and other networks",
      },
    ],
  },
  {
    id: 3,
    title: "AI Integration",
    proficiency: 85,
    icon: <Cpu />,
    color: "#10b981",
    description:
      "Specializing in implementing AI-powered solutions using LangChain, OpenAI API, and vector databases.",
    projects: [
      {
        name: "AI Verse",
        description:
          "Intelligent workflow automation platform with modular AI agents",
      },
      {
        name: "Vector-Based Search",
        description:
          "Implemented semantic search with long-term memory capabilities",
      },
    ],
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    proficiency: 80,
    icon: <Server />,
    color: "#0ea5e9",
    description:
      "Experience with AWS services (EC2, S3, Lightsail), Docker containerization, and CI/CD workflows.",
    projects: [
      {
        name: "Dockerized Sandbox",
        description:
          "Developed secure Docker-based environments for cloud applications",
      },
      {
        name: "AWS Architecture",
        description:
          "Designed and deployed scalable cloud infrastructure for production systems",
      },
    ],
  },
  {
    id: 5,
    title: "Frontend Engineering",
    proficiency: 90,
    icon: <Layout />,
    color: "#f59e0b",
    description:
      "Crafting responsive, modern interfaces using React.js, Next.js, TypeScript and TailwindCSS.",
    projects: [
      {
        name: "No-Code Marketing Website",
        description:
          "Built a customizable marketing site generator for NFT projects",
      },
      {
        name: "Intuitive Dashboard",
        description:
          "Created comprehensive management dashboard for NFT pricing and whitelists",
      },
    ],
  },
  {
    id: 6,
    title: "Database Management",
    proficiency: 75,
    icon: <Database />,
    color: "#ec4899",
    description:
      "Proficient with PostgreSQL, MongoDB, and vector databases like Pinecone for efficient data storage and retrieval.",
    projects: [
      {
        name: "Vector Database Integration",
        description:
          "Implemented semantic search capabilities for AI applications",
      },
      {
        name: "Multi-Schema Architecture",
        description:
          "Designed database schemas for complex multi-user applications",
      },
    ],
  },
];

// 3D Floating Animation Component
interface FloatingElementProps {
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const xPercent = (x / width - 0.5) * 20; // -10 to 10 degree rotation
      const yPercent = (y / height - 0.5) * -20; // -10 to 10 degree rotation

      gsap.to(element, {
        rotationY: xPercent,
        rotationX: yPercent,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 0.5,
      });
    };

    // Reset on mouse leave
    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationY: 0,
        rotationX: 0,
        ease: "elastic.out(1, 0.3)",
        duration: 1,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={elementRef} className="transform-gpu preserve-3d">
      {children}
    </div>
  );
};

// Particle Background for Modal
interface ParticleBackgroundProps {
  color: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = color || "#4f46e5";
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        // Wrap around edges
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 z-0"
    />
  );
};

// Enhanced Modal Component
interface SkillModalProps {
  skill: Skill;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;

    // Timeline for entrance animation
    const tl = gsap.timeline();

    tl.fromTo(
      modalRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
      }
    ).fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
        rotationX: 10,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.1"
    );

    // Animation for progress bar
    const progressBar = contentRef.current.querySelector(".progress-bar");
    if (progressBar) {
      gsap.fromTo(
        progressBar,
        { width: "0%" },
        {
          width: `${skill.proficiency}%`,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
          delay: 0.3,
        }
      );
    }

    // Staggered entrance for projects
    const projectItems = contentRef.current.querySelectorAll(".project-item");
    if (projectItems.length) {
      gsap.fromTo(
        projectItems,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.5,
        }
      );
    }

    // Close on escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose, skill.proficiency]);

  // Handle close with animation
  const handleClose = () => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      scale: 0.9,
      duration: 0.3,
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-lg p-8 shadow-2xl relative overflow-hidden transform-gpu"
        style={{
          boxShadow: `0 25px 50px -12px ${skill.color}40`,
        }}
      >
        <ParticleBackground color={skill.color} />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span
                className="text-white p-3 rounded-lg"
                style={{ backgroundColor: skill.color }}
              >
                {React.isValidElement(skill.icon) ? skill.icon : null}
              </span>
              {skill.title}
            </h3>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full progress-bar rounded-full"
                style={{ backgroundColor: skill.color }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="font-medium">Proficiency Level</span>
              <span className="font-bold">{skill.proficiency}%</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {skill.description}
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <span className="mr-2">✦</span> Related Projects
            </h4>
            <div className="space-y-4">
              {skill.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="project-item border-l-4 pl-4 py-1 transition-all hover:pl-5 duration-300"
                  style={{ borderColor: skill.color }}
                >
                  <h5 className="font-medium text-base">{project.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Skill Card Component
interface SkillCardProps {
  skill: Skill;
  onSkillClick: (skill: Skill) => void;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  onSkillClick,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (!cardRef.current || !iconRef.current || !progressRef.current) return;

    // Card entrance animation
    gsap.fromTo(
      cardRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Setup hover animations
    const card = cardRef.current;
    const icon = iconRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        boxShadow: `0 20px 25px -5px ${skill.color}30, 0 10px 10px -5px ${skill.color}20`,
        duration: 0.3,
      });

      gsap.to(icon, {
        y: -5,
        scale: 1.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
      });

      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.3,
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Progress bar animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          gsap.fromTo(
            progressRef.current,
            { width: "0%" },
            {
              width: `${skill.proficiency}%`,
              duration: 1,
              delay: index * 0.1 + 0.5,
              ease: "elastic.out(1, 0.3)",
              onComplete: () => setAnimated(true),
            }
          );
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(card);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      observer.unobserve(card);
    };
  }, [index, skill.color, skill.proficiency, animated]);

  return (
    <FloatingElement>
      <div
        ref={cardRef}
        onClick={() => onSkillClick(skill)}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer group relative"
        style={{
          boxShadow: `0 10px 15px -3px ${skill.color}20, 0 4px 6px -2px ${skill.color}10`,
        }}
      >
        <div className="flex flex-col items-center text-center">
          <div
            ref={iconRef}
            className="rounded-2xl mb-4 p-4 transition-transform"
            style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
          >
            {React.isValidElement(skill.icon) ? skill.icon : null}
          </div>

          <h3 className="font-bold text-lg mb-4">{skill.title}</h3>

          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2 overflow-hidden">
            <div
              ref={progressRef}
              className="h-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: skill.color,
                width: animated ? `${skill.proficiency}%` : "0%",
              }}
            ></div>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {skill.proficiency}%
          </span>

          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100">
            <span
              className="px-4 py-2 rounded-full text-white font-medium"
              style={{ backgroundColor: skill.color }}
            >
              View Details
            </span>
          </div>
        </div>
      </div>
    </FloatingElement>
  );
};

// Main Skills Section Component
const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !subheadingRef.current)
      return;

    // Set up the scroll trigger animation
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      subheadingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Pulsing animation for title decoration
    gsap.to(".title-decoration", {
      scale: 1.2,
      opacity: 0.7,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-5 translate-x-1/2 translate-y-1/2"></div>

        <div className="text-center mb-16 relative">
          <span className="inline-block relative">
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Professional Skills
            </h2>
          </span>

          <p
            ref={subheadingRef}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            A showcase of my technical expertise and proficiency in various
            areas of development and design
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              onSkillClick={setSelectedSkill}
            />
          ))}
        </div>
      </div>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
};

export default SkillsSection;
