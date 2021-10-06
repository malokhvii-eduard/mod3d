<script>
/* Vuetify */
import { Intersect, VAutocomplete, VSheet } from 'vuetify/lib'

export default {
  name: 'ModelSearch',

  components: { VAutocomplete, VSheet },

  directives: { Intersect },

  props: {
    models: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectedModel: null
    }
  },

  watch: {
    selectedModel(i, j) {
      if (i && i !== j) {
        this.$emit('input', { slug: i, clear: this.clear })
      }
    }
  },

  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting) {
        this.$emit('intersect:visible')
      } else {
        this.$emit('intersect:outside')
      }
    },
    clear() {
      this.$nextTick(() => {
        this.selectedModel = null
        this.$refs.search.blur()
      })
    }
  }
}
</script>

<template>
  <v-sheet color="transparent">
    <v-autocomplete
      ref="search"
      v-model="selectedModel"
      v-intersect="onIntersect"
      :items="models"
      aria-label="Search for a model..."
      background-color="secondary"
      clearable
      color="primary"
      flat
      hide-details
      hide-selected
      item-text="name"
      item-value="slug"
      label="Search for a model..."
      solo
    />
  </v-sheet>
</template>
