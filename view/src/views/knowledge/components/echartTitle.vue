<template>
  <div class="chart-title">
    <div class="title-text">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: 'text-main',
  components: {
  //   HelloWorld
  },
  props: {
    title: {
      type: String,
      default: '标题'
    }
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
.chart-title {
  // width: 100%;
  // border: 1px solid red;
  // text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  .title-text {
    position: absolute;
    top: -16px;
    min-width: 120px;
    height: 24px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    padding: 0 10px 0 10px;
    background-color: rgb(53, 53, 250);
    border-radius: 12px;
  }
}
</style>
