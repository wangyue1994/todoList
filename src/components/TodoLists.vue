<template>
  <div>
  	  <lun-bo-tu></lun-bo-tu>
	  <el-row type="flex" class="row-bg" justify="space-around">
	    <el-col :span="5"><div class="grid-content bg-purple" @click="space">空间</div></el-col>
	    <el-col :span="5"><div class="grid-content bg-purple-light" @click="comments">评论</div></el-col>
	    <el-col :span="5"><div class="grid-content bg-purple" @click="picture">图片</div></el-col>
	    <el-col :span="5"><div class="grid-content bg-purple-light" @click="arguments">意见</div></el-col>
	  </el-row>
  </div>
</template>

<script>
import LunBoTu from './LunBoTu.vue'
export default {
  components: {
  	LunBoTu
  },
  data () {
    return {

    }
  },
  methods: {
    space () {
      this.$router.push('./Space')
    },
    comments () {
	  this.$router.push('./Comments')
    },
    picture () {

    },
    arguments () {

    }
  }
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    text-align: center;
  }
</style>
