<template>
  <div :class="['content-base-box', 'scrollbar-hidden block-scroll-container']">
    <div :class="['content-base', 'home-block8']" id="homeBlock8">
      <div class="subscribe-send-box">
        <div class="subscribe-send-text">
          <template v-if="isRussianLocale()">
            <span class="content-hide-mobile">{{ $t("block8.readyM") }} </span>
            <p class="content-hide-desktop">{{ $t("block8.readyD1") }}</p>
            <span class="content-hide-desktop">{{ $t("block8.readyD2") }} </span>
            <span class="subscribe-send-text-bold">Productium</span>
          </template>
          <template v-else>
            <span>{{ $t("block8.readyM1") }} </span>
            <span class="subscribe-send-text-bold">{{ $t("block8.readyM2") }} </span>
            <span>{{ $t("block8.readyM3") }} </span>
          </template>
        </div>
        <div class="subscribe-send-input-box">
          <input @input="changeField('email')"
                 ref="subscribeInputRef"
                 @focusin="isFocusEmail = true"
                 @focusout="isFocusEmail = false"
                 v-model="email"
                 @keyup.enter="submit"
                 class="subscribe-send-input text-ellipsis"
                 :placeholder="$t('common.enterEmail')">
          <div @click="submit"
               class="subscribe-send-input-button"
               :class="{'disabled': !submitValidation || isSending}">
            <span>OK</span>
<!--            <img v-if="isSending"-->
<!--                 src="@/assets/img/loaderMini.gif"-->
<!--                 class="subscribe-send-loader"-->
<!--                 alt="">-->
            <LoaderButton v-if="isSending" />
          </div>
          <span v-if="isFocusEmail && emailIsNotValid"
                class="subscribe-send-input-message subscribe-send-input-error">{{ $t('common.checkEmail') }}</span>
          <span v-if="emailIsSendMessage !== ''"
                class="subscribe-send-input-message"
                :class="[emailIsSendMessageIsError ? 'subscribe-send-input-error' : 'subscribe-send-input-success']"
          >{{emailIsSendMessage}}</span>
        </div>
      </div>
      <div class="subscribe-descr-astro"
           id="subscribeDescr">
        <img src="@/assets/img/common/astroTeam.svg"
             class="subscribe-descr-astro-team"
             alt="" >
<!--        <div class="subscribe-descr-box">-->
<!--          <p class="subscribe-descr">-->
<!--            <span class="subscribe-descr-bold bold-blue">Productium </span>-->
<!--            <span>создан специалистами</span>-->
<!--          </p>-->

<!--          <span class="subscribe-descr content-hide-mobile">направлений разработки, управления,</span>-->
<!--          <span class="subscribe-descr content-hide-mobile">дизайна и реализован в одном приложении,</span>-->
<!--          <span class="subscribe-descr content-hide-mobile">с огромным потенциалом развития и решения</span>-->
<!--          <span class="subscribe-descr content-hide-mobile">множества задач в процессе разработки</span>-->

<!--          <span class="subscribe-descr content-hide-desktop">направлений разработки,</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">управления, дизайна и</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">реализована в одном</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">приложении, с огромным</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">потенциалом развития и</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">решения множества задач</span>-->
<!--          <span class="subscribe-descr content-hide-desktop">в процессе разработки</span>-->
<!--        </div>-->
        <div class="subscribe-descr-box content-hide-mobile">
          <span class="subscribe-descr">{{ $t("block8.subscrD1") }}</span>
          <span class="subscribe-descr">{{ $t("block8.subscrD2") }}</span>
          <p class="subscribe-descr">
            <span>{{ $t("block8.subscrD3") }} </span>
            <span class="subscribe-descr-bold bold-blue">Productium</span>
          </p>
        </div>
        <div class="subscribe-descr-box content-hide-desktop">
          <p class="subscribe-descr">
            <span>{{ $t("block8.subscrM1") }} </span>
            <span class="subscribe-descr-bold bold-blue">Productium</span>
          </p>
        </div>
      </div>
<!--      <div class="subscribe-photo-content">-->
<!--        <div class="subscribe-photo-box">-->
<!--          <img src="@/assets/img/covers/DimaM.jpg"-->
<!--               class="subscribe-photo"-->
<!--               alt="">-->
<!--          <span class="subscribe-photo-name">Дмитрий, ceo</span>-->
<!--        </div>-->
<!--        <div class="subscribe-photo-box">-->
<!--          <img src="@/assets/img/covers/DimaD.jpg"-->
<!--               class="subscribe-photo"-->
<!--               alt="">-->
<!--          <span class="subscribe-photo-name">Дмитрий, cto</span>-->
<!--        </div>-->
<!--        <div class="subscribe-photo-box">-->
<!--          <img src="@/assets/img/covers/AlexG.jpg"-->
<!--               class="subscribe-photo"-->
<!--               alt="">-->
<!--          <span class="subscribe-photo-name">Александр, cpo</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="subscribe-descr subscribe-descr2">-->
<!--        <span>Присоединяйтесь к </span>-->
<!--        <span class="subscribe-descr-bold">Productium </span>-->
<!--        <span class="subscribe-descr-blue">community</span>-->
<!--        <span>, </span>-->
<!--        <p>и начинайте экономить свое время и ресурсы </p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {emailValidation} from "@/functions/validation";
import {mapActions} from "vuex";
import LoaderButton from "@/components/modals/LoaderButton";
import LocaleMixin from "@/components/mixins/LocaleMixin";

export default {
  name: "Block8",
  mixins: [CommonMixin, LocaleMixin],
  components: {
    LoaderButton
  },
  data: () => ({
    checkSubmit: {
      email: false,
    },
    email: '',
    isSending: false,
    isFocusEmail: false,
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
    submit($event) {
      if (this.email !== '') {
        if (this.submitValidation && !this.isSending) {
          this.isSending = true;
          this.informOnReadiness(this.email.substr(0, 50)).then(() => {
            setTimeout(() => {
              this.email = '';
              this.isSending = false;
              this.checkSubmit.email = false;
              this.setIsOpenPopupReadiness(true);
            }, 500);
          }).catch(err => {
            this.isSending = false;
            this.checkSubmit.email = false;
            let errMessage = this.$t("block8.errorSendingEmail");
            if (err.errorMessage && err.errorMessage === 'unique_violation') {
              errMessage = this.$t("block8.emailWasRegistered");
              // this.errorMessage = 'unique_violation';
            }
            this.setEmailIsSendMessage(errMessage);
            this.emailIsSendMessageIsError = true;
          });
          if ($event && ($event.key === 'Enter')) {
            $event.target.blur();
          }
        }
      } else {
        this.checkSubmit.email = true;
      }
    },
  }
}
</script>