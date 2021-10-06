<script>
/* Vuetify */
import { VSheet } from 'vuetify/lib'

export default {
  name: 'Editor',

  components: { VSheet },

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  metaInfo() {
    if (!this.model) {
      return {}
    }

    return { title: `Editor · ${this.model.name}` }
  },

  computed: {
    model() {
      return this.$store.getters['content/getModelBySlug'](this.slug)
    }
  },

  mounted() {
    if (!this.model) {
      this.$router.push('/404')
    }
  }
}
</script>

<template>
  <v-sheet class="fill-height" color="secondary" />
</template>
