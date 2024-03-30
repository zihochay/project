<template>
  <div class="story-card">
    <div class="story-time">
      <div>
        {{data.date}}
        <span class="font-bottomline"></span>
      </div>
    </div>
    <div class="story-img" :style="{backgroundImage: `url(${data.img})`}">
      <div class="story-address">
        <span>{{data.address}}</span>
        <span class="story-eng">{{data.addEng}}</span>
      </div>
      <div class="konw-more" @click="handleKnow">
        回忆一下
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'story-card',
  components: {
  //   HelloWorld
  },
  props: {
    data: {
      type: Object,
      default: () => {}
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
    handleKnow () {
      console.log('data >>', this.data)
      this.$router.push({
        path: 'love/gz-love'
      })
      // this.$alert(`${this.data.address}的故事正在开发中，敬请期待。。。`, '提示')
    }
  }
}
</script>

<style lang="less" scoped>
.story-card {
  width: 300px;
  height: 100%;
  flex-shrink: 0;
  margin-right: 56px;
  display: inline-block;
  // cursor: pointer;
  // background: white;
  border: 1px solid #f5f6f7;
  box-shadow: 1px 2px 28px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  overflow: hidden;
  // border: 1px solid pink;
  .story-time {
    width: 100%;
    height: 48px;
    text-align: center;
    // line-height: 48px;
    background-color: #fff;
    padding-top: 12px;
    font-size: 20px;
    font-weight: 500;
    // border: 1px solid red;
    .font-bottomline {
      display: block;
      width: 30px;
      margin: 0 auto;
      margin-top: 10px;
      border-bottom: 4px pink solid;
      border-radius: 6px;
      transition: width 0.5s ease-in-out;
    }
  }
  .story-img {
    // border: 1px solid red;
    width: 100%;
    height: 320px;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    background-repeat: no-repeat;
    background-position: center center; /* 将背景图居中显示 */
    background-size: cover; /* 可选：根据容器大小调整背景图尺寸 */
    transition: background-size 1s ease;
    .story-address {
      // top: 20px;
      // left: 26px;
      // position: absolute;
      font-weight: 700;
      font-size: 28px;
      line-height: 41px;
      color: #ccc;
      // z-index: 66;
      .story-eng {
        font-size: 24px;
        opacity: 0.63;
        margin-left: 5px;
      }
    }
    .konw-more {
      // position: absolute;
      // bottom: 20px;
      // left: 26px;
      // z-index: 66;
      position: fixed;
      bottom: 20px;
      color: #fff;
      width: 80px;
      text-align: center;
      background-color: transparent;
      padding: 3px 6px 3px 6px;
      border-radius: 8%;
      border: 2px solid #fff;
    }
    .konw-more:hover {
      cursor: pointer;
      background-color: #3370ff;
      border-color: #1656fc;
      opacity: 1;
    }
  }
}
.story-card:hover {
  // cursor: pointer;
  .story-time {
    background-color: rgba(0, 0, 0, 0.04);
    .font-bottomline {
      width: 100px;
    }
  }
  .story-img {
    opacity: 0.7;
    background-size: 125%;
  }
}
</style>
