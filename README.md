# Nuxt-init

Nuxt프로젝트 초기설정을 정리하면서 boilerplate로 사용가능하도록 만들고자 합니다.

##  프로젝트 생성

Version info
```
node v14.17.0
npm v6.14.13
```

Create App command
```bash
$ npm init nuxt-app <project-name>
```

Select options
<img src="/assets/images/project-options.png" alt="project options" style="display: block;">

## prettier 설정

Install prettier packages
```bash
$ npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Setting .eslintrc
```js
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
```