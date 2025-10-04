<template>
  <div class="task-list">
    <h2>My Tasks</h2>
    <div v-if="tasks.length === 0" class="empty-state">
      No tasks yet. Add a new task to get started!
    </div>
    <TaskItem 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task"
      @toggle-complete="$emit('toggle-complete', $event)"
      @delete-task="$emit('delete-task', $event)"
    />
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle-complete', 'delete-task'])
</script>

<style scoped>
.task-list {
  margin-top: 20px;
}

.empty-state {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}
</style>