<template>
  <div class="task-item" :class="{ 'completed': task.completed }">
    <div class="task-content">
      <input 
        type="checkbox" 
        :checked="task.completed" 
        @change="toggleComplete"
      />
      <div>
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <small>Created: {{ formatDate(task.createdAt) }}</small>
      </div>
    </div>
    <button @click="deleteTask" class="delete-btn">Delete</button>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-complete', 'delete-task'])

function toggleComplete() {
  emit('toggle-complete', props.task.id)
}

function deleteTask() {
  emit('delete-task', props.task.id)
}

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString()
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.task-content {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.completed h3 {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>