<template>
  <div class="statistics">
    <div class="title">文章数据仪表盘</div>
    <div class="echart1 flex">
      <div class="width32">
        <!-- <echart1Vue /> -->
      </div>
      <div class="width32 padding10">
        <div class="time">截止时间：{{ getCurrentTime() }}</div>
        <div class="today-data">
          <div class="num-data flex">
            <div class="num-box">222</div>
            <div class="num-box">333</div>
          </div>
          <div class="num-desc flex">
            <div class="desc-box">今日新增阅读</div>
            <div class="desc-box">今日新增文章</div>
          </div>
        </div>
        <div class="avg-data flex">
          <div class="avg-box">
            <el-statistic :precision="2">
              <template slot="title">
                <span class="avg-title">每日平均阅读</span>
              </template>
              <template slot="formatter">
                <span class="avg-value">23.32</span>
              </template>
            </el-statistic>
          </div>
          <div class="avg-box">
            <el-statistic>
              <template slot="title">
                <span class="avg-title">文章总数</span>
              </template>
              <template slot="formatter">
                <span class="avg-value2">1000</span>
              </template>
            </el-statistic>
          </div>
          <div class="avg-box">
            <el-statistic>
              <template slot="title">
                <span class="avg-title">每日平均新增</span>
              </template>
              <template slot="formatter">
                <span class="avg-value">23.23</span>
              </template>
            </el-statistic>
          </div>
        </div>
      </div>
      <div class="width32"></div>
    </div>
    <div class="echart2 flex">
      <div class="width48 padding10">
        <echart1Vue />
      </div>
      <div class="width48 padding10">
        <echart2Vue />
      </div>
    </div>
  </div>
</template>
<script>
import echart1Vue from '../components/echart1.vue'
import echart2Vue from '../components/echart2.vue'

export default {
  name: 'text-main',
  components: {
    echart1Vue,
    echart2Vue
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
    getCurrentTime () {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = ('0' + (currentDate.getMonth() + 1)).slice(-2) // 月份从0开始，需要加1
      const date = ('0' + currentDate.getDate()).slice(-2)
      const hours = ('0' + currentDate.getHours()).slice(-2)
      const minutes = ('0' + currentDate.getMinutes()).slice(-2)
      const seconds = ('0' + currentDate.getSeconds()).slice(-2)

      const formattedTime = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
      return formattedTime
    }
  }
}
</script>

<style lang="less" scoped>
.statistics {
  // background-color: #000;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  height: 100vh;
  color: #fff;
  background-image: url('../../../assets/echarts.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* 将背景图居中显示 */
  .title {
    font-family: MicrosoftYaHei-Bold;
    font-size: 30px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 700;
  }
  .echart1 {
    // margin-top: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 38%;
    padding-top: 2%;
    .time {
      text-align: center;
      font-size: 18px;
      // margin-bottom: 20px;
      padding-bottom: 3%;
    }
    .today-data {
      // border: 1px solid red;
      background-color: rgba(255, 255, 255, 0.15);
      height: 45%;
      width: 100%;
      .num-data {
        border: 1px solid rgba(255, 255, 255, 0.3);
        height: 65%;
        .num-box {
          width: 50%;
          text-align: center;
          height: 100%;
          font-size: 48px;
          color: rgb(235, 245, 102);
          display: flex;
          align-items: center; /* 垂直居中 */
          justify-content: center;
        }
      }
      .num-desc {
        // border: 1px solid rgba(255, 255, 255, 0.3);
        height: 35%;
        .desc-box {
          width: 50%;
          text-align: center;
          height: 100%;
          font-size: 20px;
          color: #ccc;
          display: flex;
          align-items: center; /* 垂直居中 */
          justify-content: center;
        }
      }
    }
    .avg-data {
      padding-top: 5%;
      .avg-box {
        width: 33%;
        text-align: center;
        .avg-title {
          color: #ccc;
          font-size: 18px;
        }
        .avg-value {
          color: rgb(53, 53, 250);
          font-weight: 600;
          font-size: 32px;
        }
        .avg-value2 {
          color: red;
          font-weight: 700;
          font-size: 32px;
        }
      }
    }
  }
  .echart2 {
    // margin-top: 42px;
    box-sizing: border-box;
    width: 100%;
    height: 55%;
    padding-top: 2%;
    // border: 1px solid red;
    // background-color: #ccc;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
}
.width32 {
  width: 32%;
  height: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
}
.width48 {
  width: 49%;
  height: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
}
.padding10 {
  padding: 10px;
}
</style>
