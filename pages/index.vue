<template>
  <section>
    <Hero/>
    <About/>
    <Work/>
    <Contact/>
    <a href="javascript:window.Metomic('ConsentManager:show')">manage cookies</a>
  </section>
</template>
<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Work from "~/components/Work.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Hero,
    About,
    Work,
    Contact
  }
};
</script>
