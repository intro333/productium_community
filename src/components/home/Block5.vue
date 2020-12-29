<template>
  <div :class="['content-base-box',
                'content-base-box-blue',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlock5">
    <div :class="['content-base', 'home-block5']">
      <div class="counting-box">
        <span class="counting-text counting-text-normal">нас уже</span>
        <div class="counting-nums">
          <div class="counting-nums-item">
            <span class="counting-nums-item-number">0</span>
            <div class="counting-nums-item-center"></div>
          </div>
          <FlipNumber :value="flipValue" :speed="700"></FlipNumber>
        </div>
        <span style="opacity: 0">{{yOffset}}</span>
      </div>
      <div class="counting-box counting-box-right">
        <span class="counting-text counting-text-big content-hide-mobile">мы ценим каждого</span>
        <span class="counting-text counting-text-normal content-hide-desktop">мы ценим каждого</span>
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
    flipValue: '112'
  }),
  mounted() {
    setTimeout(() => {
      // this.changeFlipValue();
    }, 1000);
  },
  computed: {
    yOffset() {
      const y = this.getPageYOffset();
      const homeBlock5 = document.getElementById('homeBlock5');
      if (homeBlock5) {
        const browHalf = this.browH / 2;
        const blockHalf = homeBlock5.clientHeight / 2;
        const blockCenter = homeBlock5.offsetTop - (browHalf - blockHalf + 100);
        if (y >= blockCenter) {
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
    changeFlipValue() {
      this.flipValue = '113';
    }
  },
}
</script>