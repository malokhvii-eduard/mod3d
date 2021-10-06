<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VSheet } from 'vuetify/lib'

/* Components */
import Loader from '@/components/Loader'

export default {
  name: 'Editor',

  components: {
    Loader,
    TextureEditor: () => ({
      component: import(/* webpackChunkName: "texture-editor" */ '@/components/TextureEditor'),
      loading: Loader,
      delay: 0
    }),
    VSheet
  },

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

  data() {
    return {
      isEditing: true
    }
  },

  computed: {
    ...mapState('editor', ['isBusy', 'isTextureSaving']),
    isReady() {
      return !this.isTextureSaving && !this.isBusy
    },
    model() {
      return this.$store.getters['content/getModelBySlug'](this.slug)
    },
    contentStyles() {
      return { display: this.isReady ? 'unset' : 'none' }
    },
    textureEditorStyles() {
      return { display: this.isEditing ? 'unset' : 'none' }
    },
    loaderStyles() {
      return { display: !this.isReady ? 'unset' : 'none' }
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
  <v-sheet class="fill-height" color="secondary">
    <div :style="contentStyles">
      <TextureEditor :model="model" :style="textureEditorStyles" @view="isEditing = false" />
    </div>

    <div :style="loaderStyles">
      <Loader />
    </div>
  </v-sheet>
</template>
