<template>
  <div :class="['content-base-' + screen + '-box',
                'content-base-' + screen + '-box-blue']">
    <div :class="['content-base-' + screen, 'home-block3']">
      <div class="home-block3-slogan-box">
        <span class="home-block3-slogan-text text-big">Productium </span>
        <span class="home-block3-slogan-text text-normal">не даст потерять всю важную информацию и  поможет </span>
        <span v-if="!isMobile()"
              class="home-block3-slogan-text text-big">систематизировать </span>
        <span v-if="isMobile()"
              class="home-block3-slogan-text text-big">упорядочить </span>
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