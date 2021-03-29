<template>
  <div class="tariff-descr2-box"
       :class="{'content-hide-mobile': hideOnMobile}">
    <p class="tariff-descr2-text tariff-descr2-text__blue content-hide-desktop">Productium </p>
    <p class="tariff-descr2-text">
      <span class="tariff-descr2-text tariff-descr2-text__blue content-hide-mobile">Productium </span>
      <span class="tariff-descr2-text">откроет для вас новые</span>
    </p>
    <p class="tariff-descr2-text content-hide-mobile"
       style="margin-top: -6px;">возможности командной работы</p>
    <p class="tariff-descr2-text content-hide-mobile"
       style="margin-top: -6px;">и коммуникации с пользователями</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">возможности командной</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">работы и коммуникации</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">с пользователями</p>
  </div>
</template>

<script>
export default {
  name: "TariffDescr2",
  props: {
    hideOnMobile: Boolean
  }
}
</script>