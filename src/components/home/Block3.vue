<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3']">
      <div class="home-block3-slogan-box content-hide-mobile">
        <span class="home-block3-slogan-text text-big">Productium </span>
        <span class="home-block3-slogan-text text-normal">ваш командный Agile-трекер, </span>
        <span class="home-block3-slogan-text">который </span>
        <span class="home-block3-slogan-text text-big">систематизирует </span>
        <span class="home-block3-slogan-text text-normal">разработку </span>
        <span class="home-block3-slogan-text text-normal">продукта за счет внутренних сервисов</span>
      </div>
      <div class="home-block3-slogan-box content-hide-desktop">
        <p>
          <span class="home-block3-slogan-text text-big">Productium </span>
          <span class="home-block3-slogan-text text-normal">ваш</span>
        </p>
        <span class="home-block3-slogan-text text-normal">командный</span>
        <span class="home-block3-slogan-text text-normal">Agile-трекер,</span>
        <span class="home-block3-slogan-text text-normal">который</span>
        <span class="home-block3-slogan-text text-big">систематизирует</span>
        <span class="home-block3-slogan-text text-normal">разработку</span>
        <span class="home-block3-slogan-text text-normal">продукта за счет</span>
        <span class="home-block3-slogan-text text-normal">внутренних</span>
        <span class="home-block3-slogan-text text-normal">сервисов</span>
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