<template>
  <div class="royale-studios animate">
    <div class="jf-container jf-container--flex">
      <div class="content animate">
        <h2 class="jf-h1">Royale Studios</h2>
        <span class="jf-label">Digital Agency</span>
        <div class="jf-spacer"></div>
        <span class="jf-label">Role</span>
        <h5>Co-Founder, Creative Director</h5>
        <div class="jf-spacer"></div>
        <div class="jf-date animate">
          <span class="jf-label">2009</span>
          <div class="jf-date__line"></div>
          <span class="jf-label second-date">Now</span>
        </div>
        <div class="jf-spacer"></div>
        <h4
          class="jf-lead"
        >Back in 2009, I co-founded Royale Studios, a digital agency that specialices in the design and development of brands, websites and online stores.</h4>
        <p>We've had the privilege of building Guatemala's web, partnering with big companies international companies like Tacobell, Visa and Pepsi. Big national companies like Cementos Progreso, Banco Industrial, BAM, Emisoras Unidas but also with small companies and startups.</p>
        <p>
          <a href="#">View more</a>
        </p>
      </div>
      <div class="project-images animate basic-animation">
        <div class="swiper">
          <div v-swiper:mySwiper="options">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://via.placeholder.com/1200x1200">
              </div>
              <div class="swiper-slide">
                <img src="https://via.placeholder.com/1600x1600">
              </div>
              <div class="swiper-slide">
                <img src="https://via.placeholder.com/1400x1400">
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  directives: {
    swiper: directive
  },
  data() {
    return {
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
@import "./assets/_mixins.scss";

.royale-studios {
  position: relative;
  &:before {
    content: "";
    background: #f2f2f2;
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    @include transition(all, 2s);
    transition-delay: 0.5s;
  }
  &.animated {
    &:before {
      width: 100%;
      background: #262524;
    }
    a {
      color: #FFD2C8;
      border-bottom: 2px solid #FFD2C8;
    }
  }
}
.content {
  position: relative;
  z-index: 1;
  @include transition(all, 2s);
  transition-delay: 0.5s;
  @include bp(s360) {
    width: 75%;
  }
  @include bp(s720) {
    @include padding-top;
    width: 40%;
  }
  .jf-h1 {
    white-space: nowrap;
  }
  .jf-date__line {
    background: #FFD2C8;
  }
  &.animated {
    color: #FFD2C8;
  }
}
.project-images {
  margin-top: 40px;
  transition-delay: 2s;
  @include bp(s720) {
    margin-top: 0;
    margin-left: 10%;
    width: 50%;
  }
  img {
    width: 100%;
  }
}

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
}
</style>
