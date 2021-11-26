const app = Vue.createApp({
  data: () => ({
    message: 'こんにちは、世界！',
    km: 0,
    m: 0,
    firstName: '',
    lastName: '',
    wFullName: '',
    color: '',
    colors : [
      {name: '赤'},
      {name: '青'},
      {name: '黄'}
    ]
  }),
  computed: {
    cFullName() {
      return this.lastName + ' ' + this.firstName;
    }
  },
  methods: {
    addColor() {
      if (this.color === '') { return; }
      let item = {
        name: this.color
      };
      this.colors.push(item);
      this.color = '';
    }
  },
  watch: {
    message(newValue, oldValue) {
      console.log('new: %s old: %s', newValue, oldValue);
    },
    km(value) {
      this.km = value;
      this.m = value * 1000;
    },
    m(value) {
      this.km = value / 1000;
      this.m = value;
    },
    firstName(value) {
      this.wFullName = this.lastName + ' ' + value;
    },
    lastName(value) {
      this.wFullName = value + ' ' + this.firstName;
    },
    // colorsオブジェクトのメンバの変更を検知する
    // deepオプションを true に設定
    colors: {
      handler(newValue, oldValue) {
        console.log('new: %s old: %s', newValue, oldValue);
      },
      deep: true
    }
  }
});
app.mount('#app');