// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入vue
import App from './App'
/*导入跟组件*/
import router from './router'
/*到入路由*/
import MintUI from 'mint-ui'
//导入ui包
import 'mint-ui/lib/style.css'

import iView from 'iview';

import 'iview/dist/styles/iview.css';
Vue.use(iView);
//导入ui样式
// import jquery from 'jquery'
import vueResource from 'vue-resource'
Vue.use(MintUI)//
Vue.use(vueResource)//
// Vue.use(jquery)//
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
