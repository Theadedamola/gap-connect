/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#8B4513',
          light: '#A67C52',
        },
        charcoal: {
          DEFAULT: '#333333',
          dark: '#222222',
          light: '#444444',
        },
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'hero-illus': 'url("/src/components/bridge.svg")',
      },
    },
  },
  plugins: [],
};