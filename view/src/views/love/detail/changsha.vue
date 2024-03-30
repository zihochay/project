<template>
  <div class="chang-sha">
    <div class="container">
      <div class="cover"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cs-love',
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
.container {
  width: 200px;
  height: 200px;
  // background-color: #ccc;
}
.cover {
  width: 99%;
  height: 99%;
  // background-color: red;
  background-image: url("@/assets/love-01.jpg");
  background-repeat: no-repeat;
    background-position: center center; /* 将背景图居中显示 */
    background-size: cover; /* 可选：根据容器大小调整背景图尺寸 */
  -webkit-animation: transform 25s ease-in-out infinite both alternate;
  animation: transform 25s ease-in-out infinite both alternate;
  transform-style: preserve-3d;
}
@keyframes transform {
0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
}
14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
}
28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
}
42% {
    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
}
56% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
}
70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
}
84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
}
}
</style>
