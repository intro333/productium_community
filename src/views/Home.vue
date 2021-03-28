<template>
  <div style="display: flex; flex-direction: column; width: 100%;">
    <Block1 />
    <Block2 />
    <BlockIntegration />
<!--    <Block4 />-->
    <BlockFullVideo />
    <Block3 />
    <BlockServices />
    <Block5 />
    <Block6 />
    <Block7 />
    <Block8 />
    <BlockAddToCommunity />
  </div>
</template>

<script>

import Block1 from "@/components/home/Block1";
import Block2 from "@/components/home/Block2";
import Block3 from "@/components/home/Block3";
import BlockServices from "@/components/home/BlockServices";
// import Block4 from "@/components/home/Block4";
import Block5 from "@/components/home/Block5";
import Block6 from "@/components/home/Block6";
import Block7 from "@/components/home/Block7";
import Block8 from "@/components/home/Block8";
import BlockIntegration from "@/components/home/BlockIntegration";
import BlockFullVideo from "@/components/home/BlockFullVideo";
import BlockAddToCommunity from "@/components/home/BlockAddToCommunity";
import {mapActions} from "vuex";
import CommonMixin from "@/components/mixins/CommonMixin";

export default {
  name: "Home",
  mixins: [CommonMixin],
  components: {
    Block1,
    Block2,
    Block3,
    BlockServices,
    // Block4,
    Block5,
    Block6,
    Block7,
    Block8,
    BlockIntegration,
    BlockFullVideo,
    BlockAddToCommunity,
  },
  created() {
    const query = this.$route.query;
    if (query && query.unsubscribe) {
      this.bodyLock(true);
      this.unSubscribe(query.unsubscribe);
    }
  },
  methods: {
    ...mapActions(['unSubscribe']),
  },
}
</script>