const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.graphql$/,
          use: 'graphql-tag/loader'
        }
      ]
    }
  }
})
