<template>
  <div class="cards">
    <div
      class="item flex justify-between items-stretch space-x-4 small:space-x-2 small:flex-col border-b-2 border-white-4 pb-3" 
      v-for="item in getBasket"
      :key="item.id"
    >
      <div
        class="card flex justify-between items-center space-x-4 mt-30px "
      >
        <div class="card-header">
          <img :src="item.imageUrl" class="w-20 h-20" alt="" />
        </div>
        <div class="card-body">
          <h1 class="font-bold text-2xl small:text-xl">{{ item.name }}</h1>
          <h1 class="text-white-3 small:flex small:justify-end small:mr-4">{{ item.type }}, {{ item.size }} см.</h1>
        </div>
      </div>
      <div
        class="calculate flex justify-end items-center space-x-20 small:space-x-12 small:justify-around"
      >
        <div class="space-x-4 flex items-center font-extrabold">
          <div
            class="bg-de-img bg-cover bg-no-repeat p-3 btn"
            @click="countMethod(item, 'decrement')"
          ></div>
          <p>{{ item.count }}</p>
          <div
            class="bg-in-img bg-cover bg-no-repeat p-3 btn"
            @click="countMethod(item, 'increment')"
          ></div>
        </div>
        <div class="space-x-4 flex items-center  font-extrabold">
          <div class="font-extrabold text-xl">
            <p>{{ item.price }} ₽</p>
          </div>
          <div class="cancel">
            <div
              class="bg-clean-img bg-contain bg-no-repeat p-3 btn "
              @click="deleteItem(item)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    countMethod(item, type) {
      this.$store.commit("basketItemMethod", { value: item, type: type });
    },
    deleteItem(item) {
      this.$store.commit("basketItemDeleteMethod", { value: item });
    },
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style lang=""></style>
