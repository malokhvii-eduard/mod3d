<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { VBtn, VCard, VCardTitle, VFadeTransition, VHover, VIcon, VImg, VOverlay, VSpacer } from 'vuetify/lib'

/* Icons */
import { mdiAutoFix } from '@mdi/js'

export default {
  name: 'ModelCard',

  components: { VBtn, VCard, VCardTitle, VFadeTransition, VHover, VIcon, VImg, VOverlay, VSpacer },

  props: {
    model: {
      type: Object,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },

  data() {
    return { mdiAutoFix }
  },

  computed: {
    ...mapState('app', ['hasWebpSupport']),
    preview() {
      const extension = this.hasWebpSupport ? 'webp' : 'png'
      return `${process.env.VUE_APP_ORIGIN}${process.env.BASE_URL}img/preview/${this.model.slug}.${extension}`
    },
    nameClasses() {
      const breakpoint = this.$vuetify.breakpoint.name
      return [`model-card__name--${breakpoint}`]
    }
  }
}
</script>

<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        :id="model.slug"
        :data-number="model.number"
        :data-slug="model.slug"
        class="mx-auto"
        color="secondary"
        elevation="3"
        max-width="344"
      >
        <!-- Preview -->
        <v-img :lazy-src="model.placeholder" :src="preview" aspect-ratio="1.33" />

        <v-card-title class="tertiary--text">
          <h2 :class="nameClasses" class="title text-capitalize text-truncate">{{ model.name }}</h2>
          <v-spacer />
          <span class="ml-4 headline font-weight-bold text-right">#{{ number }}</span>
        </v-card-title>

        <!-- Open in editor -->
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="primary" z-index="1">
            <v-btn
              :to="`/editor/${model.slug}`"
              aria-label="Open in editor"
              class="accent--text"
              color="secondary"
              fab
              large
              nuxt
            >
              <v-icon large>{{ mdiAutoFix }}</v-icon>
            </v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<style lang="scss">
.model-card {
  &__name {
    &--xs {
      max-width: 60%;
    }

    &--sm {
      max-width: 70%;
    }

    &--md {
      max-width: 73%;
    }

    &--xl,
    &--lg {
      max-width: 75%;
    }
  }
}
</style>
