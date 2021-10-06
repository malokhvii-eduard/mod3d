/* Content */
const models = require('./src/assets/content/models.json')

/* Utilities */
const path = require('path')

/* Webpack plugins */
const SitemapPlugin = require('sitemap-webpack-plugin').default
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

    optimization: {
      splitChunks: {
        maxAsyncRequests: 20
      }
    },

    plugins: [
      new SitemapPlugin({
        base: process.env.VUE_APP_ORIGIN,
        paths: [
          { path: '/', priority: 1 },
          { path: '/about', priority: 1 },
          ...models.map((model) => ({ path: `/editor/${model.slug}`, priority: 0.5 }))
        ],
        options: {
          skipgzip: true
        }
      }),
      new GenerateSW({
        cacheId: 'mod3d',
        exclude: ['robots.txt', 'sitemap.xml', /manifest\.json$/, /favicon.*/, '_redirects', '_headers'],
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
    svgRule.use('babel-loader').loader('babel-loader').end().use('vue-svg-loader').loader('vue-svg-loader')
  }
}
