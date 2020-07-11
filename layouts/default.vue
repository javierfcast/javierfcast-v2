<template>
  <Nuxt/>
</template>
<script>
export default {
  mounted: function() {
    //Animate all elements with class animate-me
    const animateMe = document.querySelectorAll(".animate");

    // let observerOptions = {
    //   root: null,
    //   rootMargin: "500px",
    //   threshold: 0
    // };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.1) {
          console.log(
            entry.target.className + " in view and trying version 0.3"
          );
          entry.target.classList.add("animated");
          if (entry.target.classList.contains("work")){
            console.log('seeing work');
            document.querySelector("#background").style.background = "#262524";
            document.querySelector("#experience").classList.add("inverted");
            document.querySelector(".quote").classList.add("inverted");
          }
          if (entry.target.classList.contains("yalo")){
            console.log('seeing yalo');
            document.querySelector("#background").style.background = "#5751EA";
            document.querySelector(".nomada").classList.add("inverted");
            document.querySelector(".adherente").classList.add("inverted");
          }
          //observer.unobserve(entry.target);
        } else {
          console.log(entry.target.className + " out of view");
          //entry.target.classList.remove("animated");
          if (entry.target.classList.contains("work")){
            console.log('work is out of sight');
            document.querySelector("#background").style.background = "white";
            document.querySelector("#experience").classList.remove("inverted");
            document.querySelector(".quote").classList.remove("inverted");
          }
          if (entry.target.classList.contains("yalo")){
            console.log('yalo is out of sight');
            document.querySelector("#background").style.background = "white";
            document.querySelector(".nomada").classList.remove("inverted");
            document.querySelector(".adherente").classList.remove("inverted");
          }
        }
      });
    }, {threshold: 0.1});

    animateMe.forEach(el => {
      observer.observe(el);
    });
  }
};
</script>
<style lang="scss">
@import "./assets/_mixins.scss";
//Generic, Utility Classes
html {
  font-family: "Archivo", "Helvetica Neue", Arial, sans-serif;
  font-weight: regular;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $black;
  scroll-behavior: smooth;
  @include bp(s720) {
    font-size: 14px;
  }
  @include bp(s1280) {
    font-size: 16px;
  }
}
html, body{
  width: 100%;
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1, .jf-h1 {
  @include h1;
}
h2, .jf-h2 {
  @include h2;
}
h3, .jf-h3 {
  line-height: 1.35;
  @include h3;
}
h4, .jf-h4 {
  line-height: 1.5;
  @include h4;
}
h5, .jf-h5 {
  @include h5;
}
h6, .jf-h6 {
  @include h6;
}
a {
  text-decoration: none;
  color: $black;
  border-bottom: 2px solid $black;
  transition: all 0.3s;
  font-weight: bold;
  /* &:hover {
    border-bottom: 2px solid $black;
  } */
}
p {
  line-height: 1.5;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.jf-label {
  @include label;
}
.jf-lead {
  margin-bottom: 20px;
}
.no-padding-bottom {
  padding-bottom: 0 !important;
}
.no-padding-top {
  padding-top: 0 !important;
}
.jf-container {
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  @include padding-top;
  @include padding-bottom;
  @include padding-left;
  @include padding-right;
  &.jf-container--flex {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
}
.jf-spacer {
  margin-bottom: 40px;
}
.jf-spacer--big{
  @include margin-bottom;
}
.jf-spacer--text{
  @include text-margin-bottom;
}

.jf-date {
  display: flex;
  align-items: center;
  .jf-date__line {
    height: 1px;
    background: black;
    margin: 10px;
    transition-delay: 4s;
    @include transition(all, 1s);
  }
  .second-date {
    opacity: 0;
    visibility: hidden;
    transition-delay: 5s;
    @include transition(all, 1s);
  }
  &.animated {
    .jf-date__line {
      flex: 1 1 auto;
    }
    .second-date {
      opacity: 1;
      visibility: visible;
    }
  }
}
.jf-button{
  display: inline-block;
  border: 1px solid $black;
  color: $black;
  padding: 10px 20px;
  @include label;
  &.white{
    color: white;
    border: 1px solid white;
  }
}
.basic-animation {
  opacity: 0;
  transform: translateY(200px) skew(0deg, -5deg);
  @include transition(all, 2s);
  &.animated {
    opacity: 1;
    transform: translateY(0);
  }
}
.swiper {
  .swiper-pagination-bullet {
    width: 20px !important;
    height: 1px !important;
    border-radius: 0 !important;
    margin-left: 5px;
    background: $black !important;
  }
  &.dark {
    .swiper-pagination-bullet {
      background: white !important;
    }
  }
}

.inverted{
  &:before {
    width: 80%;
  }
  color: white;
  a{
    color: white;
    border-bottom-color: white;
  }
  .jf-date__line{
    background: white;
  }
}

</style>
