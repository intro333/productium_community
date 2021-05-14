<template>
  <div class="tariff-descr2-box"
       :class="{'content-hide-mobile': hideOnMobile}">
    <p class="tariff-descr2-text tariff-descr2-text__blue content-hide-desktop">Productium </p>
    <p class="tariff-descr2-text">
      <span class="tariff-descr2-text tariff-descr2-text__blue content-hide-mobile">Productium </span>
      <span class="tariff-descr2-text">{{ $t("block6.decrD1") }}</span>
    </p>
    <p class="tariff-descr2-text content-hide-mobile"
       style="margin-top: -6px;">{{ $t("block6.decrD2") }}</p>
    <p class="tariff-descr2-text content-hide-mobile"
       style="margin-top: -6px;">{{ $t("block6.decrD3") }}</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">{{ $t("block6.decrM1") }}</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">{{ $t("block6.decrM2") }}</p>
    <p class="tariff-descr2-text content-hide-desktop" style="margin-top: -6px;">{{ $t("block6.decrM3") }}</p>
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