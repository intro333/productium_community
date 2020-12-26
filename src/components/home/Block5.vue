<template>
  <div :class="['content-base-' + screen + '-box',
                'content-base-' + screen + '-box-blue']">
    <div :class="['content-base-' + screen, 'home-block5']">
      <div class="counting-box">
        <span class="counting-text counting-text-normal">нас уже</span>
        <div class="counting-nums">
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">0</span>
            <div class="counting-nums-item-center"></div>
          </div>
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">1</span>
            <div class="counting-nums-item-center"></div>
          </div>
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">1</span>
            <div class="counting-nums-item-center"></div>
          </div>
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">2</span>
            <div class="counting-nums-item-center"></div>
          </div>
        </div>
      </div>
      <div class="counting-box counting-box-right">
        <span class="counting-text"
              :class="{'counting-text-big': !isMobile(), 'counting-text-normal': isMobile()}">мы ценим каждого</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Block5",
  mixins: [CommonMixin],
}
</script>