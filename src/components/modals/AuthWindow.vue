<template>
  <div class="p-modal">
    <div class="p-modal-background"
         @click="close"></div>
    <div class="p-modal-auth">
      <div v-if="!isMobileByResize || (isMobileByResize && sentState === sentS.NOT_SENT)"
           class="p-auth-info">
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
              <label class="p-auth-fields-label content-hide-mobile">Имя</label>
              <input @input="changeField('name')"
                     v-model="subscribeInfo.name"
                     class="p-auth-fields-input"
                     placeholder="Введите Имя">
              <span v-if="nameIsNotValid"
                    class="p-auth-fields-error">Введите имя</span>
            </div>
            <div class="p-auth-fields-item">
              <label class="p-auth-fields-label content-hide-mobile">e-mail</label>
              <input @input="changeField('email')"
                     v-model="subscribeInfo.email"
                     class="p-auth-fields-input"
                     placeholder="Введите e-mail">
              <span v-if="emailIsNotValid"
                    class="p-auth-fields-error">Проверьте правильно ли введен e-mail</span>
            </div>
          </div>
          <div class="p-auth-tariff">
            <p class="p-auth-tariff-item p-auth-tariff-label">тариф</p>
            <div class="p-auth-tariff-item a-radio"
                 :class="{active: subscribeInfo.tariff === 'premium'}">
              <div class="a-radio-button">
                <div v-if="subscribeInfo.tariff === 'premium'"
                     class="a-radio-button-active"></div>
              </div>
              <span class="a-radio-text">Premium</span>
            </div>
            <div class="p-auth-tariff-item a-radio disabled"
                 :class="{active: subscribeInfo.tariff === 'standard'}">
              <div class="a-radio-button">
                <div v-if="subscribeInfo.tariff === 'standard'"
                     class="a-radio-button-active"></div>
              </div>
              <span class="a-radio-text">Standard</span>
            </div>
            <div class="p-auth-tariff-item a-radio disabled"
                 :class="{active: subscribeInfo.tariff === 'free'}">
              <div class="a-radio-button">
                <div v-if="subscribeInfo.tariff === 'free'"
                     class="a-radio-button-active"></div>
              </div>
              <span class="a-radio-text">Free</span>
            </div>
          </div>
        </div>
        <div v-if="sentState === sentS.NOT_SENT"
             class="p-auth-info-second">
          <div @click="submit"
               class="p-button p-button-rounded p-button-fill p-button-fill2 p-auth-submit-button"
               :class="{'p-button-fill-disabled': !submitValidation || isSending}">
            <span class="p-button-text">Присоединиться</span>
<!--            <img v-if="isSending"-->
<!--                 src="@/assets/img/loaderMini.gif"-->
<!--                 class="p-button-loader"-->
<!--                 alt="">-->
            <LoaderButton v-if="isSending" />
          </div>
          <div @click="clickOnAgreement()"
               class="p-auth-submit-agreement">
<!--            <div class="p-agreement-checkbox"-->
<!--                 :class="{active: subscribeInfo.isAgreement}">-->
<!--              <div v-if="subscribeInfo.isAgreement"-->
<!--                   class="p-agreement-checkbox-active"></div>-->
<!--            </div>-->
            <div class="p-agreement-text">
              <span>Нажимая "Присоединиться" Вы соглашаетесь с </span>
              <span @click="goToPage('privacy-policy')"
                    class="p-agreement-text-link">политикой конфиденциальности </span>
              <span>и </span>
              <span @click="goToPage('terms-of-use')"
                    class="p-agreement-text-link">пользовательским соглашением</span>
            </div>
          </div>
        </div>
        <div v-if="sentState === sentS.SENT"
             class="p-auth-info-second-sent">
          <span class="sent-text">{{sentText}}</span>
        </div>
        <div v-if="sentState === sentS.SENT_ERROR"
             class="p-auth-info-second-sent">
          <span class="sent-text sent-text-error">{{sentText}}</span>
        </div>
      </div>
      <div v-if="!isMobileByResize || (isMobileByResize && sentState !== sentS.NOT_SENT)"
           class="p-auth-go">
        <div class="p-auth-go-sent-message content-hide-desktop">
          <div v-if="sentState === sentS.SENT"
               class="p-auth-go-second-sent">
            <p class="sent-text">Письмо с информацией </p>
            <p class="sent-text sent-text-bold">отправлено на почту</p>
          </div>
          <div v-if="sentState === sentS.SENT_ERROR"
               class="p-auth-go-second-sent">
            <template v-if="errorMessage === 'unique_violation'">
              <p class="sent-text">Этот e-mail</p>
              <p class="sent-text sent-text-bold sent-text-bold-error">был зарегистрирован.</p>
            </template>
            <template v-else>
              <p class="sent-text">Ошибка отправки</p>
              <p class="sent-text sent-text-bold sent-text-bold-error">попробуйте ещё раз</p>
            </template>
          </div>
        </div>
        <p class="p-auth-go-text">ПОЕХАЛИ!</p>
        <img src="@/assets/img/auth/astronaut.svg"
             class="p-auth-go-img"
             alt="">
      </div>
      <div @click="close"
           class="p-auth-close-box">
        <img src="@/assets/img/mobile/closeBlack.svg"
             class="p-auth-close content-hide-desktop"
             alt="">
        <img src="@/assets/img/auth/close.svg"
             class="p-auth-close content-hide-mobile"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {mapActions, mapGetters} from "vuex";
