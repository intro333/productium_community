<template>
  <div :class="['content-base-box', 'content-base-footer']">
    <div :class="['content-base', 'p-footer']">
      <div class="p-footer-menu">
        <span @click="scrollToBlock('pHome')"
              class="p-footer-menu-item content-hide-desktop">Главная</span>
        <span @click="scrollToBlock('homeBlockFullVideo')"
              class="p-footer-menu-item">Как это работает</span>
        <span @click="scrollToBlock('aboutProject')"
              class="p-footer-menu-item">О проекте</span>
        <span @click="scrollToBlock('tariffDescr1Box')"
              class="p-footer-menu-item">Тарифы</span>
        <span @click="openProductium()"
              class="p-footer-menu-item">Beta-версия</span>
        <span @click="scrollToBlock('homeBlock8')"
              class="p-footer-menu-item">Быть в курсе новостей</span>
      </div>
      <div class="content-hide-mobile"
           style="display: flex; flex-direction: column; justify-content: space-between;">
        <div></div>
        <span class="p-footer-copyright">© 2021 Productium Inc. All rights reserved</span>
      </div>
      <div class="p-footer-right">
        <div class="p-footer-social-box">
          <div class="p-footer-logo-box">
            <img src="@/assets/img/logo/logo_white11x16.svg"
                 class="p-footer-logo-img"
                 alt="">
            <span class="p-footer-logo-text">roductium</span>
            <div class="p-top-logo-text-box p-footer-logo-text-box">
              <span class="p-top-logo-text">beta</span>
            </div>
<!--            <span class="p-footer-logo-text p-footer-logo-text-small">ium</span>-->
<!--            <div class="prod-point"></div>-->
          </div>
          <div class="p-footer-social">
            <img @click="openSocialLink('fb')"
                 src="@/assets/img/socials/fb.svg"
                 class="p-footer-social-item"
                 alt="">
            <img @click="openSocialLink('instagram')"
                 src="@/assets/img/socials/instagram.svg"
                 class="p-footer-social-item"
                 alt="">
            <img @click="openSocialLink('telegram')"
                 src="@/assets/img/socials/telegram.svg"
                 class="p-footer-social-item"
                 alt="">
            <img @click="openSocialLink('openland')"
                 src="@/assets/img/socials/openland.svg"
                 class="p-footer-social-item"
                 alt="">
          </div>
        </div>
        <div class="p-footer-policy">
          <span @click="goToMenuRoute('privacy-policy')"
                class="p-footer-policy-text">Privacy policy</span>
<!--          <span @click="goToMenuRoute('terms-of-use')"-->
<!--                class="p-footer-policy-text">Terms of use</span>-->
        </div>
      </div>
      <span class="p-footer-copyright content-hide-desktop">© 2021 Productium Inc. All rights reserved</span>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Footer",
  mixins: [CommonMixin],
  methods: {
    openAuthModal() {
      document.body.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        this.bodyLock(true);
        this.setOpenAuthWindowState(true);
      }, 500);
    },
    goToMenuRoute(_route) {
      if (this.$route.name !== _route) {
        this.$router.push({name: _route});
        window.scrollTo( 0, 0 );
      }
    },
  }
}
</script>
