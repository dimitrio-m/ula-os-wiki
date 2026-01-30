import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: false,
  vue: true,
  ignorePatterns: ['content/**'],
  jsonc: false,
  yaml: false,
  markdown: false,
})
