<script>
/* Vuetify */
import { VCol, VContainer, VResponsive, VRow } from 'vuetify/lib'

export default {
  name: 'NotFound',

  components: { VCol, VContainer, VRow, VResponsive },

  metaInfo: {
    title: '404'
  }
}
</script>

<template>
  <v-responsive id="404" class="fill-height mx-auto" max-width="400" tag="section">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row no-gutters>
            <v-col class="text-center" cols="12">
              <h1 class="text-h1 primary--text font-weight-black">404</h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="text-center" cols="12">
              <h2 class="mb-2">Page not found!</h2>
              <p class="text-subtitle-2 ma-0">
                We're sorry, the page you requested could not be found. Please go back to the
                <!-- eslint-disable-next-line-->
                <router-link aria-label="Home" class="accent--text font-weight-bold text-decoration-none" to="/">homepage</router-link>.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>
