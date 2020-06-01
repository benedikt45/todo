<template lang="html">
  <form action="#" class="form">
    <div class="form__header">
      <label class="form__label">Title</label>
      <input type="text" name="title" value="" class="form__input" :value='task.title'>
      <a href="#" class="form__button btn">Add todo</a>
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
  </form>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      default: () => ({
        title: '',
        todos: []
      })
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
