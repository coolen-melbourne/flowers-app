/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0%, 100%':{ transform: 'translateX(10px)'},
          '50%': {transform: 'translateX(0)'}
        },
        
      },
      animation:{
        'trans-right': 'trans-right 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}