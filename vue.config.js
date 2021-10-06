/* Utilities */
const path = require('path')

/* Webpack plugins */
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  transpileDependencies: ['vuetify', 'intersection-observer'],

  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    },

    plugins: [
      new GenerateSW({
        swDest: 'sw.js',
        cacheId: 'mod3d',
        exclude: ['robots.txt', 'sitemap.xml', /manifest\.json$/],
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: 'index.html'
      })
    ]
  },

  chainWebpack(config) {
    config.plugins.delete('prefetch')

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-loader').loader('vue-loader').end().use('vue-svg-loader').loader('vue-svg-loader')
  }
}
