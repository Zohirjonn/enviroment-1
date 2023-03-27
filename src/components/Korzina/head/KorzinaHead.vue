<template>
  <div class="flex justify-between border-b-2 border-white-4 pb-30px select-none">
    <div class="flex justify-center space-x-3 items-center">
      <div class="bg-kor-img bg-no-repeat bg-cover p-4"></div>
      <span class="font-extrabold text-3xl">Корзина</span>
    </div>
    <div
      class="flex justify-center space-x-1 flex-initial w-48 items-center btn small:justify-end"
      @click="clearBasket"
    >
      <div class="bg-trash-img bg-no-repeat bg-cover p-3"></div>
      <span class="block text-white-3 hover:text-orange-1 small:hidden">Очистить корзину</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clearBasket() {
      this.$store.commit("clearBasketMethod");
    },
  },
};
</script>
<style lang=""></style>
