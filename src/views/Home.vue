<template>
  <div class="p-home" id="pHome">
    <div class="content-base-box content-base-box-blue content-hide-mobile">
      <div class="content-base p-top">
        <div class="p-top-logo-box">
          <img src="@/assets/img/logo/logo_white.svg"
               class="p-top-logo-img"
               alt="">
          <span class="p-top-logo-text">roductium</span>
          <div class="p-top-logo-text-box">
            <span class="p-top-logo-text p-top-logo-text-blue">community</span>
          </div>
        </div>
        <div class="p-top-right">
          <span class="p-top-right-item-text">Возможности</span>
          <span class="p-top-right-item-text">Бета-версия</span>
          <div @click="openAuthModal()"
               class="p-button p-button-rounded p-button-rounded1"
               style="margin-left: 50px;">
            <span class="p-button-text">Войти в комьюнити</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-base-box content-base-box-blue  content-hide-desktop">
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
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Block7 />
    <Block8 />
    <Footer />
    <!-- МОБИЛЬНОЕ МЕНЮ -->
    <div v-if="drawer" class="p-modal">
      <div class="p-modal-background"
           @click="drawerControl(false)"></div>
      <div class="side-menu"
           :class="{'fade-in': menuIsFadeIn, 'fade-out': menuIsFadeOut}">
        <div class="side-menu-content content-base">
          <div class="side-menu-box">
          <span @click="openAuthModal()"
                class="side-menu-item">Регистрация</span>
            <span class="side-menu-item">Тарифы</span>
            <span class="side-menu-item">Бета-версия</span>
            <span class="side-menu-item">Сообщество</span>
            <span class="side-menu-item">Как это работает</span>
            <span class="side-menu-item">Обратная связь</span>
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

import Block1 from "@/components/home/Block1";
import Block2 from "@/components/home/Block2";
import Block3 from "@/components/home/Block3";
import Block4 from "@/components/home/Block4";
import Block5 from "@/components/home/Block5";
import Block6 from "@/components/home/Block6";
import Block7 from "@/components/home/Block7";
import Block8 from "@/components/home/Block8";
import Footer from "@/components/Footer";
import {mapActions} from "vuex";
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Home",
  mixins: [CommonMixin],
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Block7,
    Block8,
    Footer,
  },
  data() {
    return {
      drawer: false,
      menuIsFadeIn: false,
      menuIsFadeOut: false,
    }
  },
  methods: {
    ...mapActions(['setOpenAuthWindowState']),
    openAuthModal() {
      if (this.drawer) {
        this.drawerControl(false);
        this.bodyLock(true);
      }
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
  }
}
</script>