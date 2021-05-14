<template>
  <div @mouseover="mouseOver"
       @mouseleave="mouseLeave"
       class="hb-services__item"
       :class="{'is-hovered': isHovered}">
    <div :class="['hb-services__item-img',
                  'hb-services__item-img-' + service.img,
                  isHovered && 'is-hovered']"></div>
    <p class="hb-services__item-title">{{service.name}}</p>
    <p class="hb-services__item-description">
      <span v-for="(_decr, i) in service.description"
            :key="i">{{ $t('blockServices.' + _decr) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ServiceItemBox",
  props: {
    service: Object
  },
  data: () => ({
    isHovered: false
  }),
  methods: {
    mouseOver() {
      this.isHovered = true;
    },
    mouseLeave() {
      this.isHovered = false;
    },
  }
}
</script>