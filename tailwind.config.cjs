/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "tw-",
    theme: {
      extend: {
        height: {
          '400': '400px',
          '500': '500px',
          '600': '600px',
          '700': '700px',
        },
        width: {
          '400': '400px',
          '500': '500px',
          '600': '600px',
          '700': '700px',
        },
        borderWidth: {
          '1': '1px',
        },
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
          'rotate': 'rotateLoader .5s linear 0s infinite both',
          'img-line': 'move-rl 3s ease-in 0s infinite both',
          'item-line': 'move-rl 3s ease-in 0s reverse infinite both',
          'toggle-text': 'toggle 0.5s ease-in-out infinite both'
        },
        keyframes: {
          'rotateLoader': {
            'from': {
              transform: `rotate(0deg)`
            },
            'to': {
              transform: `rotate(360deg)`
            },
          }, 
          'toggle': {
            '0%, 100%': {
              opacity: 0
            },
            '50%': {
              opacity: 1
            }
          },
          'move-rl': {
            '50%' : {
              transform: `translate(1%, -1%)`
            }
          }
        },
      },
    },
    plugins: [],
}