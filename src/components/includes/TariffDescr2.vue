<template>
  <div class="tariff-descr2-box"
       :class="{'content-hide-mobile': hideOnMobile}">
    <p class="tariff-descr2-text">
      <span class="tariff-descr2-text tariff-descr2-text__bold">Productium </span>
      <span class="tariff-descr2-text tariff-descr2-text__blue">community </span>
      <span class="tariff-descr2-text">откроет для вас</span>
    </p>
    <p class="tariff-descr2-text"
       style="margin-top: -6px;">новые возможности экономии времени</p>
    <p class="tariff-descr2-text"
       style="margin-top: -6px;">на решение вопросов дизайна и личного</p>
    <p class="tariff-descr2-text"
       style="margin-top: -6px;">роста навыков в вашей сфере</p>
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