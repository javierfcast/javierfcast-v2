<template>
  <div class="archive animate">
    <h2 class="jf-h1">Archive</h2>
    <div class="project project-heading">
      <span class="jf-label">Project</span>
      <div class="project-meta">
        <span class="jf-label project-type">Type</span>
        <span class="jf-label year">Year</span>
      </div>
    </div>
    <div class="project-list">
      <a class="project" href="#">
        <h4>Alessa.jewelry</h4>
        <div class="project-meta">
          <span class="project-type">E-Commerce</span>
          <span class="year">2020</span>
        </div>
      </a>
      <a class="project" href="#">
        <h4>Universidad Rafael Landívar</h4>
        <div class="project-meta">
          <span class="project-type">Website</span>
          <span class="year">2020</span>
        </div>
      </a>
      <a class="project" href="#">
        <h4>Dev URL</h4>
        <div class="project-meta">
          <span class="project-type">Website</span>
          <span class="year">2020</span>
        </div>
      </a>
      <a class="project" href="#">
        <h4>Yalo Chat.com</h4>
        <div class="project-meta">
          <span class="project-type">Website</span>
          <span class="year">2020</span>
        </div>
      </a>
      <a class="project" href="#">
        <h4>Saul E. Mendez.com</h4>
        <div class="project-meta">
          <span class="project-type">Website</span>
          <span class="year">2019</span>
        </div>
      </a>
      <a class="project" href="#">
        <h4>Datamecanic</h4>
        <div class="project-meta">
          <span class="project-type">Webapp</span>
          <span class="year">2018</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.archive {
  @include container;
}

.project {
  display: block;
  text-decoration: none;
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
  h4 {
    @include h2;
  }
  .year {
    width: 80px;
    text-align: right;
    display: inline-block;
  }
}
</style>