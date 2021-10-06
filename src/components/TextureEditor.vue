<script>
/* Vuex */
import { mapActions, mapState } from 'vuex'

/* Vuetify */
import { Resize, VBtn, VIcon, VSheet, VSpeedDial } from 'vuetify/lib'

/* Scrollbar */
import VScroll from 'vuescroll/dist/vuescroll-native'

/* Toast UI */
import ImageEditor from 'tui-image-editor'

/* Icons */
import { mdiDownload, mdiHexagon, mdiReload, mdiRotate3d, mdiUpload } from '@mdi/js'

/* Utilities */
import { saveAs } from 'file-saver'
import b64toBlob from 'b64-to-blob'

const CONTROLS_LEFT_DIRECTION_HEIGHT = 365

export default {
  name: 'TextureEditor',

  components: { VScroll, VSheet, VBtn, VIcon, VSpeedDial },

  directives: { Resize },

  props: {
    model: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      mdiDownload,
      mdiHexagon,
      mdiReload,
      mdiRotate3d,
      mdiUpload,

      editor: null,
      previousTexture: null,
      controlsDirection: 'top',

      scrollOptions: {
        vuescroll: { detectResize: false },
        scrollPanel: { initialScrollX: '100%' },
        bar: { disable: true }
      }
    }
  },

  computed: {
    ...mapState('app', ['isDark']),
    ...mapState('editor', ['texture']),
    uvMap() {
      return `${process.env.VUE_APP_ORIGIN}${process.env.BASE_URL}uv/${this.model.slug}.svg`
    },
    themeClasses() {
      return this.isDark ? { 'texture-editor--dark': true } : { 'texture-editor--light': true }
    }
  },

  mounted() {
    this.controlsDirection = window.innerHeight < CONTROLS_LEFT_DIRECTION_HEIGHT ? 'left' : 'top'
    this.editor = this.createEditor()
  },

  destroyed() {
    this.editor.destroy()
    this.editor = null
  },

  methods: {
    ...mapActions('editor', ['saveTexture']),
    createEditor() {
      return new ImageEditor(this.$refs.editor, {
        usageStatistics: false,
        includeUI: {
          uiSize: { height: `${window.innerHeight}px` },
          loadImage: { path: this.uvMap, name: 'uvMap' }
        }
      })
    },
    resizeEditor() {
      if (this.editor) {
        this.controlsDirection = window.innerHeight < CONTROLS_LEFT_DIRECTION_HEIGHT ? 'left' : 'top'
        this.editor.ui.resizeEditor({
          uiSize: {
            height: `${window.innerHeight}px`
          }
        })
      }
    },
    loadUvMap() {
      this.editor.loadImageFromURL(this.uvMap, 'uvMap')
    },
    loadTexture() {
      const loadButton = document.querySelector('.tui-image-editor-load-btn')
      loadButton.click()
    },
    exportTexture() {
      this.$store.commit('editor/SET_IS_BUSY', true)

      setTimeout(() => {
        const texture = this.editor.toDataURL()

        const match = /(data:.*);.*,(.*)/g.exec(texture)
        const contentType = match[1]
        const data = match[2]

        const blob = b64toBlob(data, contentType)
        saveAs(blob, `${this.model.name}.png`)

        this.$store.commit('editor/SET_IS_BUSY', false)
      }, 500)
    },
    submitTexture() {
      this.saveTexture(() => this.editor.toDataURL())
      this.$emit('view')
    }
  }
}
</script>

<template>
  <v-scroll :ops="scrollOptions" class="fill-height">
    <!-- Image editor -->
    <v-sheet v-resize="resizeEditor" :class="themeClasses" class="texture-editor fill-height">
      <div ref="editor" />
    </v-sheet>

    <!-- Controls -->
    <v-speed-dial :direction="controlsDirection" absolute bottom right>
      <template #activator>
        <v-btn aria-label="Controls" color="accent" fab large>
          <v-icon>{{ mdiHexagon }}</v-icon>
        </v-btn>
      </template>

      <v-btn aria-label="View model" color="accent" fab @click="submitTexture()">
        <v-icon>{{ mdiRotate3d }}</v-icon>
      </v-btn>

      <v-btn aria-label="Export texture" color="accent" fab @click="exportTexture()">
        <v-icon>{{ mdiDownload }}</v-icon>
      </v-btn>

      <v-btn aria-label="Upload texture" color="accent" fab @click="loadTexture()">
        <v-icon>{{ mdiUpload }}</v-icon>
      </v-btn>

      <v-btn v-if="uvMap" aria-label="Use UV mapping as texture" color="accent" fab @click="loadUvMap()">
        <v-icon>{{ mdiReload }}</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-scroll>
</template>

<style lang="scss">
/* Image editor */
@import '~tui-image-editor/dist/tui-image-editor.css';

@mixin fill-color($color) {
  fill: $color !important;
  stroke: $color !important;
}

.texture-editor {
  width: 100%;
  height: 100%;
  min-width: 960px;

  .tui-image-editor-header {
    display: none !important;
  }

  .tui-image-editor-main-container {
    background-color: var(--v-secondary-base) !important;
  }

  .tui-image-editor-submenu-style {
    background-color: var(--v-secondary-base) !important;
  }

  .tui-colorpicker-palette-button {
    height: 15px;
    width: 15px;
  }

  .color-picker-control {
    width: 380px !important;
  }

  .tui-image-editor-main-container {
    background-color: var(--v-secondary-base) !important;
  }

  .tui-image-editor-container div.tui-colorpicker-clearfix {
    margin: 0 100px !important;
  }

  .tui-image-editor-controls {
    background-color: var(--v-secondary-base) !important;
    box-shadow: 1px -4px 50px -15px rgba(0, 0, 0, 0.47);
  }

  .use-default {
    @include fill-color(var(--v-tui-icon-base));
  }

  .tui-image-editor-container .tui-image-editor-range-wrap label {
    color: var(--v-tui-text-base) !important;
  }

  .tui-image-editor-container .tui-image-editor-checkbox > label > span {
    color: var(--v-tui-text-base) !important;
  }

  .tui-image-editor-container .tui-image-editor-menu > .tui-image-editor-item.active {
    background-color: var(--v-secondary-base) !important;
  }

  .tui-image-editor-button > label {
    color: var(--v-tui-text-base) !important;
  }
}
</style>
