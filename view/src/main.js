import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

Vue.use(Element)
Vue.config.productionTip = false

Vue.prototype.$validateMessage = function (message, type = 'warning') {
  this.$notify({
    message,
    position: 'top-right',
    type
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