import {emailValidation} from "@/functions/validation";
import {sentState} from "@/data/consts";
import LoaderButton from "@/components/modals/LoaderButton";

export default {
  name: "AuthWindow",
  mixins: [CommonMixin],
  components: {
    LoaderButton
  },
  data: () => ({
    checkSubmit: {
      name: false,
      email: false,
    },
    subscribeInfo: {
      name: '',
      email: '',
      isAgreement: false,
      tariff: 'premium'
    },
    sentState: sentState.NOT_SENT,
    sentText: '',
    isSending: false,
    errorMessage: 'other'
  }),
  beforeDestroy() {
    this.sentText = '';
  },
  computed: {
    nameIsNotValid() {
      return this.checkSubmit.name && this.subscribeInfo.name === '';
    },
    emailIsNotValid() {
      return this.checkSubmit.email && !emailValidation(this.subscribeInfo.email);
    },
    submitValidation () {
      // return !this.emailIsNotValid && !this.nameIsNotValid;
      return !this.emailIsNotValid && !this.nameIsNotValid && this.subscribeInfo.isAgreement;
    },
    sentS() {
      return sentState;
    },
    isMobileByResize() {
      return this.browW <= 1024;
    },
    browW() {
      return this.getBrowserSize().width;
    },
  },
  methods: {
    ...mapActions(['setOpenAuthWindowState', 'subscribe']),
    ...mapGetters(['getBrowserSize']),
    close() {
      this.bodyLock(false);
      this.setOpenAuthWindowState(false);
    },
    changeField(field) {
      this.checkSubmit[field] = true;
      this.subscribeInfo.isAgreement = Object.keys(this.checkSubmit).map(_k => this.checkSubmit[_k]).indexOf(false) === -1;
      console.log(1, this.subscribeInfo.isAgreement)
    },
    clearSubmitData() {
      this.subscribeInfo.name = '';
      this.subscribeInfo.email = '';
      this.subscribeInfo.isAgreement = false;
      Object.keys(this.checkSubmit).forEach(_k => { this.checkSubmit[_k] = false });
    },
    clickOnAgreement() {
      this.subscribeInfo.isAgreement = !this.subscribeInfo.isAgreement;
      Object.keys(this.checkSubmit).forEach(_k => { this.checkSubmit[_k] = true });
    },
    goToPage(page) {
      this.close();
      this.$router.push({name: page});
    },
    submit() {
      if (this.submitValidation && !this.isSending) {
        this.isSending = true;
        this.subscribe(this.subscribeInfo).then(() => {
          setTimeout(() => {
            this.isSending = false;
            this.sentText = 'Письмо с информацией отправлено на почту';
            this.sentState = sentState.SENT;
            this.clearSubmitData();
          }, 500);
        }).catch(err => {
          let sentText = 'Не удалось отправить письмо, попобуйте ещё раз.';
          if (err.errorMessage && err.errorMessage === 'unique_violation') {
            sentText = 'Этот e-mail был зарегистрирован.';
            this.errorMessage = 'unique_violation';
          }
          this.isSending = false;
          this.sentText = sentText;
          this.sentState = sentState.SENT_ERROR;
          console.log('Server error: ' + err);
        });
      }
    },
  },
}
</script>