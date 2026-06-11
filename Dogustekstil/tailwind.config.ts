import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:      '#B01E4B',
          'red-h':  '#921639',
          black:    'var(--brand-black)',
          dark:     'var(--brand-dark)',
          gray:     'var(--brand-gray)',
          'gray-m': 'var(--brand-gray-m)',
          smoke:    'var(--brand-smoke)',
          muted:    'var(--brand-muted)',
          light:    'var(--brand-light)',
          white:    'var(--brand-white)',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"Barlow"', 'sans-serif'],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        nav:  'var(--shadow-nav)',
      },
    },
  },
  plugins: [],
}
export default config
