<template>
  <section class="about">
    <div class="jf-container">
      <div class="content">
        <h2 class="jf-h1">About me</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>I studied graphic design and since I was 18, I've have been working in all kinds of digital projects, from websites and e-commerce sites to apps and webapps.</p>
      </div>
      <div class="image-container animate basic-animation">
        <img class="image" src="~/static/me_working_hard.jpg" alt="Javier Castillo working hard">
      </div>
    </div>
    <div class="jf-container">
      <div class="columns">
        <p>I have experience in UI, UX, interaction, animation, HTML, CSS, PHP, Wordpress, presentational Js, jQuery, and lately a little bit of React and Vue.js (this static website is actually built using vue.js, nuxt and is beign hosted on Netlify).</p>
        <p>Building Royale Studios, I've also had to lead teams, do project management and even get into human resources and accounting.</p>
        <p>I like coffee, traveling, painting and playing the piano.</p>
        <p>I love creating playlists and creating covers for them.</p>
      </div>
    </div>
  </section>
</template>

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
      width: 50%;
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
  @include bp(s360) {
    position: absolute;
    right: 20px;
    width: 50%;
    z-index: -1;
  }
  @include bp(s720) {
    right: 40px;
  }
  @include bp(s1280) {
    right: 80px;
  }
  .image {
    width: 100%;
    filter: grayscale(1);
    opacity: 0.6;
    transition: all 0.3s;
    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
}
</style>
