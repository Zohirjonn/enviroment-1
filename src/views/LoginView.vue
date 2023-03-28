<template>
  <div class="w-60% mx-auto small:w-full p-10">
    <div class="flex justify-between mb-6 border-b-2 border-white-4">
      <button
        class="btn border border-orange-1 text-base py-3 px-9 rounded-large mb-4"
        :class="
          getSignType == item.type ? 'bg-orange-1 text-white-1 shadow-fil' : ''
        "
        v-for="item in signTypes"
        :key="item.signType"
        @click="getSignTypeMethod(item.type)"
      >
        {{ item.signType }}
      </button>
    </div>
    <div v-if="getSignType == 0">
      <SignUp />
    </div>
    <div v-if="getSignType == 1">
      <SignIn />
    </div>
  </div>
</template>
<script>
import SignUp from "../components/login/singUp/SignUp.vue";
import SignIn from "../components/login/singIn/SignIn.vue";
import LoginBtn from "../components/login/LoginBtn.vue";
export default {
  components: {
    SignUp,
    SignIn,
    LoginBtn,
  },
  data() {
    return {
      signTypes: [
        { signType: "Sing In", type: 1 },
        { signType: "Sing Up", type: 0 },
      ],
      type: "",
    };
  },
  methods: {
    getSignTypeMethod(item) {
      this.$store.commit("changeSingTypeMethod", { value: item });
      this.type = item;
    },
  },
  computed: {
    getSignType() {
      return this.$store.getters.getSignType;
    },
  },
};
</script>
<style></style>
