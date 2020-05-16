<template>
  <div class="yalo animate">
    <div class="jf-container jf-container--flex">
      <div class="title-container">
        <div class="title">
          <h3 class="jf-h1">Yalo Chat</h3>
          <span class="jf-label">Chatbot Startup</span>
        </div>
      </div>

      <div class="project-images animate basic-animation">
        <Slider v-bind="gallery"/>
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
        <p>I support Yalo's design and marketing team with the development of their public website. The site is made in Webflow.</p>
        <span class="jf-label">Visit</span>
        <p>
          <a href="https://yalochat.com/">yalochat.com</a>
        </p>
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
          "/projects/yalo/yalo_06.jpg",
          "/projects/yalo/yalo_01.jpg",
          "/projects/yalo/yalo_04.jpg",
          "/projects/yalo/yalo_texture.jpg",
          "/projects/yalo/yalo_blog.jpg"
        ]
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
.title-container {
  position: relative;
  width: 10%;
  .title {
    position: absolute;
    top: 156px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
    text-align: right;
    .jf-h1 {
      white-space: nowrap;
    }
    @include bp(s720) {
      top: 211px;
    }
    @include bp(s1600) {
      top: 540px;
    }
  }
}
.project-images {
  margin-left: 10%;
  width: 80%;
  @include bp(s1280) {
    margin-left: 5%;
    width: 50%;
  }
}
.content {
  @include padding-top;
  margin-left: 20%;
  width: 80%;
  @include bp(s1280) {
    margin-left: 5%;
    width: 30%;
  }
}
</style>
