<script>
/* Vuex */
import { mapState } from 'vuex'

/* Vuetify */
import { Resize, VBtn, VIcon, VSheet, VSpeedDial } from 'vuetify/lib'

/* Scrollbar */
import VScroll from 'vuescroll/dist/vuescroll-native'

/* Three */
import {
  AmbientLight,
  Euler,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Quaternion,
  Scene,
  TextureLoader,
  Vector2,
  WebGLRenderer
} from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

/* Icons */
import { mdiDownload, mdiLeadPencil, mdiToolbox } from '@mdi/js'

/* Utilities */
import { saveAs } from 'file-saver'

const hasWebGlSupport = (() => {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (error) {
    return false
  }
})()

function toRadians(angle) {
  return angle * (Math.PI / 180)
}

const SCENE_MIN_WIDTH = 900
const SCENE_MIN_HEIGHT = 768
const MESH_ROTATE_TOUCHES = 2

export default {
  name: 'ModelViewer',

  components: { VScroll, VBtn, VIcon, VSheet, VSpeedDial },

  directives: { Resize },

  props: {
    model: {
      type: Object,
      required: true
    }
  },

  data() {
    const light0 = new AmbientLight(0xffffff, 0.5)
    const light1 = new PointLight(0xffffff, 0.6)

    return {
      mdiDownload,
      mdiLeadPencil,
      mdiToolbox,

      hasWebGlSupport,
      animationFrame: null,
      renderer: null,
      scene: null,
      lights: [light0, light1],
      camera: null,
      mesh: null,

      scrollOptions: {
        vuescroll: { detectResize: false },
        scrollPanel: {
          scrollingX: hasWebGlSupport,
          scrollingY: hasWebGlSupport
        },
        bar: { background: this.$vuetify.theme.currentTheme.primary }
      },

      isDragging: false,
      previousDraggingPosition: new Vector2()
    }
  },

  computed: {
    ...mapState('app', ['isDark']),
    ...mapState('editor', ['texture']),
    clearColor() {
      return this.$vuetify.theme.currentTheme.secondary
    },
    solidMaterialColor() {
      return this.clearColor
    }
  },

  watch: {
    isDark() {
      this.updateTheme()
    }
  },

  mounted() {
    this.$store.commit('editor/SET_IS_BUSY', true)

    this.renderer = this.createRenderer()
    this.camera = this.createCamera()
    this.scene = this.createScene()
    this.loadMesh()

    const { canvas } = this.$refs

    canvas.addEventListener('mousedown', this.enableMouseDragging)
    canvas.addEventListener('mouseup', this.disableMouseDragging)
    canvas.addEventListener('mousemove', this.onMouseMove)

    canvas.addEventListener('touchstart', this.enableTouchDragging)
    canvas.addEventListener('touchend', this.disableTouchDragging)
    canvas.addEventListener('touchmove', this.onTouchMove)

    this.animateRenderer()
  },

  beforeDestroy() {
    cancelAnimationFrame(this.animationFrame)

    const { canvas } = this.$refs

    canvas.removeEventListener('mousedown', this.enableMouseDragging)
    canvas.removeEventListener('mouseup', this.disableMouseDragging)
    canvas.removeEventListener('mousemove', this.onMouseMove)

    canvas.removeEventListener('touchstart', this.enableTouchDragging)
    canvas.removeEventListener('touchend', this.disableTouchDragging)
    canvas.removeEventListener('touchmove', this.onTouchMove)

    this.renderer.dispose()
  },

  methods: {
    getCanvasSize() {
      const size = { width: this.$el.clientWidth, height: this.$el.clientHeight }
      if (size.width < SCENE_MIN_WIDTH) {
        size.width = SCENE_MIN_WIDTH
      }

      if (size.height < SCENE_MIN_HEIGHT) {
        size.height = SCENE_MIN_HEIGHT
      }

      return size
    },
    createRenderer() {
      const { canvas } = this.$refs
      const canvasSize = this.getCanvasSize()

      const renderer = new WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: 'low-power'
      })

      renderer.setClearColor(this.clearColor)
      renderer.setSize(canvasSize.width, canvasSize.height)

      return renderer
    },
    createCamera() {
      const canvasSize = this.getCanvasSize()
      const aspect = canvasSize.width / canvasSize.height
      return new PerspectiveCamera(35, aspect, 0.1, 1000)
    },
    createScene() {
      const scene = new Scene()
      scene.add(...this.lights)
      return scene
    },
    createSolidMaterial() {
      return new MeshStandardMaterial({ color: this.solidMaterialColor })
    },
    createTextureMaterial(texture) {
      return new MeshStandardMaterial({
        map: texture,
        transparent: true
      })
    },
    createMesh(geometry, material) {
      const mesh = new Mesh(geometry, material)

      mesh.scale.x = this.model.scale
      mesh.scale.y = this.model.scale
      mesh.scale.z = this.model.scale
      mesh.position.z = -4 // Depends on camera position
      mesh.rotation.x = Math.PI / 4
      mesh.rotation.y = Math.PI / 4
      mesh.rotation.z = Math.PI / 4
      mesh.translation = geometry.center()

      return mesh
    },
    loadMesh() {
      const object = `${process.env.VUE_APP_ORIGIN}${process.env.BASE_URL}models/${this.model.slug}.obj`
      new OBJLoader().load(object, (group) => {
        group.traverse((object) => {
          if (object instanceof Mesh) {
            const material = this.createSolidMaterial()
            this.mesh = this.createMesh(object.geometry, material)
            this.scene.add(this.mesh)
            this.loadTexture()
          }
        })
      })
    },
    loadTexture() {
      if (this.mesh && this.texture) {
        new TextureLoader().load(this.texture, (texture) => {
          const material = this.createTextureMaterial(texture)
          const skinnedMesh = new Mesh(this.mesh.geometry, material)
          this.mesh.add(skinnedMesh)
          this.$store.commit('editor/SET_IS_BUSY', false)
        })
      } else {
        this.$store.commit('editor/SET_IS_BUSY', false)
      }
    },
    animateRenderer() {
      this.animationFrame = requestAnimationFrame(this.animateRenderer)
      this.renderer.render(this.scene, this.camera)
    },
    resizeRenderer() {
      if (this.renderer) {
        const canvasSize = this.getCanvasSize()
        this.renderer.setSize(canvasSize.width, canvasSize.height)
        this.camera = this.createCamera()
      }
    },
    updateTheme() {
      if (this.renderer) {
        this.renderer.setClearColor(this.clearColor)
      }

      if (this.mesh) {
        this.mesh.material.color.set(this.solidMaterialColor)
      }
    },
    exportScene() {
      if (this.scene) {
        this.$store.commit('editor/SET_IS_BUSY', true)
        this.lights.forEach((light) => this.scene.remove(light))
        new GLTFExporter().parse(this.scene, this.saveScene, { binary: true })
      }
    },
    saveScene(gltf) {
      const blob = new Blob([gltf], { type: 'model/gltf+binary ' })
      saveAs(blob, `${this.model.name}.glb`)

      this.scene.add(...this.lights)
      this.$store.commit('editor/SET_IS_BUSY', false)
    },
    /* Dragging */
    calculateDeltaRotationQuaternion(deltaMove) {
      return new Quaternion().setFromEuler(new Euler(toRadians(deltaMove.y), toRadians(deltaMove.x), 0, 'XYZ'))
    },
    rotateMesh(offset) {
      const deltaMove = new Vector2()
      deltaMove.subVectors(offset, this.previousDraggingPosition)

      if (this.mesh && this.isDragging) {
        const deltaRotationQuaternion = this.calculateDeltaRotationQuaternion(deltaMove)
        this.mesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.mesh.quaternion)
      }

      this.previousDraggingPosition = offset
    },
    /* Mouse dragging */
    enableMouseDragging() {
      this.isDragging = true
    },
    disableMouseDragging() {
      this.isDragging = false
    },
    onMouseMove(event) {
      const offset = new Vector2(event.offsetX, event.offsetY)
      this.rotateMesh(offset)
    },
    /* Touch dragging */
    enableTouchDragging(event) {
      if (event.targetTouches.length === MESH_ROTATE_TOUCHES) {
        event.preventDefault()
        event.stopPropagation()
        this.isDragging = true
      }
    },
    disableTouchDragging(event) {
      this.isDragging = event.targetTouches.length !== MESH_ROTATE_TOUCHES
    },
    onTouchMove(event) {
      if (event.touches.length === MESH_ROTATE_TOUCHES) {
        event.preventDefault()
        event.stopPropagation()

        const touch0 = event.touches[0]
        const offset = new Vector2(touch0.screenX, touch0.screenY)
        this.rotateMesh(offset)
      }
    }
  }
}
</script>

