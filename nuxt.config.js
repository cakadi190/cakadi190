const path = require('path');

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  srcDir: './',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portofolionya Cak Adi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Selamat datang di portofolio websitenya Cak Adi!' },
      { name: 'format-detection', content: 'telephone=+6281334991143' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/aku.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&family=Outfit&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  moment: {
    defaultLocale: 'en-gb',
    locales: ['en-gb', 'id', 'jv']
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_translation',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
        code: 'en',
        flag: 'us',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'id',
        flag: 'id',
        name: 'Bahasa Indonesia',
        file: 'id-ID.json'
      },
      {
        code: 'jv',
        flag: 'id',
        name: 'Boso Jowo',
        file: 'jv-ID.json'
      }
    ],
    lazy: true,
    langDir: 'assets/lang/',
    defaultLocale: 'en',
    parsePages: false,   // Disable babel parsing
    pages: {
      occupation: {
        id: '/pekerjaan',
        jv: '/pagaweyan'
      },
      certification: {
        id: '/sertifikasi',
        jv: '/sertifikasi',
      },
      education: {
        id: '/pendidikan',
        jv: '/pendhidhikan',
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-compress',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/moment'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build 
  build: {
    babel: {
      compact: true
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    extend(config, {isClient}) {
      const alias = config.resolve.alias = config.resolve.alias || {}
      alias['@'] = path.join(__dirname, '/')
      alias['~'] = path.join(__dirname, 'assets')
    }
  },

  server: {
    port: 8000, // default: 3000
    host: '192.168.17.114', // default: localhost,
    timing: false
  }
}
