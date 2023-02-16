/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "tw-",
    theme: {
      extend: {
        zIndex: {
          '7': '7',
        },
        colors: {
          'regal-purple': '#020024',
          'regal-blue': '#00d4ff',
          'regal-blue-tight': '#56d4f2',
          'regal-yellow-tight': '#9e9f9f',
        },
        animation: {
          'type-reverse': 'type-reverse 5.5s ease-out 0s infinite alternate-reverse both',
          'img-line': 'move-rl 3s ease-in 0s both'
        },
        keyframes: {
          'move-rl': {
            '0%, 20%': {
              transform: `translate(200%, -200%)`
            } ,
            '40%' : {
              transform: `translate(-1%, 1%)`
            },
            '60%' : {
              transform: `translate(1%, -1%)`
            },
            '100%': {
              transform: `translate(0%, 0%);
              `
            }
          },
          'type-reverse': {
            '0%': { width: '17.12ch' },
            '5%': { width: '16.12ch' },
            '10%': { width: '15.5ch' },
            '15%': { width: '14.5ch' },
            '20%': { width: '13.5ch' },
            '25%': { width: '12.5ch' },
            '30%': { width: '11.5ch' },
            '35%': { width: '10.5ch' },
            '40%': { width: '9.5ch' },
            '45%': { width: '8.5ch' },
            '50%': { width: '7.5ch' },
            '55%': { width: '6.5ch' },
            '60%': { width: '5.5ch' },
            '65%': { width: '4.5ch' },
            '70%': { width: '3.5ch' },
            '75%': { width: '2.5ch' },
            '80%': { width: '1.5ch' },
            '85%': { width: '17.12ch' },
            '90%, 95%, 100%': { width: '17.12ch' }
          },
        },
      },
    },
    plugins: [],
}