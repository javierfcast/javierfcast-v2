<template>
  <section>
    <Background/>
    <Hero/>
    <About/>
    <Experience/>
    <Work/>
    <!-- <Fieldnotes/> -->
    <!-- <Traveling/> -->
    <Mixtapes/>
    <Contact/>
    
  </section>
</template>
<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Experience from "~/components/Experience.vue";
import Work from "~/components/Work.vue";
import Fieldnotes from "~/components/Fieldnotes.vue";
import Traveling from "~/components/Traveling.vue";
import Mixtapes from "~/components/Mixtapes.vue";
import Contact from "~/components/Contact.vue";
import Background from "~/components/Background.vue";

export default {
  components: {
    Hero,
    About,
    Experience,
    Work,
    Fieldnotes,
    Traveling,
    Mixtapes,
    Contact,
    Background
  }
};
</script>
