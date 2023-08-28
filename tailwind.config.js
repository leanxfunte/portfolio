/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red': '#f43534'
      },
      backgroundImage: {
        'bg2': "url('../public/images/bg2.png')",
        'bg3': "url('../public/images/homebg.jpg')"
      },
      animation: {
        vote: 'ping 1s ease-in-out',
        ping: 'ping 1s cubic-bezier(0, 0, .2, 1) infinite'
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
        ping: {
          '50%, 100%': {
            transform: 'scale(2)',
            opacity: '.7'
          }
        },
      },
    },
  },
  plugins: [],
}