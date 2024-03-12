<template>
  <div class="menu">
    <!-- 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/index">
        我的简历
      </el-menu-item>
      <el-menu-item index="/detail">
        简历(详细版)
      </el-menu-item>
      <el-menu-item index="/index1">
        知识星球
      </el-menu-item>
      <el-menu-item index="/devDetail">
        系统开发过程
      </el-menu-item>
      <el-submenu index="/systemManage">
        <template slot="title">系统管理</template>
        <el-menu-item index="/blogType">文章分类管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/love">
        test
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'heart-menu',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      activeIndex: '/index'
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
// 去掉router下划线
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
