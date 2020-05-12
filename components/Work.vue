<template>
  <section class="work">
    <RoyaleStudios/>
    <Nomada/>
    <Yalo/>
  </section>
</template>
<script>
import RoyaleStudios from "~/components/RoyaleStudios.vue";
import Nomada from "~/components/Nomada.vue";
import Yalo from "~/components/Yalo.vue";

export default {
  components: {
    RoyaleStudios,
    Nomada,
    Yalo
  }
};
</script>