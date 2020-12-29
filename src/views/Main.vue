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
  data: () => ({
    isScrolling: false
  }),
  computed: {

  },
  mounted() {
    window.addEventListener('resize', this.browserResize);
    const browSize = document.documentElement;
    this.setBrowserSize({
      width: browSize.clientWidth,
      height: browSize.clientHeight
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.browserResize);
  },
  methods: {
    ...mapActions(['setCookieIsAssented', 'setBrowserSize', 'setPageYOffset']),
    ...mapGetters(['getCookieIsAssented', 'getOpenAuthWindowState']),
    browserResize() {
      const browSize = document.documentElement;
      this.setBrowserSize({
        width: browSize.clientWidth,
        height: browSize.clientHeight
      });
    },
    handleScroll() {
      const self = this;
      window.clearTimeout( this.isScrolling );
      self.isScrolling = setTimeout(function() {
        const pageYOffset = window.pageYOffset;
        if (document.body.className.indexOf('modal-open') === -1) { /* Если body разлочен */
          self.setPageYOffset(pageYOffset);
        }
      }, 66);
    }
  },
}
</script>

<style lang="scss">
  .app-content {
    //background-color: #fff;
  }
</style>