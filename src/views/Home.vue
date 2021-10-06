<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VCol, VContainer, VRow } from 'vuetify/lib'

/* Icons */
import { mdiMagnify } from '@mdi/js'

/* Components */
import ModelCard from '@/components/ModelCard'

export default {
  name: 'HomePage',

  components: { ModelCard, VCol, VContainer, VRow },

  data() {
    return { mdiMagnify }
  },

  computed: {
    ...mapState('content', ['models'])
  }
}
</script>

<template>
  <section id="home" class="fill-height">
    <v-container fluid>
      <v-row class="mx-auto">
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
