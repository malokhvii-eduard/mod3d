const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'plugin:optimize-regex/recommended'
  ],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'no-console': isProduction ? 'warn' : 'off',
    'no-debugger': isProduction ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'vue/attributes-order': ['error'],
    'vue/no-v-html': 'off'
  }
}
