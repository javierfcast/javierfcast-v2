<template>
  <section class="about">
    <div class="jf-container">
      <div class="content">
        <h2 class="jf-h1">About me</h2>
        <h3>I am the co-founder and creative director of Royale Studios.</h3>
        <p>I have 10+ years of experience working in all kinds of digital projects, from websites and e-commerce sites to apps and webapps.</p>
        <p>I have experience in:</p>
         <p class="talents">
          <span>Art Direction</span>
          <span>Branding</span>
          <span>Interaction</span>
          <span>UI/UX</span>
          <span>Project Management</span>
          <span>Creative Development</span>
          <span>HTML, CSS, Js</span>
          <span>Wordpress</span>
          <span>Woocommerce</span>
          <span>React</span>
          <span>Vue</span>
        </p>
        <p>Building Royale Studios, I've also had to lead teams, do project management and even get into human resources and accounting.</p>
        <p>I love coffee, traveling, painting, playing the piano and curating playlists on spotify to create covers for them.</p> 
      </div>
      <div class="image-container animate basic-animation">
        <Slider v-bind="gallery" />
      </div>
    </div>
  </section>
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
          "/about/me_working_hard.jpg",
          "/about/javier_castillo_working_in_tanger.jpg",
          "/about/javier_castillo_drinking_coffee.jpg",
          "/about/javier_castillo_walking_through_sevilla.jpg",
          "/about/javier_castillo_drinking_beer.jpg"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.jf-container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.content {
  position: relative;
  padding-bottom: 40px;
  z-index: 2;
  @include padding-right;
  @include bp(s360) {
    badding-bottom: 0;
    padding-top: 80px;
    width: 75%;
  }
  @include bp(s720) {
    padding-top: 160px;
    width: 70%;
  }
  @include bp(s960) {
    width: 60%;
  }
  @include bp(s1280) {
    padding-top: 220px;
  }
  h2,
  h3 {
    margin-bottom: 20px;
    @include bp(s480) {
      margin-bottom: 40px;
    }
    @include bp(s960) {
      margin-bottom: 60px;
    }
    @include bp(s1280) {
      margin-bottom: 80px;
    }
  }
  p {
    @include bp(s720) {
      width: 60%;
    }
  }
}
.columns {
  @include bp(s480) {
    column-count: 2;
  }
}
.image-container {
  width: 100%;
  filter: grayscale(1);
  opacity: 0.6;
  transition: all 0.3s;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
  @include bp(s360) {
    position: absolute;
    right: 20px;
    width: 50%;
  }
  @include bp(s720) {
    right: 40px;
  }
  @include bp(s1280) {
    right: 80px;
  }
}
</style>
