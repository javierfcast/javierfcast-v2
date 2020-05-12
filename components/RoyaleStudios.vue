<template>
  <div class="royale-studios animate">
    <div class="jf-container jf-container--flex">
      <div class="content animate">
        <h2 class="jf-h1">Royale Studios</h2>
        <span class="jf-label">Digital Agency</span>
        <div class="jf-spacer"></div>
        <ProjectContent/>
      </div>
      <div class="project-images animate basic-animation">
        <Slider v-bind="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
import ProjectContent from "~/components/ProjectContent.vue";

export default {
  components: {
    Slider,
    ProjectContent
  },
  data() {
    return {
      project: {
        lead: "Lorem ipsum dolor sit amet",
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
}
</style>
