<template>
  <div class="develop">
    <div class="dev-action">
      <el-switch
        :width="50"
        style="margin-bottom: 40px"
        v-model="reverse"
        active-text="倒序"
        inactive-text="正序">
      </el-switch>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        placement="top"
        size="large"
        v-for="(activity, index) in activities"
        :key="index"
        :color="getColor()"
        :timestamp="activity.timestamp">
        <!-- <el-card> -->
          <el-input
            type="textarea"
            autosize
            readonly
            v-model="activity.content"
          >
          </el-input>
        <!-- </el-card> -->
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import { queryblogs } from '@/api/common'
export default {
  name: 'develop-detail',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      activities: [{
        content: '1.使用vue-cli初始化vue2.0项目 https://juejin.cn/post/7228583367050018872?searchId=2024022620504011306912A3D1577ABA5B\n2.引入elementUI组件库(引入方法参考官方文档)\n3.上传到github',
        timestamp: '2023-02-27'
      }, {
        content: '1.安装热加载功能 \n  yarn add webpack-dev-server --dev \n2.配置vue.config.js\n  devServer: {\n    hot: true, // 开启热更新\n    port: 8080 // 设置端口号\n  }\n3.Eslint插件 => 提示代码中ESLint语法错误\n  Vetur插件  => 提示css/less语法',
        timestamp: '2023-02-28'
      }, {
        content: '1.解决改变element组件原有样式问题(语法问题)\n2.nvm控制nodejs版本\n3.完成vue-router和对应组件匹配问题，嵌套路由 https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html\n4.router-view 和 router-link 标签完成路由匹配和点击菜单跳转功能',
        timestamp: '2023-02-29'
      }, {
        content: '1.构建我的简历模块\n2.el-menu使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 ',
        timestamp: '2023-03-01'
      }, {
        content: '1.完成我的简历个人信息基本内容\n2.完成简历个人优势开发',
        timestamp: '2023-03-02'
      }, {
        content: '1.完成简历大标题组件开发\n2.完成简历工作经历部分开发\n3.完成个人简历全部内容开发',
        timestamp: '2023-03-03'
      }, {
        content: '1.增加系统开发过程页面(后期优化可填写 最新日期可修改)\n2.增加系统开发过程和love菜单路由(后期页面要有轮播图)',
        timestamp: '2023-03-04'
      }, {
        content: '1.增加vue-axios\n2.完成接口代理操作',
        timestamp: '2023-03-05'
      }, {
        content: '1.封装完接口\n2.完成get和post请求本地服务操作',
        timestamp: '2023-03-06'
      }, {
        content: '1.修复路由地址输入/重定向失败问题',
        timestamp: '2023-03-07'
      }, {
        content: '1.购买腾讯云服务器\n2.配置服务器线上数据库',
        timestamp: '2023-03-8'
      }, {
        content: '1.本地nodejs代码连接服务器数据库',
        timestamp: '2023-03-10'
      }, {
        content: '1.完成文章分类和文章API编写\n2.编写文章分类管理部分前端页面（50%）',
        timestamp: '2023-03-10'
      }],
      reverse: true
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.queryblogs()
  },
  methods: {
    async queryblogs () {
      const res = await queryblogs({ temp: 1222 })
      console.log('res >>', res)
    },
    // 随机生成颜色函数
    getColor () {
      return '#' + Math.floor(Math.random() * 256).toString(10)
    }

  }
}
</script>

<style lang="less" scoped>
.develop {
  padding: 20px 40px;
  /deep/ .el-timeline-item__timestamp {
    color: #1e824a;
  }
}
</style>
