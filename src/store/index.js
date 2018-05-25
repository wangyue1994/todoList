import Vue from 'vue'
import Vuex from 'vuex'
import todolist from './modules/todolist'

Vue.use(Vuex)

export default new Vuex({
  modules: {
  	todolist
  }
})