// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Mikey de Pala',
      meta: [
        { name: 'description', content: 'Mikey de Pala Photography'}
      ],
      link: [
        //material symbols
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'},
         
        //google fonts
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Questrial&display=swap'},
        
      ]
    }
  }, //end app
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
