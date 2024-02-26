<template>
    <div class="main">
      <el-container>
        <el-header>
          <Menu />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
</template>
<script>
import Menu from './components/menu.vue'

export default {
  name: 'layout-main',
  components: {
  //   HelloWorld
    Menu
  },
  data () {
    return {

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
/deep/ .main{
  .el-header {
    padding: 0;
    background: pink;
  }
}
</style>
