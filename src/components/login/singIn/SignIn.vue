<template>
  <div>
    <form
      action=""
      @submit.prevent
      class="flex flex-col justify-center items-start"
    >
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Emailingizni kiriting</label>
        <input
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
          type="email"
          name="email"
          autocomplete
          placeholder="@mail..."
          v-model="user.email"
        />
      </div>
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Parol kiriting</label>
        <input
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
          type="password"
          name="password"
          placeholder="Parol..."
          v-model="user.password"
        />
      </div>
      <div class="w-full">
        <button
          class="btn border border-orange-1 text-base py-3 px-9 rounded-10px w-full shadow-fil mt-6"
          @click="loginUser"
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
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      this.$store.commit("loginUser", { value: this.user });
    },
  },
};
</script>
<style lang=""></style>
