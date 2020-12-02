<template>
  <div>
    <Map />
    <Cars />
    <div :class="[show ? 'open' : '']" class="children-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from '../amap/index';
import Cars from '../cars/index';
import User from '../user/index';

export default {
  name: "Index",
  components: { Map, Cars, User },
  data() {
    return {
      show: true
    }
  },
  commputed: {

  },
  watch: {
    '$router': {
      handler(newValue) {
        const routerName = newValue.name
        this.show = routerName === 'index' ? false : true
      }
    }
  }
}
</script>

<style lang="scss">
.children-view {
  transform: all .3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>