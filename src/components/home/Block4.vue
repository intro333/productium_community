<template>
  <div :class="['content-base-box', 'scrollbar-hidden block-scroll-container']">
    <div :class="['content-base', 'home-block4']" id="homeBlock4">
      <div class="header-left-box">
        <span class="header-left-big">pre-start</span>
        <span class="header-left-little header-left-little2">перед запуском</span>
      </div>
      <div class="p-step-container">
        <div class="p-step-box">
          <img src="@/assets/img/home/block4/stage1.svg"
               class="p-step-img"
               alt="">
          <div class="p-step-text-box">
            <span class="p-step-text-normal">собираем</span>
            <span class="p-step-text-big">тысячу</span>
            <span class="p-step-text-normal">пользователей</span>
          </div>
        </div>
        <div class="p-step-box">
          <img src="@/assets/img/home/block4/stage2.svg"
               class="p-step-img"
               alt="">
          <div class="p-step-text-box">
            <span class="p-step-text-normal">формируем</span>
            <span class="p-step-text-big">community</span>
            <span class="p-step-text-normal">и раздаем бонусы</span>
          </div>
        </div>
        <div class="p-step-box">
          <img src="@/assets/img/home/block4/stage3.svg"
               class="p-step-img"
               alt="">
          <div class="p-step-text-box">
            <span class="p-step-text-normal">участвуем в тестировании,</span>
            <span class="p-step-text-big">зарабатываем</span>
            <span class="p-step-text-normal">опыт и репутацию</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Block4",
  mixins: [CommonMixin],
}
</script>