export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      title: 'BurnNotice',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '' },
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;600&display=swap',
          crossorigin: ''
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-144x144.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-152x152.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-196x196.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-128.png' }
      ]
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/main.scss'
  ],
  modules: [
    '@pinia/nuxt',
    'dayjs-nuxt'
  ],

  dayjs: {
    plugins: ['duration']
  },

  pinia: {
    storesDirs: ['./services/**']
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      },
      {
        path: '~/services',
        pathPrefix: false
      }
    ]
  },
  imports: {
    dirs: ['composables/**', 'stores/**']
  },
  build: {
    transpile: ['vuetify']
  }
})
