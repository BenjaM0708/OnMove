import flowbiteReact from "flowbite-react/plugin/tailwindcss";

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    ".flowbite-react/class-list.json",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':  '#233047',
        'brand-navy-light': '#2E4A62',
        'brand-gold':  '#E5AA1E',
        'brand-dark':  '#3C4043',
        'brand-light': '#F8F9FA',
        'brand-cream': '#F8F9FA',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [flowbiteReact],
}