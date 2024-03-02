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
      <div>3、掌握Vue、React、Echarts、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
      <div>4、熟练使用Vue 框架vue-router、Vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
      <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
      <div>6、熟练使用ElementUI、Ant Designer、iview、vantUI等一些PC端和移动端的UI库</div>
    </div>
    <myTitleVue title="工作经历"/>
    <div class="br-left">
      <myCommonyVue name="中邮消费金融有限公司" post="前端开发工程师" time="2020年7月 - 至今"/>
      <div class="mr-btm5">
        1、主导完成前端审批流中心项目 PC端 和 H5端
        从零到一的建设，将泛微OA和线下审批将近 300
        个流程，全部迁移到本系统，推送到飞书审批。完成审批流程从“人找事”到“事找人”的转变，
        并实现各部门审批数据可视化，从根本上解决了公司流程审批效率慢和用户体验差的问题。
      </div>
      <div class="mr-btm5">
        2、负责工作协同平台开发，主导系统员工PBC管理、会议管理、外包人员管理、项目采购管理等重点领域开发，
        其中采购模块实现了公司项目立项、供应商管理、合同审批、用印、对接财务和项目落地等内容的全部打通，深入学习实践敏捷开发规范。
      </div>
      <div>
        3、主导分析团队内各项目前端用户体验、设计不合理的地方，并提出解决方案。实现了团队内各系统UI样式的统一以及组件库的共用。
        在负责的前端项目中落地执行 Jenkins 自动化打包构建部署，并在团队内进行推广，提高开发效率。
      </div>
      <br />
      <myCommonyVue name="绿米联创科技有限公司" post="前端开发工程师(实习)" time="2019年11月 - 2020年4月"/>
      <div>1、主导负责绿米联创国内外官网相关工作内容，并高度还原UI设计稿样式</div>
      <div>2、参与关于新零售服务商工具微信小程序以及嵌入APP的H5页面开发</div>
      <div>3、参与官网社区后台管理系统和绿米APP后台管理系统开发，保证需求按期交付和稳定运行</div>
    </div>
    <myTitleVue title="项目经历"/>
    <div class="br-left">
      <myCommonyVue name="审批流中心" post="前端(主导开发)" time="2020年7月 - 至今"/>
    </div>
    <myTitleVue title="资格证书"/>
    <div class="br-left flex">
      <div>大学英语四级</div>
      <div class="mr-left60">软件设计师(软考中级)</div>
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
    padding-top: 16px;
    padding-left: 30px;
    line-height: 28px;
    border-left: 1px solid #c0ead8;
  }
  .mr-btm5 {
    margin-bottom: 5px;
  }
}
.flex {
  display: flex;
}
.mr-left60 {
  margin-left: 60px;
}
</style>
