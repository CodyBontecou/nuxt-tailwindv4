import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
