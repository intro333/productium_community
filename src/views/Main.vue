<template>
  <div class="app-content">
    <router-view></router-view>
    <CookieModal v-if="!getCookieIsAssented()" />
    <AuthWindow v-if="getOpenAuthWindowState()" />
    <PopupReadiness v-if="getIsOpenPopupReadiness()" />
    <PopupUnsubscribe v-if="getIsOpenPopupUnsubscribe()" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CookieModal from "@/components/modals/CookieModal";
import AuthWindow from "@/components/modals/AuthWindow";
import PopupReadiness from "@/components/modals/PopupReadiness";
import PopupUnsubscribe from "@/components/modals/PopupUnsubscribe";
import LocaleMixin from "@/components/mixins/LocaleMixin";

export default {
  name: "Main",
  mixins: [LocaleMixin],
  components: {
    CookieModal,
    AuthWindow,
    PopupReadiness,
    PopupUnsubscribe,
  },
  data: () => ({
    isScrolling: false
  }),
  created() {
    // this.fetchInitData();
    this.fetchIpAddressAndSetOsInfo().then(info => {
      if (info.userIp && (info.userIp !== '')) {
        this.fetchAdditionalIpInfo(info.userIp).then(additionalInfo => {
          if (additionalInfo && additionalInfo.location && additionalInfo.location.country) {
            const location = additionalInfo.location;
            const country = location.country;
            if (this.$route.query.lang) {
              this.changeLocale(this.$route.query.lang);
            } else {
              if (country.code === 'RU') {
                this.changeLocale('ru');
              } else {
                this.changeLocale('en');
              }
            }
          }
        });
      }
    });
  },
  mounted() {
    window.addEventListener('resize', this.browserResize);
    const browSize = document.documentElement;
    this.setBrowserSize({
      width: browSize.clientWidth,
      height: browSize.clientHeight
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.browserResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions(['setCookieIsAssented', 'setBrowserSize', 'setPageYOffset', 'fetchInitData', 'fetchIpAddressAndSetOsInfo',
      'fetchAdditionalIpInfo']),
    ...mapGetters(['getCookieIsAssented', 'getOpenAuthWindowState', 'getIsOpenPopupReadiness', 'getIsOpenPopupUnsubscribe']),
    browserResize() {
      const browSize = document.documentElement;
      this.setBrowserSize({
        width: browSize.clientWidth,
        height: browSize.clientHeight
      });
    },
    handleScroll() {
      const self = this;
      window.clearTimeout( this.isScrolling );
      self.isScrolling = setTimeout(function() {
        const pageYOffset = window.pageYOffset;
        if (document.body.className.indexOf('modal-open') === -1) { /* Если body разлочен */
          self.setPageYOffset(pageYOffset);
        }
      }, 66);
    }
  },
}
</script>

<style lang="scss">
  .app-content {
    //background-color: #fff;
  }
</style>