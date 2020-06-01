<template lang="html">
<div class="cards__item card">
  <div class="card__header">
    <div class="card__title">{{task.title}}</div>
    <router-link  :to='"/" + task.id'
                  class="card__button btn"
    >
      Edit
    </router-link>
    <a href="#" class="card__button btn btn_red" @click='$emit("deleteTask")'>Delete</a>
  </div>
  <div class="card__body">
    <ul class="card__todo todo-list">
      <li v-for='(todo, index) in task.todos'
          :class='{"todo-list__item_done": todo.isDone}'
          class="todo-list__item todo-list__item_not-wrap"
      >
        {{todo.text}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  }
}
</script>

<style lang="scss">
</style>
