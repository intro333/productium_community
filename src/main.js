import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import device from "vue-device-detector";

Vue.config.productionTip = false

import "./assets/scss/app.scss";
Vue.use(device);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
