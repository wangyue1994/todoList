import Vue from 'vue'
import Router from 'vue-router'
import SelfIntroduction from '@/components/SelfIntroduction'
import TodoList from '@/components/mydemo/TodoLists'
import MessageBoard from '@/components/mydemo/MessageBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SelfIntroduction',
      component: SelfIntroduction
    }, {
      path: '/MyDemo',
      component: TodoList,
      children: [
        {
          path: 'TodoList',
          name: 'TodoList',
          component: TodoList
        },
        {
          path: 'MessageBoard',
          name: 'MessageBoard',
          component: MessageBoard
        }
      ]
    }
  ]
})
