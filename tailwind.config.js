/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
