<template lang="html">
    <form action="#" class="form">
      <div class="form__header">
        <label class="form__label">Title</label>
        <input type="text" name="title" value="" class="form__input" v-model='task.title'>
        <a href="#" class="form__button btn" @click='todoChange'>Add todo</a>
      </div>
      <ul class="form__todo todo-list">
        <li v-for='todo in task.todos'
            :class='{"todo-list__item_done": todo.isDone}'
            class="todo-list__item"
       >
        {{todo.text}}<i class="fa fa-trash-o todo-list__button" aria-hidden="true"></i>
      </li>
      </ul>
      <div class="form__footer footer">
        <a href="#" class="footer__button btn btn_green">Сохранить</a>
        <a href="#" class="footer__button btn">Отменить изменения</a>
        <a href="#" class="footer__button btn">Выйти без сохранения</a>
        <a href="#" class="footer__button btn">Вернуть внесенные изменения</a>
        <a href="#" class="footer__button btn btn_red">Удалить</a>
      </div>
      <div class="alert-div" v-show='todoAdd'>
        <form class="alert-div__fields" action="index.html">
          <label>Input todo text</label>
          <input type="text" v-model='newTodo' class="alert-div__input">
          <button type="submit" @click.prevent='addNewTodo'>add</button>
        </form>
      </div>
    </form>
</template>

<script>
export default {
  name: 'Task',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dataTask: this.task,
      newTodo: '',
      todoAdd: false
    }
  },
  methods: {
    todoChange() {
      this.todoAdd = !this.todoAdd;
    },
    addNewTodo() {
      this.todoChange()
      this.dataTask.todo.push(newTodo)
      this.newTodo = ''
    }
  },
  computed: {
    task() {
      if (this.id != '' && !this.dataTask) {
        return this.$store.getters.taskById(this.id)
      }
      else {
        return {
          title: '',
          todos: []
        }
      }
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

.alert-div {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 9000;
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.9;
    justify-content: center;

    &__fields {
        align-self: center;
    }

    &__input {
        margin-left: 10px;
        &:focus {
            border-radius: 4px;
            outline-style: auto;
            outline-width: 5px;
            outline-offset: -2px;
        }
    }
}
</style>
