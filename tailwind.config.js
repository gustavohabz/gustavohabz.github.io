/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      screens: {
        'nav-breakpoint': '1093px'
      },
      colors: {
        'beige': '#FFE1AA',
        'html5': '#e34c26',
        'css3': '#264de4',
        'php': '#8993be',
        'java': '#f89820'
      }
    },
  },
  plugins: [],
}

