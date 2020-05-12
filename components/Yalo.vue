<template>
  <div class="yalo animate">
    <div class="jf-container jf-container--flex">
      <div class="title">
        <h2 class="jf-h1">Yalo Chat</h2>
        <span class="jf-label">Chatbot Startup</span>
      </div>
      <div class="project-images animate basic-animation">
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
      </div>

      <div class="content">
        <span class="jf-label">Role</span>
        <h5>Web Development, Webflow</h5>
        <div class="jf-spacer"></div>
        <div class="jf-date animate">
          <span class="jf-label">2019</span>
          <div class="jf-date__line"></div>
          <span class="jf-label second-date">Now</span>
        </div>
        <div class="jf-spacer"></div>
        <h4 class="jf-lead">Yalo powers messaging for some of world's largest companies.</h4>
        <p>I've .</p>
        <p>
          <a href="#">View more</a>
        </p>
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
        loop: true
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/_mixins.scss";
.yalo {
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
      width: 70%;
    }
  }
}
.title {
  background: red;
}
</style>
