<template>
  <div class="adherente animate">
    <div class="jf-container jf-container--flex">
      <div class="title">
        <h3 class="jf-h1">Adherente</h3>
        <span class="jf-label">Graphic design festival</span>
      </div>

      <div class="content">
        <span class="jf-label">Role</span>
        <h5>Web design and development, event coordinator</h5>
        <div class="jf-spacer"></div>
        <div class="jf-date animate">
          <span class="jf-label">2017 - 2019</span>
        </div>
        <div class="jf-spacer"></div>
        <h4
          class="jf-lead"
        >Adherente is a graphic design festival that takes place in Guatemala City organized by designers, for designers.</h4>
        <p>I've helped to coordinate the 2017 and 2019 editions of the event, as well as design and develop their official website.</p>
        <span class="jf-label">Visit</span>
        <p>
          <a href="https://adherente.com/">adherente.com</a>
        </p>
      </div>

      <div class="project-images animate basic-animation">
        <video width="100%" autoplay loop muted playsinline>
          <source src="~/static/projects/adherente/adherente_post_1.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";
.adherente {
  position: relative;
  &:before {
    content: "";
    background: #f2f2f2;
    position: absolute;
    width: 0%;
    height: 50%;
    top: 170px;
    left: 0;
    @include transition(all, 2s);
    transition-delay: 0.5s;
    @include bp(s1600){
      top: 200px;
    }
  }
  &.animated {
    &:before {
      left: 10%;
      width: 50%;
      @include bp(s1280) {
        left: 25%;
      }
    }
  }
}

.title {
  width: 100%;
  @include bp(s1280) {
    width: 50%;
  }
}

.content {
  @include padding-top;
  @include padding-bottom;
  width: 100%;
  @include bp(s360) {
    margin-left: 20%;
    width: 80%;
  }
  @include bp(s1280) {
    padding-bottom: 0;
    margin-left: 20%;
    width: 30%;
  }
}

.project-images {
  width: 100%;
  @include bp(s360) {
    margin-left: 20%;
    width: 80%;
  }
  @include bp(s1280) {
    margin-left: 0;
    margin-top: -100px;
    width: 50%;
  }
}
</style>
