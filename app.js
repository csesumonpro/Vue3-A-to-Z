const counter = {
    data() {
        return {
            title: "This is a brand new vue 3 course",
            list: ['apple', 'orange', 'mango'],
            textInput: '',
            print: false
        }
    },
    methods: {
      submitForm() {
       this.print = true
      }
    },
  }
  
const app = Vue.createApp(counter);
  app.mount('#app')
