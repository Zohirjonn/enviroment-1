<template>
  <div class="">
    <form
      action=""
      @submit.prevent
      class="flex flex-col justify-center items-start"
    >
      <div
        class="flex flex-col mb-4 w-full"
        v-for="input in getSigntypeInputs"
        :key="input.id"
      >
        <label class="text-lg ml-2 mb-1 ">{{ input.label }}</label>
        <input
          :type="input.type"
          :placeholder="input.placeholder"
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
        />
      </div>
      <div class="w-full">
        <button
          class="btn border border-orange-1 text-base py-3 px-9 rounded-10px w-full shadow-fil mt-6"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getSigntypeInputs() {
      return this.$store.getters.getSignType;
    },
  },
};
</script>
<style lang="scss" scoped></style>
