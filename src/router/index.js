import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Item from '../views/Item.vue'
import store from '@/store'

Vue.use(VueRouter)

function returnTaskById(route) {

}

const routes = [{
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/create',
    name: 'NewTask',
    component: Item
  },
  {
    path: '/:id',
    name: 'EditTask',
    component: Item,
    props: {
      task: store.getters.elemById(route.params.id)
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
