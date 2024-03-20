<template>
  <div class="right-top">
    <div class="rotate-box" :style="{ backgroundColor: color }">
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'right-top',
  components: {
  //   HelloWorld
  },
  props: {
    text: {
      type: String,
      default: 'TEXT'
    },
    color: {
      type: String,
      default: 'red'
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
.right-top {
  float: right;
  width: 60px;
  height: 60px;
  // border: 1px solid red;
  // display: flex;
  // align-items: center;
  overflow: hidden;
  .rotate-box {
    width: 100px;
    font-size: 12px;
    color: #fff;
    // box-sizing: border-box;
    // padding-left: 20px;
    // padding-right: 20px;
    // border: 1px solid red;
    overflow: hidden;
    line-height: 16px;
    text-align: center;
    // background-color: aqua;
    transform: rotate(45deg) translate(-0px, 20px);
    // transform-origin: center center;
  }
}
</style>
