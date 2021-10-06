<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VCol, VContainer, VRow } from 'vuetify/lib'

/* Icons */
import { mdiMagnify } from '@mdi/js'

/* Components */
import ModelCard from '@/components/ModelCard'
import ModelSearch from '@/components/ModelSearch'

export default {
  name: 'HomePage',

  components: { ModelCard, ModelSearch, VCol, VContainer, VRow },

  data() {
    return { mdiMagnify, isSearchVisible: true }
  },

  computed: {
    ...mapState('content', ['models'])
  },

  methods: {
    sortByName(items) {
      return items.sort((x, y) => (x.name > y.name ? 1 : y.name > x.name ? -1 : 0))
    },
    scrollToModelCard({ slug, clear }) {
      const modelCard = document.getElementById(slug)

      this.$vuetify.goTo(modelCard, {
        offset: 20,
        easing: 'easeInCubic'
      })

      clear()
    }
  }
}
</script>

<template>
  <section id="home" class="fill-height">
    <v-container fluid>
      <v-row class="mx-auto">
        <!-- Search for a model card -->
        <v-col cols="12">
          <ModelSearch
            ref="search"
            :models="sortByName(models)"
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
              <ModelCard :model="model" :number="i" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
