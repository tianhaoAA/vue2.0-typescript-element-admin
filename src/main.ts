import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'; //引入ElementUI 的样式


Vue.config.productionTip = false   // 阻止显示生产模式的消息
Vue.use(ElementUI) //注册ElementUI
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
