import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'

export function PortfolioHeader() {
  return (
    <motion.header
      className="w-full py-5 px-32 border-b flex items-center justify-between bg-black border-portfolio-border-primary"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl font-bold font-mono text-portfolio-text-primary">
          Juan DL
        </h1>
      </motion.div>
      <nav className="flex items-center gap-10">
        <motion.a
          href="#work"
          className="text-sm font-medium hover:opacity-80 transition text-portfolio-text-secondary"
          whileHover={{ color: '#FFFFFF' }}
        >
          Work
        </motion.a>
        <motion.a
          href="#about"
          className="text-sm font-medium hover:opacity-80 transition text-portfolio-text-secondary"
          whileHover={{ color: '#FFFFFF' }}
        >
          About
        </motion.a>
        <motion.a
          href="#contact"
          className="text-sm font-medium hover:opacity-80 transition text-portfolio-text-secondary"
          whileHover={{ color: '#FFFFFF' }}
        >
          Contact
        </motion.a>
      </nav>
    </motion.header>
  )
}
