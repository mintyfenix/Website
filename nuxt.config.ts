import { defineNuxtConfig } from "nuxt3";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

// src: https://github.com/intlify/nuxt3
// web: https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/

export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.css" // global css
  ],
  buildModules: ["@intlify/nuxt3", "@nuxtjs/style-resources"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      messages: { en, fr } // todo: use something to automatically takes all json files from /locales
    }
  },
  build: {
    transpile: ["vuetify"]
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss"; @import "~/assets/scss/mixins.scss";',
        },
      },
    }
  }
})