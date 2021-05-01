<template>
  <section class="about" id="about">
    <div class="jf-container">
      <div class="content">
        <h2 class="jf-label">About me</h2>
        <h3>I am the co-founder and creative director of Royale Studios. I have 10+ years of experience building all kinds of digital projects, from websites and e-commerce sites to apps and web apps.</h3>
        <h3>I enjoy collaborating with bold, forward thinking people that understands the importance of design and aesthethics in the success of a project.</h3>
        <h3>Specially interested in working on projects around design, technology, education, art, culture, social inclusion and politics.</h3>
        <h3>I love coffee, craft beers, traveling, <a href="https://instagram.com/javierfcast.art" target="_blank" rel="noopener noreferrer">painting</a>, playing the piano and <a href="#mixtapes">listening to all types of music</a>.</h3>
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
        background: "about-slider",
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
    padding-bottom: 0;
    padding-top: 80px;
    width: 75%;
  }
  @include bp(s720) {
    width: 70%;
  }
  h2,
  h3 {
    @include text-margin-bottom;
    &:last-child{
      margin-bottom: 0;
    }
  }
  p {
    @include bp(s720) {
      width: 60%;
    }
  }
}
.image-container {
  width: 100%;
  @include bp(s360) {
    position: absolute;
    right: 20px;
    width: 45%;
  }
  @include bp(s720) {
    right: 40px;
  }
  @include bp(s1280) {
    right: 80px;
  }
}
</style>
