<template>
  <section class="contact" id="contact">
    <h2 class="jf-h1">Get in touch</h2>
    <a href="mailto:javierfcast@gmail.com"><h3>javierfcast@gmail.com</h3></a>
    <div class="jf-spacer"></div>
    <span class="jf-label">Follow me at</span>
    <div class="social">
      <a class="social-link" target="_blank" href="https://instagram.com/javierfcast/">Instagram</a>
      <a class="social-link" target="_blank" href="https://twitter.com/javierfcast/">Twitter</a>
      <a class="social-link" target="_blank" href="https://behance.net/javierfcast/">Behance</a>
      <a class="social-link" target="_blank" href="https://dribbble.com/javierfcast">Dribbble</a>
      <a class="social-link" target="_blank" href="https://github.com/javierfcast/">Github</a>
      <a class="social-link" target="_blank" href="https://www.linkedin.com/in/javierfcast/">LinkedIn</a>
      <span class="social-handle">/ @javierfcast</span>
    </div>
    <div class="jf-spacer"></div>
    <span class="jf-label">About this website</span>
    <p>
      This is a static website built in Vue, Nuxt, and is being continuously deployed and hosted on Vercel.<br>
      All the code is open source and you can check it out on Github.<br>
      Fonts used are Archivo by and Editorial New by Pangram Pangram.
    </p>
    <a href="javascript:window.Metomic('ConsentManager:show')">Manage cookies</a>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.contact{
  @include container;
  .jf-label{
    margin-bottom: 10px;
    display: block;
  }
}

</style>