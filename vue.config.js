/* Utilities */
const path = require('path')

module.exports = {
  transpileDependencies: ['vuetify', 'intersection-observer'],

  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },

  chainWebpack(config) {
    config.plugins.delete('prefetch')

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-loader').loader('vue-loader').end().use('vue-svg-loader').loader('vue-svg-loader')
  }
}
