<template>
  <div class="cars-wrap">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><car-card /></swiper-slide>
      <swiper-slide><car-card /></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import carCard from '@c/carsList/carCard';

export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    carCard
  },
  data() {
    return {
      swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }
    }
  }
}
</script>

<style lang="scss">
.cars-wrap {
  position: fixed;
  left: 0;
  bottom: 94px;
  right: 0;
  z-index: 11;
}
</style>