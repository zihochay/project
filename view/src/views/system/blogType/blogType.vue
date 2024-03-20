<template>
  <div class="blog-type">
    <div class="form-box">
      <el-form ref="formRef" size="small" :inline="true" :model="formInline" class="demo-form-inline">
        <!-- 增加prop清除表单内容才能生效 -->
        <el-form-item label="分类名称" prop="name">
          <el-input clearable v-model="formInline.name" placeholder="分类名称"></el-input>
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
          prop="rank"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="name"
          label="分类名称">
        </el-table-column>
        <el-table-column
          prop="value"
          label="分类值">
        </el-table-column>
        <el-table-column
          prop="color"
          label="颜色">
          <template slot-scope="scope">
            <span :style="{ backgroundColor: scope.row.color, color: '#fff' }">{{scope.row.color}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="createdAt"
          label="创建时间">
          <template slot-scope="scope">
            <span>{{parseTime(scope.row.createdAt)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="updatedAt"
          label="修改时间">
          <template slot-scope="scope">
            <span>{{parseTime(scope.row.updatedAt)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-popconfirm
              size="mini"
              title="确定要删除该分类吗？"
              @confirm="handleDel(scope.$index, scope.row)"
            >
              <el-button size="mini" type="text" slot="reference">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div class="modal" v-if="dialogFormVisible">
      <addOrEditVue :type="openType" :id="currentId" :dialogFormVisible="dialogFormVisible" @close="onClose" @sure="onSure"/>
    </div>
  </div>
</template>
<script>
import addOrEditVue from './addOrEdit.vue'
import { getCategory, addCategory, UpdateCategory, delCategory } from '@/api/category'
import { parseTime } from '@/utils/index'

export default {
  name: 'blog-type',
  components: {
    addOrEditVue
  },
  data () {
    return {
      formInline: {
        name: ''
      },
      tableData: [],
      dialogFormVisible: false,
      openType: 'add',
      currentId: '',
      page: 1,
      total: 0,
      limit: 10
    }
  },
  // 创建完成，访问当前this实例
  created () {

  },
  // 挂载完成，访问DOM元素
  mounted () {
    this.getList()
  },
  methods: {
    handleSizeChange (val) {
      this.limit = val
      this.getList()
    },
    handleCurrentChange (val) {
      // console.log(val)
      this.page = val
      this.getList()
    },
    handleEdit (index, row) {
      this.openType = 'edit'
      this.dialogFormVisible = true
      this.currentId = row._id
    },
    async handleDel (index, row) {
      const res = await delCategory(row._id)
      if (res.code === 'success') {
        this.$validateMessage('删除成功', 'success')
        this.getList()
      }
    },
    async getList (data = this.formInline) {
      const { page, limit } = this
      const resList = await getCategory({ page, limit, ...data })
      const { result } = resList
      this.tableData = result.docs
      this.total = result.totalDocs
    },
    async onSure (value) {
      if (value._id) {
        const res = await UpdateCategory(value._id, value)
        if (res.code === 'success') {
          this.$validateMessage('修改成功', 'success')
          this.onClose()
          this.getList()
        }
      } else {
        const res = await addCategory(value)
        if (res.code === 'success') {
          this.$validateMessage('新增成功', 'success')
          this.onClose()
          this.getList()
        }
      }
    },
    onClose () {
      this.dialogFormVisible = false
    },
    onQuery () {
      // console.log('formInline >>', this.formInline)
      this.getList(this.formInline)
    },
    onReset () {
      this.page = 1
      this.limit = 10
      this.$refs.formRef.resetFields()
      this.getList(this.formInline)
    },
    onAdd () {
      // console.log('adddd')
      this.openType = 'add'
      this.currentId = ''
      this.dialogFormVisible = true
    },
    parseTime (str) {
      return parseTime(str)
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
  .page-box {
    margin-top: 20px;
    float: right;
  }
}
</style>
