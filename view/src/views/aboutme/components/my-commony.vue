<template>
  <div class="flex mg-bottom">
    <div class="comp-name">{{ name }}</div>
    <div class="flex post-time">
      <div>{{ post }}</div>
      <div>{{ time }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-title',
  props: {
    name: {
      type: String,
      default: '公司名称'
    },
    post: {
      type: String,
      default: '职位名称'
    },
    time: {
      type: String,
      default: '职位名称'
    }
  },
  components: {
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

  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.comp-name {
  width: 300px;
  // border: 1px solid black;
  font-weight: 600;
  font-size: 16px;
}
.post-time {
  width: 900px;
  justify-content: space-between;
}
.mg-bottom {
  margin-bottom: 6px;
}
</style>
