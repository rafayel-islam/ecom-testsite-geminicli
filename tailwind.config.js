/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'from-teal-50',
    'to-blue-50',
    'from-blue-50',
    'to-teal-50',
    'bg-teal-200',
    'bg-blue-200',
    '-top-10',
    '-left-10',
    '-bottom-20',
    '-right-10',
  ],
  plugins: [],
}

