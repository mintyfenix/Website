import en from "./locales/en.json"
import fr from "./locales/fr.json"

// src: https://github.com/intlify/nuxt3

export default {
  buildModules: ["@intlify/nuxt3"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      messages: { en, fr }
    }
  }
}