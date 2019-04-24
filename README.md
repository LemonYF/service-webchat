# service-webchat

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### tips
项目构建中，语法错误暂时取消Tslint，之后如需加入githooks，请添加以下代码到package.json的后面
```json
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.ts": [
      "vue-cli-service lint",
      "git add"
    ],
    "*.vue": [
      "vue-cli-service lint",
      "git add"
    ]
  }
```
