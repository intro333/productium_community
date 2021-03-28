<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlockFullVideo">
    <div :class="['content-base', 'home-full-video']">
      <div id="video2"
           class="home-full-video-box">
        <video :width="videoWidth"
               class="home-full-video-player"
               @play="play"
               @pause="pause"
               controls
               controlsList="nodownload"
               disablePictureInPicture
               ref="videoPreviewRef"
               poster="video/videoPreviewCover.gif"
        >
          <source src="/video/videoPreview.mp4"
                  type="video/mp4">
          <!--        <source src="https://a.slack-edge.com/e0d52/marketing/img/integrations-lp/slack-integrations-gdrive.mp4"-->
          <!--                type="video/mp4">-->
        </video>
<!--        <div v-if="videoIsPlayed && !videoIsPaused"-->
<!--             @click="pause"-->
<!--             class="home-full-video-pause-bk"></div>-->
<!--        <div v-if="videoIsPaused"-->
<!--             @click="play"-->
<!--             class="home-full-video-play-bk">-->
          <img v-if="videoIsPaused"
               @click="play"
               src="@/assets/img/common/buttonPlay.svg"
              class="home-full-video-control-play"
              alt="" >
<!--        </div>-->
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
  data: () => ({
    video: null,
    videoIsPlayed: false, /* Было запущено видео или нет (первый раз) */
    videoIsPaused: true,
  }),
  mounted() {
    if (this.$refs['videoPreviewRef']) {
      this.video = this.$refs['videoPreviewRef'];
    }
  },
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
    play() {
      if (this.video) {
        this.video.play();
        this.videoIsPlayed = true;
        this.videoIsPaused = false;
      }
    },
    pause() {
      this.video.pause();
      this.videoIsPaused = true;
    },
  },
}
</script>
