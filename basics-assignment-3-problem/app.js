const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    resultOfAll() {
      if (this.result < 37) {
        return this.result + " Not there Yet!!";
      } else if(this.result > 37){
        return this.result + " Too Much!!";
      }else{
        return this.result + " perfect"
      }
    },
  },
  methods: {
    add(num) {
      this.result = this.result + num;
    },
  },
});

app.mount("#assignment");
