module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },

  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
      },
    ],
  },
};
