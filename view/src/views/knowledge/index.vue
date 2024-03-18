<template>
  <div class="know">
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in typeList" :key="item.value" :label="item.name" :name="item.value">
          <div class="list">
            66666
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { getCategoryAll } from '@/api/category'

export default {
  name: 'know-main',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      activeName: 'all',
      typeList: []
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
    border: 1px solid red;
    width: 100%;
  }
}
</style>
