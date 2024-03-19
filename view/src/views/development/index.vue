<template>
  <div class="develop">
    <div class="dev-action">
      <!-- <el-switch
        :width="50"
        style="margin-bottom: 40px"
        v-model="reverse"
        active-text="倒序"
        inactive-text="正序">
      </el-switch> -->
      <el-alert
        :type="type"
        show-icon
        :closable="false">
        <template slot="title">
          <!-- {{`距离 2024-2-27 第一天开发，已经过去 ${dateToDays('2024-02-27')} 天`}} -->
          <span>距离 2024-2-27 第一天开发，已经过去</span>
          <span class="num-style"> {{dateToDays('2024-02-27')}}</span> 天，
          <span>实际开发天数</span>
          <span class="num-style"> {{activities.length}}</span> 天，
          <span>开发率(实际开发天数/总天数)：</span>
          <span class="num-style"> {{percent}}%</span>
        </template>
      </el-alert>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        placement="top"
        size="large"
        v-for="(activity, index) in activities"
        :key="index"
        :color="getColor()"
        :timestamp="activity.date">
          <div class="content-box">
            <!-- <el-input
              type="textarea"
              autosize
              readonly
              v-model="activity.content"
            >
            </el-input> -->
            <div class="content-btn">
              <el-button v-if="index == 0" @click="onEditorChage(index)" type="primary" size="mini" plain>保  存</el-button>
            </div>
            <quill-editor ref="editor" v-if="index == 0" v-model="activity.content" :options="{theme:'snow'}">
            </quill-editor>
            <quill-editor v-else v-model="activity.content" :disabled="true" :options="{theme:'bubble'}">
            </quill-editor>
          </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import { addDevelop, findAllDevelop, editDevelop } from '@/api/develop.js'
import { dateToDays } from '@/utils/index'

export default {
  name: 'develop-detail',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      content: '',
      editorOption: {
        // placeholder: '请在这里输入'
      },
      activities: [],
      reverse: false,
      type: 'success',
      percent: ''
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getAllList()
    // this.$refs.editor.focus()
    // this.$refs.editor.quill.enable(false)
  },
  methods: {
    onEditorChage (index) {
      console.log(index)
      console.log('active >>', this.activities[index])
      if (this.activities[index]._id) {
        // 编辑
        const params = {
          ...this.activities[index],
          id: this.activities[index]._id
        }
        this.editDevelop(params)
      } else {
        // 新增
        this.addDevelop(this.activities[index].content, this.activities[index].date)
      }
      // this.getAllList()
    },
    async editDevelop (params) {
      // const date = timestamp || new Date()
      const res = await editDevelop(params)
      // console.log('res >>', res)
      if (res.code === 'success') {
        this.$validateMessage('编辑成功', 'success')
        this.getAllList()
      }
    },
    async addDevelop (content, timestamp) {
      const date = timestamp || new Date()
      const res = await addDevelop({ content, date })
      // console.log('res >>', res)
      if (res.code === 'success') {
        this.$validateMessage('新增成功', 'success')
        this.getAllList()
      }
    },
    async getAllList () {
      const resList = await findAllDevelop()
      this.activities = resList.result
      // 计算开发效率
      const total = dateToDays('2024-02-27')
      const current = resList.result.length
      this.percent = ((current / total) * 100).toFixed(2)
      if (this.percent >= 60) {
        this.type = 'success'
      } else if (this.percent >= 40) {
        this.type = 'warning'
      } else {
        this.type = 'error'
      }

      // 计算当前时间
      const lastData = this.activities[0]
      // console.log('lastData >>>', lastData)
      const date = new Date()
      const y = date.getFullYear()
      const m = String(date.getMonth() + 1).padStart(2, '0')
      const d = String(date.getDate()).padStart(2, '0')
      const today = `${y}-${m}-${d}`
      // console.log('today >>', today)
      if (lastData.date !== today) {
        const arrayItem = {
          date: today,
          content: ''
        }
        this.activities.unshift(arrayItem)
      }
    },
    // 计算天数函数
    dateToDays (date) {
      return dateToDays(date)
    },
    // 随机生成颜色函数
    getColor () {
      return '#' + Math.floor(Math.random() * 256).toString(10)
    }

  }
}
</script>

<style lang="less" scoped>
.develop {
  padding: 20px 40px;
  .dev-action {
    margin-bottom: 20px;
  }
  /deep/ .el-timeline-item__timestamp {
    color: #1e824a;
    font-size: 16px;
  }
  .content-box {
    box-shadow: rgba(0,0,0,0.2) 0 2px 8px;
  }
  .content-btn {
    padding: 10px;
    // position: relative;
    // right: 0;
    float: right;
  }
  .num-style {
    color: rgb(247, 126, 146);
    font-weight: 600;
  }
}
</style>
