<template>
  <div :class="['content-base-box',
                'content-base-box-blue',
                'rocket-img-back']">
    <div :class="['content-base', 'home-block1', 'rocket-img']">
      <div class="p-banner-text-box">
        <div class="first-box">
          <span class="first-text">Мы </span>
          <span class="first-text first-text-bold">набираем первую тысячу </span>
          <p class="first-text">пользователей Productium</p>
        </div>
        <div class="second-box content-hide-mobile">
          <p class="second-text">получи бесплатный доступ к Premium пакету </p>
          <p class="second-text">и войди в комьюнити сервиса Productium</p>
        </div>
        <div class="second-box content-hide-desktop">
          <p class="second-text">получи бесплатный доступ к</p>
          <p class="second-text"> Premium пакету и войди в </p>
          <p class="second-text">комьюнити сервиса Productium</p>
        </div>
      </div>
      <div class="p-banner-button-box">
        <div @click="scrollToBlock('homeBlock6')"
             class="p-button p-button-rounded p-button-fill p-button-fill1 p-banner-button">
          <span class="p-button-text">Premium бесплатно</span>
        </div>
        <div @click="openProductium()"
             class="p-button p-button-rounded p-button-rounded1 p-button-rounded2 p-banner-button">
          <span class="p-button-text">Бета-версия</span>
        </div>
      </div>
      <div class="p-banner-stat-box">
        <div class="p-banner-stat-item">
          <span class="p-banner-stat-item-first">112</span>
          <span class="p-banner-stat-item-second">/1000 участников</span>
        </div>
        <div class="p-banner-stat-item">
          <span class="p-banner-stat-item-first">62</span>
          <span class="p-banner-stat-item-second">/100% готовность</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Block1",
  mixins: [CommonMixin],
}
</script>