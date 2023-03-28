<template>
  <div
    class="flex justify-end small:space-x-0 w-full items-start space-x-3 small:justify-between relative"
  >
    <span class="font-extrabold">Сортировка по: </span>
    <span class="text-black-1">
      <select
        name="filter"
        class="px-5 border-none"
        @change="changeSelectMethod"
        v-model="key"
      >
        <option value="1">по цене</option>
        <option value="2">по алфавиту</option>
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
  methods: {
    changeSelectMethod(value) {
      console.log(value, "SDFASDFASD");
      this.$store.commit("filterPizzas", { value: this.key });
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
