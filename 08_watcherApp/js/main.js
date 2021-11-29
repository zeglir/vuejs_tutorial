const app = Vue.createApp({
  data: () => ({
    // 検索結果の格納
    items: null,
    // 検索キーワード
    keyword: '',
    // 通知メッセージ表示用
    message: ''
  }),
  watch: {
    keyword(newvalue, oldvalue) {
      this.message = 'Waiting for stop typing...';
      this.debouncedGetItem();
    }
  },
  // ライフサイクルメソッドの一つ。
  mounted() {
    // lodash のメソッド
    // コールバック関数の実行を遅延させて、その間に呼び出された同じ関数の実行を間引く
    this.debouncedGetItem = _.debounce(this.getItem, 2000);
  },
  methods: {
    getItem() {
      if (this.keyword === '') {
        items = null;
        return;
      }
      this.message = 'Loading...';
      let params = {
        page: 1,
        per_page: 35,
        query: this.keyword
      };
      const vm = this;
      // axios で GETを実行する
      axios.get('https://qiita.com/api/v2/items', {params})
        .then((response) => {
          console.log(response);
          vm.items = response.data;
        })
        .catch((error) => {
          // console.log(error);
          if (error.response) {
            console.log('response error');
            console.log(error.response);
          } else if (error.request) {
            console.log('request error');
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        })
        .finally(() => {
          vm.message = '';
        });

    }
  }
});
app.mount('#app');