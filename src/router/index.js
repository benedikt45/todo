import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/create',
    name: 'NewTask',
    component: Task
  },
  {
    path: '/:id',
    name: 'EditTask',
    component: Task,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
