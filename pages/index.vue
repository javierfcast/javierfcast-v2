<template>
  <section>
    <Hero/>
    <About/>
    <Work/>
  </section>
</template>
<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Work from "~/components/Work.vue";

export default {
  components: {
    Hero,
    About,
    Work
  }
};
</script>
