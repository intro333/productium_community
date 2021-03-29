<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3 home-block-last']">
      <div class="home-block3-slogan-box">
        <p class="home-block3-slogan-text text-normal2 content-hide-mobile">Присоединяйтесь к</p>
        <p class="home-block3-slogan-text text-normal2 content-hide-desktop">Присоединяйтесь</p>
        <p class="home-block3-slogan-text text-big text-big2 content-hide-mobile">Productium community</p>
        <p class="home-block3-slogan-text text-big text-big2 content-hide-desktop">к Productium community</p>
        <p class="home-block3-slogan-text text-normal2">для нетворкинга и личного развития</p>
      </div>
      <div @click="openAuthWindow"
           class="p-button p-button-rounded p-button-rounded1 p-banner-button">
        <span class="p-button-text">Присоединиться</span>
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