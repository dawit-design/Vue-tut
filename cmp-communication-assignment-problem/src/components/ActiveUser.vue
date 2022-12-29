<template >
   <li>
    <h2>{{user.name}}</h2>
    <h3>{{user.age}}</h3>
   </li>
</template>

<script>
    export default{
        data () {
            return {
                user: {
                    id: 'Dawit',
                    name: 'Dawit Endaylalu',
                    age: 30
                }
            }
        }
    }
</script>