const app = Vue.createApp({
  data: () => ({
    message: '',
    age: 0,
    isChecked: false,
    colors: [],
    fruit: '',
    month: '',
    months: []
  })
});
app.mount('#app');