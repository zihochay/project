<template>
  <div class="me-detail">
    <div class="detail-menu hid-scroll">
      <div class="menu-title" @click="scrollToSection('section1')">自我介绍</div>
      <div class="menu-title">Jenkins</div>
      <div class="menu-title">遇到过复杂/困难的问题</div>
      <div class="menu-title">最有成就感的事情</div>
      <div class="menu-title">遇到问题如何解决</div>
      <div class="menu-title">知识库？开发流程？</div>
      <div class="menu-title">亮点</div>
      <div class="menu-title">难点</div>
      <div class="menu-title">性能优化</div>
    </div>
    <div class="detail-main hid-scroll">
      <myTitleVue title="自我介绍" id="section1"/>
      <div class="br-left">
        <div>面试官你好，我是陈志浩，在2016年-2020年就读于华南农业大学软件工程专业，在学校学习了计算机网络、数据结构、计算机组成原理、C语言等计算机基础课程。因为在毕业设计中的后台语言用的是nodejs，数据库是mangoDB，所以对这两个技术有一定的了解。在2019年11月份到2020年5月份在深圳绿米联创科技有限公司实习，实习的主要内容是负责公司中国官方的维护和外国官网的开发，这个项目是完全基于html、css和js的，没有用到其他框架。同时负责基于Vue和iVew的APP后台管理系统的开发以及社区论坛网站的开发。其中也接触了一部分嵌入APP的H5页面的需求以及基于原生微信小程序的开发的项目。从2020年7月份开始到现在，一直就职于中邮消费金融有限公司，在目前这家公司负责过基于React+umi+dva+antd的审批流中心的系统，同时负责该系统的移动端项目，移动端的项目是基于Vue和vantUI、cubeUI的，移动端也会对这些组件库根据系统的特点，进行二次封装，这两个系统从搭建到每个版本的迭代都是我来负责的。同时还负责基于vue+elementUI的工作协同平台等项目。我们的团队注重代码质量和团队协作，我们使用了ESlint、Prettier等工具来保持代码的一致性和可读性，同时也使用了Git等版本控制工具来协作开发。谢谢</div>
      </div>
      <myTitleVue title="Jenkins"/>
      <div class="br-left">
        <div>1、熟练掌握JavaScript、HTML5 、CSS3和ES6的基本用法</div>
        <div>2、掌握基本的网络知识，如http、tcp、cors、cookie和session等</div>
        <div>3、掌握Vue、React、Echarts、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
        <div>4、熟练使用Vue 框架vue-router、Vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
        <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
        <div>6、熟练使用ElementUI、Ant Designer、iview、vantUI等一些PC端和移动端的UI库</div>
      </div>
      <myTitleVue title="自我介绍"/>
      <div class="br-left">
        <div>1、熟练掌握JavaScript、HTML5 、CSS3和ES6的基本用法</div>
        <div>2、掌握基本的网络知识，如http、tcp、cors、cookie和session等</div>
        <div>3、掌握Vue、React、Echarts、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
        <div>4、熟练使用Vue 框架vue-router、Vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
        <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
        <div>6、熟练使用ElementUI、Ant Designer、iview、vantUI等一些PC端和移动端的UI库</div>
      </div>
      <myTitleVue title="自我介绍"/>
      <div class="br-left">
        <div>1、熟练掌握JavaScript、HTML5 、CSS3和ES6的基本用法</div>
        <div>2、掌握基本的网络知识，如http、tcp、cors、cookie和session等</div>
        <div>3、掌握Vue、React、Echarts、JQuery、Jenkins 以及微信小程序 等一些技术和主流框架</div>
        <div>4、熟练使用Vue 框架vue-router、Vue-cli 脚手架进行MVVM设计模式下的页面搭建与前后端数据交互</div>
        <div>5、熟练使用 v-form 搭建动态表单项目，实现无代码拖拉拽生成表单页面</div>
        <div>6、熟练使用ElementUI、Ant Designer、iview、vantUI等一些PC端和移动端的UI库</div>
      </div>
    </div>
  </div>
</template>
<script>
import myTitleVue from './components/my-title.vue'

export default {
  name: 'me-detail',
  components: {
    myTitleVue
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
    scrollToSection (sectionId) {
      document.querySelector(`#${sectionId}`).scrollIntoView()
    }
  }
}
</script>

<style lang="less" scoped>
.me-detail {
  display: flex;
  .detail-menu {
    width: 20%;
    box-sizing: border-box;
    padding: 36px 10px 10px 20px;
    height: calc(100vh - 62px);
    border-right: 1px solid #ccc;
    .menu-title {
      // border: 1px solid pink;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #488ff0;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .detail-main {
    width: 80%;
    box-sizing: border-box;
    padding: 0px 10px 10px 20px;
    height: calc(100vh - 62px);
  }
  .br-left {
    // height: 200px;
    margin-left: 41px;
    padding-top: 16px;
    padding-left: 30px;
    padding-right: 60px;
    line-height: 28px;
    border-left: 1px solid #c0ead8;
  }
// 隐藏滚动条
.hid-scroll {
  overflow: auto;
  scrollbar-width: thin; /* 设置滚动条宽度 */
  scrollbar-color: transparent transparent; /* 设置滚动条颜色为透明 */
}
/* 适用于 Safari 浏览器 */
.hid-scroll::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
  height: 6px; /* 设置滚动条高度 */
}

.hid-scroll::-webkit-scrollbar-thumb {
  background-color: transparent; /* 设置滚动条 thumb 的背景颜色为透明 */
}

.hid-scroll::-webkit-scrollbar-track {
  background-color: transparent; /* 设置滚动条 track 的背景颜色为透明 */
}
}
</style>
