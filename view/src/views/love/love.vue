<template>
  <div class="love">
    <div class="love-left"></div>
    <div class="love-right">
      <div class="right-top">
        <img src="../../assets/love-01.jpg" width="100%" alt="">
        <div class="love-name">蓝月茵</div>
        <div class="love-tips">幸好，一直是你</div>
        <div class="love-times">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'love-story',
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
.love {
  display: flex;
}
.love-left {
  width: 80%;
  height: 300px;
  border: 1px solid red;
}
.love-right {
  width: 20%;
  height: 600px;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid black;
  .right-top {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    border: 1px solid black;
    .love-name {
      color: #0b73ea;
    }
    .love-tips {
      font-size: 12px;
    }
    .love-times {
      border: 1px solid pink;
    }
  }
}
</style>
