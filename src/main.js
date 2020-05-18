import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import moment from 'moment'
import ECharts from 'vue-echarts'
import 'echarts';
Vue.config.productionTip = false
Vue.prototype.$moment = moment;
Vue.component('v-chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
