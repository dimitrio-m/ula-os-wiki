// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxtjs/plausible',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
        highlight: {
          langs: [
            'c',
          ],
          theme: {
            default: 'github-light-high-contrast',
            light: 'github-light-high-contrast',
            dark: 'github-dark-high-contrast',
          },
        },
      },
    },
  },

  experimental: {
    asyncContext: true,
  },

  compatibilityDate: '2026-02-27',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  icon: {
    provider: 'iconify',
  },

  plausible: {
    domain: 'dimitriosmandamadiotis.com',
  },
})
