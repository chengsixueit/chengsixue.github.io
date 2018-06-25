<template>
  <div id="app">
    <!--头部-->
    <mt-header title="信息生活">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--中部模块d动态变化-->
    <router-view></router-view>
    <!--底部模块-->
    <mt-tabbar class="bc">
      <mt-tab-item id="首页">
        <router-link to="/">
          <img height="20px" width="40px" src="./assets/_ic_tabbar_home.png">
          <p>首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="新闻">
        <router-link to="/news">
          <img height="20px" width="40px" src="./assets/新闻.png">
          <p> 新闻</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="篮球">
        <router-link to="/sports">
          <img height="20px" width="40px" src="./assets/体育-篮球.png">
          <p>篮球</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        <router-link to="/person">
          <img height="20px" width="40px" src="./assets/个人.png">
          <p>个人中心</p>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    callback: function() {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bc {
  background-color: #26a2ff;
}

.bc p {
  margin-top: 3px;
  color: white;
}
</style>
