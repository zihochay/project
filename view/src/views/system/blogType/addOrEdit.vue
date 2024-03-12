<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="add_edit">
    <el-dialog title="新增/编织文章分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="auto">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="auto">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'text-main',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
  //   HelloWorld
  },
  data () {
    return {
      form: {}
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
