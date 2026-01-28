import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ColorBends } from "@/components/ui/ColorBends";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      className="w-full min-h-[80vh] py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-32 border-b border-portfolio-border-primary relative overflow-hidden flex items-center"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <ColorBends
          colors={["#0a1520", "#101825", "#0c1218", "#08101a"]}
          speed={0.15}
          scale={1.2}
          frequency={0.8}
          warpStrength={0.8}
          mouseInfluence={0.5}
          parallax={0.3}
          noise={0.05}
          transparent={false}
        />
      </div>
      <motion.div
        className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-6 relative z-10 pointer-events-none"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        style={{ opacity, y }}
        ref={ref}
      >
        <motion.span
          className="text-xs font-semibold tracking-widest text-portfolio-accent-primary"
          variants={item}
        >
          FULL STACK ENGINEER
        </motion.span>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-portfolio-text-primary"
          variants={item}
        >
          Juan F. De Luca
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed text-portfolio-text-secondary"
          variants={item}
        >
          Technical Lead with 8+ years architecting high-scale Web3 platforms
          and distributed systems. Built and shipped a token claiming platform
          serving 1.5M users with 99.9% SLA. Strong focus on blockchain
          integrations, real-time systems, and emerging AI/LLM tooling.
        </motion.p>
        <motion.div className="flex flex-wrap items-center gap-4 pt-4 pointer-events-auto" variants={item}>
          <a
            href="mailto:juan.f.d.luca@gmail.com"
            className="text-sm text-portfolio-text-secondary hover:text-portfolio-text-primary transition"
          >
            juan.f.d.luca@gmail.com
          </a>
          <span className="text-portfolio-accent-primary">•</span>
          <a
            href="https://linkedin.com/in/juan-f-de-luca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-portfolio-text-secondary hover:text-portfolio-accent-primary transition"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
