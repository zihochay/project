<template>
  <div class="know">
    <div class="add-blogs">
      <el-button type="primary" plain size="mini">新 增 文 章</el-button>
    </div>
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in typeList" :key="item.value" :label="item.name" :name="item.value">
          <div class="list">
            <div class="list-item" v-for="(item, index) in 10" :key="item" :class="{ flipped: flipIndex === index }" @click="toggleFlip(index)">
              <div class="flip-card-front">
                <!-- 正面内容 -->
                <RightTopTipsVue text="VUE" color="#3cb782" />
                <div class="ques-cont over-roll">{{item}} 文章问题文</div>
                <div class="btm-todetail" @click.stop="handleDetail(item)">查看文章详情 > </div>
              </div>
              <div class="flip-card-back">
                <div class="esay-cont">{{item}} 文章简答</div>
                <div class="btm-todetail" @click.stop="handleDetail(item)">还不够详细? 点击查看文章详情 > </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { getCategoryAll } from '@/api/category'
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
      flipIndex: ''
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getTypeAll()
  },
  methods: {
    handleDetail (item) {
      console.log('跳转详情页面 》》', item)
    },
    toggleFlip (index) {
      if (this.flipIndex === index) {
        this.flipIndex = ''
      } else {
        this.flipIndex = index
      }
    },
    async getTypeAll () {
      const res = await getCategoryAll()
      // console.log('res >>>', res)
      this.typeList = res.result
    },
    handleClick (val) {
      console.log('val >>', val.name)
    }
  }
}
</script>

<style lang="less" scoped>
.know {
  padding: 20px 40px 10px 40px;
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
          padding: 10px 10px 20px 10px;
          height: 380px;
          // border: 1px solid red;
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
    box-sizing: border-box;
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
}
@media (max-width: 800px) {
  .know {
    padding: 20px 0px 15px 0px;
    // background: blue;
  }
}
</style>
