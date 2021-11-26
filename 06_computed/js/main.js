const app = Vue.createApp({
  data: () => ({
    message: 'こんにちは、世界！',
    basePrice: 100
  }),
  computed: {
    doReverse() {
      return this.message.split('').reverse().join('');
    },
    taxIncludedPrice: {
      get() {
        return this.basePrice * 1.1;
      },
      set(price) {
        this.basePrice = price / 1.1;
      }
    },
    computedRandom() {
      return Math.floor(Math.random()*100);
    }
  },
  methods: {
    doReverseMethod() {
      return this.message.split('').reverse().join('');
    },
    methodsRandom() {
      return Math.floor(Math.random()*100);
    }
  }
});
app.mount('#app');
