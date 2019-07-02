import Vue from "vue";
import axios from 'axios';

// Vue.use(axios)  axios不支持use安装；；；；


Vue.prototype.$axios=axios;//组件里面：this.$axios
window.axios=axios//无论在不在组建都可用axios();


export default axios;

