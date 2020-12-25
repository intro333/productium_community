<template>
  <div>
    <!-- ОКНО авторизаии/регистрации DESKTOP -->
    <div v-if="!isMobile()"
         class="p-modal">
      <div class="p-modal-background"
           @click="close"></div>
      <div class="p-modal-auth">
        <div class="p-auth-info">
          <div class="p-auth-info-first">
            <div class="p-top-logo-box">
              <img src="@/assets/img/logo/logo_black.svg"
                   class="p-top-logo-img"
                   alt="">
              <span class="p-top-logo-text">roductium</span>
              <div class="p-top-logo-text-box">
                <span class="p-top-logo-text p-top-logo-text-white">community</span>
              </div>
            </div>
            <div class="p-auth-fields">
              <div class="p-auth-fields-item">
                <label class="p-auth-fields-label">Имя</label>
                <input class="p-auth-fields-input"
                       placeholder="Введите Имя">
              </div>
              <div class="p-auth-fields-item">
                <label class="p-auth-fields-label">e-mail</label>
                <input class="p-auth-fields-input"
                       placeholder="Введите почту">
              </div>
            </div>
            <div class="p-auth-tariff">
              <p class="p-auth-tariff-item p-auth-tariff-label">тариф</p>
              <div class="p-auth-tariff-item a-radio"
                   :class="{active: activeTariff === 'premium'}">
                <div class="a-radio-button">
                  <div v-if="activeTariff === 'premium'"
                       class="a-radio-button-active"></div>
                </div>
                <span class="a-radio-text">Premium</span>
              </div>
              <div class="p-auth-tariff-item a-radio"
                   :class="{active: activeTariff === 'standard'}">
                <div class="a-radio-button">
                  <div v-if="activeTariff === 'standard'"
                       class="a-radio-button-active"></div>
                </div>
                <span class="a-radio-text">Standard</span>
              </div>
              <div class="p-auth-tariff-item a-radio"
                   :class="{active: activeTariff === 'free'}">
                <div class="a-radio-button">
                  <div v-if="activeTariff === 'free'"
                       class="a-radio-button-active"></div>
                </div>
                <span class="a-radio-text">Free</span>
              </div>
            </div>
          </div>
          <div class="p-auth-info-second">
            <div class="p-button p-button-rounded p-button-fill p-button-fill2 p-auth-submit-button"
                 :class="{'p-button-fill-disabled': !isSubmit}">
              <span class="p-button-text">Присоединиться</span>
            </div>
            <div class="p-auth-submit-agreement">
              <div class="p-agreement-checkbox"></div>
              <div class="p-agreement-text">
                <span>Я согласен с </span>
                <span class="p-agreement-text-link">политикой конфиденциальности </span>
                <span>и </span>
                <span class="p-agreement-text-link">пользовательским соглашением</span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-auth-go">
          <p class="p-auth-go-text">ПОЕХАЛИ!</p>
          <img src="@/assets/img/auth/astronaut.svg"
               class="p-auth-go-img"
               alt="">
        </div>
        <div @click="close"
             class="p-auth-close-box">
          <img src="@/assets/img/auth/close.svg"
               class="p-auth-close"
               alt="">
        </div>
      </div>
    </div>

    <!-- ОКНО авторизаии/регистрации MOBILE -->
    <div v-if="isMobile()">

    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {mapActions} from "vuex";

export default {
  name: "AuthWindow",
  mixins: [CommonMixin],
  data: () => ({
    activeTariff: 'premium',
  }),
  computed: {
    isSubmit() {
      return false;
    }
  },
  methods: {
    ...mapActions(['setOpenAuthWindowState']),
    close() {
      this.setOpenAuthWindowState(false);
    },
  },
}
</script>