const app = Vue.createApp({
  data: () => ({
    counter: 0
  }),
  methods: {
    // この場合、呼び出し側が()なしでコールすると、eventオブジェクトが設定される
    countUp(event) {
      this.counter++;
      console.log(event);
    },
    // ユーザ指定引数と、eventオブジェクトを併用したい場合は $eventとする
    countDouble($event, message) {
      this.counter *= 2;
      console.log($event);
    },
    countTriple(event) {
      this.counter *= 3;
    }
  }
});
app.mount('#app');
