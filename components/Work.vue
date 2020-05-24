<template>
  <section class="work" id="work">
    <RoyaleStudios/>
    <Nomada/>
    <Yalo/>
    <Adherente/>
    <Posfly/>
    <Traveling/>
    <Archive/>
  </section>
</template>
<script>
import RoyaleStudios from "~/components/projects/RoyaleStudios.vue";
import Nomada from "~/components/projects/Nomada.vue";
import Yalo from "~/components/projects/Yalo.vue";
import Adherente from "~/components/projects/Adherente.vue";
import Posfly from "~/components/projects/Posfly.vue";
import Traveling from "~/components/projects/Traveling.vue";
import Archive from "~/components/projects/Archive.vue";

export default {
  components: {
    RoyaleStudios,
    Nomada,
    Yalo,
    Adherente,
    Posfly,
    Traveling,
    Archive
  }
};
</script>