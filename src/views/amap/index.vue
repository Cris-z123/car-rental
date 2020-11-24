<template>
  <div class="amap-wrap">
      <el-amap
        vid="amapContainer"   
        class="amap-demo"
        :zoom="zoom"
        :events="events"
      >
      </el-amap>
    </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap';

export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 11,
      events: {},
    }
  },
  mounted(){
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        center: [116.404765, 39.918052],
        zoom: this.zoom,
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>