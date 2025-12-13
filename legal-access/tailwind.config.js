/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#003D7A',
          DEFAULT: '#0052A3',
          light: '#6BA3D0',
        },
        accent: {
          green: '#1B7F3D',
          yellow: '#FFA500',
          orange: '#FF6B35',
        },
        neutral: {
          dark: '#1F1F1F',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
