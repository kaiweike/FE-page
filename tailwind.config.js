/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        375: '375px'
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      }
    }
  },
  plugins: []
};
