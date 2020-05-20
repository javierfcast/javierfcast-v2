<template>
  <div class="archive">
    <img class="project-image" src="https://via.placeholder.com/1080x1080">
    <h2 class="jf-h1">Archive</h2>
    <div class="project-heading">
      <span class="jf-label">Project</span>
      <div class="project-meta">
        <span class="jf-label project-type">Type</span>
        <span class="jf-label year">Year</span>
      </div>
    </div>
    <div class="project-list animate">
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Alessa.jewelry</h4>
          <div class="project-meta">
            <span class="project-type">E-Commerce</span>
            <span class="year">2020</span>
          </div>
        </a>
      </div>
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Universidad Rafael Landívar</h4>
          <div class="project-meta">
            <span class="project-type">Website</span>
            <span class="year">2020</span>
          </div>
        </a>
      </div>
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Dev URL</h4>
          <div class="project-meta">
            <span class="project-type">Website</span>
            <span class="year">2020</span>
          </div>
        </a>
      </div>
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Yalo Chat.com</h4>
          <div class="project-meta">
            <span class="project-type">Website</span>
            <span class="year">2020</span>
          </div>
        </a>
      </div>
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Saul E. Mendez.com</h4>
          <div class="project-meta">
            <span class="project-type">Website</span>
            <span class="year">2019</span>
          </div>
        </a>
      </div>
      <div class="project-item">
        <a class="project-link" href="#">
          <h4>Datamecanic</h4>
          <div class="project-meta">
            <span class="project-type">Webapp</span>
            <span class="year">2018</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    var image = document.querySelector(".project-image");
    document.addEventListener("mousemove", getMouse);

    var imagepos = { x: 0, y: 0 };

    setInterval(followMouse, 50);

    var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

    function getMouse(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }

    function followMouse() {
      //1. find distance X , distance Y
      var distX = mouse.x - imagepos.x;
      var distY = mouse.y - imagepos.y;
      //Easing motion
      //Progressive reduction of distance
      imagepos.x += distX / 5;
      imagepos.y += distY / 2;

      image.style.left = imagepos.x + "px";
      image.style.top = imagepos.y + "px";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.archive {
  @include container;
}
.project-heading {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid $black;
  @include bp(s720) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
.project-item {
  transform: translateY(200px);
  @include transition(all, 1s);
  &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.3s;
  }
  &:nth-child(5) {
    transition-delay: 0.4s;
  }
  &:nth-child(6) {
    transition-delay: 0.5s;
  }
}
.project-link {
  display: block;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid $black;
  transition: all 0.3s;
  &:hover {
    background: $black;
    color: white;
    transition-delay: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  @include bp(s720) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  h4 {
    @include h2;
  }
}
.project-image {
  position: absolute;
  display: block;
  width: 25%;
  top: 0;
  left: 0;
  z-index: 200;
  img {
    width: 100%;
  }
}
.project-list {
  &.animated {
    .project-item {
      transform: translateY(0);
    }
  }
}

.year {
  width: 80px;
  text-align: right;
  display: inline-block;
}
</style>