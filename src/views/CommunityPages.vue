<template>
  <div class="p-home" id="pHome">
    <div class="content-base-box content-base-box-blue content-hide-mobile">
      <div class="content-base p-top">
        <div @click="goToHomePage()"
             class="p-top-logo-box">
          <img src="@/assets/img/logo/logo_white.svg"
               class="p-top-logo-img"
               alt="">
          <span class="p-top-logo-text">roductium</span>
          <div class="p-top-logo-text-box">
            <span class="p-top-logo-text p-top-logo-text-blue">community</span>
          </div>
        </div>
        <div class="p-top-right">
          <span @click="scrollToBlock('homeBlock2')"
                class="p-top-right-item-text">Возможности</span>
          <span @click="scrollToBlock('preStart')"
                class="p-top-right-item-text">Этапы</span>
          <div @click="scrollToBlock('tariffDescr1Box')"
               class="p-button p-button-rounded p-button-rounded1"
               style="margin-left: 50px;">
            <span class="p-button-text">Начать бесплатно</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-base-box content-base-box-blue content-hide-desktop">
      <div class="content-base p-top-mobile">
        <div class="p-top-logo-box">
          <img src="@/assets/img/logo/logo_white12.svg"
               class="p-top-logo-img12"
               alt="">
          <span class="p-top-logo-text">roductium</span>
          <div class="p-top-logo-text-box">
            <span class="p-top-logo-text p-top-logo-text-blue">community</span>
          </div>
        </div>
        <img @click="drawerControl(true)"
             src="@/assets/img/mobile/mdiMenu.svg"
             class="mdi-menu"
             alt="">
      </div>
    </div>
    <router-view></router-view>
    <Footer />
    <!-- МОБИЛЬНОЕ МЕНЮ -->
    <div v-if="drawer"
         class="p-modal">
      <div class="p-modal-background"
           @click="drawerControl(false)"></div>
      <div class="side-menu"
           :class="{'fade-in': menuIsFadeIn, 'fade-out': menuIsFadeOut}">
        <div class="side-menu-content content-base">
          <div class="side-menu-box">
            <span @click="scrollToBlockOnMobile('pHome')"
                  class="side-menu-item">Главная</span>
            <span @click="openProductium()"
                  class="side-menu-item">Бета-версия</span>
            <span @click="scrollToBlockOnMobile('homeBlock2')"
                  class="side-menu-item">Возможности</span>
            <span @click="scrollToBlockOnMobile('preStart')"
                  class="side-menu-item">Этапы</span>
            <span  @click="scrollToBlockOnMobile('tariffDescr1Box')"
                   class="side-menu-item">Тарифы</span>
            <span @click="scrollToBlockOnMobile('subscribeDescr')"
                  class="side-menu-item">О нас</span>
          </div>
          <div class="side-menu-social-box">
            <div class="side-menu-social">
              <img src="@/assets/img/mobile/socials/fb.svg"
                   class="side-menu-social-item"
                   alt="">
              <img src="@/assets/img/mobile/socials/instagram.svg"
                   class="side-menu-social-item"
                   alt="">
              <img src="@/assets/img/mobile/socials/twitter.svg"
                   class="side-menu-social-item"
                   alt="">
              <img src="@/assets/img/mobile/socials/gh.svg"
                   class="side-menu-social-item"
                   alt="">
            </div>
            <div class="side-menu-logo-box">
              <img src="@/assets/img/logo/logo_black17.svg"
                   class="side-menu-logo-img"
                   alt="">
              <span class="side-menu-logo-text">roduct</span>
              <span class="side-menu-logo-text side-menu-logo-text-small">ium</span>
              <div class="prod-point"></div>
            </div>
          </div>
          <div @click="drawerControl(false)"
               class="side-menu-close-box">
            <img src="@/assets/img/mobile/closeBlack.svg"
                 class="side-menu-close"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import Footer from "@/components/Footer";

export default {
  name: "CommunityPages",
  mixins: [CommonMixin],
  components: {
    Footer
  },
  data() {
    return {
      drawer: false,
      menuIsFadeIn: false,
      menuIsFadeOut: false,
    }
  },
  methods: {
    openAuthModal() {
      if (this.drawer) {
        this.drawerControl(false);
      }
      this.bodyLock(true);
      this.setOpenAuthWindowState(true);
    },
    drawerControl(state) {
      if (state) {
        this.menuIsFadeIn = true;
        this.menuIsFadeOut = false;
        this.bodyLock(true);
        this.drawer = state;
      } else {
        this.menuIsFadeIn = false;
        this.menuIsFadeOut = true;
        this.bodyLock(false);
        setTimeout(() => {
          this.menuIsFadeOut = false;
          this.drawer = state;
        }, 0)
      }
    },
    scrollToBlockOnMobile(_id) {
      this.drawerControl(false);
      setTimeout(() => {
        this.scrollToBlock(_id);
      }, 30);
    },
  }
}
</script>
