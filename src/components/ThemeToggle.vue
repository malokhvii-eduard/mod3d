<script>
/* Vuex */
import { mapActions, mapState } from 'vuex'

/* Vuetify */
import { VBtn, VIcon } from 'vuetify/lib'

/* Icons */
import { mdiBrightness4, mdiBrightness7 } from '@mdi/js'

export default {
  name: 'ThemeToggle',

  components: { VBtn, VIcon },

  computed: {
    ...mapState('app', ['isDark']),
    icon() {
      return this.isDark ? mdiBrightness4 : mdiBrightness7
    }
  },

  methods: mapActions('app', ['toggleTheme'])
}
</script>

<template>
  <v-btn aria-label="Toggle theme" color="tertiary" icon @click="toggleTheme()">
    <v-icon medium>{{ icon }}</v-icon>
  </v-btn>
</template>
