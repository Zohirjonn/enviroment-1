<template>
  <div class="empty text-center">
    <div class="flex justify-center flex-col">
      <p
        class="text-3xl font-extrabold justify-center flex items-center mx-auto p-4 space-x-4"
      >
        <span>Корзина пустая </span>
        <span class="bg-smile-img bg-no-repeat bg-cover p-4"></span>
      </p>
      <p class="text-lg max-w-560px text-center mx-auto small:max-w-60%">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
    </div>
    <div
      class="bg-empty-img bg-no-repeat bg-cover p-140px w-80 mx-auto my-16"
    ></div>
    <div>
      <RouterLink to="/">
        <button
          class="bg-black-2 text-white-1 text-base py-3 px-9 rounded-large gap-2 btn"
        >
          Вернуться назад
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {};
</script>
<style lang="scss">
.empty-img {
  padding: 120px;
  background-image: url("../assets/images/shopping-cart-colour\ 1.svg");
  background-repeat: no-repeat;
  object-fit: cover;
}
.smile {
  background-image: url("../assets/images/😕.svg");
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>
