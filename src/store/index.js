import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import '../plugins/axios';
import {getOS} from "@/functions/validation";

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
    isOpenPopupUnsubscribe: false,
    readyPercent: 65,
    membersCount: 123,
    membersCountCookie: localStorage.getItem('cookie_members_count'),
    sInfo: {
      userIp: '',
      userDevice: '',
      userAgent: '',
    },
    some: '',
  },
  getters: {
    getCookieIsAssented: state => state.cookieIsAssented,
    getOpenAuthWindowState: state => state.isOpenAuthWindow,
    getBrowserSize: state => state.browserSize,
    getPageYOffset: state => state.pageYOffset,
    getIsOpenPopupReadiness: state => state.isOpenPopupReadiness,
    getIsOpenPopupUnsubscribe: state => state.isOpenPopupUnsubscribe,
    getReadyPercent: state => state.readyPercent,
    getMembersCount: state => state.membersCount,
    getMembersCountCookie: state => state.membersCountCookie,
    getOsInfo: state => state.osInfo,
  },
  actions: {
    fetchInitData({commit, getters}) {
      return new Promise((resolve, reject) => {
        const membersCountCookie = getters.getMembersCountCookie;
        const setData = (data) => {
          if (typeof data === 'object' && data !== null) {
            const isMembersCountCookie = membersCountCookie && (parseInt(membersCountCookie) >= data.membersCount);
            /* Наполнить основные компоненты */
            commit('SET_READY_PERCENT', data.readyPercent);
            /* Если кол-во участников есть в куках и оно >= кол-ву уч. из БД, значит юзер промотал этот блок и ему надо показать их */
            commit('SET_MEMBER_COUNT', isMembersCountCookie ? parseInt(membersCountCookie) : data.membersCount);
          }
        };
        window.axios.post('community/init/').then(response => {
          const data = response.data;
          setData(data);
          resolve(data);
        }, error => {
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
    subscribe({commit, getters}, subscribeInfo) {
      return new Promise((resolve, reject) => {
        const sInfo = getters.getOsInfo;
        window.axios.post('community/subscribe/', Object
          .assign({}, subscribeInfo, sInfo))
          .then(() => {
            commit('SUBSCRIBE', subscribeInfo);
            resolve(subscribeInfo);
        }, error => {
            // reject({ message: 'Internal server error' })
            const data = error.response && error.response.data;
            reject(data);
        });
      });
    },
    informOnReadiness({commit, getters}, email) {
      return new Promise((resolve, reject) => {
        const sInfo = getters.getOsInfo;
        window.axios.post('community/readiness/', Object
          .assign({}, {email}, sInfo))
          .then(() => {
            commit('INFORM_ON_READINESS', email);
            resolve(email);
          }, error => {
            const data = error.response && error.response.data;
            reject(data);
          });
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
    setIsOpenPopupUnsubscribe({commit}, status) {
      commit('SET_IS_OPEN_POPUP_UNSUBSCRIBE', status);
    },
    unSubscribe({commit}, email) {
      return new Promise((resolve, reject) => {
        commit('SOME');
        window.axios.post('community/unsubscribe/', {email})
          .then(() => {
            resolve(email);
          }, error => {
            const data = error.response && error.response.data;
            reject(data);
          });
      });
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
    fetchIpAddressAndSetOsInfo({ commit }) {
      return new Promise((resolve, reject) => {
        window.axios.get('https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json', {})
          // axios.get('http://api.ipify.org/?format=json', {})
          .then(response => {
            const ip = response.data.ip;
            const osInfo = getOS();
            osInfo.userIp = ip;
            commit('SET_OS_INFO', osInfo);
            resolve(osInfo);
          }, () => {
            const osInfo = getOS();
            commit('SET_OS_INFO', osInfo);
            reject(osInfo)
          });
      });
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
    SET_IS_OPEN_POPUP_UNSUBSCRIBE(state, status) { state.isOpenPopupUnsubscribe = status; },
    SET_READY_PERCENT(state, num) { state.readyPercent = num; },
    SET_MEMBER_COUNT(state, count) { state.membersCount = count; },
    SET_MEMBER_COUNT_COOKIE(state, count) {
      localStorage.setItem('cookie_members_count', count);
      state.membersCountCookie = count
    },
    SET_OS_INFO(state, info) { state.osInfo = info; },
    SOME(state) { state.some = 'some'; },
  },
  modules: {

  }
})
