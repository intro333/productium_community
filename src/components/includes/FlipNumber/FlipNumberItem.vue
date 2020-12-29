<template>
  <div class="flip-number-item">
    <div class="flip" :class="animationClass">
      <div class="digital front" :class="'number number'+frontCount"></div>
      <div class="digital back" :class="'number number'+backCount"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlipNumberItem',
  props: ['value', 'speed'],
  data () {
    return {
      frontCount: 0,
      backCount: this.value,
      animationClass: '',
      isFlipping: false
    }
  },
  watch: {
    value (newVal, oldVal) {
      if (newVal < oldVal) {
        this.flipUp(newVal, oldVal)
      } else if (newVal > oldVal) {
        this.flipDown(newVal, oldVal)
      }
    }
  },
  methods: {
    async flipDown (newVal, oldVal) {
      while (newVal > oldVal) {
        // console.log(new Date().toTimeString())
        await this.flipDownOne(oldVal)
        oldVal++
      }
    },
    async flipUp (newVal, oldVal) {
      while (newVal < oldVal) {
        await this.flipUpOne(oldVal)
        oldVal--
      }
    },
    async flipDownOne (num) {
      if (this.isFlipping) {
        return false
      }
      this.frontCount = num
      this.backCount = this.frontCount >= 9 ? 0 : (this.frontCount + 1)
      this.animationClass = 'down go'
      this.isFlipping = true
      await this.resetClass('down')
    },
    async flipUpOne (num) {
      if (this.isFlipping) {
        return false
      }
      this.frontCount = num
      this.backCount = this.frontCount <= 0 ? 9 : (this.frontCount - 1)
      this.animationClass = 'up go'
      this.isFlipping = true
      await this.resetClass('up')
    },
    resetClass (type) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.animationClass = type
          this.isFlipping = false
          this.frontCount = this.backCount
          setTimeout(() => {
            resolve()
          }, 0)
        }, this.speed)
      })
    }
  }
}
</script>
<style scoped>

</style>

<!-- https://github.com/waiaan/vue-flip-number -->