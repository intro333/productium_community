<template>
  <div class="c-loader-button">
    <div class="lb-item grow-loader"
         :class="{'grow-loader-active': active === 1}"></div>
    <div class="lb-item grow-loader"
         :class="{'grow-loader-active': active === 2}"></div>
    <div class="lb-item grow-loader"
         :class="{'grow-loader-active': active === 3}"></div>
  </div>
</template>

<script>
export default {
  name: "LoaderButton",
  data: () => ({
    active: 0,
    timeoutMs: 0,
    timeoutId: 0,
  }),
  created() {
    this.twist(1);
  },
  beforeDestroy() {
    clearTimeout(this.timeoutId);
  },
  methods: {
    twist(num) {
      this.timeoutId = setTimeout(() => {
        this.timeoutMs = 250;
        this.active = num;
        if (num === 3) {
          this.twist(1);
        } else {
          this.twist(++num);
        }
      }, this.timeoutMs);
    }
  }
}
</script>