<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlockServices">
    <div :class="['content-base', 'hb-services']">
      <div class="header-left-box"
           id="linkToServices">
        <span class="header-left-big">services</span>
        <span class="header-left-little header-left-little2">{{ $t("blockServices.text1") }}</span>
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
          'ct1',
          'ct2',
          'ct3',
          'ct4',
        ]
      },
      {
        img: 'videoTracker',
        name: 'VideoTracker',
        description: [
            'vt1',
            'vt2',
            'vt3',
            'vt4',
            'vt5',
            'vt6',
        ]
      },
      {
        img: 'webTracker',
        name: 'WebTracker',
        description: [
            'wt1',
            'wt2',
            'wt3',
            'wt4',
            'wt5',
            'wt6',
        ]
      },
      {
        img: 'meet',
        name: 'MeetBoard',
        description: [
            'mb1',
            'mb2',
            'mb3',
            'mb4',
            'mb5',
        ]
      },
    ]
  }),

}
</script>