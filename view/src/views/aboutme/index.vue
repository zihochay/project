<template>
  <div class="about-me">
    <div class="top">top</div>
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
.about-me {
  width: 1200px;
  height: 1800px;
  margin: 0 auto;
  border: 1px solid pink;
  .top {
    width: 1200px;
    height: 200px;
    // padding-top: 36px;
    // padding-bottom: 24px;
    // padding-left: 50px;
    // padding-right: 50px;
    background:linear-gradient(to right, #e3f0ef, #fafafa);;
  }
}
</style>
