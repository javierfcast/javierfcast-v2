<template>
  <section class="work">
    <RoyaleStudios/>
    <Nomada/>
    <Yalo/>
    <Adherente/>
  </section>
</template>
<script>
import RoyaleStudios from "~/components/RoyaleStudios.vue";
import Nomada from "~/components/Nomada.vue";
import Yalo from "~/components/Yalo.vue";
import Adherente from "~/components/Adherente.vue";
import Posfly from "~/components/Posfly.vue";

export default {
  components: {
    RoyaleStudios,
    Nomada,
    Yalo,
    Adherente,
    Posfly
  }
};
</script>