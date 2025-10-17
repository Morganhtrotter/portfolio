// eslint.config.js (flat config)
import globals from 'globals'
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
  // Ignore first (flat config style)
  {
    ignores: ['dist/**', 'node_modules/**', '.husky/**'],
  },

  js.configs.recommended,
  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
