<template>
  <div>
  	<el-input
	  placeholder="请输入要做的事情..."
	  v-model="inputValue"
	  @keyup.enter="handleSubmit"
	  clearable>
	</el-input>
	<el-button type="success"
	  @click="handleSubmit">
    添加代办事项
	</el-button>
	<ol>
    <li v-for="(item, index) in list">
       我要做：{{ item }}
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete"></el-button>
    </li>
	</ol>
  </div>
</template>

<script>
export default {
  name: 'TodoLists',
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      if (this.inputValue) {
        this.list.push(this.inputValue)
        console.log(this.list)
        this.inputValue = ''
      } else {
        this.$message.error('不能什么事也没有做')
      }
    },
    handleDelete () {
      this.list.splice(this.index, 1)
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
  margin: 10px;
}
a {
  color: #42b983;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>
