<template>
  <div class="guangzhou">
    <div class="container">
      <div class="cover"></div>
    </div>
    <div class="box img img01 child-center">
      <div class="content01">
        <div class="addr-china">中国·广州</div>
        <div class="addr-english">GUANGZHOU, CHINA</div>
        <div class="addr-english">FROM: 2022-11-12</div>
      </div>
    </div>
    <div class="box-text">文案1</div>
    <div class="box img img02">1</div>
    <div class="box-text">文案2</div>
    <div class="box img img03">2</div>
    <div class="box-text">文案3</div>
    <div class="box img img04">3</div>
  </div>
</template>
<script>
export default {
  name: 'gz-love',
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
.box{
    height: 100vh;
    // background-color: rgba(0,0,0,0.7);
    // color: aliceblue;
    // font-size: 20vh;
    // text-align: center;
    // line-height: 100vh;
}
.child-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-text {
  height: 300px;
  // border: 1px solid red;
  text-align: center;
}
.content01 {
  // width: 300px;
  // height: 300px;
  // border: 1px solid red;
  padding-left: 14px;
  padding-right: 14px;
  // background-color: #fff;
  opacity: 0;
  animation: fadeIn 2s forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.addr-china {
  text-align: center;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 40px;
  line-height: 56px;
  color: #fff;
  text-shadow: 0 0 12px rgba(0, 32, 80, 0.2);
}
.addr-english {
  text-align: center;
  font-family: Gilroy, sans-serif;
  margin-bottom: 32px;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: #fff;
  text-shadow: 0 0 12px rgba(0, 32, 80, 0.2);
}
.img{
    // background-image: url('@/assets/love-gz.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center; /* 将背景图居中显示 */
    background-size: cover; /* 可选：根据容器大小调整背景图尺寸 */
}
.img01{
    background-image: url('@/assets/love-gz.png');
}
.img02{
    background-image: url('@/assets/love-ld.png');
}
.img03{
    background-image: url('@/assets/love-sz.png');
}
.img04{
    background-image: url('@/assets/love-sh.png');
}
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
