/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      },
      gridTemplateColumns: {
        'result-layout-md': '1fr',
        'home-layout-md': '80px 1fr',
        'home-layout-2xl': '80px 1fr 375px'
      }
    }
  },
  plugins: []
};
