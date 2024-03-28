<template>
  <div class="know">
    <div class="add-blogs">
      <el-button type="primary" plain size="mini" @click="handleAdd">新 增 文 章</el-button>
    </div>
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in typeList" :key="item.value" :label="item.name" :name="item._id">
          <div class="list" v-if="blogList.length > 0">
            <div class="list-item" v-for="(item, index) in blogList" :key="item._id" :class="{ flipped: flipIndex === index }" @click="toggleFlip(index, item)">
              <div class="flip-card-front">
                <!-- 正面内容 -->
                <RightTopTipsVue :text="item.categoryObj.name" :color="item.categoryObj.color" />
                <div class="ques-cont over-roll">
                  <!-- <quill-editor v-model="item.title" :disabled="true" :options="{theme:'bubble'}">
                  </quill-editor> -->
                  <div v-html="item.title"></div>
                </div>
                <div class="btm-todetail" @click.stop="handleDetail(item)">
                  <div><i class="el-icon-view"></i> {{ item.readCount }}</div>
                  <div>查看文章详情 ></div>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="esay-cont">
                  <!-- <quill-editor v-model="item.easy" :disabled="true" :options="{theme:'bubble'}">
                  </quill-editor> -->
                  <div v-html="item.easy"></div>
                </div>
                <div class="btm-todetail" @click.stop="handleDetail(item)">
                  <div><i class="el-icon-view"></i> {{ item.readCount }}</div>
                  <div>还不够详细? 点击查看文章详情 > </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="null-tips" v-else>
            该模块暂时还没有内容哦，点击
            <el-button @click="handleAdd" type="text" size="medium">新增文章</el-button>
            去添加吧～
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <p class="text-center" v-if="isAllDataLoaded && blogList.length > 0">已加载全部数据</p>
    <p class="text-center" v-if="!isAllDataLoaded && blogList.length > 0">正在加载更多数据...</p>
  </div>
</template>
<script>
import { getCategoryAll } from '@/api/category'
import { findBlog, addOneRead } from '@/api/blogs'
import RightTopTipsVue from '@/components/RightTopTips.vue'

