const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the vue course!',
            courseGoalB: 'Master the course!',
            vueLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn',
        };
    },
    methods: {
        outputGoal(){
            const randNum = Math.random();
            if(randNum < 0.5) {
                return this.courseGoalA
            }else{
                return this.courseGoalB
            }
        }
    }
});



app.mount('#user-goal')