<template>
  <div class="echarts2">
    <echartTitle title="每日文章阅读量"/>
    <div class="echarts2" id="echarts2">
    </div>
  </div>
</template>
<script>
import echartTitle from './echartTitle.vue'

export default {
  name: 'echarts-2',
  components: {
    echartTitle
  },
  data () {
    return {
      option: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#21B8FA' // 随便取颜色
            },
            {
              offset: 0.8,
              color: '#21B8FA' + '00'
            }
          ]
        },
        tooltip: {},
        xAxis: {
          data: ['2024-04-02', '2024-04-02', '2024-04-02', '2024-04-02', '2024-04-02', '2024-04-02', '2024-04-02']
        },
        yAxis: {},
        series: [
          {
            name: '阅读量',
            type: 'bar',
            barWidth: '20',
            itemStyle: {
              borderRadius: [10, 10, 0, 0]
            },
            data: [5, 20, 36, 10, 10, 20, 15]
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
      // const chart = this.$echarts.init(document.getElementById('echarts2'))
      const chart = this.$echarts.init(
        document.getElementById('echarts2')
      )
      chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.echarts2 {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
}
</style>
