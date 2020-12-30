<template>
  <div :class="['content-base-box', 'scrollbar-hidden block-scroll-container']">
    <div :class="['content-base', 'home-block8']" id="homeBlock8">
      <div class="subscribe-send-box">
        <div class="subscribe-send-text">
          <span class="content-hide-mobile">мы можем написать вам, как будет готов </span>
          <p class="content-hide-desktop">мы можем написать вам,</p>
          <span class="content-hide-desktop">как будет готов </span>
          <span class="subscribe-send-text-bold">Productium</span>
        </div>
        <div class="subscribe-send-input-box">
          <input @input="changeField('email')"
                 v-model="email"
                 class="subscribe-send-input text-ellipsis"
                 placeholder="Введите e-mail">
          <div @click="submit"
               class="subscribe-send-input-button"
               :class="{'disabled': !submitValidation || isSending}">
            <span>OK</span>
            <img v-if="isSending"
                 src="@/assets/img/loaderMini.gif"
                 class="subscribe-send-loader"
                 alt="">
          </div>
          <span v-if="emailIsNotValid"
                class="subscribe-send-input-message subscribe-send-input-error">Проверка e-mail</span>
          <span v-if="emailIsSendMessage !== ''"
                class="subscribe-send-input-message"
                :class="[emailIsSendMessageIsError ? 'subscribe-send-input-error' : 'subscribe-send-input-success']"
          >{{emailIsSendMessage}}</span>
        </div>
      </div>
      <p class="subscribe-descr">
        <span class="subscribe-descr-bold">Productium </span>
        <span>создан специалистами направлений разработки, управления, дизайна и реализована в одном приложении, с огромным потенциалом развития и решения множества задач в процессе разработки</span>
      </p>
      <div class="subscribe-photo-content">
        <div class="subscribe-photo-box">
          <img src="@/assets/img/covers/DimaM.jpg"
               class="subscribe-photo"
               alt="">
          <span class="subscribe-photo-name">Дмитрий, ceo</span>
        </div>
        <div class="subscribe-photo-box">
          <img src="@/assets/img/covers/DimaD.jpg"
               class="subscribe-photo"
               alt="">
          <span class="subscribe-photo-name">Дмитрий, cto</span>
        </div>
        <div class="subscribe-photo-box">
          <img src="@/assets/img/covers/AlexG.jpg"
               class="subscribe-photo"
               alt="">
          <span class="subscribe-photo-name">Александр, cpo</span>
        </div>
      </div>
      <div class="subscribe-descr subscribe-descr2">
        <span>Присоединяйтесь к </span>
        <span class="subscribe-descr-bold">Productium </span>
        <span class="subscribe-descr-blue">community</span>
        <span>, </span>
        <p>и начинайте экономить свое время и ресурсы </p>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {emailValidation} from "@/functions/validation";
import {mapActions} from "vuex";

export default {
  name: "Block8",
  mixins: [CommonMixin],
  data: () => ({
    checkSubmit: {
      email: false,
    },
    email: '',
    isSending: false,
    emailIsSendMessage: '',
    emailIsSendMessageIsError: false
  }),
  computed: {
    emailIsNotValid() {
      return this.checkSubmit.email && !emailValidation(this.email);
    },
    submitValidation () {
      return !this.emailIsNotValid;
    },
  },
  methods: {
    ...mapActions(['informOnReadiness']),
    changeField(field) {
      this.checkSubmit[field] = true;
      this.checkSubmit[field] = this.email !== '';
    },
    setEmailIsSendMessage(message) {
      this.emailIsSendMessage = message;
      setTimeout(() => {
        this.emailIsSendMessage = '';
        this.emailIsSendMessageIsError = false;
      }, 2000);
    },
    submit() {
      if (this.email !== '') {
        if (this.submitValidation && !this.isSending) {
          this.isSending = true;
          this.informOnReadiness(this.email).then(() => {
            this.email = '';
            this.isSending = false;
            this.checkSubmit.email = false;
            this.setEmailIsSendMessage('Письмо отправлено на Ваш e-mail.');
          }).catch(() => {
            this.isSending = false;
            this.checkSubmit.email = false;
            this.setEmailIsSendMessage('Ошибка отправки письма, попробуйте ещё раз.');
            this.emailIsSendMessageIsError = true;
          });
        }
      } else {
        this.checkSubmit.email = true;
      }
    },
  }
}
</script>