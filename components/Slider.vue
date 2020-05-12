<template>
  <div class="swiper">
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner">
          <img :src="banner" class="swiper-image">
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  directives: {
    swiper: directive
  },
  props: {
    imgs: Array
  },
  data: function() {
    return {
      banners: this.imgs,
      options: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper {
  position: relative;
  .swiper-pagination {
    bottom: -18px;
    left: 0;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: auto;
    width: 30px;
    height: 30px;
    bottom: -30px;
    color: white;
    left: auto;
    &:after {
      font-size: 12px;
    }
  }
  .swiper-button-prev {
    right: 40px;
  }
  .swiper-button-next {
    right: -10px;
  }
  .swiper-image {
    width: 100%;
  }
}
</style>