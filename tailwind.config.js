module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './routes/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}'
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif']
    },
    extend: {}
  },
  plugins: [require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark'
  }
}





