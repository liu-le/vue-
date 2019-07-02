import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//引入全局的样式
import './assets/css/base.css'

import './assets/js/font.js'

new Vue({
  render: h => h(App),  
}).$mount('#app')
