<template >
    <section>
        <h1>Active Users</h1>
    </section>
    <ul>
        <active-user
         v-for="user in users"
         :key="user.id"
         :name="user.name"
         :age="user.age"
        ></active-user>
    </ul>
</template>


<script>
    import ActiveUser from './components/ActiveUser.vue';
    export default {
        components: {ActiveUser},
        data () {
            return {
                users:[
                 {
                    id: 'Dawit',
                    name: 'Dawit Endaylalu',
                    age: 30
                },
                {
                    id: 'Bryan',
                    name: 'Bryan Molk',
                    age: 30
                }
            ]
            }
        }
    }
</script>