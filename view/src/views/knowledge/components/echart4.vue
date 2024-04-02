<template>
  <div class="echart-pie">
    <echartTitle title="文章类型占比"/>
    <div class="echart-pie" id="echart-pie"></div>
  </div>
</template>
<script>
import echartTitle from './echartTitle.vue'

export default {
  name: 'echart-pie',
  components: {
    echartTitle
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['70%', '100%'],
            center: ['50%', '90%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      // const chart = this.$echarts.init(document.getElementById('echarts1'))
      const chart = this.$echarts.init(
        document.getElementById('echart-pie')
      )
      chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.echart-pie {
  width: 100%;
  height: 100%;
}
</style>
