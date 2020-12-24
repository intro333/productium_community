<template>
  <div class="p-home">
    <div class="content-base-desktop-box content-base-desktop-box-blue">
      <div class="content-base-desktop p-top">
        <div class="p-top-logo-box">
          <img src="@/assets/img/logo/logo_white.svg"
               class="p-top-logo-img"
               alt="">
          <span class="p-top-logo-text">roductium</span>
          <span class="p-top-logo-text p-top-logo-text-blue">community</span>
        </div>
        <div class="p-top-right">
          <span class="p-top-right-item-text">Возможности</span>
          <span class="p-top-right-item-text">Бета-версия</span>
          <div class="p-button p-button-rounded p-button-rounded1"
               style="margin-left: 50px;">
            <span class="p-button-text">Войти в комьюнити</span>
          </div>
        </div>
      </div>
    </div>
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
  </div>
</template>

<script>

import Block1 from "@/components/home/Block1";
import Block2 from "@/components/home/Block2";
import Block3 from "@/components/home/Block3";
import Block4 from "@/components/home/Block4";
import Block5 from "@/components/home/Block5";
import Block6 from "@/components/home/Block6";

export default {
  name: "Home",
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
  }
}
</script>