<template>
  <div :class="['content-base-box',
                'content-base-box-blue',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlock5">
    <div :class="['content-base', 'home-block5']">
      <div class="counting-box">
        <span class="counting-text counting-text-normal">{{ $t("block5.text1") }}</span>
        <div class="counting-nums" id="countingNums">
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">0</span>
            <div class="counting-nums-item-center"></div>
          </div>
          <FlipNumber :value="flipValue.toString()" :speed="700"></FlipNumber>
        </div>
        <span style="opacity: 0">{{yOffset}}</span>
      </div>
      <div class="counting-box counting-box-right">
        <span class="counting-text counting-text-big content-hide-mobile">{{ $t("block5.text2") }}</span>
        <span class="counting-text counting-text-normal content-hide-desktop">{{ $t("block5.text3") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import FlipNumber from '@/components/includes/FlipNumber/FlipNumber';
import {mapGetters} from "vuex";

export default {
  name: "Block5",
  mixins: [CommonMixin],
  components: {
    FlipNumber
  },
  data: () => ({
    isFlipValue: false
  }),
  computed: {
    yOffset() {
      const y = this.getPageYOffset();
      const countingNums = document.getElementById('countingNums');
      const homeBlock5 = document.getElementById('homeBlock5');
      if (homeBlock5 && countingNums) {
        const browDownPoint = y + this.browH;
        const blockDownPoint = homeBlock5.offsetTop + countingNums.clientHeight;
        if (browDownPoint >= blockDownPoint) {
          this.changeFlipValue();
        }
      }
      return y;
    },
    browH() {
      return this.getBrowserSize().height;
    },
  },
  methods: {
    ...mapGetters(['getPageYOffset', 'getBrowserSize']),
  },
}
</script>