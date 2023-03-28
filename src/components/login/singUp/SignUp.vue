<template>
  <div class="">
    <form
      action=""
      @submit.prevent
      class="flex flex-col justify-center items-start"
    >
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Familiyangizni kiriting</label>
        <input
          type="text"
          name="lname"
          autocomplete
          placeholder="Familiya..."
          v-model="loginUser.lname"
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
        />
      </div>
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Ismingizni kiriting</label>
        <input
          type="text"
          name="fname"
          autocomplete
          placeholder="Ism..."
          v-model="loginUser.fname"
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
        />
      </div>
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Emailingizni kiriting</label>
        <input
          type="email"
          name="email"
          autocomplete
          placeholder="@mail..."
          v-model="loginUser.email"
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
        />
      </div>
      <div class="flex flex-col mb-4 w-full">
        <label class="text-lg ml-2 mb-1">Parol kiriting</label>
        <input
          type="password"
          name="password"
          placeholder="Parol..."
          v-model="loginUser.password"
          class="outline outline-1 outline-offset-1 outline-white-4 shadow-fil p-4 rounded-10px placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-sky-500 focus:ring-2"
        />
      </div>
      <div class="w-full">
        <p>{{ loginUser }}</p>
        <h1>{{ data }}</h1>
        <button
          class="btn border border-orange-1 text-base py-3 px-9 rounded-10px w-full shadow-fil mt-6"
          @click="pushUser"
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
      loginUser: {
        id: null,
        lname: "",
        fname: "",
        email: "",
        password: "",
      },
      data: [],
    };
  },
  methods: {
    pushUser() {
      const user = JSON.parse(
        JSON.stringify({
          id: null,
          lname: this.loginUser.lname,
          fname: this.loginUser.fname,
          email: this.loginUser.email,
          password: this.loginUser.password,
        })
      );
      this.$store.commit("newUserPushMethod", { value: user });
    },
  },
  computed: {
    getSubmitUsers() {
      return (this.data = this.$store.getters.getUsers);
    },
  },
};
</script>
<style lang="scss" scoped></style>
