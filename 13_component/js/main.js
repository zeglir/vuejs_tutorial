const localHelloComponent = {
  template: '<p>こんにちは、ローカル世界！</p>'
};

const countButton = {
  template: '<p><span>Count:{{ count }}<button @click="countUp">Up</button></span></p>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp(event) {
      this.count++;
    }
  }
}

const app = Vue.createApp({
  data: () => ({

  }),
  // コンポーネント（ローカル登録）
  // コンポーネント名は、- を含むケバブケースで命名する必要がある
  // HTMLの要素名と将来的に競合しないようにするため
  components: {
    'local-hello-component': localHelloComponent,
    'count-button': countButton
  }
});

// コンポーネント（グローバル登録）
app.component('hello-component', {
  template: '<p>こんにちは、グローバル世界！</p>'
});

app.mount('#app');