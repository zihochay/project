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
