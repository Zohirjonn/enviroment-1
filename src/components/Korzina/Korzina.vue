<template>
  <div class="max-w-820px mx-auto small:mx-4">
    <KorzinkaHead />
    <KorzinkaCards />
    <KozinkaFooter />
  </div>
</template>
<script>
import KorzinkaHead from "./head/KorzinaHead.vue";
import KorzinkaCards from "./cards/KorzinaCards.vue";
import KozinkaFooter from "./footer/KorzinaFooter.vue";

export default {
  components: {
    KorzinkaHead,
    KorzinkaCards,
    KozinkaFooter,
  },

};
</script>
<style lang="scss"></style>
