<script>
export default {
  name: 'Editor',

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
  <section id="editor" />
</template>
