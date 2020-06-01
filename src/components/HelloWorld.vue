<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ new Date().toLocaleString()}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
