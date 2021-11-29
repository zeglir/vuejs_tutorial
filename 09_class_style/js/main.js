const app = Vue.createApp({
  data: () => ({
    // オブジェクト構文用
    isLarge: false,
    isError: false,
    // 配列構文用
    largeClass: 'cLarge',
    errorClass: 'cError',
    wallClass: 'cWall',
    // インラインスタイル用
    sLarge: '36px',
    sError: 'red'
  }),
  computed: {
    // 算出プロパティでオブジェクトデータを設定
    classStyle() {
      return {
        cLarge: this.isLarge,
        cError: this.isError
      }
    },
    inlineStyle() {
      return {
        fontSize: this.sLarge,
        color: this.sError
      }
    }
  },
  methods: {
    changeFontSize() {
      this.isLarge = !this.isLarge;
    },
    changeFontColor() {
      this.isError = !this.isError;
    }
  }
});
app.mount('#app');