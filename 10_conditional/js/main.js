const app = Vue.createApp({
  data: () => ({
    toggle: true,
    checkedColor: ''
  }),
  methods: {
    changeToggle() {
      this.toggle = !this.toggle;
    }
  }
});
app.mount('#app');