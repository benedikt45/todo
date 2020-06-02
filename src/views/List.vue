<template lang="html">
<div class="cards">
  <TaskCard v-for='(task, index) in $store.state.tasks'
        v-bind:task='task'
        :key='task.id'
        @deleteTask='deleteTask(index)'
  />
</div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue'
export default {
  name: 'List',
  components: {
    TaskCard
  },
  // data() {
  //   return {
  //     tasks: this..slice()
  //   }
  // },
  mounted() {
    console.log(this.$store.state.tasks);
  },
  methods: {
    deleteTask(idx) {
      this.$store.dispatch('deleteTask', {idx})
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
