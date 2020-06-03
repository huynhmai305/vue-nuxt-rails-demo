<template>
    <div id="computed_props">
        First name: <input type="text" v-model="first_name"/><br/>
        Last name: <input type="text" v-model="last_name"/><br/>
        <h3>My name is {{first_name}} {{last_name}}</h3>
        <span v-if="seen">Now you can see me</span>
        <!-- <h3> Method computed: {{getfullname}}</h3> -->
    </div>
</template>

<script type="text/javascript">
    export default {
        el: '#computed_props',
        data() {
            return {
                first_name: "ffds",
                last_name: "dfsf",
                birthyear: "dc",
                seen: true
            }
        },
        computed: {
            getfullname: () => {
                return this.first_name + " " + this.last_name
            }
        }
    }
</script>

<style scoped>

</style>