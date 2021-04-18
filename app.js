const counter = {
    data() {
        return {
            title: "This is a brand new vue 3 course",
            list: ['apple', 'orange', 'mango'],
            textInput: '',
            print: false,
            rawHtml: "<h2 style='color:red'>this is title</h2>"
        }
    },
    methods: {
      submitForm() {
       this.print = true
      },
      modifiedInputvalue() {
        console.log(this.textInput)
      }
    },
  }
  
const app = Vue.createApp(counter);
  app.mount('#app')
