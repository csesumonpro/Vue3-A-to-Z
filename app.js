const counter = {
    data() {
        return {
            title: "This is a brand new vue 3 course",
            list: ['apple', 'orange', 'mango']
        }
    }
  }
  
const app = Vue.createApp(counter);
  app.mount('#app')
