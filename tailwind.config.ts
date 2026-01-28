import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        portfolio: {
          'bg-primary': 'var(--portfolio-bg-primary)',
          'bg-surface': 'var(--portfolio-bg-surface)',
          'text-primary': 'var(--portfolio-text-primary)',
          'text-secondary': 'var(--portfolio-text-secondary)',
          'text-tertiary': 'var(--portfolio-text-tertiary)',
          'border-primary': 'var(--portfolio-border-primary)',
          'accent-primary': 'var(--portfolio-accent-primary)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
