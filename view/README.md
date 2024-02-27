# view

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

第一天
1.使用vue-cli初始化vue2.0项目 https://juejin.cn/post/7228583367050018872?searchId=2024022620504011306912A3D1577ABA5B
2.引入elementUI组件库(引入方法参考官方文档)
3.上传到github

第二天
1.安装热加载功能
    yarn add webpack-dev-server --dev
2.配置vue.config.js
    devServer: {
        hot: true, // 开启热更新
        port: 8080 // 设置端口号
    }
3.Eslint插件 => 提示代码中ESLint语法错误
  Vetur插件  => 提示css/less语法
  
第三天：
1.解决改变element组件原有样式问题(语法问题)
2.nvm控制nodejs版本
3.完成vue-router和对应组件匹配问题，嵌套路由 https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html