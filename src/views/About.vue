<script>
/* Vuetify */
import { VBtn, VCol, VContainer, VDivider, VIcon, VResponsive, VRow } from 'vuetify/lib'

/* Components */
import Logo from '@/components/Logo'

export default {
  name: 'AboutPage',

  components: { Logo, VBtn, VCol, VContainer, VDivider, VIcon, VResponsive, VRow },

  data() {
    return {
      socials: [
        { name: 'Nuxt.js', icon: '$siNuxtDotJs', link: 'https://github.com/nuxt/nuxt.js' },
        { name: 'Vuetify', icon: '$siVuetify', link: 'https://github.com/vuetifyjs/vuetify' },
        { name: 'GitHub', icon: '$siGithub', link: 'https://github.com/malokhvii-eduard/mod3d' }
      ]
    }
  }
}
</script>

<template>
  <section id="about" class="fill-height">
    <v-responsive class="fill-height mx-auto" max-width="425">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row no-gutters>
              <v-col class="text-center" cols="12">
                <Logo class="about__logo mb-2" />
                <h1 class="font-weight-black mb-2">
                  <a
                    aria-label="GitHub"
                    class="tertiary--text text-decoration-none"
                    href="https://github.com/malokhvii-eduard/mod3d"
                  >
                    Mod3D
                  </a>
                </h1>

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
                  <span class="primary--text">3D editor</span>, that allows you to wrap a
                  <span class="primary--text">3D model</span>
                  into a texture. As a texture there could be used UV mappings, images or figures. Back to the
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
                    x-large
                  >
                    <v-icon class="about__icon" large>{{ social.icon }}</v-icon>
                  </v-btn>
                </div>
              </v-col>

              <v-col class="mt-3 tertiary--text text-center" cols="12">
                <p class="text-body-1">
                  Released under the
                  <!-- eslint-disable-next-line-->
                  <a aria-label="License" class="primary--text font-weight-bold text-decoration-none" href="https://opensource.org/licenses/MIT">MIT License</a>.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
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

  &__divider {
    .v-divider {
      border-width: 3px 0 0 !important;
    }
  }
}
</style>
