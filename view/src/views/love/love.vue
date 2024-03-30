<template>
  <div class="love">
    <div class="love-left">
      <div class="left-bgi">
        <h2 class="bgi-text">我们一起去了好多地方，经历了很多事情...</h2>
      </div>
      <!-- 1.按照时间顺序写每个具体事件（东莞学校 -- 长沙 -- 贵州 -- 生日 -- 柳州  -- 厦滘 -- 汉溪长隆.....）
      2.点击可以进入对应的详情页面（必须实现视差滚动效果）
      3.学习canves，并使用它做一些动画 -->
      <div class="love-title">
        <div class="title-chinese">
          我们的故事
        </div>
        <div class="title-english">Our Story</div>
      </div>
      <div class="love-storys">
        <div class="btn-common">
          <div class="btn-icon" @click="handleLeft">
            <i class="el-icon-arrow-left"></i>
          </div>
        </div>
        <div class="storys-content">
          <div class="storys-content-child" :style="{ transform: 'translateX(' + translateX + 'px)'}">
            <storyCardVue v-for="item in allList" :key="item.addEng" :data="item"/>
            <div class="story-end">
              未完待续。。。
            </div>
          </div>
        </div>
        <div class="btn-common">
          <div class="btn-icon" @click="handleRight">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
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
import storyCardVue from './components/storyCard.vue'

export default {
  name: 'love-story',
  components: {
    myCarouelVue,
    storyCardVue
  },
  data () {
    return {
      allList: [{
        date: '2022-12-04',
        address: '东莞',
        addEng: 'DONGGUAN',
        img: require('../../assets/dongguan/love-dg.jpg')
      }, {
        date: '2023-01-12',
        address: '广州',
        addEng: 'GUANGZHOU',
        img: require('../../assets/guangzhou/love-gz.jpg')
      }, {
        date: '2023-01-13',
        address: '长沙',
        addEng: 'CHANGSHA',
        img: require('../../assets/changsha/love-cs.jpg')
      }, {
        date: '2022-11-12',
        address: '深圳',
        addEng: 'SHENZHEN',
        img: require('../../assets/love-sz.png')
      }, {
        date: '2022-11-12',
        address: '长沙',
        addEng: 'CHANGSHA',
        img: require('../../assets/changsha/love-cs.jpg')
      }, {
        date: '2022-11-12',
        address: '北京',
        addEng: 'BEIJING',
        img: require('../../assets/love-bj.png')
      }, {
        date: '2022-11-12',
        address: '罗定',
        addEng: 'LUODING',
        img: require('../../assets/love-ld.png')
      }],
      currentFirst: 0,
      currentLast: 2,
      translateX: 0
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
  },
  methods: {
    handleLeft () {
      // console.log('向左平移')
      if (this.translateX === 0) {
        this.$message({
          message: '前面真的没有啦~',
          type: 'info'
        })
        return
      }
      this.translateX += 356
    },
    handleRight () {
      // console.log('向右平移')
      const maxRight = (this.allList.length - 1) * 356
      if (this.translateX === -maxRight) {
        this.$message({
          message: '我也是有底线的~',
          type: 'info'
        })
        return
      }
      this.translateX -= 356
    },
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
  border-radius: 6px;
  overflow: hidden;
  .left-bgi {
    width: 100%;
    height: 250px;
    background-image: url('../../assets/love-bg.jpg');
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center center; /* 将背景图居中显示 */
    background-size: cover; /* 可选：根据容器大小调整背景图尺寸 */
    margin-bottom: 30px;
    line-height: 250px;
    text-align: center;
    .bgi-text {
      color: #fff;
    }
  }
  .love-title {
    text-align: center;
    .title-chinese {
      position: relative;
      font-size: 30px;
      font-weight: 500;
      color: #1f2329;
      line-height: 45px;
      font-family: 'Gilroy Semi Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
    .title-chinese::before {
      content: ' ';
      position: absolute;
      top: -6px;
      left: 50%;
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 24px;
      height: 4px;
      overflow: hidden;
      background-color: #3370ff;
      border-radius: 100px;
    }
    .title-english {
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 5px;
      color: #8f959e;
      margin-top: 8px;
    }
  }
  .love-storys {
    // border: 1px solid red;
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 380px;
    .storys-content {
      width: 890px;
      overflow: hidden;
      display: flex;
      // border: 1px solid red;
    }
    .storys-content-child {
      display: flex;
      transition: transform 0.5s ease;
      .story-end {
        width: 300px;
        height: 99%;
        flex-shrink: 0;
        margin-right: 56px;
        display: inline-block;
        // cursor: pointer;
        // background: white;
        background-color: rgba(0, 0, 0, 0.04);
        border: 1px solid #f5f6f7;
        box-shadow: 1px 2px 28px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        overflow: hidden;
        text-align: center;
        line-height: 348px;
        font-size: 24px;
        font-weight: 600;
      }
    }
    .btn-icon {
      width: 48px;
      height: 48px;
      font-size: 20px;
      line-height: 48px;
      text-align: center;
      border-radius: 50%;
      background-color: #f5f6f7;
      color: #646a73;
      cursor: pointer;
      // border: 1px solid red;
    }
    .btn-icon:hover {
      color: #3370ff;
      background-color: #e1eaff;
    }
    .btn-common {
      // border: 1px solid red;
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
