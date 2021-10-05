/* Vue */
import Vue from 'vue'

/* Vuetify */
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

/* Icons */
import siGithub from '@/assets/icons/si/icons/github.svg?inline'
import siNuxtDotJs from '@/assets/icons/si/icons/nuxtdotjs.svg?inline'
import siVuetify from '@/assets/icons/si/icons/vuetify.svg?inline'

Vue.use(Vuetify, { components: {} })

export default new Vuetify({
  treeShake: true,

  lang: { locales: {} },

  icons: {
    iconfont: 'mdiSvg',
    values: {
      siGithub: { component: siGithub },
      siNuxtDotJs: { component: siNuxtDotJs },
      siVuetify: { component: siVuetify }
    }
  },

  theme: {
    options: {
      customProperties: true
    },

    dark: true,
    themes: {
      light: {
        primary: colors.teal.base,
        accent: colors.indigo.base,
        secondary: colors.grey.lighten2,
        tertiary: colors.grey.darken4
      },
      dark: {
        primary: colors.teal.base,
        accent: colors.indigo.base,
        secondary: colors.grey.darken4,
        tertiary: colors.grey.lighten4
      }
    }
  }
})
