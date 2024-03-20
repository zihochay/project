<template>
  <div class="love">
    <div class="love-left">
      1.按照时间顺序写每个具体事件（东莞学校 -- 长沙 -- 贵州 -- 生日 -- 柳州  -- 厦滘 -- 汉溪长隆.....）
      2.点击可以进入对应的详情页面（必须实现视差滚动效果）
      3.学习canves，并使用它做一些动画
    </div>
    <div class="love-right">
      <div class="right-top">
        <img src="../../assets/love-01.jpg" width="100%" alt="">
        <div class="love-name">蓝月茵</div>
        <div class="love-tips">幸好，一直是你</div>
        <div class="love-times">
          <div class="long-time">
            <div>在一起</div>
            <div class="love-num">{{ dateToDays('2022-11-12') }}</div>
          </div>
          <div class="birth-time">
            <div>离小蓝生日</div>
            <div class="love-num">{{ dateUntilBirthday(7, 27) }}</div>
          </div>
        </div>
      </div>
      <div class="right-top" style="padding: 0">
        <myCarouelVue />
      </div>
    </div>
  </div>
</template>
<script>
import { dateToDays, dateUntilBirthday } from '@/utils/index'
import myCarouelVue from './components/myCarouel.vue'

export default {
  name: 'love-story',
  components: {
    myCarouelVue
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
    dateToDays (date) {
      return dateToDays(date)
    },
    dateUntilBirthday (month, day) {
      return dateUntilBirthday(month, day)
    }
  }
}
</script>

<style lang="less" scoped>
.love {
  display: flex;
  width: 1440px;
  // height: 100vh;
  margin: 0 auto;
  // background: linear-gradient(#fce5e5, #faecec);
  // padding-bottom: 20px;
  // border: 1px solid red;
}
.love-left {
  width: 80%;
  height: 755px;
  margin: 30px 20px;
  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;
  // border: 1px solid red;
}
.love-right {
  width: 20%;
  min-height: 600px;
  padding: 30px 20px;
  text-align: center;
  // border: 1px solid black;
  .right-top {
    width: 100%;
    overflow: hidden;
    // height: 300px;
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 5px;
    padding-bottom: 8px;
    // border: 1px solid black;
    box-shadow: rgba(0,0,0,0.2) 0 2px 8px;
    .love-name {
      margin-top: 5px;
      color: #0b73ea;
    }
    .love-tips {
      margin-top: 4px;
      font-size: 12px;
    }
    .love-times {
      display: flex;
      margin-top: 14px;
      .long-time {
        width: 50%;
        // border: 1px solid pink;
      }
      .birth-time {
        width: 50%;
        // border: 1px solid pink;
      }
    }
    .love-num {
      margin-top: 4px;
      color: rgb(247, 126, 146);
      font-weight: 600;
    }
  }
}
</style>
