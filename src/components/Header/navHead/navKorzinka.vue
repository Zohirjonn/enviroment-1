<template>
  <div
    class="bg-orange-1 text-white-1 flex justify-around w-40 small:w-auto small:py-2 py-14px px-3 rounded-large items-center btn"
    title="Корзина"
  >
    <span class="flex flex-nowrap px-2 small:hidden"
      >{{ getbasketCount.price }} ₽</span
    >
    <div class="bg-t-1 py-3 px bg-cover bg-no-repeat small:hidden"></div>
    <div class="flex justify-between space-x-1 px-2 items-center">
      <div
        class="text-white-1 hover:cursor-pointer hover:scale-110 bg-top-korz p-3 bg-no-repeat bg-cover"
      ></div>
      <span>{{ getbasketCount.count == 0 ? "" : getbasketCount.count }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getbasketCount() {
      return this.$store.getters.getBasketCountCheck;
    },
  },
};
</script>
<style lang=""></style>
