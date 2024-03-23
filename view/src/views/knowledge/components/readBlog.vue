<template>
  <div class="blog-detail">
    <RightTopTipsVue :text="detailData.categoryObj.name" :color="detailData.categoryObj.color"/>
    <div class="blog-title" v-html="detailData.title"></div>
    <div class="blog-time">
      <div class="time-item">发布时间：{{ parseTime(detailData.createdAt) }}</div>
      <!-- <div class="time-item">更新时间：{{ parseTime(detailData.updatedAt) }}</div> -->
      <div class="time-item"><i class="el-icon-view"></i> {{ detailData.readCount }}</div>
      <div class="time-edit" @click="onEdit"><i class="el-icon-edit"></i>编辑</div>
    </div>
    <div class="easy-style">
      <div class="blog-easy">文章摘要</div>
      <div v-html="detailData.easy"></div>
    </div>
    <br /><br />
    <div class="blog-easy">文章正文</div>
    <div v-html="detailData.content"></div>
  </div>
</template>
<script>
import { getBlogById, addOneRead } from '@/api/blogs'
import { parseTime } from '@/utils/index'
import RightTopTipsVue from '@/components/RightTopTips.vue'

export default {
  name: 'blog-detail',
  components: {
    RightTopTipsVue
  },
  data () {
    return {
      detailData: {}
    }
  },
  // 创建完成，访问当前this实例
  created () {
  },
  // 挂载完成，访问DOM元素
  mounted () {
    const id = this.$route.query.id
    this.getDetail(id)
    // this.addOneRead(id)
  },
  methods: {
    onEdit () {
      this.$router.push({
        path: '/knowledge/add',
        query: {
          id: this.$route.query.id
        }
      })
    },
    async addOneRead (id) {
      const res = await addOneRead({ id })
      console.log(res)
    },
    async getDetail (id) {
      const res = await getBlogById(id)
      this.detailData = res.result
      console.log('res >>', this.detailData)
    },
    parseTime (time) {
      return parseTime(time)
    }
  }
}
</script>

<style lang="less" scoped>
.blog-detail {
  margin: 0 40px 30px 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  // border: 1px solid red;
  .blog-title {
    padding-top: 20px;
    text-align: center;
  }
  .blog-time {
    display: flex;
    // justify-content: space-around;
    color: #646262;
    margin-bottom: 30px;
    .time-item {
      padding-right: 60px;
    }
    .time-edit {
      color: #1989fa;
    }
    .time-edit:hover {
      cursor: pointer;
    }
  }
  // .easy-style {
    // background-color: rgb(177, 177, 240);
    // border: 1px solid #ccc;
  // }
  .blog-easy {
    text-align: center;
    line-height: 40px;
  }
}
</style>
