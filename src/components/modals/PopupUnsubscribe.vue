<template>
  <div class="p-modal">
    <div class="p-modal-background"
         @click="close"></div>
    <div class="p-modal-popup">
      <span class="p-modal-popup-title">Oh, no&!?</span>
      <span class="p-modal-popup-message">{{ $t("popupUnsubscribe.youUnsubscribed") }}</span>
      <div class="p-modal-popup-button-box">
        <div @click="close()"
             class="p-button p-button-rounded p-button-rounded1 p-modal-popup-button">
          <span class="p-button-text">OK</span>
        </div>
      </div>
      <img src="@/assets/img/auth/astronaut.svg"
           class="p-modal-popup-img"
           alt="">
      <div @click="close"
           class="p-modal-popup-close-box">
        <img src="@/assets/img/auth/close.svg"
             class="p-modal-popup-close"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {mapActions} from "vuex";

export default {
  name: "PopupUnsubscribe",
  mixins: [CommonMixin],
  methods: {
    ...mapActions(['setIsOpenPopupUnsubscribe']),
    close() {
      this.bodyLock(false);
      this.setIsOpenPopupUnsubscribe(false);
      this.$router.push('/');
    },
  },
}
</script>
