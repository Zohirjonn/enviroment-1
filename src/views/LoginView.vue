<template>
  <div class="w-60% mx-auto small:w-full p-10">
    <div class="flex justify-between mb-6 border-b-2 border-white-4">
      <button
        class="btn border border-orange-1 text-base py-3 px-9 rounded-large mb-4"
        v-for="item in signTypes"
        :key="item.signType"
        @click="getSignTypeMethod(item.type)"
      >
        {{ item.signType }}
      </button>
    </div>
    <div>
      <SignUp />
    </div>
  </div>
</template>
<script>
import SignUp from "../components/login/singUp/SignUp.vue";
import LoginBtn from "../components/login/LoginBtn.vue";
export default {
  components: {
    SignUp,
    LoginBtn,
  },
  data() {
    return {
      signTypes: [
        { signType: "Sing In", type: 1 },
        { signType: "Sing Up", type: 0 },
      ],
    };
  },
  methods: {
    getSignTypeMethod(item) {
      this.$store.commit("changeSingTypeMethod", { value: item });
    },
  },
};
</script>
<style></style>
