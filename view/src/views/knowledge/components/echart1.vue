<template>
  <div class="echarts1">
    <echartTitle title="每日文章新增量"/>
    <div class="echarts1" id="echarts1">
    </div>
  </div>
</template>
<script>
import echartTitle from './echartTitle.vue'

export default {
  name: 'echarts-1',
  components: {
    echartTitle
  },
  data () {
    return {
      option: {
        // title: {
        //   text: '每日阅读量',
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
        document.getElementById('echarts1')
      )
      chart.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.echarts1 {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
}
</style>
