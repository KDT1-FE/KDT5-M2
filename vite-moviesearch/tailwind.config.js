/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'regal-yellow': '#fdc000',
        'regal-gray': '#6c757d',
        'regal-blue': '#e9ecef'
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '760px',
        // => @media (min-width: 768px) { ... }

        lg: '964px',
        // => @media (min-width: 1024px) { ... }

        xl: '1100px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px'
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: []
}
