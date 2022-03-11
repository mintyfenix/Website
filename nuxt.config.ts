import { defineNuxtConfig } from 'nuxt3'
import * as en from './locales/en.json'
import * as fr from './locales/fr.json'

// src: https://github.com/intlify/nuxt3
// web: https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/

export default defineNuxtConfig({
  meta: {
    title: "Compliance",
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'description',
        content: 'Compliance, a default-style 32x and 64x resource pack for Minecraft Java, Bedrock, Education and Dungeons.'
      },
      {
        property: 'og:url',
        content: 'https://compliancepack.net/'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Home - Compliance'
      },
      {
        property: 'og:description',
        content: 'Compliance, a default-style 32x and 64x resource pack for Minecraft Java, Bedrock, Education and Dungeons.'
      },
      {
        property: 'og:image',
        content: '/assets/image/home/og_logo.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:domain',
        content: 'https://compliancepack.net'
      },
      {
        property: 'twitter:url',
        content: 'https://compliancepack.net/'
      },
      {
        name: 'twitter:description',
        content: 'Compliance, a default-style 32x and 64x resource pack for Minecraft Java, Bedrock, Education and Dungeons.'
      },
      {
        property: 'twitter:image',
        content: '/assets/image/home/og_logo.png'
      },
      {
        name: 'keywords',
        content: 'Minecraft, Java, Bedrock, Dungeons, Resource, Pack, Resource-Pack, Resourcepack, Compliance, Mods, Faithful, 32x, x32, 32x32, 64x, x64, 64x64'
      },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: '#00552B'
      },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: '#76C945'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'no'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Compliance'
      },
      {
        'http-equiv': 'Permissions-Policy',
        content: 'interest-cohort=()'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [
      {
        rel: 'manifest',
        href: '/manifest.webmanifest'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/image/pwa/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/assets/image/pwa/app-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/image/pwa/favicon-16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/image/pwa/apple-touch-icon-180x180.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/solid.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/brands.min.css'
      }
    ]
  },
  css: [
    'vuetify/lib/styles/main.css' // global css
  ],
  buildModules: ['@intlify/nuxt3', '@nuxtjs/style-resources'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      messages: { en, fr } // todo: use something to automatically takes all json files from /locales
    }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss";\
                           @import "~/assets/scss/mixins.scss";\
                           @import "~/assets/scss/main.scss";\
                           @import "~/assets/scss/dark.scss";'
        }
      }
    }
  }
})
