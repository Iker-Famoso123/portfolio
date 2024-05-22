/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cerise': {
          '50': '#fef1f9',
          '100': '#fee5f5',
          '200': '#ffcbed',
          '300': '#ffa0dc',
          '400': '#ff66c2',
          '500': '#fc38a7',
          '600': '#ec1684',
          '700': '#e10972',
          '800': '#aa0a56',
          '900': '#8d0e4a',
          '950': '#570029',
        },
      },
    },
  },
  plugins: [],
}

