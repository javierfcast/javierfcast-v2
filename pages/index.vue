<template>
  <section>
    <Hero/>
    <About/>
    <Work/>
    <!-- <Fieldnotes/> -->
    <!-- <Traveling/> -->
    <Mixtapes/>
    <Contact/>
    <a href="javascript:window.Metomic('ConsentManager:show')">manage cookies</a>
  </section>
</template>
<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Work from "~/components/Work.vue";
import Fieldnotes from "~/components/Fieldnotes.vue";
import Traveling from "~/components/Traveling.vue";
import Mixtapes from "~/components/Mixtapes.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Hero,
    About,
    Work,
    Fieldnotes,
    Traveling,
    Mixtapes,
    Contact
  }
};
</script>
