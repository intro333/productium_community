import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import device from "vue-device-detector";
import VueI18n from 'vue-i18n';
import {messages} from '@/plugins/i18n';

Vue.config.productionTip = false;

import "./assets/scss/app.scss";
Vue.use(device);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
