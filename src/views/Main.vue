<template>
  <div class="app-content">
    <router-view></router-view>
    <CookieModal v-if="!getCookieIsAssented()" />
    <AuthWindow v-if="getOpenAuthWindowState()" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CookieModal from "@/components/modals/CookieModal";
import AuthWindow from "@/components/modals/AuthWindow";

export default {
  name: "Main",
  components: {
    CookieModal,
    AuthWindow,
  },
  computed: {

  },
  mounted() {
    window.addEventListener('resize', this.browserResize);
    const browSize = document.documentElement;
    this.setBrowserSize({
      width: browSize.clientWidth,
      height: browSize.clientHeight
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.browserResize);
  },
  methods: {
    ...mapActions(['setCookieIsAssented', 'setBrowserSize']),
    ...mapGetters(['getCookieIsAssented', 'getOpenAuthWindowState']),
    browserResize() {
      const browSize = document.documentElement;
      this.setBrowserSize({
        width: browSize.clientWidth,
        height: browSize.clientHeight
      });
    },
  },
}
</script>

<style lang="scss">
  .app-content {
    //background-color: #fff;
  }
</style>