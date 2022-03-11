import en from "./locales/en.json"
import fr from "./locales/fr.json"

// src: https://github.com/intlify/nuxt3
// web: https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/

export default {
  buildModules: ["@intlify/nuxt3", "@nuxtjs/style-resources", "vuetify"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      messages: { en, fr } // todo: use something to automatically takes all json files from /locales
    }
  },
  css: [
    "~/assets/scss/index.scss" // global css
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss"; @import "~/assets/scss/mixins.scss";',
        },
      },
    },
  }
}