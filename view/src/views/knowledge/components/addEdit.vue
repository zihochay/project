<template>
  <div class="addedit-blog">
    <div class="title">{{ $route.query.id ? '编辑文章' : '创建文章'}}</div>
    <div class="blog-form">
      <el-form ref="addform" label-position="top" :model="form" :rules="rules">
        <el-form-item label="文章分类" prop="category">
          <el-select v-model="form.category" placeholder="文章分类">
            <el-option v-for="item in typeList" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标题" prop="title">
          <quill-editor v-model="form.title" class="title-editor" :options="{theme:'snow'}">
          </quill-editor>
        </el-form-item>
        <el-form-item label="文章简要" prop="easy">
          <quill-editor v-model="form.easy" class="title-editor" :options="{theme:'snow'}">
          </quill-editor>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <quill-editor v-model="form.content" class="title-editor" :options="{theme:'snow'}">
          </quill-editor>
        </el-form-item>
      </el-form>
      <div class="blog-btm">
         <el-button type="primary" plain @click="onSubmit">发 布</el-button>
         <el-button type="primary" v-if="$route.query.id" plain @click="onSave">设 为 草 稿</el-button>
         <el-button type="primary" v-else plain @click="onSave">保 存 草 稿</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategoryAll } from '@/api/category'
import { addBlog, getBlogById, UpdateBlog } from '@/api/blogs'

export default {
  name: 'addedit-blog',
  components: {
  //   HelloWorld
  },
  data () {
    return {
      typeList: [],
      form: {
        category: '',
        title: '',
        easy: '',
        content: ''
      },
      rules: {
        category: [
          { required: true, message: '请选择文章分类', trigger: 'change' }
        ],
        title: [
          { required: true, message: '请输入文章标题', trigger: 'change' }
        ],
        easy: [
          { required: true, message: '请输入文章简要', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'change' }
        ]
      }
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getTypeAll()
    if (this.$route.query.id) {
      this.getDetail(this.$route.query.id)
    }
  },
  methods: {
    async getDetail (id) {
      const res = await getBlogById(id)
      this.detailData = res.result
      const parmas = {
        category: res.result.category,
        title: res.result.title,
        easy: res.result.easy,
        content: res.result.content,
        _id: res.result._id
      }
      this.form = parmas
      console.log('res >>', this.detailData)
    },
    onSubmit () {
      this.$refs.addform.validate(async (valid) => {
        if (valid) {
          console.log('onSubmit >>>', this.form)
          const parmas = { ...this.form, status: true }
          if (parmas._id) {
            // UpdateBlog
            const res = await UpdateBlog(parmas._id, parmas)
            if (res.code === 'success') {
              this.$validateMessage('编辑成功', 'success')
              history.back()
            }
            return
          }
          const res = await addBlog(parmas)
          if (res.code === 'success') {
            this.$validateMessage('新增成功', 'success')
            history.back()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSave () {
      // console.log('onSave >>>', this.form)
      this.$refs.addform.validate(async (valid) => {
        if (valid) {
          console.log('onSubmit >>>', this.form)
          const parmas = { ...this.form, status: false }
          if (parmas._id) {
            // UpdateBlog
            const res = await UpdateBlog(parmas._id, parmas)
            if (res.code === 'success') {
              this.$validateMessage('编辑成功', 'success')
              history.back()
            }
            return
          }
          const res = await addBlog(parmas)
          if (res.code === 'success') {
            this.$validateMessage('保存成功', 'success')
            history.back()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async getTypeAll () {
      const res = await getCategoryAll()
      // console.log('res >>>', res)
      res.result.shift()
      this.typeList = res.result
    }
  }
}
</script>

<style lang="less" scoped>
.addedit-blog {
  padding: 20px 40px 20px 40px;
  .title {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
