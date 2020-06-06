<template>
  <div class="nomada">
    <div class="jf-container no-padding-bottom">
      <div class="quote">
        <h3>
          I love to explore how editorial design can influence UI/UX
          in digital experiences
        </h3>
      </div>
    </div>
    <div class="jf-container jf-container--flex">
      <div class="content animate">
        <div class="title">
          <h2 class="jf-h1">Nómada</h2>
          <span class="jf-label">Digital News Media</span>
        </div>
        <div class="jf-spacer"></div>
        <span class="jf-label">Role</span>
        <h5>Web Development, HTML, CSS, Js, Wordpress</h5>
        <div class="jf-spacer"></div>
        <div class="jf-date animate">
          <span class="jf-label">2018</span>
          <div class="jf-date__line"></div>
          <span class="jf-label second-date">Now</span>
        </div>
        <div class="jf-spacer"></div>
        <h4
          class="jf-lead"
        >Nómada is an independent digital news media company with investigative reporters that covers politics, feminism, ecuality and culture in Guatemala.</h4>
        <p>I have been helping them for the last two years with the development of special interactive coverages and technical support.</p>
        <span class="jf-label">Visit</span>
        <p>
          <a href="https://nomada.gt/">nomada.gt</a>
        </p>
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
          "/projects/nomada/nudismo-politico/nomada_nudismo_politico-4.jpg",
          "/projects/nomada/nudismo-politico/nomada_nudismo_politico.jpg",
          "/projects/nomada/nudismo-politico/nomada_nudismo_politico-3.jpg",
          "/projects/nomada/elecciones/nomada_elecciones_2_segunda.jpg",
          "/projects/nomada/elecciones/nomada_elecciones_7.jpg"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";
.nomada{
  width: 100vw;
  overflow-x: hidden;
}
.quote {
  max-width: 240px;
  margin-left: auto;
  text-align: right;
  position: relative;
  @include bp(s720) {
    max-width: 360px;
  }
  @include bp(s1280) {
    max-width: 420px;
  }
  &:after {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #f2f2f2;
    border-radius: 50%;
    z-index: -1;
    content: "";
    top: 20px;
    right: -100px;
  }
  h3 {
    text-decoration: underline;
  }
}
.content {
  position: relative;
  z-index: 1;
  @include bp(s360) {
    width: 75%;
  }
  @include bp(s720) {
    order: 2;
    @include padding-top;
    margin-left: 10%;
    width: 40%;
  }
}
.title {
  @include bp(s720) {
    margin-left: -40%;
  }
}
.project-images {
  width: 100%;
  margin-top: 40px;
  @include bp(s720) {
    margin-top: 0;
    width: 50%;
  }
}
</style>
