const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
    };
  },
  watch: {
    // name(value) {
    //   if(value === ''){
    //     this.fullName = ''
    //   }else{
    //     this.fullName = value + ' ' + 'Molk'}
    //   }
  },
  computed: {
    fullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Molk';
    },
  },
  methods: {
    // outputFullName() {
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Molk';
    // },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name= ''
    },
  },
});

app.mount('#events');
