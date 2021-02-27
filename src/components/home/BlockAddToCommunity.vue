<template>
  <div :class="['content-base-box',
                'content-base-box-blue']">
    <div :class="['content-base', 'home-block3 home-block-last']">
      <div class="home-block3-slogan-box">
        <p class="home-block3-slogan-text text-normal2">Присоединяйтесь к</p>
        <p class="home-block3-slogan-text text-big text-big2">Productium community</p>
        <p class="home-block3-slogan-text text-normal2">для нетворкинга и менторинга</p>
      </div>
      <div @click="() => {}"
           class="p-button p-button-rounded p-button-rounded1 p-banner-button">
        <span class="p-button-text">Присоединиться</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockAddToCommunity",

}
</script>