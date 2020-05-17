<template>
  <div class="posfly animate">
    <div class="jf-container jf-container--flex">
      <div class="content animate">
        <h2 class="jf-h1">Posfly</h2>
        <span class="jf-label">Point of sale and loyalty system</span>
        <div class="jf-spacer"></div>
        <div class="project-content">
          <span class="jf-label">Role</span>
          <h5>Co-Founder, Director</h5>
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
          <span class="jf-label">Visit</span>
          <p>
            <a href="https://royalestudios.com/">royalestudios.com</a>
          </p>
        </div>
      </div>
      <div class="project-images animate basic-animation">
        <Slider v-bind="gallery"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";

export default {
  components: {
    Slider
  },
  data() {
    return {
      gallery: {
        background: "light",
        imgs: [
          "/projects/posfly/posfly_01.jpg",
          "/projects/posfly/posfly_02.jpg",
          "/projects/posfly/posfly_03.jpg",
          "/projects/posfly/posfly_04.jpg",
          "/projects/posfly/posfly_05.jpg"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.posfly {
  position: relative;
  &:before {
    content: "";
    background: #f2f2f2;
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    right: 0;
    @include transition(all, 2s);
    transition-delay: 0.5s;
  }
  &.animated {
    &:before {
      width: 80%;
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
}
.project-images {
  width: 100%;
  margin-top: 40px;
  transition-delay: 1s;
  @include bp(s720) {
    margin-top: 0;
    margin-left: 10%;
    width: 50%;
  }
}
</style>
