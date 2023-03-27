<template>
  <div class="relative">
    <div class="text-black-1 text-base xl:mx-auto sm:mx-5 max-w-1340px mb-24">
      <div
        class="flex justify-between border-b-2 border-white-4 py-40px mb-5 mx-4"
      >
        <RouterLink to="/">
          <Navtop />
        </RouterLink>
        <LoginBtn />
        <RouterLink to="/korzina">
          <Korzina />
        </RouterLink>
      </div>
      <RouterView />
    </div>
    <RouterLink to="korzina">
      <Korzina
        class="fixed bottom-4 animate-bounce right-4"
        v-if="getBasket.length > 0"
      />
    </RouterLink>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navtop from "./components/Header/navHead/Navtop.vue";
import Korzina from "./components/Header/navHead/navKorzinka.vue";
import Loader from "./components/Loader/Loader.vue";
import Footer from "./components/Footer/Footer.vue";
import LoginBtn from "./components/login/LoginBtn.vue";
export default {
  components: {
    Navtop,
    Korzina,
    Loader,
    Footer,
    LoginBtn,
  },
  data() {
    return {};
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style lang=""></style>
