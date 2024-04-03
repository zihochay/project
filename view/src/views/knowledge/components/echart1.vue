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
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
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
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          data: this.setData(this.data, '_id'),
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              type: 'dotted'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false // 隐藏 y 轴的分隔线
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              type: 'dotted'
            }
          }
        },
        series: [
          {
            name: '新增量',
            type: 'bar',
            barWidth: '20',
            itemStyle: {
              borderRadius: [10, 10, 0, 0]
            },
            data: this.setData(this.data, 'articleCount')
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
    setData (list, key) {
      const newList = []
      for (let i = 0; i < list.length; i++) {
        newList.push(list[i][key])
      }
      return newList
    },
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
