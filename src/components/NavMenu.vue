<template>
	<div>
	  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
	  <el-menu-item index="1" @click="goToSelfIntroduction">自我介绍</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title"><span>我的DEMO</span></template>
	    <el-menu-item index="2-1" @click="goToTodoList">todo应用</el-menu-item>
	    <el-menu-item index="2-2" @click="goToMessageBoard">留言板</el-menu-item>
	    <el-menu-item index="2-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="3" disabled>开发中。。。</el-menu-item>
	</el-menu>
	</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    goToSelfIntroduction () {
      	this.$router.push({name: 'SelfIntroduction'})
    },
    goToTodoList () {
      	this.$router.push({name: 'TodoList'})
    },
    goToMessageBoard () {
      this.$router.push({name: 'MessageBoard'})
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
