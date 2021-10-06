<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VApp, VFadeTransition, VMain } from 'vuetify/lib'

/* Components */
import Sidebar from './components/Sidebar'

export default {
  name: 'App',

  components: { Sidebar, VApp, VFadeTransition, VMain },

  computed: {
    ...mapState('app', ['isDark'])
  },

  watch: {
    isDark(value) {
      this.$vuetify.theme.dark = value
    }
  },

  beforeCreate() {
    this.$store.dispatch('app/restoreLastTheme')
    this.$store.dispatch('app/checkWebpSupport')
  }
}
</script>

<template>
  <v-app>
    <Sidebar />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
