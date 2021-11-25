const app = Vue.createApp({
  data: () => ({
    newItem: '',
    // タスク格納用の配列
    todos: []
  }),
  methods: {
    addItem: function(event) {
      // 未入力時は何もしない
      if (this.newItem === '') {
        return;
      }
      // newItem の内容をオブジェクト化してタスク管理用の配列に追加
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo);
      // 入力欄をクリアする
      this.newItem = '';
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1);
    }
  }
});
app.mount('#app');