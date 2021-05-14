<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block7']">
      <div class="home-block7-left">
        <div class="header-left-box header-left-box-on-blue">
          <span class="header-left-big">ready</span>
          <span class="header-left-little header-left-little3">{{ $t("block7.ready") }}</span>
        </div>
        <div class="p-banner-stat-item">
          <span class="p-banner-stat-item-first">{{getReadyPercent()}}</span>
          <span class="p-banner-stat-item-second">/100%</span>
        </div>
      </div>
      <div class="home-block7-right">
        <p class="home-block7-right-descr">
          <span class="home-block7-right-descr-big">Productium </span>
          <span>{{ $t("block7.info1_1") }} </span>
          <span class="home-block7-right-descr-big">MVP </span>
          <span>{{ $t("block7.info1_2") }}</span>
        </p>
        <p class="home-block7-right-descr">
          <span>{{ $t("block7.info2_1") }} </span>
          <span class="home-block7-right-descr-big">Productium community</span>
        </p>
        <p class="home-block7-right-descr">
          <span class="home-block7-right-descr-big">Productium community </span>
          <span>{{ $t("block7.info3_1") }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Block7",
  mixins: [CommonMixin],
}
</script>