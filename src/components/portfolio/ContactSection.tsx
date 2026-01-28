import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 border-t bg-black border-portfolio-border-primary" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
        <motion.h2
          className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-16"
          id="contact"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'show' : 'hidden'}
        >
          <motion.div className="flex flex-col gap-4 flex-1" variants={item}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-portfolio-text-primary">
              Let's build something together
            </h3>
            <p className="text-base text-portfolio-text-secondary leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-4" variants={item}>
            <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
              <span className="text-xs font-medium text-portfolio-text-tertiary">
                Email
              </span>
              <a
                href="mailto:juan.f.d.luca@gmail.com"
                className="text-sm font-medium text-portfolio-text-primary hover:opacity-80 transition"
              >
                juan.f.d.luca@gmail.com
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
              <span className="text-xs font-medium text-portfolio-text-tertiary">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/juan-f-de-luca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-portfolio-accent-primary hover:opacity-80 transition"
              >
                linkedin.com/in/juan-f-de-luca
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
              <span className="text-xs font-medium text-portfolio-text-tertiary">
                Phone
              </span>
              <a
                href="tel:+442075436923730"
                className="text-sm font-medium text-portfolio-text-primary hover:opacity-80 transition"
              >
                +44 07543 692373
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
