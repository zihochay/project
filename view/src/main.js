import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import '@/styles/index.less'

Vue.use(Element)
Vue.use(VueQuillEditor, {
  placeholder: '请输入内容...'
})
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
