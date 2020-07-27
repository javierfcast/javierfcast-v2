<template>
  <section class="background" id="background">
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

  .background{
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include transition(all, 1s);
  }
</style>