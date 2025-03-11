/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        baloo: ['Baloo 2', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300',
          600: '#b38a00',
          700: '#806200',
          800: '#4d3b00',
          900: '#1a1400',
        },
        monster: {
          yellow: '#FFD54D',
          mint: '#98E2C6',
          purple: '#9D8EC7',
          dark: '#4A4063',
        },
        space: {
          light: '#98E2C6',
          DEFAULT: '#68C5A8',
          dark: '#449C7F',
        },
        nature: {
          light: '#FFD54D',
          DEFAULT: '#FFC91A',
          dark: '#E6B300',
        },
        magic: {
          light: '#9D8EC7',
          DEFAULT: '#7C6BA1',
          dark: '#4A4063',
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(120deg, #FFD54D 0%, #98E2C6 100%)',
        'feature-pattern': 'linear-gradient(135deg, #fff9e6 0%, #ffedb3 100%)',
        'theme-space': 'linear-gradient(135deg, #98E2C6 0%, #68C5A8 100%)',
        'theme-nature': 'linear-gradient(135deg, #FFD54D 0%, #FFC91A 100%)',
        'theme-magic': 'linear-gradient(135deg, #9D8EC7 0%, #7C6BA1 100%)',
      },
    },
  },
  plugins: [],
}
