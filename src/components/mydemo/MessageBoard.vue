<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">欢迎来到我的博客，点击了解我吧</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>准备好了吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">有点害怕</el-button>
        <el-button type="primary" @click="go">进去看看</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MessageBoard',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    go (done) {
      this.dialogVisible = false
      console.log(done)
      this.$router.push('/TodoList')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
