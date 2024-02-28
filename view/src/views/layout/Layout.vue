<template>
    <div class="main">
      <el-container>
        <el-header>
          <Menu />
        </el-header>
        <el-main>
          <Contain />
        </el-main>
      </el-container>
    </div>
</template>
<script>
import Menu from './components/menu.vue'
import Contain from './components/contain.vue'

export default {
  name: 'layout-main',
  components: {
    Contain,
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
.main {
  /deep/ .el-header {
    padding: 0;
  }
  /deep/ .el-main {
    padding: 0;
  }
}
</style>
