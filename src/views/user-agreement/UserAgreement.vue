<template>
  <div class="user-agreement">
    <div :class="['content-base-box', 'content-base-box-blue']">
      <div :class="['content-base', 'user-agreement-header']">
        <span class="user-agreement-text">Productium</span>
        <div class="content-hide-mobile">
          <span class="user-agreement-text user-agreement-text-bold"> {{ $t('common.legalInformation1') }} {{ $t('common.legalInformation2') }}</span>
        </div>
        <div class="content-hide-desktop p-box-flex-column"
             style="align-items: center;">
          <span class="user-agreement-text user-agreement-text-bold">{{ $t('common.legalInformation1') }}</span>
          <span class="user-agreement-text user-agreement-text-bold">{{ $t('common.legalInformation2') }}</span>
        </div>
        <div class="content-hide-desktop p-button p-button-rounded p-button-rounded1 p-button-select pua-menu-mobile"
             :class="{'p-button-select-open': isOpenMenuMobile}">
          <div @click="selectButtonPopup()"
               class="p-button-text-box">
            <span class="p-button-text">{{menuTitleByName()}}</span>
            <img src="@/assets/img/mobile/chevronDown.svg"
                 class="p-button-select-img"
                 alt="">
          </div>
          <div v-if="isOpenMenuMobile"
               @click="goToMenuRoute((selectedMenu === 'privacy-policy') ? 'terms-of-use' : 'privacy-policy')"
               class="p-button-text-box">
            <span class="p-button-text not-active"
                  :style="{'padding-top': '16px', 'margin-left': (selectedMenu === 'privacy-policy') ? '-19px' : '-13px'}"
            >{{invertMenuTitleByName()}}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="['content-base-box']">
      <div :class="['content-base', 'pua']">
        <div class="pua-menu content-hide-mobile">
          <div @click="goToMenuRoute('privacy-policy')"
               class="pua-menu-text-box">
            <div v-if="isActive('privacy-policy')"
                 class="pua-menu-circle"></div>
            <div class="pua-menu-text"
                 :class="{'not-active': !isActive('privacy-policy')}">{{ $t('common.privacyPolicy') }}</div>
          </div>
<!--          <div @click="goToMenuRoute('terms-of-use')"-->
<!--               class="pua-menu-text-box">-->
<!--            <div v-if="isActive('terms-of-use')"-->
<!--                 class="pua-menu-circle"></div>-->
<!--            <div class="pua-menu-text"-->
<!--                 :class="{'not-active': !isActive('terms-of-use')}">Пользовательское соглашение</div>-->
<!--          </div>-->
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAgreement",
  data: () => ({
    selectedMenu: 'privacy-policy',
    isOpenMenuMobile: false
  }),
  created() {
    this.selectedMenu = this.$route.name;
    window.scrollTo( 0, 0 );
  },
  methods: {
    goToMenuRoute(_route) {
      if (_route !== this.$route.name) {
        this.$router.push({name: _route});
        this.isOpenMenuMobile = false;
      }
    },
    isActive(_route) {
      return this.$route.name ===_route;
    },
    menuTitleByName() {
      return (this.selectedMenu === 'privacy-policy') ? this.$t('common.privacyPolicy') :
          this.$t('common.termOfUse');
    },
    invertMenuTitleByName() {
      return (this.selectedMenu === 'terms-of-use') ? this.$t('common.privacyPolicy') :
          this.$t('common.termOfUse');
    },
    selectButtonPopup() {
      // this.isOpenMenuMobile = !this.isOpenMenuMobile;
    },
  },
  watch: {
    $route () {
      this.selectedMenu = this.$route.name;
    }
  }
}
</script>
