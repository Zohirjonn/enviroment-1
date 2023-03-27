<template>
  <div class="">
    <div v-if="getBasket.length == 0">
      <Empty />
    </div>
    <div v-else>
      <Korzinka />
    </div>
  </div>
</template>
<script>
import Korzinka from "../components/Korzina/Korzina.vue";
import Empty from "../components/Korzina/Empty/Empty.vue";
export default {
  components: {
    Korzinka,
    Empty,
  },
  data() {
    return {};
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style lang="scss"></style>
