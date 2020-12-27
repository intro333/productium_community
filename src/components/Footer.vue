<template>
  <div :class="['content-base-box', 'content-base-footer']">
    <div :class="['content-base', 'p-footer']">
      <div class="p-footer-menu">
        <span class="p-footer-menu-item">Регистрация</span>
        <span class="p-footer-menu-item">Тарифы</span>
        <span class="p-footer-menu-item">Бета-версия</span>
        <span class="p-footer-menu-item">Сообщество</span>
        <span class="p-footer-menu-item">Как это работает</span>
        <span class="p-footer-menu-item">Обратная связь</span>
      </div>
      <div class="content-hide-mobile"
           style="display: flex; flex-direction: column; justify-content: space-between;">
        <div></div>
        <span class="p-footer-copyright">© 2020 Productium Inc. All rights reserved</span>
      </div>
      <div class="p-footer-right">
        <div class="p-footer-social-box">
          <div class="p-footer-logo-box">
            <img src="@/assets/img/logo/logo_white17.svg"
                 class="p-footer-logo-img"
                 alt="">
            <span class="p-footer-logo-text">roduct</span>
            <span class="p-footer-logo-text p-footer-logo-text-small">ium</span>
            <div class="prod-point"></div>
          </div>
          <div class="p-footer-social">
            <img src="@/assets/img/socials/fb.svg"
                 class="p-footer-social-item"
                 alt="">
            <img src="@/assets/img/socials/instagram.svg"
                 class="p-footer-social-item"
                 alt="">
            <img src="@/assets/img/socials/twitter.svg"
                 class="p-footer-social-item"
                 alt="">
            <img src="@/assets/img/socials/gh.svg"
                 class="p-footer-social-item"
                 alt="">
          </div>
        </div>
        <div class="p-footer-policy">
          <span class="p-footer-policy-text">Privacy policy</span>
          <span class="p-footer-policy-text">Terms of use</span>
        </div>
      </div>
      <span class="p-footer-copyright content-hide-desktop">© 2020 Productium Inc. All rights reserved</span>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Footer",
  mixins: [CommonMixin],
}
</script>
