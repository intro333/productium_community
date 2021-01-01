import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import '../plugins/axios';

export default new Vuex.Store({
  state: {
    cookieIsAssented: localStorage.getItem('cookie_is_assented'),
    isOpenAuthWindow: false,
    subscribeInfo: false,
    informOnReadinessEmail: '',
    browserSize: {
      width: 0,
      height: 0,
    },
    pageYOffset: 0, // scroll of window
    isOpenPopupReadiness: false,
    readyPercent: 0,
    membersCount: 0,
    membersCountCookie: localStorage.getItem('cookie_members_count'),
  },
  getters: {
    getCookieIsAssented: state => state.cookieIsAssented,
    getOpenAuthWindowState: state => state.isOpenAuthWindow,
    getBrowserSize: state => state.browserSize,
    getPageYOffset: state => state.pageYOffset,
    getIsOpenPopupReadiness: state => state.isOpenPopupReadiness,
    getReadyPercent: state => state.readyPercent,
    getMembersCount: state => state.membersCount,
    getMembersCountCookie: state => state.membersCountCookie,
  },
  actions: {
    fetchInitData({commit, getters}) {
      return new Promise((resolve, reject) => {
        const membersCountCookie = getters.getMembersCountCookie;
        const setData = (data) => {
          const isMembersCountCookie = membersCountCookie && (parseInt(membersCountCookie) >= data.membersCount);
          /* Наполнить основные компоненты */
          commit('SET_READY_PERCENT', data.readyPercent);
          /* Если кол-во участников есть в куках и оно >= кол-ву уч. из БД, значит юзер промотал этот блок и ему надо показать их */
          commit('SET_MEMBER_COUNT', isMembersCountCookie ? parseInt(membersCountCookie) : data.membersCount);
        };
        window.axios.post('community/init/').then(response => {
          const data = response.data;
          setData(data);
          resolve(data);
        }, error => {
          setData({
            readyPercent: 65,
            membersCount: 123,
          });
          reject(error);
        });
      });
    },
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
    setPageYOffset({commit}, value) {
      commit('SET_PAGE_Y_OFFSET', value);
    },
    setIsOpenPopupReadiness({commit}, status) {
      commit('SET_IS_OPEN_POPUP_READINESS', status);
    },
    setReadyPercent({commit}, num) {
      commit('SET_READY_PERCENT', num);
    },
    setMembersCount({commit}, num) {
      commit('SET_MEMBER_COUNT', num);
    },
    setMembersCountCookie({commit}, num) {
      commit('SET_MEMBER_COUNT_COOKIE', num);
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
    SET_PAGE_Y_OFFSET(state, value) { state.pageYOffset = value; },
    SET_IS_OPEN_POPUP_READINESS(state, status) { state.isOpenPopupReadiness = status; },
    SET_READY_PERCENT(state, num) { state.readyPercent = num; },
    SET_MEMBER_COUNT(state, count) { state.membersCount = count; },
    SET_MEMBER_COUNT_COOKIE(state, count) {
      localStorage.setItem('cookie_members_count', count);
      state.membersCountCookie = count
    },
  },
  modules: {

  }
})
