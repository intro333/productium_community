<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* Поведение прокрутки для любого элемента на странице (smooth - плавно) */
}
html,
body {
  height: 100%;
  line-height: 1.15 !important;
  input {
    font-family: Inter, sans-serif;
  }
  &.modal-open {
    overflow: hidden;
    &-mobile {
      overflow: hidden;
    }
  }
}
#app {
  font-family: Inter, sans-serif;
}
</style>
