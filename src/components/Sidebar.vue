<script>
/* Vuetify */
import { VBtn, VIcon, VNavigationDrawer } from 'vuetify/lib'

/* Icons */
import { mdiHelpCircle } from '@mdi/js'

/* Components */
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default {
  name: 'Sidebar',

  components: { Logo, ThemeToggle, VBtn, VIcon, VNavigationDrawer },

  data() {
    return { mdiHelpCircle, drawer: true }
  }
}
</script>

<template>
  <v-navigation-drawer v-model="drawer" app class="pt-4 elevation-4" color="secondary" mini-variant stateless>
    <router-link aria-label="Home" to="/">
      <div class="sidebar__logo d-flex mx-auto">
        <Logo />
      </div>
    </router-link>

    <template #append>
      <ThemeToggle class="d-flex mx-auto mb-1" />

      <v-btn aria-label="About" class="d-flex mx-auto mb-3" color="tertiary" icon to="/about">
        <v-icon medium>{{ mdiHelpCircle }}</v-icon>
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss">
.sidebar {
  &__logo {
    height: 40px;
    width: 40px;
  }
}
</style>
