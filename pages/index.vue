<template>
  <div class="container">
    <h1>Task Manager</h1>
    <TaskForm @add-task="addTask" />
    <TaskList 
      :tasks="tasks" 
      @toggle-complete="toggleTaskComplete"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskForm from '~/components/TaskForm.vue'
import TaskList from '~/components/TaskList.vue'

// State for tasks
const tasks = ref([])

// Add a new task
function addTask(task) {
  tasks.value.push(task)
  // In a real app, you might want to save to localStorage or an API
  saveToLocalStorage()
}

// Toggle task completion status
function toggleTaskComplete(taskId) {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) {
    task.completed = !task.completed
    saveToLocalStorage()
  }
}

// Delete a task
function deleteTask(taskId) {
  tasks.value = tasks.value.filter(t => t.id !== taskId)
  saveToLocalStorage()
}

// Save tasks to localStorage
function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

// Load tasks from localStorage on component mount
if (process.client) {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>