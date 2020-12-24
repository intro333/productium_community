<template>
  <div class="tariff-info-item"
       :class="{disabled: item.isDisable}">
    <div class="tariff-info-item-top">
      <span class="tariff-info-item-title">{{item.title}}</span>
      <div class="tariff-info-enums">
        <div v-for="(_enum, i) in item.enums"
             :key="i"
             class="tariff-info-enums-item">
          <div class="tariff-info-enums-item-img"></div>
          <div>
            <span v-for="(_word, ch) in _enum.words"
                  :key="ch"
                  class="tariff-info-enums-item-text"
                  :class="{'t-bold': _word.isBold}">{{_word.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tariff-info-item-bottom">
      <p class="tariff-info-item-cost">
        <span class="tariff-info-item-cost-big">{{item.cost}}$</span>
        <span class="tariff-info-item-cost-normal">/в мес</span>
      </p>
      <span class="tariff-info-item-cost-description">{{item.costDescription}}</span>
      <div class="p-button p-button-rounded p-button-fill2"
           :class="{disable: item.isDisable}">
        <span class="p-button-text">{{item.button}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TariffInfo",
  props: {
    item: Object,
  }
}
</script>