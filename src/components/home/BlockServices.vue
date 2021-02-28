<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlockServices">
    <div :class="['content-base', 'hb-services']">
      <div class="header-left-box"
           id="linkToServices">
        <span class="header-left-big">services</span>
        <span class="header-left-little header-left-little2">наши возможности</span>
      </div>
      <div class="hb-services-box">
        <ServiceItemBox v-for="(service, i) in services"
                        :key="i"
                        :service="service" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceItemBox from "@/components/includes/ServiceItemBox";

export default {
  name: "BlockServices",
  components: {
    ServiceItemBox
  },
  data: () => ({
    services: [
      {
        img: 'caseTracker',
        name: 'CaseTracker',
        description: [
            'для проектирования',
            'дизайна интерфейсов,',
            'создания user story map',
            'и формирования бэклога вашего проекта'
        ]
      },
      {
        img: 'videoTracker',
        name: 'VideoTracker',
        description: [
            'для Видео-превью',
            'дизайна проекта команды',
            'с возможностью',
            'оставлять таймлайны',
            'и комментарии',
            'на видео-дорожке',
        ]
      },
      {
        img: 'webTracker',
        name: 'WebTracker',
        description: [
            'для проведения ux',
            'и manual тестирования',
            'проекта для команды',
            'и пользователя ',
            'с оставлением фидбека ',
            'и аналитикой по продукту',
        ]
      },
      {
        img: 'meet',
        name: 'MeetBoard',
        description: [
            'для создания онлайн',
            'конференций и митапов',
            'с совместным доступом',
            'к проекту для всей',
            'команды и заказчика',
        ]
      },
    ]
  }),

}
</script>