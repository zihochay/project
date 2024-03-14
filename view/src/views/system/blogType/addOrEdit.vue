<template>
  <div class="add_edit">
    <el-dialog :title="type === 'add' ? '新增文章分类' : '编辑文章分类'" :visible="dialogFormVisible" @close="onCancel" width="620">
      <el-form :model="form" ref="editForm" :rules="rules" label-width="auto">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="form.name" placeholder="分类名称，2-5个字符"></el-input>
        </el-form-item>
        <el-form-item label="分类标识" prop="value">
          <el-input clearable v-model="form.value" placeholder="分类标识"></el-input>
        </el-form-item>
        <el-form-item label="分类排序" prop="rank">
          <!-- v-model加上.number 校验数字才能成功 -->
          <el-input clearable v-model.number="form.rank" autocomplete="off" placeholder="分类排序"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getCategoryById } from '@/api/category'

export default {
  name: 'text-main',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'add'
    },
    id: {
      type: String,
      default: ''
    }
  },
  components: {
  //   HelloWorld
  },
  data () {
    return {
      // 需要定义初始值 不然resetFileds()后无法再次输入内容
      form: {
        name: '',
        value: '',
        rank: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入分类标识', trigger: 'blur' }
        ],
        rank: [
          { required: true, message: '请输入分类排序', trigger: 'blur' },
          { type: 'number', message: '排序必须为数字值' }
        ]
      }
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    console.log('id >>', this.id)
    if (this.id) {
      this.getFormData()
    }
  },
  methods: {
    async getFormData () {
      const resData = await getCategoryById(this.id)
      console.log('resData >>', resData)
      this.form = resData.result
    },
    onCancel () {
      // console.log('45456')
      this.$refs.editForm.resetFields()
      this.$emit('close')
    },
    onSure () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$emit('sure', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
