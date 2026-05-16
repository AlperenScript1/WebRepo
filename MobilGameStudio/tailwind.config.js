/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          light: '#ffffff',
          muted: '#f9fafb',
          ink: '#111827',
          accent: '#6366f1',
          'accent-hover': '#4f46e5',
          night: '#0b0f19',
          card: '#1f2937',
          glow: '#f3f4f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'card-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
        glow: '0 0 24px rgba(99, 102, 241, 0.35)',
      },
    },
  },
  plugins: [],
};
