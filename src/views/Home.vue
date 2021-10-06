<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VBtn, VCol, VContainer, VFabTransition, VIcon, VRow } from 'vuetify/lib'

/* Icons */
import { mdiMagnify } from '@mdi/js'

/* Components */
import ModelCard from '@/components/ModelCard'
import ModelSearch from '@/components/ModelSearch'

export default {
  name: 'Home',

  components: { ModelCard, ModelSearch, VCol, VContainer, VRow, VBtn, VIcon, VFabTransition },

  metaInfo: {
    title: 'Home'
  },

  data() {
    return { mdiMagnify, isSearchVisible: true }
  },

  computed: {
    ...mapState('content', ['models'])
  },

  methods: {
    scrollToModelCard({ slug, clear }) {
      this.$vuetify.goTo(document.getElementById(slug), {
        offset: 20,
        easing: 'easeInCubic'
      })

      clear()
    },
    scrollToModelSearch() {
      this.$vuetify.goTo(this.$refs.search, {
        offset: 150,
        easing: 'easeInQuad'
      })
    }
  }
}
</script>

<template>
  <v-container id="home" fluid tag="section">
    <v-row class="mx-auto">
      <!-- Search for a model card -->
      <v-col cols="12">
        <ModelSearch
          ref="search"
          class="my-3 mx-2"
          @input="scrollToModelCard"
          @intersect:visible="isSearchVisible = true"
          @intersect:outside="isSearchVisible = false"
        />
      </v-col>

      <!-- Grid with models' cards -->
      <v-col cols="12">
        <v-row class="mx-auto">
          <v-col v-for="(model, i) in models" :key="model.slug" cols="12" lg="3" md="4" sm="6" xl="2">
            <ModelCard :model="model" :number="i + 1" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Scroll to the search, if it isn't visible -->
    <v-fab-transition>
      <v-btn
        v-if="!isSearchVisible"
        aria-label="Search for a model.."
        bottom
        color="accent"
        fab
        fixed
        large
        right
        @click="scrollToModelSearch()"
      >
        <v-icon>{{ mdiMagnify }}</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>
