<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlock5">
    <div :class="['content-base', 'home-full-video']">
      <video id="video2"
             :width="(browW < 540) ? browW : 1100"
             loop
             autoplay
             muted
      >
        <source src="https://a.slack-edge.com/e0d52/marketing/img/integrations-lp/slack-integrations-gdrive.mp4"
                type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import {mapGetters} from "vuex";

export default {
  name: "BlockFullVideo",
  mixins: [CommonMixin],
  computed: {
    browW() {
      return this.getBrowserSize().width;
    },
  },
  methods: {
    ...mapGetters(['getBrowserSize']),
  },
}
</script>
