<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3 home-block-last']">
      <div class="home-block3-slogan-box">
        <p class="home-block3-slogan-text text-normal2 content-hide-mobile">{{ $t("common.joinTo") }}</p>
        <p class="home-block3-slogan-text text-normal2 content-hide-desktop">{{ $t("common.join") }}</p>
        <p class="home-block3-slogan-text text-big text-big2 content-hide-mobile">Productium community</p>
        <p class="content-hide-desktop">
          <span class="home-block3-slogan-text text-normal2">{{ $t("common.to") }} </span>
          <span class="home-block3-slogan-text text-big text-big2">Productium community</span>
        </p>
        <div class="content-hide-desktop">
          <p class="home-block3-slogan-text text-normal2">{{ $t("common.forNetworking1") }}</p>
          <p class="home-block3-slogan-text text-normal2">{{ $t("common.forNetworking2") }}</p>
        </div>
        <p class="content-hide-mobile">
          <span class="home-block3-slogan-text text-normal2">{{ $t("common.forNetworking1") }} </span>
          <span class="home-block3-slogan-text text-normal2">{{ $t("common.forNetworking2") }}</span>
        </p>
      </div>
      <div @click="openAuthWindow"
           class="p-button p-button-rounded p-button-rounded1 p-banner-button">
        <span class="p-button-text">{{ $t("common.joinNow") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "BlockAddToCommunity",
  mixins: [CommonMixin],
  methods: {
    openAuthWindow() {
      this.scrollToBlock('tariffDescr1Box', 10);
      setTimeout(() => {
        this.bodyLock(true);
        this.setOpenAuthWindowState(true);
      }, 700);
    }
  }
}
</script>