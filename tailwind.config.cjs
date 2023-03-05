/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-color': 'var(--primary-color)',
        's-color': 'var(--secondary-color)',
        't-color': 'var(--tertiary-color)',
      },
      backgroundImage: {
        'for-background':
          'linear-gradient(#222222f0, #121212), url(/src/assets/bg.jpg)',
      },
      fontFamily: {
        Inconsolata: ['Inconsolata', 'monospace'],
        Gloock: ['Gloock', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
