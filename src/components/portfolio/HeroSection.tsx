import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ColorBends } from "@/components/ui/ColorBends";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { heroProjects } from "@/data/projects";

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
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
        {/* Text content - left side */}
        <motion.div
          className="flex-1 flex flex-col gap-4 md:gap-6 pointer-events-none lg:max-w-[60%]"
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

        {/* Card swap - right side (hidden on mobile) */}
        <motion.div
          className="hidden lg:flex flex-1 flex-col items-center justify-start min-h-[500px] pt-[140px] relative pointer-events-none"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity, y }}
        >
          <CardSwap
            width={420}
            height={250}
            cardDistance={45}
            verticalDistance={55}
            delay={4000}
            pauseOnHover={false}
            easing="elastic"
          >
            {heroProjects.map((project) => (
              <Card key={project.id} className="rounded-2xl overflow-hidden pointer-events-auto">
                <button
                  onClick={() => {
                    document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full h-full overflow-hidden rounded-2xl cursor-pointer text-left"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-4">
                    <h3 className="text-base font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </button>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>
    </section>
  );
}
