// routeコンポーネントの定義
const Top = {
  template: '<div>Top</div>' 
};
const User = {
  // ネストする側のコンポーネントの定義
  // template内に router-viewコンポーネントを定義する
  template: `
    <div class='user'>
      User {{$route.params.userId}}
      <router-view></router-view>
    </div>
  `
};
const Profile = {
  template: `
    <div class='user-profile'>
      Profile {{$route.params.userId}}
    </div>
  `
};
const Setting = {
  template: `
    <div class='user-setting'>
      Setting {{$route.params.userId}}
    </div>
  `
};

// routeの定義
// 各routeごとに紐づくコンポーネントを指定する
const routes = [
  {
    path: '/top',
    component: Top
  },
  {
    //:以降は、動的なURLパラメータとして扱われる。this.$route.params から参照できる。
    //routeに name で名前をつけることができる。router-linkから参照することができる。
    path: '/users/:userId',
    name: 'r-users',
    component: User,
    // ネストされたrouteの定義
    children: [
      {
        path: 'profile',
        name: 'r-users-profile',
        component: Profile
      },
      {
        path: 'setting',
        name: 'r-users-setting',
        component: Setting,
      }
    ]
  },
  {
    // redirectの定義 / → /top
    path: '/', 
    redirect: '/top'
  },
  {
    // redirectの定義 /user → /users
    // 動的パラメータを含むため、リダイレクト先は名前付きrouteで指定している
    // 
    // 以下のように、リダイレクト先にパラメータを指定しても動作しない。
    //   redirect: {path: '/users/:userId'},
    //   redirect: '/users/:userId',
    // 前者は vue routerが以下のような警告を出す。
    // [Vue Router warn]: Path "/users/:userId" was passed with params but they will be ignored. 
    // Use a named route alongside params instead.
    path: '/user/:userId', 
    redirect: {name: 'r-users'},
    children: [
      {
        path: 'profile',
        redirect: {name: 'r-users-profile'}
      },
      {
        path: 'setting',
        redirect: {name: 'r-users-setting'}
      }
    ]
  },
  // aliasを持つrouteの定義
  // URLが切り替わらない redirect という動作になる
  {
    path: '/players/:userId',
    component: User,
    // Userコンポーネントへのアクセスは以下の2つが有効になる
    // /players/taro
    // /p/taro
    alias: '/p/:userId',
    children: [
      {
        path: 'profile',
        component: Profile,
        // 複数定義も可能
        // Profileコンポーネントへのアクセスは以下の3つが有効になる
        // /players/taro/profile
        // /playerprofile/taro
        // /players/taro/prof
        alias: ['/playerprofile/:userId', 'prof']
      }
    ]
  }
];

// routerインスタンスの生成
// オプションで routesと historyを指定する
const router = VueRouter.createRouter({
  routes,
  // 内部的に渡されたURLパスの前にハッシュ(#)を付与する
  // サーバアクセスが発生しない file:/// プロトコルなど、http 以外でも使うことができる
  history: VueRouter.createWebHashHistory()
});

// Vueインスタンスを作成して、routerインスタンスを「use」する
// Vueインスタンス全体に routerを認識させる
const app = Vue.createApp({});
app.use(router);

app.mount('#app');