<template>
  <v-scroll :ops="scrollOptions" class="fill-height">
    <v-sheet v-resize="resizeRenderer" class="model-viewer fill-height" color="secondary">
      <!-- Scene -->
      <canvas v-if="hasWebGlSupport" ref="canvas" class="model-viewer__scene" />

      <!-- No scene -->
      <div class="model-viewer--no-scene d-flex align-center justify-center">
        <p class="text-body-1">
          We're sorry, your browser does not seem to support
          <!-- eslint-disable-next-line-->
          <a aria-label="WebGL" class="primary--text font-weight-bold text-decoration-none" href="https://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.
        </p>
      </div>

      <!-- Controls (Toolbox) -->
      <v-speed-dial bottom direction="top" fixed right>
        <template #activator>
          <v-btn aria-label="Controls" color="accent" fab large>
            <v-icon>{{ mdiToolbox }}</v-icon>
          </v-btn>
        </template>

        <v-btn aria-label="Edit texture" color="accent" fab @click="$emit('edit')">
          <v-icon>{{ mdiLeadPencil }}</v-icon>
        </v-btn>

        <v-btn v-if="hasWebGlSupport && mesh" aria-label="Export model" color="accent" fab @click="exportScene()">
          <v-icon>{{ mdiDownload }}</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-sheet>
  </v-scroll>
</template>

<style lang="scss">
.model-viewer {
  height: 100%;
  width: 100%;

  &--no-scene {
    height: 100vh;
  }

  &__scene {
    cursor: move;
    min-width: 900px;
    position: absolute !important;
  }
}
</style>
