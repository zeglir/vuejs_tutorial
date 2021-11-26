const app = Vue.createApp({
  data: () => ({
    message: 'こんにちは、<span style="color:red";>世界！</span>'
  }),
  methods: {
    doReverse() {
      // メッセージを反転
      this.message = this.message.split('').reverse().join('');
    }
  }
});
app.mount('#app');
