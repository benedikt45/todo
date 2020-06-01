<template lang="html">
<div class="cards">
  <TaskItem v-for='(task, index) in $store.state.tasks'
        v-bind:task='task'
        :key='task.id'
        @deleteTask='deleteTask(index)'
  />
</div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'
export default {
  name: 'List',
  components: {
    TaskItem
  },
  methods: {
    deleteTask(idx) {
      this.$store.commit('deleteTask', idx)
    }
  }
}
</script>

<style lang="scss">
.cards {
  &__item {
    max-width: 500px;
    margin: 20px auto;
  }
}
</style>
