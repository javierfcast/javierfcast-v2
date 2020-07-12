export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "javierfcast - The work of Javier Castillo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    script: [
      { 
        src: 'https://config.metomic.io/config.js?id=prj:cb8faf74-4ef3-4a79-a566-6f6b4bb2a131',
        crossorigin: "true", 
        charset: "utf-8"
      },
      { 
        src: 'https://consent-manager.metomic.io/embed.js',
        crossorigin: "true", 
        charset: "utf-8"
      }
    ],
    link: [
      { rel: "icon", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Archivo:wght@400;700&family=Playfair+Display:wght@900&display=swap"
      }
    ]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-111931182-1'
    }]
  ],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
