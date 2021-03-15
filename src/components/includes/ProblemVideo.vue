<template>
  <div class="problem-video-right">
<!--    <iframe width="560" height="315"-->
<!--            src="https://www.youtube.com/embed/2DsDvnzlICE"-->
<!--            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--    ></iframe>-->
    <video id="video"
           :width="(browW < 540) ? browW : 540"
           loop
           autoplay
           muted
    >
      <source src="/video/prodactium gif.mp4"
              type="video/mp4">
<!--      <source src="https://a.slack-edge.com/e0d52/marketing/img/integrations-lp/slack-integrations-gdrive.mp4"-->
<!--              type="video/mp4">-->
    </video>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ProblemVideo",
  props: {
    width: String,
    height: String,
  },
  computed: {
    browW() {
      return this.getBrowserSize().width;
    },
  },
  mounted() {
    setTimeout(() => {
      const video = document.getElementById('video');
      if (video) {
        video.play();
      }
    }, 200);
  },
  methods: {
    ...mapGetters(['getBrowserSize']),
  },
}
</script>

<!-- Как вставить видео https://support.google.com/youtube/answer/171780 -->
<!-- Если autoplay не работает https://developers.google.com/web/updates/2017/09/autoplay-policy-changes -->

<!-- src="/video/productView.mp4" -->