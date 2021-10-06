const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    isProduction &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./public/**/*.html', './src/**/*.vue', './node_modules/vuetify/src/**/*.ts'],
        styleExtensions: ['.css', '.scss', '.sass', '.styl', '.postcss'],
        safelist: {
          standard: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/
          ],
          deep: [
            /^container.*/,
            /^row.*/,
            /^col.*/,
            /^align.*/,
            /^justify.*/,
            /d-block$/,
            /d-flex$/,
            /d-inline-flex$/,
            /fade-transition/
          ]
        }
      })
  ]
}
