<script>
/* Vuetify */
import { VProgressCircular, VSheet } from 'vuetify/lib'

export default {
  name: 'Loader',

  components: { VSheet, VProgressCircular }
}
</script>

<template>
  <v-sheet class="fill-height d-flex align-center justify-center" color="secondary">
    <v-progress-circular color="primary" indeterminate size="64" />
  </v-sheet>
</template>
