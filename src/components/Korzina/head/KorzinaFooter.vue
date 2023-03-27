<template>
  <div
    class="flex justify-between font-semibold text-2xl mt-30px small:text-lg small:flex-col"
  >
    <div class="flex space-x-3">
      <p>Всего пицц:</p>
      <p class="font-extrabold">{{ getbasketCount.count }} шт.</p>
    </div>
    <div class="flex space-x-3">
      <p>Сумма заказа:</p>
      <p class="font-extrabold text-orange-1">{{ getbasketCount.price }} ₽</p>
    </div>
  </div>
  <div class="flex justify-between mt-40px small:flex-col-reverse small:gap-y-3">
    <RouterLink to="/">
      <button
        class="btn border border-white-3 text-white-3 text-base py-3 px-8 w-full rounded-large gap-2 hover:border-orange-1 space-x-2 small:px-5 small:py-4"
      >
        <span class="bg-path-img bg-no-repeat bg-auto p-2 bg-center"></span>
        <span>Вернуться назад</span>
      </button>
    </RouterLink>
    <button
      class="btn border bg-orange-1 border-orange-1 text-white-1 text-base py-3 px-9 rounded-large gap-2 small:px-5 small:py-4"
    >
      Оплатить сейчас
    </button>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  computed: {
    getbasketCount() {
      return this.$store.getters.getBasketCountCheck;
    },
  },
};
</script>
<style></style>
