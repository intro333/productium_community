<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlockFullVideo">
    <div :class="['content-base', 'home-full-video']">
      <div id="video2"
           class="home-full-video-box">
        <video :width="videoWidth"
               loop
               autoplay
               muted
        >
          <source src="/video/Productium6.mp4"
                  type="video/mp4">
          <!--        <source src="https://a.slack-edge.com/e0d52/marketing/img/integrations-lp/slack-integrations-gdrive.mp4"-->
          <!--                type="video/mp4">-->
        </video>
      </div>
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
    videoWidth() {
      let res = 1100;
      if (this.browW < 1024) {
        if (this.browW <= 375) {
          res = this.browW - 10;
        } else {
          res = 375;
        }
      }

      return res;
    },
  },
  methods: {
    ...mapGetters(['getBrowserSize']),
  },
}
</script>
