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
4.router-view 和 router-link 标签完成路由匹配和点击菜单跳转功能

第四天
1.构建我的简历模块
2.el-menu使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 

第五天
1.完成我的简历个人信息基本内容
2.完成简历个人优势开发

第六天
1.完成简历大标题组件开发
2.完成简历工作经历部分开发
3.完成个人简历全部内容开发

第七天
1.增加系统开发过程页面(后期优化可填写可修改)