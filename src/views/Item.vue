<template lang="html">
  <div>
    <Task :task='task'/>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
export default {
  name: 'TaskView',
  props: ['task'],
  components: {
    Task
  }
}
</script>

<style lang="css" scoped>
</style>
