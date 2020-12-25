import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookieIsAssented: localStorage.getItem('cookie_is_assented'),
    isOpenAuthWindow: false,
  },
  getters: {
    getCookieIsAssented: state => state.cookieIsAssented,
    getOpenAuthWindowState: state => state.isOpenAuthWindow,
  },
  actions: {
    setCookieIsAssented({commit}, status) {
      commit('SET_COOKIE_IS_ASSENTED', status);
    },
    setOpenAuthWindowState({commit}, windowState) {
      commit('SET_OPEN_AUTH_WINDOW_STATE', windowState);
    },
  },
  mutations: {
    SET_COOKIE_IS_ASSENTED(state, status) {
      localStorage.setItem('cookie_is_assented', status);
      state.cookieIsAssented = status
    },
    SET_OPEN_AUTH_WINDOW_STATE(state, windowState) { state.isOpenAuthWindow = windowState; },
  },
  modules: {

  }
})
