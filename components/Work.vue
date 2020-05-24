<template>
  <section class="work" id="work">
    <RoyaleStudios/>
    <Nomada/>
    <Yalo/>
    <Adherente/>
    <Posfly/>
    <Archive/>
  </section>
</template>
<script>
import RoyaleStudios from "~/components/RoyaleStudios.vue";
import Nomada from "~/components/Nomada.vue";
import Yalo from "~/components/Yalo.vue";
import Adherente from "~/components/Adherente.vue";
import Posfly from "~/components/Posfly.vue";
import Archive from "~/components/Archive.vue";

export default {
  components: {
    RoyaleStudios,
    Nomada,
    Yalo,
    Adherente,
    Posfly,
    Archive
  }
};
</script>