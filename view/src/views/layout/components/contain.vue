<template>
  <!-- router-view 是最顶层出口，渲染最高级路由匹配到的组件 -->
  <div class="app-main">
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        :key="$route.path"
      ></router-view>
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      :key="$route.path"
    ></router-view>
  </div>
</template>
<script>
export default {
  name: 'text-main',
  components: {
  //   HelloWorld
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
</style>
