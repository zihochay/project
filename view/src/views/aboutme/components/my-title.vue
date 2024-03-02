<template>
  <div class="title">
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'my-title',
  props: {
    title: {
      type: String,
      default: '标题'
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
.title {
  margin-top: 36px;
  margin-left: 40px;
  padding-left: 30px;
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 500;
  // border: 1px solid red;
  border-left: 3px solid #1e824a;
}
</style>