export default {
  name: 'know-main',
  components: {
    RightTopTipsVue
  },
  data () {
    return {
      activeName: 'all',
      typeList: [],
      flipIndex: '',
      blogList: [],
      currentPage: 1,
      isAllDataLoaded: false,
      isLoading: false
    }
  },
  // 创建完成，访问当前this实例
  created () {
    this.listenerFunction()
  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getTypeAll()
    this.findBlog()
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.listenerFunction)
  },
  methods: {
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleAdd () {
      console.log('新增文章')
      this.$router.push({
        path: '/knowledge/add'
      })
    },
    handleScroll (event) {
      // 获取滚动容器的滚动位置
      // console.log('滚动条高度为：', document.body)
      const scrollTop = event.target.scrollTop || document.documentElement.scrollTop
      const scrollHeight = event.target.scrollHeight || document.body.scrollHeight
      const clientHeight = event.target.clientHeight || window.innerHeight
      console.log('滚动条高度为：', scrollTop, scrollHeight, clientHeight)
      // 判断是否滚动到底部
      if (scrollTop + clientHeight + 200 >= scrollHeight) {
        // 执行滚动到底部时的操作
        if (!this.isLoading && !this.isAllDataLoaded) {
          console.log('加载更多。。。')
          this.currentPage += 1
          this.loadingMore()
        }
      }
    },
    async loadingMore () {
      this.isLoading = true
      const parmas = {
        page: this.currentPage,
        limit: 10
      }
      if (this.activeName === 'caogao') {
        parmas.status = false
      } else if (this.activeName === 'all') {
        parmas.category = ''
      } else {
        parmas.category = this.activeName
      }
      try {
        const res = await findBlog(parmas)
        if (res.result.docs.length === 0) {
          console.log('没有更多数据了')
          this.isAllDataLoaded = true
          return
        }
        this.blogList = [...this.blogList, ...res.result.docs]
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
      }
    },
    async findBlog (data = {}) {
      const params = {
        page: this.currentPage,
        limit: 10,
        ...data
      }
      const res = await findBlog(params)
      this.blogList = res.result.docs
      // console.log('res >>>', res)
    },
    handleDetail (item) {
      // console.log('跳转详情页面 》》', item)
      this.$router.push({
        path: '/knowledge/read',
        query: {
          id: item._id
        }
      })
    },
    toggleFlip (index, item) {
      if (this.flipIndex === index) {
        this.flipIndex = ''
      } else {
        this.flipIndex = index
        this.addOneRead(item._id)
        // 阅读次数+1
      }
    },
    async addOneRead (id) {
      const res = await addOneRead({ id })
      console.log(res)
    },
    async getTypeAll () {
      const res = await getCategoryAll()
      // console.log('res >>>', res)
      this.typeList = res.result
      this.typeList.unshift(
        {
          name: '全部',
          value: 'all',
          _id: 'all'
        }
      )
      this.typeList.push(
        {
          name: '草稿',
          value: 'caogao',
          _id: 'caogao'
        }
      )
    },
    handleClick () {
      console.log('val >>', this.activeName)
      if (this.activeName === 'caogao') {
        this.findBlog({ status: false })
      } else if (this.activeName === 'all') {
        this.findBlog()
      } else {
        this.findBlog({ category: this.activeName })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.know {
  padding: 20px 40px 50px 40px;
  // text-align: center;
  // .top {
  //   padding-bottom: 60px;
  // }
  .list {
    // border: 1px solid red;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .list-item {
      width: 350px;
      height: 450px;
      margin-bottom: 28px;
      margin-left: 20px;
      margin-right: 20px;
      border: 1px solid #d7dae2;
      border-radius: 4px;
      // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      // 翻转功能
      position: relative;
      transform-style: preserve-3d;
      transition: transform 1s;
      .flip-card-front,
      .flip-card-back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
      }
      .flip-card-front {
        /* 正面样式 */
        .ques-cont {
          padding: 30px 0px 20px 60px;
          height: 360px;
          // border: 1px solid red;
        }
      }
      .flip-card-back {
        /* 反面样式 */
        transform: rotateY(180deg);
        .esay-cont {
          // padding: 10px 10px 20px 10px;
          height: 410px;
          box-sizing: border-box;
          padding: 20px;
          // border: 1px solid red;
          overflow: auto;
          scrollbar-width: thin; /* 设置滚动条宽度 */
          scrollbar-color: transparent transparent; /* 设置滚动条颜色为透明 */
        }
        /* 适用于 Safari 浏览器 */
        .esay-cont::-webkit-scrollbar {
          width: 6px; /* 设置滚动条宽度 */
          height: 6px; /* 设置滚动条高度 */
        }

        .esay-cont::-webkit-scrollbar-thumb {
          background-color: transparent; /* 设置滚动条 thumb 的背景颜色为透明 */
        }

        .esay-cont::-webkit-scrollbar-track {
          background-color: transparent; /* 设置滚动条 track 的背景颜色为透明 */
        }
      }
    }
    .flipped {
      transform: rotateY(180deg);
    }
  }
  .list-item:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .btm-todetail {
    width: 100%;
    height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    // border: 1px solid red;
    padding-right: 14px;
    text-align: right;
    font-size: 12px;
    color: #1989fa;
  }
  .btm-todetail:hover {
    cursor: pointer;
  }
  .add-blogs {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    padding: 5px;
    z-index: 1;
    // border: 1px solid red;
    text-align: center;
    left: 0px;
  }
  .over-roll {
    overflow: hidden;
  }
  .null-tips {
    text-align: center;
    margin-top: 140px;
  }
}
.text-center {
  text-align: center;
}
@media (max-width: 800px) {
  .know {
    padding: 20px 0px 50px 0px;
    // background: blue;
  }
}
</style>
