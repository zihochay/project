<template>
  <div class="echart-list">
    <echartTitle title="每日新增文章"/>
    <div class="list-blogs">
      <div class="blog-item" v-for="item in blogList" :key="item._id" @click="toRead(item)">
        <!-- <div v-text="item.title"></div> -->
        {{ extractTextFromTag(item.title, 'h2')}}
      </div>
    </div>
  </div>
</template>
<script>
import echartTitle from './echartTitle.vue'
import { getBlogToday } from '@/api/blogs'

export default {
  name: 'echart-list',
  components: {
    echartTitle
  },
  data () {
    return {
      blogList: []
    }
  },
  // 创建完成，访问当前this实例
  created () {
  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getList()
  },
  methods: {
    toRead (item) {
      this.$router.push({
        path: '/knowledge/read',
        query: {
          id: item._id
        }
      })
    },
    extractTextFromTag (html, tagName) {
      const element = document.createElement('div')
      element.innerHTML = html

      const tags = element.getElementsByTagName(tagName)
      // console.log('tag >>', tags)
      if (tags.length > 0) {
        const tag = tags[tags.length - 1]
        return tag.textContent.trim()
      }

      return ''
    },
    async getList () {
      const res = await getBlogToday()
      this.blogList = res.result
      console.log('list >>', this.blogList)
    }
  }
}
</script>

<style lang="less" scoped>
.echart-list {
  width: 100%;
  height: 100%;
}
.list-blogs {
  // padding: 10px 10px 20px 10px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  // border: 1px solid red;
  overflow: auto;
  scrollbar-width: thin; /* 设置滚动条宽度 */
  scrollbar-color: transparent transparent; /* 设置滚动条颜色为透明 */
}
/* 适用于 Safari 浏览器 */
.list-blogs::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
  height: 6px; /* 设置滚动条高度 */
}

.list-blogs::-webkit-scrollbar-thumb {
  background-color: transparent; /* 设置滚动条 thumb 的背景颜色为透明 */
}

.list-blogs::-webkit-scrollbar-track {
  background-color: transparent; /* 设置滚动条 track 的背景颜色为透明 */
}
.blog-item {
  // border: 1px solid red;
  width: 100%;
  height: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 46px;
  font-size: 20px;
  color: #488ff0;
}
.blog-item:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
