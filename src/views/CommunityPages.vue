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
            <span class="p-top-logo-text">beta</span>
          </div>
        </div>
        <div class="p-top-right">
          <span @click="changeLocale('en')"
                class="p-top-right-item-text">EN</span>
          <span @click="scrollToBlock('tariffDescr1Box')"
                class="p-top-right-item-text">{{ $t("nav.tariffs") }}</span>
          <span @click="scrollToBlock('aboutProject')"
                class="p-top-right-item-text">{{ $t("nav.about") }}</span>
          <span @click="scrollToBlock('homeBlock8')"
                class="p-top-right-item-text">{{ $t("nav.stayUpToNews") }}</span>
          <div @click="openProductium()"
               class="p-button p-button-rounded p-button-rounded3 p-button-fill p-button-fill1"
               style="margin-left: 32px;">
            <span class="p-button-text">{{ $t("common.betaVersion") }}</span>
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
            <span class="p-top-logo-text p-top-logo-text-blue">beta</span>
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
                  class="side-menu-item">{{ $t("common.toHome") }}</span>
            <span @click="scrollToBlockOnMobile('homeBlockFullVideo')"
                  class="side-menu-item">{{ $t("common.howWork") }}</span>
            <span @click="scrollToBlockOnMobile('aboutProject2')"
                  class="side-menu-item">{{ $t("nav.about") }}</span>
            <span  @click="scrollToBlockOnMobile('tariffDescr1Box')"
                   class="side-menu-item">{{ $t("nav.tariffs") }}</span>
            <span @click="openProductium()"
                  class="side-menu-item">{{ $t("common.betaVersion") }}</span>
            <span @click="scrollToBlockOnMobile('homeBlock8')"
                  class="side-menu-item">{{ $t("nav.stayUpToNews") }}</span>
          </div>
          <div class="side-menu-social-box">
            <div class="side-menu-social">
              <img @click="openSocialLink('fb')"
                   src="@/assets/img/mobile/socials/fb.svg"
                   class="side-menu-social-item"
                   alt="">
              <img @click="openSocialLink('instagram')"
                   src="@/assets/img/mobile/socials/instagram.svg"
                   class="side-menu-social-item"
                   alt="">
              <img @click="openSocialLink('telegram')"
                   src="@/assets/img/mobile/socials/telegram.svg"
                   class="side-menu-social-item"
                   alt="">
              <img @click="openSocialLink('openland')"
                   src="@/assets/img/mobile/socials/openland.svg"
                   class="side-menu-social-item"
                   alt="">
            </div>
            <div class="side-menu-logo-box">
              <img src="@/assets/img/logo/logo_black12x18.svg"
                   class="side-menu-logo-img"
                   alt="">
              <span class="side-menu-logo-text">roductium</span>
              <div class="p-top-logo-text-box side-menu-logo-text-box">
                <span class="p-top-logo-text">beta</span>
              </div>
<!--              <span class="side-menu-logo-text side-menu-logo-text-small">ium</span>-->
<!--              <div class="prod-point"></div>-->
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
import LocaleMixin from "@/components/mixins/LocaleMixin";

export default {
  name: "CommunityPages",
  mixins: [CommonMixin, LocaleMixin],
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
