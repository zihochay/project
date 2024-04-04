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
          data: [],
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
            label: {
              show: true,
              distance: -18,
              position: 'top',
              color: '#fff'
            },
            data: []
          }
        ]
      },
      allList: this.setData(this.data, 'articleCount')
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.updateOption()
  },
  methods: {
    setData (list, key) {
      const newList = []
      for (let i = 0; i < list.length; i++) {
        newList.push({
          name: list[i]._id,
          value: list[i].articleCount
        })
      }
      return newList
    },
    updateOption () {
      if (this.allList.length > 7) {
        let currentIndex = 0
        setInterval(() => {
          const startIndex = currentIndex
          const endIndex = (currentIndex + 6) % this.allList.length
          let segment = []

          if (startIndex <= endIndex) {
            segment = this.allList.slice(startIndex, endIndex + 1)
          } else {
            segment = this.allList.slice(startIndex).concat(this.allList.slice(0, endIndex + 1))
          }

          this.option.xAxis.data = segment.map(item => item.name)
          this.option.series[0].data = segment.map(item => item.value)
          this.initEchart()

          currentIndex = (currentIndex + 1) % this.allList.length
        }, 1500)
      } else {
        // this.option.series[0].data = this.allList
        this.option.xAxis.data = this.allList.map(item => item.name)
        this.option.series[0].data = this.allList.map(item => item.value)
        this.initEchart()
      }
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
