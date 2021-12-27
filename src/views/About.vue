<script>
/* Vuetify */
import { VBtn, VCol, VContainer, VDivider, VIcon, VResponsive, VRow } from 'vuetify/lib'

/* Components */
import Logo from '@/components/Logo'

export default {
  name: 'AboutPage',

  components: { Logo, VBtn, VCol, VContainer, VDivider, VIcon, VResponsive, VRow },

  metaInfo: {
    title: 'About'
  },

  data() {
    return {
      socials: [
        { name: 'Vue.js', icon: '$siVueDotJs', link: 'https://github.com/vuejs/vue' },
        { name: 'Vuetify', icon: '$siVuetify', link: 'https://github.com/vuetifyjs/vuetify' },
        { name: 'GitHub', icon: '$siGithub', link: 'https://github.com/malokhvii-eduard/mod3d' }
      ]
    }
  }
}
</script>

<template>
  <v-responsive id="about" class="fill-height mx-auto" max-width="425" tag="section">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row no-gutters>
            <v-col class="text-center" cols="12">
              <Logo class="about__logo mb-2" />
              <h1 class="font-weight-black mb-2 tertiary--text">Mod3D</h1>

              <v-responsive class="mx-auto about__divider primary" max-width="28">
                <v-divider />
              </v-responsive>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="my-5 tertiary--text text-center" cols="12">
              <p class="text-subtitle-1">
                🎨 A simple
                <!-- eslint-disable-next-line-->
                <span class="primary--text">3D editor</span>, that allows wrapping a
                <span class="primary--text">3D model</span>
                into a texture. As a texture, there could be used UV mappings, images, or figures. Back to the
                <!-- eslint-disable-next-line-->
                <router-link aria-label="Home" class="primary--text font-weight-bold text-decoration-none" to="/">homepage</router-link>.
              </p>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12">
              <div class="d-flex justify-center align-center">
                <v-btn
                  v-for="(social, i) in socials"
                  :key="i"
                  :aria-label="social.name"
                  :href="social.link"
                  :title="social.name"
                  class="mx-1"
                  color="tertiary"
                  icon
                  large
                >
                  <v-icon class="about__icon" medium>{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col class="mt-3 tertiary--text text-center" cols="12">
              <p class="text-body-1">
                Released under the
                <a
                  aria-label="License"
                  class="primary--text font-weight-bold text-decoration-none"
                  href="https://opensource.org/licenses/MIT"
                >
                  MIT License
                </a>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<style lang="scss">
.about {
  &__logo {
    height: 150px;
    width: 150px;
  }

  &__icon {
    fill: currentColor;
  }

  &__divider .v-divider {
    border-width: 3px 0 0 !important;
  }
}
</style>
