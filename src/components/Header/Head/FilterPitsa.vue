<template>
  <div
    class="flex justify-end small:space-x-0 w-full items-start space-x-3 small:justify-between relative"
  >
    <span class="font-extrabold">Сортировка по: </span>
    <span class="text-black-1">
      <select
        name="filter"
        class="px-5 border-none"
        @click="changeSelectMethod"
        v-model="key"
      >
        <option value="1">популярности</option>
        <option value="2">по цене</option>
        <option value="3">по алфавиту</option>
      </select>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: this.$store.getters.getOptions,
    };
  },
  method: {
    changeSelectMethod(value) {
      console.log(value);
      this.$store.commit("filterBasket", { value: this.key });
    },
  },
  computed: {
    OptionsValue() {
      return this.$store.getters.getOptions;
    },
  },
};
</script>
<style lang=""></style>
