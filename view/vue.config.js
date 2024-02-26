const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true, // 开启热更新
    port: 8080 // 设置端口号
  }
})
