<template>
  <div class="know">
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in typeList" :key="item.value" :label="item.name" :name="item.value">
          <div class="list">
            <div class="list-item" v-for="(item, index) in 10" :key="item" :class="{ flipped: flipIndex === index }" @click="toggleFlip(index)">
              <div class="flip-card-front">
                <!-- 正面内容 -->
                <RightTopTipsVue text="VUE" color="#3cb782" />
                {{item}}正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容正面内容
              </div>
              <div class="flip-card-back">
                反面内容
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
      }
      .flip-card-back {
        /* 反面样式 */
        transform: rotateY(180deg);
      }
    }
    .flipped {
      transform: rotateY(180deg);
    }
  }
  .list-item:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
@media (max-width: 800px) {
  .know {
    padding: 20px 0px 10px 0px;
    // background: blue;
  }
}
</style>
