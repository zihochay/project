<template>
  <div class="echart-pie">
    <echartTitle title="文章类型占比"/>
    <div class="echart-pie" id="echart-pie"></div>
  </div>
</template>
<script>
import echartTitle from './echartTitle.vue'
import { getCateBlog } from '@/api/blogs'

export default {
  name: 'echart-pie',
  components: {
    echartTitle
  },
  data () {
    return {
      list: [],
      option: {
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '文章分类',
            type: 'pie',
            radius: ['70%', '100%'],
            center: ['50%', '90%'],
            label: {
              show: false,
              position: 'top'
            },
            labelLine: {
              show: false // 设置为 false，表示不显示连线
            },
            startAngle: 180,
            endAngle: 360,
            data: [],
            itemStyle: {
              normal: {
                color: function (params) {
                  return params.data.color
                }
              }
            }
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
    this.getCateBlog()
  },
  methods: {
    async getCateBlog () {
      const res = await getCateBlog()
      // this.blogList = res.result
      const list = res.result
      const tempList = []
      for (let i = 0; i < list.length; i++) {
        const obj = {
          name: list[i].name,
          value: list[i].articleCount,
          color: list[i].color
        }
        tempList.push(obj)
      }
      this.option.series[0].data = tempList
      this.initEchart()
    },
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
