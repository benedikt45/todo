<template lang="html">
    <form action="#" class="form">
      <div class="form__header">
        <label class="form__label">Title</label>
        <input type="text" name="title" value="" class="form__input" v-model='task.title'>
        <a href="#" class="form__button btn" @click='newTodoEdit = true'>Add todo</a>
      </div>
      <ul class="form__todo todo-list">
        <li v-for='(todo, idx) in task.todos'
            :class='{"todo-list__item_done": todo.isDone}'
            @click='changeStatus(idx)'
            class="todo-list__item todo-list__item_pointer"
        >
        {{todo.text}}<i class="fa fa-trash-o todo-list__button" aria-hidden="true" @click.self.stop='deleteTodo(idx)'></i>
      </li>
      </ul>
      <div class="form__footer footer">
        <a href="#" class="footer__button btn btn_green" @click.prevent='onSaveTask'>Сохранить</a>
        <a href="#" class="footer__button btn">Отменить изменения</a>
        <a href="#" class="footer__button btn">Выйти без сохранения</a>
        <a href="#" class="footer__button btn">Вернуть внесенные изменения</a>
        <a href="#" class="footer__button btn btn_red" :class='{"btn_not-active": newTask}'>Удалить</a>
      </div>
      <Modal v-show='newTodoEdit' @onSave='save' @onCancle='newTodoEdit = false'/>
    </form>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Task',
  components: {
    Modal
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      task: {
        id: new Date(),
        title: '',
        todos: []
      },
      newTask: false,
      newTodoEdit: false
    }
  },
  mounted() {
    if (this.id != '') {
      this.task = this.$store.getters.taskById(this.id);
    } else {
      this.newTask = true
    }
    console.log(this.task);
  },
  methods: {
    save(text) {
      this.task.todos.push({
        text,
        isDone: false
      });
      this.newTodoEdit = false;
    },
    changeStatus(idx) {
      this.task.todos[idx].isDone = !this.task.todos[idx].isDone
    },
    deleteTodo(idx) {
      this.task.todos.splice(idx, 1);
    },
    onSaveTask() {
      if (!this.newTask) {
        this.$store.dispatch('updateTask', {
          id: this.id,
          task: this.task
        })
      } else {
        this.$store.dispatch('addTask', {task: this.task})
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '../style.scss';
.form {
    max-width: 500px;
    margin: 0 auto;
    border: 2px solid black;
    padding: 30px;

    &__header {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
    }

    &__label {
        font-size: 1.1rem;
        color: $color_main;
        font-weight: bold;
        margin-right: 20px;
    }

    &__input {
        outline: none;
        border: none;
        border-bottom: 1px solid $color_main;
        flex-basis: 300px;
        color: $color_active;
        margin-right: auto;
    }

    &__footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}
</style>
