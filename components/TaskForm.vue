<template>
  <div class="task-form">
    <h3>Add New Task</h3>
    <form @submit.prevent="addTask">
      <input 
        v-model="taskTitle" 
        type="text" 
        placeholder="Enter task title"
        required
      />
      <textarea 
        v-model="taskDescription" 
        placeholder="Enter task description"
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const taskTitle = ref('')
const taskDescription = ref('')
const emit = defineEmits(['add-task'])

function addTask() {
  if (taskTitle.value.trim()) {
    emit('add-task', {
      id: Date.now(),
      title: taskTitle.value,
      description: taskDescription.value,
      completed: false,
      createdAt: new Date()
    })
    taskTitle.value = ''
    taskDescription.value = ''
  }
}
</script>

<style scoped>
.task-form {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>