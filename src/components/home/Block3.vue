<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3']">
      <div class="home-block3-slogan-box">
        <span class="home-block3-slogan-text text-big">Productium </span>
        <span class="home-block3-slogan-text text-normal">не даст потерять всю важную информацию и  поможет </span>
        <span class="home-block3-slogan-text text-big content-hide-mobile">систематизировать </span>
        <span class="home-block3-slogan-text text-big content-hide-desktop">упорядочить </span>
        <span class="home-block3-slogan-text text-normal">решения</span>
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