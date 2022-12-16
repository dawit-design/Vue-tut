const app = Vue.createApp({
    data(){
        return{
            myName: 'Dawit',
            myAge: 30,
            favNum: 0,
            imgLink: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80',
        }
    },
    methods: {
        myAgeIn5 (){
            return this.myAge + 5
        },
        randNum() {
            return randNum = Math.round(Math.random())
        },
        populateInput(){
            return this.myName
        }
    }
});


app.mount('#assignment')