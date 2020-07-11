<template>
  <section class="experience" id="experience">
    <div class="content">
      <div class="jf-container">
        <h2 class="jf-label">Tools and Experience</h2>
      </div>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
          <div class="marquee__item">
            <span>Art direction</span>
            <span>UI/UX design</span>
            <span>Branding</span>
            <span>Web design</span>
            <span>Web development</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";
.jf-container{
  padding-bottom: 20px;
}
.marquee {
  position: relative;
  overflow: hidden;
  border-top: 1px solid $black;
  border-bottom: 1px solid $black;
  animation-play-state: running;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
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