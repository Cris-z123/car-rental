<template>
  <div class="cars-wrap">
    <div class="cars-list"></div>
  </div>
</template>

<script>

export default {
  name: "Cars",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.cars-wrap {
  position: fixed;
  left: 0;
  bottom: 94px;
  right: 0;
  z-index: 11;
  .cars-list {
    width: 505px;
    height: 257px;
    background: #fff;
    border-radius: 23px;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
  }
}
</style>