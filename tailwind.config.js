/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      width: {
        375: '375px'
      },
      height: {
        92: '92%'
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      },
      colors: {
        'bg-second': '#1B1B1B'
      }
    }
  },
  plugins: []
};
