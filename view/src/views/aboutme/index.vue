<template>
  <div class="about-me">
    <div class="top">
      <div class="info">
        <div class="name">陈志浩</div>
        <div class="info-first">
          男 ｜ 生日：1997.06 ｜ 广州/佛山
          <span class="tel"><i class="el-icon-phone"></i>15813322857</span>
          <span class="tel"><i class="el-icon-message"></i> 772393327@qq.com</span>
        </div>
        <div class="info-first">
          <span>工作经验：{{ dateToYearMonth ('2020-07-01')  }}</span> ｜
          <span>求职意向：前端开发工程师</span> ｜
          <span>期望薪资：16-20K</span>
        </div>
      </div>
      <div class="school">
        <div class="logo">
          <img style="margin-left: -34px; margin-top: -1px" src="../../assets/school.jpg" height="100" alt="">
        </div>
        <div class="school-text">
          <div class="school-name">
            <div>华南农业大学</div>
            <div>2016-2020</div>
          </div>
          <div class="pro-name">
            <div>软件工程</div>
            <div>本科</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dateToYearMonth } from '@/utils/index.js'

export default {
  name: 'text-main',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      workYears: '3年6月'
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
  },
  methods: {
    dateToYearMonth (date) {
      return dateToYearMonth(date)
    }
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
    background:linear-gradient(to right, #e3f0ef, #fafafa);
    display: flex;
    .info {
      width: 800px;
      height: 100%;
      // border: 1px solid red;
      .name {
        margin-top: 60px;
        margin-left: 50px;
        font-size: 32px;
        font-weight: 600;
      }
      .info-first {
        margin-top: 8px;
        margin-left: 50px;
        .tel {
          margin-left: 24px;
        }
      }
    }
    .school {
      width: 400px;
      height: 100%;
      // border: 1px solid black;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 98px;
        height: 98px;
        // border: 1px solid black;
        // background-color: black;
        border-radius: 50%;
        margin-top: 50px;
        overflow: hidden;
        // background-image: url("../../assets/school.jpg");
        // background-repeat: no-repeat;
        // background-size: contain;
      }
      .school-text {
        width: 288px;
        height: 100%;
        // border: 1px solid black;
        .school-name {
          margin-top: 60px;
          width: 200px;
          line-height: 36px;
          height: 36px;
          background-color:#e3f0ef;
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
        }
        .pro-name {
          margin-top: 10px;
          width: 200px;
          line-height: 30px;
          height: 30px;
          background-color:#e3f0ef;
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
