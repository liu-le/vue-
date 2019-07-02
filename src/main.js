import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//引入全局的样式
import './assets/css/base.css'

import './assets/js/font.js'

import router from './plugins/routers'


import axios from './plugins/axios'

//配置前段baseUrl 
Vue.prototype.baseUrl=require("../config/config").active

new Vue({
  render: h => h(App),  
  router

}).$mount('#app')
