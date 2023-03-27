<template>
  <div class="flex justify-between mb-35px items-start small:flex-col space-x-10 small:space-x-0 small:gap-y-3">
    <HeaderButtons class="flex-4"/>
    <FilterPitsa class="flex-1"/>
  </div>
</template>
<script>
import HeaderButtons from "./Head/HeaderButtons.vue";
import FilterPitsa from "./Head/FilterPitsa.vue";
export default {
  components: {
    HeaderButtons,
    FilterPitsa,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
