<template>
  <div class="blog-type">
    <div class="form-box">
      <el-form ref="formRef" size="small" :inline="true" :model="formInline" class="demo-form-inline">
        <!-- 增加prop清除表单内容才能生效 -->
        <el-form-item label="分类名称" prop="name">
          <el-input clearable="" v-model="formInline.name" placeholder="分类名称"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button size="small" type="primary" @click="onQuery">查询</el-button>
        <el-button size="small" @click="onReset">重置</el-button>
        <el-button size="small" type="primary" @click="onAdd">新增</el-button>
      </div>
    </div>
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="name"
          label="分类名称">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区">
        </el-table-column>
      </el-table>
    </div>
    <div class="error_tips"> 666666 </div>
  </div>
</template>
<script>
export default {
  name: 'blog-type',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      formInline: {
        name: ''
      },
      tableData: []
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
  },
  methods: {
    onQuery () {
      console.log('formInline >>', this.formInline)
    },
    onReset () {
      console.log('ssss')
      this.$refs.formRef.resetFields()
      console.log('formInline >>', this.formInline)
    },
    onAdd () {
      console.log('adddd')
    }
  }
}
</script>

<style lang="less" scoped>
.blog-type {
  padding: 20px 40px;
  .form-box {
    display: flex;
    justify-content: space-between;
  }
  // /deep/ .el-table th{
  //   color: #7F8C9F;
  //   font-weight: normal;
  //   background: #eef3f9;
  // }
}
</style>
