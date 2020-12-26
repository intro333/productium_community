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
  created() {

  },
  methods: {
    ...mapActions(['setCookieIsAssented']),
    ...mapGetters(['getCookieIsAssented', 'getOpenAuthWindowState']),
  },
}
</script>

<style lang="scss">
  .app-content {
    //background-color: #fff;
  }
</style>