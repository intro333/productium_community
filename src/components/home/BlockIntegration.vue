<template>
  <div :class="['content-base-box content-base-box2', 'scrollbar-hidden block-scroll-container']"
       id="homeBlockIntegration">
    <div class="hb-integration-bg"></div>
    <div :class="['content-base content-base2', 'hb-integration content-hide-mobile']">
      <img src="@/assets/img/integration/astronaut.svg"
           class="hb-integration-img"
           alt="">
      <div class="hb-integration-info">
        <div class="hb-integration-info1">
          <p class="hb-integration-info1__text-big">integration</p>
          <p class="hb-integration-info1__text-small">интеграция</p>
        </div>
        <div class="hb-integration-info2">
          <div class="hb-integration-info2__text-box">
            <p class="hb-integration-info2__text">
            <span class="hb-integration-info2__text-big"
            >Интеграция с сервисами</span> позволяет формировать бэклог продукта, фиксировать баги и проводить UX-тестирование </p>
          </div>
          <div class="hb-integration-info2-icons">
            <img v-for="(icon, i) in icons"
                 :key="i"
                 :src="iconName(icon.name)"
                 class="hb-integration-info2-icons__item"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div :class="['content-base content-base2', 'hb-integration-mobile content-hide-desktop']">
      <div class="hb-integration-info1">
        <p class="hb-integration-info1__text-big">integration</p>
        <p class="hb-integration-info1__text-small">интеграция</p>
      </div>
      <div class="hb-integration-info2">
        <div class="hb-integration-info2__text-box">
          <p class="hb-integration-info2__text">
            <span class="hb-integration-info2__text-big"
            >Интеграция с сервисами</span> позволяет формировать бэклог продукта, фиксировать баги и проводить UX-тестирование </p>
        </div>
        <div class="hb-integration-info3">
          <img src="@/assets/img/integration/astronaut.svg"
               class="hb-integration-img"
               alt="">
          <div></div>
          <div class="hb-integration-info2-icons">
            <div class="hb-integration-info2-icons2">
              <img v-for="(icon, i) in icons.slice(0, 5)"
                   :key="i"
                   :src="iconName(icon.name)"
                   class="hb-integration-info2-icons__item"
                   alt="">
            </div>
            <div class="hb-integration-info2-icons2">
              <img v-for="(icon, i) in icons.slice(5,10)"
                   :key="i"
                   :src="iconName(icon.name)"
                   class="hb-integration-info2-icons__item"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockIntegration",
  data: () => ({
    icons: [
      { name: 'figma', },
      { name: 'slack', },
      { name: 'jira', },
      { name: 'sketch', },
      { name: 'github', },
      { name: 'asana', },
      { name: 'monday', },
      { name: 'gitlab', },
      { name: 'trello', },
      { name: 'bitbucket', },
    ],
  }),
  methods: {
    iconName(name) {
      return require('@/assets/img/integration/' + name + '.svg');
    },
  }
}
</script>
