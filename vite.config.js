import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig => ({
  plugins: [react(), sassDts()],
  resolve: {
    alias: [{ find: '~', replacement: `${__dirname}/src` }]
  },
  
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/scss/main.scss";' 
  //     }
  //   }
  // }

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/scss/_variables";' 
  //     }
  //   }
  // }
})
