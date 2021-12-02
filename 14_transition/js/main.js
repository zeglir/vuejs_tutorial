const app = Vue.createApp({
  data: () => ({
    message: 'こんにちは、世界！',
    isShow: true
  }),
  methods: {
    changeMessage(event) {
      this.isShow = !this.isShow;
    }
  }
});
app.mount('#app');