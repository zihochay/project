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
          <img src="../../assets/school.png" height="100" alt="">
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
    <myTitleVue title="个人优势"/>
    <div class="br-left">
      <div>1、熟练掌握JavaScript、HTML5 、CSS3和ES6的基本用法</div>
      <div>2、掌握基本的网络知识，如http、tcp、cors、cookie和session等</div>
      <div>3、掌握Vue、React、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
      <div>4、熟悉使用vue 框架vue-router、vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
      <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
      <div>6、熟练使用ElementUI、Ant Designer、iview、vant等一些PC端和移动端的UI库</div>
    </div>
    <myTitleVue title="工作经历"/>
    <div class="br-left">
      <myCommonyVue name="中邮消费金融有限公司" post="前端开发工程师" time="2020年7月-至今"/>
      <div>1、熟练掌握JavaScript、HTML5 、CSS3和ES6的基本用法</div>
      <div>2、掌握基本的网络知识，如http、tcp、cors、cookie和session等</div>
      <div>3、掌握Vue、React、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
      <div>4、熟悉使用vue 框架vue-router、vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
      <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
      <div>6、熟练使用ElementUI、Ant Designer、iview、vant等一些PC端和移动端的UI库</div>
    </div>
  </div>
</template>
<script>
import { dateToYearMonth } from '@/utils/index.js'
import myTitleVue from './components/my-title.vue'
import myCommonyVue from './components/my-commony.vue'

export default {
  name: 'text-main',
  components: {
    myTitleVue,
    myCommonyVue
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
  width: 1140px;
  height: 1800px;
  padding-right: 60px;
  margin: 0 auto;
  border: 1px solid pink;
  .top {
    width: 1200px;
    height: 180px;
    background:linear-gradient(to right, #e3f0ef, #fafafa);
    display: flex;
    .info {
      width: 800px;
      height: 100%;
      // border: 1px solid red;
      .name {
        margin-top: 40px;
        margin-left: 50px;
        font-size: 36px;
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
        width: 100px;
        height: 100px;
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
  .br-left {
    // height: 200px;
    margin-left: 41px;
    padding-top: 24px;
    padding-left: 30px;
    line-height: 28px;
    border-left: 1px solid #c0ead8;
  }
}
</style>
