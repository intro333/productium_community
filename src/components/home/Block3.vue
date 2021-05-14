<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3']">
      <div class="home-block3-slogan-box content-hide-mobile">
        <span class="home-block3-slogan-text text-big">Productium </span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.m1") }} </span>
        <span class="home-block3-slogan-text">{{ $t("block3.m2") }} </span>
        <span class="home-block3-slogan-text text-big">{{ $t("block3.m3") }} </span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.m4") }} </span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.m5") }}</span>
      </div>
      <div class="home-block3-slogan-box content-hide-desktop">
        <p>
          <span class="home-block3-slogan-text text-big">Productium </span>
          <span class="home-block3-slogan-text text-normal">{{ $t("block3.d1") }}</span>
        </p>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d2") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d3") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d4") }}</span>
        <span class="home-block3-slogan-text text-big">{{ $t("block3.d5") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d6") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d7") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d8") }}</span>
        <span class="home-block3-slogan-text text-normal">{{ $t("block3.d9") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Block3",
  mixins: [CommonMixin],
}
</script>