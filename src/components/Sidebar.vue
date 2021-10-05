<script>
/* Vuetify */
import { VNavigationDrawer } from 'vuetify/lib'

/* Icons */
import { mdiHelpCircle } from '@mdi/js'

/* Components */
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default {
  name: 'Sidebar',

  components: { Logo, ThemeToggle, VNavigationDrawer },

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
