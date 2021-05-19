<template>
  <div :class="['content-base-box',
                'content-base-box-blue',
                'rocket-img-back']">
    <div :class="['content-base', 'home-block1', 'rocket-img']">
      <div class="p-banner-text-box">
        <div class="first-box">
          <span class="first-text">{{ $t("block1.left1") }} </span>
          <span class="first-text first-text-bold">{{ $t("block1.left2") }} </span>
          <p class="first-text">{{ $t("block1.left3") }}</p>
        </div>
        <div class="second-box content-hide-mobile">
          <p class="second-text">{{ $t("block1.mLeft1") }} </p>
          <p class="second-text">{{ $t("block1.mLeft2") }}</p>
        </div>
        <div class="second-box content-hide-desktop">
          <p class="second-text">{{ $t("block1.dLeft1") }}</p>
          <p class="second-text"> {{ $t("block1.dLeft2") }} </p>
          <p class="second-text">{{ $t("block1.dLeft3") }}</p>
        </div>
      </div>
      <div class="p-banner-button-box">
        <div @click="scrollToBlock('tariffDescr1Box')"
             class="p-button p-button-rounded p-button-fill p-button-fill1 p-banner-button">
          <span class="p-button-text">{{ $t("common.premiumForFree") }}</span>
        </div>
        <div @click="openProductium()"
             class="p-button p-button-rounded p-button-rounded1 p-button-rounded2 p-banner-button">
          <span class="p-button-text">{{ $t("common.betaVersion") }}</span>
        </div>
      </div>
      <div class="p-banner-stat-box">
        <div class="p-banner-stat-item">
          <span class="p-banner-stat-item-first">{{getMembersCount()}}</span>
          <span class="p-banner-stat-item-second">/1000 {{ $t("block1.right1") }}</span>
        </div>
        <div class="p-banner-stat-item">
          <span class="p-banner-stat-item-first">{{getReadyPercent()}}</span>
          <span class="p-banner-stat-item-second">/100% {{ $t("block1.right2") }}</span>
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