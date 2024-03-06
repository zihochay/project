const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      logging: 'warn',
      overlay: false,
      progress: true
    },
    hot: true, // 开启热更新
    port: 8080, // 设置端口号
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // node.js服务器运行的地址
        ws: true,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': 'http://localhost:3000' // 路径重写
        // }
      }
    }
  }
})
