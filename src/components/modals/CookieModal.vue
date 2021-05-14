<template>
  <div class="p-cookie">
    <div class="p-cookie-center">
      <span class="p-cookie-text">{{ $t("cookie.text") }}</span>
      <div @click="setCookie()"
           class="p-button p-button-rounded p-button-fill p-button-fill2 p-cookie-button">
        <span class="p-button-text">{{ $t("cookie.button") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CookieModal",
  methods: {
    ...mapActions(['setCookieIsAssented']),
    setCookie() {
      this.setCookieIsAssented(true);
    },
  }
}
</script>