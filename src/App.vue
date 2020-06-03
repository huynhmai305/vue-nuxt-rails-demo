<template>
  <div id="app">
    <!-- <todo-list v-bind:todos="todos"></todo-list> -->
    <hello></hello>
  </div>
</template>

<script>
// import TodoList from './components/Todolist'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    // TodoList,
    Hello
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
