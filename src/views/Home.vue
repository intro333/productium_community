<template>
  <div style="display: flex; flex-direction: column; width: 100%;">
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Block7 />
    <Block8 />
  </div>
</template>

<script>

import Block1 from "@/components/home/Block1";
import Block2 from "@/components/home/Block2";
import Block3 from "@/components/home/Block3";
import Block4 from "@/components/home/Block4";
import Block5 from "@/components/home/Block5";
import Block6 from "@/components/home/Block6";
import Block7 from "@/components/home/Block7";
import Block8 from "@/components/home/Block8";

export default {
  name: "Home",
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Block7,
    Block8,
  },

}
</script>