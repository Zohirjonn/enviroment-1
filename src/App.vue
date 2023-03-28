<template>
  <div class="relative">
    <div class="text-black-1 text-base xl:mx-auto sm:mx-5 max-w-1340px mb-24">
      <div class="text-center mr-4 -mb-4 mt-4" v-if="loginShowMethod">
        <LoginBtn />
      </div>
      <div
        class="flex justify-between border-b-2 border-white-4 py-40px mb-5 mx-4"
      >
        <RouterLink to="/">
          <Navtop />
        </RouterLink>
        <RouterLink to="/korzina">
          <Korzina />
        </RouterLink>
      </div>
      <RouterView />
    </div>
    <RouterLink to="korzina">
      <Korzina
        class="fixed bottom-4 animate-bounce right-4 hidden small:block"
        v-if="showMethod"
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
  methods: {},
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
    showMethod() {
      const pathname = window.location.pathname;
      if (this.getBasket.length > 0) {
        if (pathname == "/") {
          return true;
        }
      } else if (pathname == "/korzina") {
        return false;
      }
    },
    loginShowMethod() {
      let user = localStorage.getItem("user");
      if (user == null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang=""></style>
