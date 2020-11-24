<template>
  <div>
    <Map />
    <Cars />
  </div>
</template>

<script>
import Map from '../amap/index'
import Cars from '../cars/index'

export default {
  name: "Index",
  components: { Map, Cars },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">

</style>