import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookieIsAssented: localStorage.getItem('cookie_is_assented'),
    isOpenAuthWindow: false,
    subscribeInfo: false,
    informOnReadinessEmail: '',
    browserSize: {
      width: 0,
      height: 0,
    }
  },
  getters: {
    getCookieIsAssented: state => state.cookieIsAssented,
    getOpenAuthWindowState: state => state.isOpenAuthWindow,
    getBrowserSize: state => state.browserSize,
  },
  actions: {
    setCookieIsAssented({commit}, status) {
      commit('SET_COOKIE_IS_ASSENTED', status);
    },
    setOpenAuthWindowState({commit}, windowState) {
      commit('SET_OPEN_AUTH_WINDOW_STATE', windowState);
    },
    subscribe({commit}, subscribeInfo) {
      return new Promise((resolve, reject) => {
        setTimeout(() => { // TODO имитация задержки с сервера
          const isSuccess = true;
          if (isSuccess) {
            commit('SUBSCRIBE', subscribeInfo);
            resolve(subscribeInfo);
          } else {
            reject({ message: 'Internal server error' })
          }
        }, 300);
      });
    },
    informOnReadiness({commit}, email) {
      return new Promise((resolve, reject) => {
        setTimeout(() => { // TODO имитация задержки с сервера
          const isSuccess = true;
          if (isSuccess) {
            commit('INFORM_ON_READINESS', email);
            resolve(email);
          } else {
            reject({ message: 'Internal server error' })
          }
        }, 300);
      });
    },
    setBrowserSize({commit}, browserSize) {
      commit('SET_BROWSER_SIZE', browserSize);
    },
  },
  mutations: {
    SET_COOKIE_IS_ASSENTED(state, status) {
      localStorage.setItem('cookie_is_assented', status);
      state.cookieIsAssented = status
    },
    SET_OPEN_AUTH_WINDOW_STATE(state, windowState) { state.isOpenAuthWindow = windowState; },
    SUBSCRIBE(state, info) { state.subscribeInfo = info; },
    INFORM_ON_READINESS(state, email) { state.informOnReadinessEmail = email; },
    SET_BROWSER_SIZE(state, browserSize) { state.browserSize = browserSize; },
  },
  modules: {

  }
})
