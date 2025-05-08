"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HoverAnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        opacity: 0,
        ease: "power3.inOut",
      });

      ref.current?.addEventListener("mouseenter", () => {
        gsap.to(ref.current, {
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.3,
        });
      });

      ref.current?.addEventListener("mouseleave", () => {
        gsap.to(ref.current, {
          opacity: 0,
          ease: "power3.inOut",
          duration: 0.3,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="block label relative font-jetbrains-mono leading-relaxed font-extrabold text-5xl overflow-hidden h-20"
      ref={ref}
    >
      {text}
    </div>
  );
}
