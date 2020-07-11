<template>
  <section class="experience" id="experience">
    <div class="container">
      <h2 class="jf-label">Tools and Experience</h2>
      <div class="jf-spacer--text"></div>
    </div>
    <div class="marquee first">
      <div class="marquee__inner" aria-hidden="true">
        <div class="marquee__item">
          <span>Art direction</span>
          <span>UI/UX design</span>
          <span>Branding</span>
          <span>Web design</span>
          <span>Illustration</span>
          <span>Branding</span>
          <span>Project Management</span>
        </div>
        <div class="marquee__item">
          <span>Art direction</span>
          <span>UI/UX design</span>
          <span>Branding</span>
          <span>Web design</span>
          <span>Illustration</span>
          <span>Branding</span>
          <span>Project Management</span>
        </div>
        <div class="marquee__item">
          <span>Art direction</span>
          <span>UI/UX design</span>
          <span>Branding</span>
          <span>Web design</span>
          <span>Illustration</span>
          <span>Branding</span>
          <span>Project Management</span>
        </div>
        <div class="marquee__item">
          <span>Art direction</span>
          <span>UI/UX design</span>
          <span>Branding</span>
          <span>Web design</span>
          <span>Illustration</span>
          <span>Branding</span>
          <span>Project Management</span>
        </div>
      </div>
    </div>
    <div class="marquee inverted">
      <div class="marquee__inner" aria-hidden="true">
        <div class="marquee__item">
          <span>Web development</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Vue</span>
        </div>
        <div class="marquee__item">
          <span>Web development</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Vue</span>
        </div>
        <div class="marquee__item">
          <span>Web development</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Vue</span>
        </div>
        <div class="marquee__item">
          <span>Web development</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Vue</span>
        </div>
      </div>
    </div>
    <div class="marquee">
      <div class="marquee__inner" aria-hidden="true">
        <div class="marquee__item">
          <span>Figma</span>
          <span>Sketch</span>
          <span>Wordpress</span>
          <span>WooCommerce</span>
          <span>NoCode Tools</span>
          <span>Webflow</span>
          <span>ReadyMag</span>          
        </div>
        <div class="marquee__item">
          <span>Figma</span>
          <span>Sketch</span>
          <span>Wordpress</span>
          <span>WooCommerce</span>
          <span>NoCode Tools</span>
          <span>Webflow</span>
          <span>ReadyMag</span>
        </div>
        <div class="marquee__item">
          <span>Figma</span>
          <span>Sketch</span>
          <span>Wordpress</span>
          <span>WooCommerce</span>
          <span>NoCode Tools</span>
          <span>Webflow</span>
          <span>ReadyMag</span>
        </div>
        <div class="marquee__item">
          <span>Figma</span>
          <span>Sketch</span>
          <span>Wordpress</span>
          <span>WooCommerce</span>
          <span>NoCode Tools</span>
          <span>Webflow</span>
          <span>ReadyMag</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";
.container{
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  @include padding-left;
  @include padding-right;
  padding-bottom: 20px;
}
.marquee {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid $black;
  animation-play-state: running;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  &.inverted{
    --move-initial: calc(-50% + var(--offset));
    --move-final: calc(-25% + var(--offset));
  }
  &.first{
    border-top: 1px solid $black;
  }
}
.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 30s linear infinite;
  animation-play-state: running;
}
.marquee__item{
  display: flex;
  align-items: center;
}
.marquee span{
  @include h1;
  white-space: nowrap;
  margin: 10px;
}
.marquee img{
  height: 40px;
  width: 40px;
  display: block;
  margin: 0 20px;
}
@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }
  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>