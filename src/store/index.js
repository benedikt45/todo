import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [{
        title: 'New task 1',
        id: 1,
        todos: [{
            text: '11',
            isDone: false
          },
          {
            text: '12',
            isDone: true
          }
        ]
      },
      // {
      //   title: 'New task 2',
      //   id: 2,
      //   todos: [{
      //     text: '21',
      //     isDone: false
      //   }]
      // }
    ]
  },
  mutations: {
    deleteTask(state, payload) {
      state.tasks.splice(payload.idx, 1)
    },
    updateTask(state, payload) {
      Vue.set(state.tasks, payload.idx, payload.task)
    },
    addTask(state, payload) {
      state.tasks.push(payload.task)
    }
  },
  actions: {
    deleteTask(context, payload) {
      context.commit('deleteTask', payload)
    },
    updateTask(context, payload) {
      context.commit('updateTask', {task: payload.task, idx: context.getters.indexById(payload.id)})
    },
    addTask(context, payload) {
      context.commit('addTask', payload)
    }
  },
  modules: {},
  getters: {
    taskById(state) {
      return function(id) {
        return Object.assign({},
          state.tasks.find((el) => {
            if (el.id == id) {
              return true;
            }
          })
        )
      }
    },
    indexById(state) {
      return function(id) {
        return state.tasks.findIndex((el, index) => {
          if (el.id == id) {
            return true;
          }
        })
      }
    }
  }
})
