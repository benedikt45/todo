import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [{
      title: 'New task',
      id: 123333,
      todos: [{
          text: '123123',
          isDone: false
        },
        {
          text: '123333333123',
          isDone: true
        }
      ]
    },
    {
      title: 'New task',
      id: 12333322,
      todos: [{
        text: '123123',
        isDone: false
      }]
    }]
  },
  mutations: {
    changeStatus(state) {

    },
    deleteTask(state, idx) {
      state.tasks.splice(idx, 1)
    }
  },
  actions: {},
  modules: {},
  getters: {
    taskById: state => idx => {
      const el = state.tasks.find((el) => {
        if (el.id == idx) {
          return el;
        }
      })
      return el;
    }
  }
})
