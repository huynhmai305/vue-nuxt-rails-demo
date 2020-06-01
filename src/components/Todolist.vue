<template>
    <div>
        <p>Completed tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    </div>
</template>

<script type = "text/javascript">
    export default {
        props: ['todos']
    }
</script>

<style scoped>

</style>