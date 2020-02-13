import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 自定义指令
Vue.directive('document-click', {
  bind (el, bindings, vnode) {
    // 只当用户绑定指令时生效
    document.addEventListener('click', bindings.value, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
