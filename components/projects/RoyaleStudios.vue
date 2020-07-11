<template>
  <div class="royale-studios animate" id="royale-studios">
    <div class="jf-container jf-container--flex">
      <div class="work-heading">
        <h2 class="work-title">Work</h2>
        <div class="work-stamp">&amp;</div>
      </div>
      <div class="content">
        <h3 class="jf-h1">Royale Studios</h3>
        <span class="jf-label">Digital Agency</span>
        <div class="jf-spacer"></div>
        <div class="project-content">
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
        background: "dark",
        imgs: [
          "/projects/royalestudios/royale_texture.jpg",
          "/projects/royalestudios/royale_posts.jpg",
          "/projects/royalestudios/royale_business_cards.jpg",
          "/projects/royalestudios/royale_website.jpg",
          "/projects/royalestudios/royale_ad.jpg"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.work-heading{
  position: relative;
  width: 100%;
  @include margin-bottom;
  .work-title{
    font-size: 34vw;
    color: #4F4F4F;
    font-family: $font-serif;
    @include bp(s1600){
      font-size: 550px;
    }
  }
  .work-stamp{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #F8374E url('/projects/experience.svg') center / cover;
    border-radius: 50%;
    position: absolute;
    font-family: $font-serif;
    animation-name: fullRotation;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    font-size: 5vw;  
    width: 12vw;
    height: 12vw;
    bottom: 10%;
    left: 65%;
  }
}

@keyframes fullRotation {
  from {transform: rotate(0deg);}
  to {transform: rotate(-360deg);}
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
