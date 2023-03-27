<template>
  <div class="max-w-820px mx-auto small:mx-4">
    <KorzinkaHead />
    <KorzinkaCards />
    <KozinkaFooter />
  </div>
</template>
<script>
import KorzinkaHead from "./head/KorzinaHead.vue";
import KorzinkaCards from "./head/KorzinaCards.vue";
import KozinkaFooter from "./head/KorzinaFooter.vue";

export default {
  components: {
    KorzinkaHead,
    KorzinkaCards,
    KozinkaFooter,
  },

};
</script>
<style lang="scss"></style>
