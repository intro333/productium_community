<template>
  <div class="user-agreement">
    <div class="user-agreement-header">
      <span class="user-agreement-text">Productium</span>
      <div class="content-hide-mobile">
        <span class="user-agreement-text user-agreement-text-bold"> юридическая информация</span>
      </div>
      <div class="content-hide-desktop p-box-flex-column">
        <span class="user-agreement-text user-agreement-text-bold">юридическая</span>
        <span class="user-agreement-text user-agreement-text-bold">информация</span>
      </div>
    </div>
    <div :class="['content-base-box']">
      <div :class="['content-base', 'pua']">
        <div class="pua-menu content-hide-mobile">
          <div @click="goToMenuRoute('privacy-policy')"
               class="pua-menu-text-box">
            <div v-if="isActive('privacy-policy')"
                 class="pua-menu-circle"></div>
            <div class="pua-menu-text"
                 :class="{'not-active': !isActive('privacy-policy')}">Политика конфиденциальности</div>
          </div>
          <div @click="goToMenuRoute('terms-of-use')"
               class="pua-menu-text-box">
            <div v-if="isActive('terms-of-use')"
                 class="pua-menu-circle"></div>
            <div class="pua-menu-text"
                 :class="{'not-active': !isActive('terms-of-use')}">Пользовательское соглашение</div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAgreement",
  data: () => ({
    selectedMenu: 'privacy-policy'
  }),
  created() {
    this.selectedMenu = this.$route.name;
  },
  methods: {
    goToMenuRoute(_route) {
      this.$router.push({name: _route});
    },
    isActive(_route) {
      return this.$route.name ===_route;
    },
  },
  watch: {
    $route () {
      this.selectedMenu = this.$route.name;
    }
  }
}
</script>
