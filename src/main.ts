/*
 * @Author: tmy
 * @Date: 2019-12-26 11:16:17
 * @LastEditors: tmy
 * @LastEditTime: 2019-12-30 13:55:43
 * @Description: Do not edit
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import '@/assets/css/reset.css';
import '@/utils/elementUI';
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
