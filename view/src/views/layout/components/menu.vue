<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/index">我的简历</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/index">简历(详细版)</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/index">知识星球</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/index">系统开发过程</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/index">系统管理</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/index">Love</router-link>
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
      activeIndex: '1'
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
